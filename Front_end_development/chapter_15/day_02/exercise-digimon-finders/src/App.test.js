import React from "react";
import { fireEvent, render } from "@testing-library/react";
import App from "./App";

describe("Test all", () => {
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
});
