import { render, screen } from '@testing-library/react';
import App from '../App';

test('This is a Todo App', () => {
  render(<App />);

  const text = screen.getByText(/This is a Todo App/);
  

  expect(text).toBeInTheDocument(); 
  console.log("Test file is running");

});
