import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Subtotal from "../components/Subtotal";

const items = [
  { cost: 10, amount: 3 },
  { cost: 30, amount: 1 },
  { cost: 40, amount: 2 },
  { cost: 31, amount: 1 },
];

it("renders subtotal with correct amount", () => {
  render(<Subtotal items={items} />);

  const subtotal = items.reduce((acc, cur) => {
    return acc + cur.cost * cur.amount;
  }, 0);

  const heading = screen.getByRole("heading");
  expect(heading.textContent).toEqual(`Subtotal: $${subtotal}`);
});
