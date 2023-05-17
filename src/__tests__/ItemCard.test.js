import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ItemCard from "../components/ItemCard";

const item = { id: 0, name: "Small Steps", cost: 49, amount: 0 };

describe("Item Card", () => {
  it("calls onAddItem with arguments", async () => {
    const onAddItemMock = jest.fn();

    render(
      <ItemCard
        id={item.id}
        name={item.name}
        cost={item.cost}
        onAddItem={onAddItemMock}
      />
    );
    const button = screen.getByRole("button");
    const input = screen.getByRole("spinbutton");

    await userEvent.click(input);

    await userEvent.type(input, "1");

    await userEvent.click(button);

    expect(onAddItemMock).toHaveBeenCalledWith({ amount: "01", id: 0 });
  });

  it("calls step up method on input", () => {
    const onAddItemMock = jest.fn();

    render(
      <ItemCard
        id={item.id}
        name={item.name}
        cost={item.cost}
        onAddItem={onAddItemMock}
      />
    );
    const input = screen.getByRole("spinbutton");

    input.stepUp();
    input.stepUp();

    expect(input).toHaveValue(2);
  });

  it("component has correct values", () => {
    const onAddItemMock = jest.fn();

    render(
      <ItemCard
        id={item.id}
        name={item.name}
        cost={item.cost}
        onAddItem={onAddItemMock}
      />
    );
    const name = screen.getByText("Small Steps");

    expect(name).toBeInTheDocument();
  });
});
