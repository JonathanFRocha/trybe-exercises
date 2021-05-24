import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import App from "../App";

afterEach(cleanup);

describe("Testando comonente app, testando a existencia do botão e sua funcionalidade", () => {
  test('Verifica se o botão está na tela com texto "Adicionar"', () => {
    const { getByText } = render(<App />);
    const button = getByText("Adicionar");
    expect(button).toBeInTheDocument();
    expect(button.type).toBe("button");
  });

  test("Verifica se quando clicado, adiciona o que digitou", () => {
    const { getByLabelText, queryByText } = render(<App />);
    const inputTask = getByLabelText("Tarefa:");
    const buttonAdd = queryByText("Adicionar");
    fireEvent.change(inputTask, { target: { value: "Beber agua!" } });
    expect(queryByText("Beber agua!")).not.toBeInTheDocument();
    fireEvent.click(buttonAdd);
    expect(queryByText("Beber agua!")).toBeInTheDocument();
  });
});
