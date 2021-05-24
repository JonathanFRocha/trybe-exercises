import React from "react";
import { findByText, fireEvent, render } from "@testing-library/react";
import App from "./App";

describe("Test all", () => {
  afterEach(() => jest.clearAllMocks());
  it("renders App", async () => {
    const { getByText, getByTestId } = render(<App />);

    const linkElement = getByText(/Faça uma pesquisa/i);
    const makeSearch = getByText(/Search Digimon/i);

    expect(makeSearch).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();

    const searchInput = getByTestId("input");
    expect(searchInput).toHaveTextContent("");
  });

  it("has value on the inputbox", () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId("input");
    expect(input).toHaveValue("");

    fireEvent.change(input, { target: { value: "Agumon" } });
    expect(input).toHaveValue("Agumon");
  });

  test("verify if app start with any digimon rendered", () => {
    const { queryByTestId } = render(<App />);
    const digimon = queryByTestId("digimonName");

    expect(digimon).toBe(null);
  });

  test("Search by digimon", async () => {
    const digimon = [
      {
        name: "Patamon",
        img: "https://digimon.shadowsmith.com/img/patamon.jpg",
        level: "Rookie",
      },
    ];
    jest.spyOn(global, "fetch");
    const globalFetch = global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(digimon),
    });

    const { findByText, getByTestId, getByAltText } = render(<App />);

    const input = getByTestId("input");
    expect(input).toHaveValue("");

    fireEvent.change(input, { target: { value: "Patamon" } });
    expect(input).toHaveValue("Patamon");

    const button = getByTestId("buttonSearch");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    await findByText("Patamon");
    expect(getByTestId("digimonLevel")).toBeInTheDocument();
    expect(getByAltText("Patamon")).toBeInTheDocument();

    expect(globalFetch).toBeCalledTimes(1);
    expect(globalFetch).toBeCalledWith("https://digimon-api.vercel.app/api/digimon/name/Patamon");
  });
});
