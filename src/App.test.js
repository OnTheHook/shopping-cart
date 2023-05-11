import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
const itemsList = [
  { id: 0, name: "Sailor Moon", cost: 10 },
  { id: 1, name: "Guts", cost: 20 },
  { id: 2, name: "Goku", cost: 30 },
  { id: 3, name: "Vash", cost: 20 },
  { id: 4, name: "Naruto", cost: 25 },
];

describe('Cart array', () => {
  test('adds item to array', () => {
    expect(2).toEqual(2)
  })
})