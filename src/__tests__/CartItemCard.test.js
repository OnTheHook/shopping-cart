import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import CartItemCard from "../components/CartItemCard";
import { smallSteps } from "../images/files"

const item = { id: 0, name: "Small Steps", cost: 49, amount: 4, image: smallSteps };

describe("Cart Item Card", () => {
  it("does not allow user to manually change input", async () => {
    const onDeleteMock = jest.fn();
    const changeAmountMock = jest.fn();

    render(
      <CartItemCard
        id={item.id}
        name={item.name}
        cost={item.cost}
        amount={item.amount}
        image={item.image}
        changeAmount={changeAmountMock}
        onDelete={onDeleteMock}
      />
    );
    const input = screen.getByRole("spinbutton");

    await userEvent.click(input);

    await userEvent.type(input, "foo");

    expect(input).toHaveValue(4);
  });

  it("allows user to increase and decrease amount", async () => {
    const onDeleteMock = jest.fn();
    const changeAmountMock = jest.fn();

    render(
      <CartItemCard
        id={item.id}
        name={item.name}
        cost={item.cost}
        amount={item.amount}
        image={item.image}
        changeAmount={changeAmountMock}
        onDelete={onDeleteMock}
      />
    );
    const input = screen.getByRole("spinbutton");
    const increment = screen.getByTestId("increment")
    const decrement = screen.getByTestId("decrement")

    await userEvent.click(increment);
    await userEvent.click(increment);
    await userEvent.click(increment);
    await userEvent.click(decrement);

    

    expect(input).toHaveValue(6);
  });

  it("component has correct values", () => {
    const onDeleteMock = jest.fn();
    const changeAmountMock = jest.fn();

    render(
      <CartItemCard
        id={item.id}
        name={item.name}
        cost={item.cost}
        amount={item.amount}
        image={item.image}
        changeAmount={changeAmountMock}
        onDelete={onDeleteMock}
      />
    );
    const name = screen.getByText("Small Steps");

    expect(name).toBeInTheDocument();
  });
});
