import React from "react";
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import store from "../store/index";
import { Provider } from "react-redux";
import App from '../App';

beforeEach(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
})

test('load and display App', async () => {
  const header = await waitFor(() => screen.getByTestId('header'));
  expect(header).toBeInTheDocument();
})
test('handle click', async () => {
  const { getByTestId } = screen;
  const button = await waitFor(() => getByTestId('cart'));
  expect(button).toHaveTextContent('Cart');
});
// test('handle click', async () => {
//   const button = fireEvent.click(screen.getByTestId('button'));
//   expect(button).toHaveBeenCalledTimes(1)
// });