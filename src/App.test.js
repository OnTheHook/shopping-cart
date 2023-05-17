import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { act } from "react-dom/test-utils";

test("renders link to Shop", () => {
  render(<App />);
  const linkElement = screen.getByText("Shop Now");
  expect(linkElement).toBeInTheDocument();
});

test("renders shop after clicking on shop link", async () => {
  render(<App />);
  const shopLink = screen.getByText("Shop");
  await userEvent.click(shopLink);
  const shop = screen.getByTestId("shop");
  expect(shop).toBeInTheDocument();
});


// test("adds an item to the cart", async () => {
//   render(<App />);
//   const shopLink = screen.getByText("Shop");
//   await userEvent.click(shopLink);
//   const inputs = screen.getAllByRole("spinbutton");
//   const buttons = screen.getAllByRole("button");
//   const cartItemsNumber = screen.getByTestId("cart-link");
//   act(async () => {
//     inputs[0].stepUp();
//   });


//   await userEvent.click(buttons[0]);

  
//   expect(cartItemsNumber.textContent).toEqual("1");
// });

// test("deletes item from the cart", () => {
//   render(<App />);
//   const shopLink = screen.getByText("Shop");
//   userEvent.click(shopLink);
//   const inputs = screen.getAllByRole("spinbutton");
//   const buttons = screen.getAllByRole("button");
//   userEvent.click(inputs[0]);
//   userEvent.type(inputs[0], "1");
//   userEvent.click(buttons[0]);
//   const cartItemsNumber = screen.getByTestId("cart-link");
//   userEvent.click(cartItemsNumber);
//   const cartItemCard = screen.getByTestId("cart-item-card-01");
//   expect(cartItemCard).toBeInTheDocument();
//   const remove = screen.getByTestId("remove");
//   userEvent.click(remove);
//   expect(cartItemCard).not.toBeInTheDocument();
// });
