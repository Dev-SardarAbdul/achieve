// Card.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card from './card';

test('clicking on a card sets the active card index and calls setdebtTool', () => {
  const setdebtToolMock = jest.fn();
  const { getByText } = render(<Card setdebtTool={setdebtToolMock} />);

  // Click on the second card (index 1)
  fireEvent.click(getByText('Compare'));

  // Expect active card index to be 1
  expect(setdebtToolMock).toHaveBeenCalledWith('Compare');
});
