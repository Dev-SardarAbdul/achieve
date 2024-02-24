import { render, fireEvent } from '@testing-library/react'; 
import MainButton from './MainButton';

it('calls submitData function on button click', () => {
  // Mock the submitData function
  const mockSubmitData = jest.fn();

  // Render the component
  const { getByText } = render(
    <MainButton submitData={mockSubmitData} isValidEmail={true}>
      Click Me
    </MainButton>
  );

  // Get the button element by its text
  const buttonElement = getByText('Click Me');

  // Simulate button click
  fireEvent.click(buttonElement);

   
  expect(mockSubmitData).toHaveBeenCalled();
});
