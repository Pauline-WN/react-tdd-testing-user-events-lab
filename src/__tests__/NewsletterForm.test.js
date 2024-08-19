
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'; // Import this for custom matchers like toBeInTheDocument
import NewsletterForm from '../components/NewsletterForm';

test('renders form elements correctly', () => {
  render(<NewsletterForm />);

  expect(screen.getByLabelText(/name:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/coding/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/music/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/traveling/i)).toBeInTheDocument();
});

test('handles input changes correctly', () => {
  render(<NewsletterForm />);

  userEvent.type(screen.getByLabelText(/name:/i), 'John Doe');
  expect(screen.getByLabelText(/name:/i)).toHaveValue('John Doe');

  userEvent.type(screen.getByLabelText(/email:/i), 'john@example.com');
  expect(screen.getByLabelText(/email:/i)).toHaveValue('john@example.com');

  userEvent.click(screen.getByLabelText(/coding/i));
  expect(screen.getByLabelText(/coding/i)).toBeChecked();

  userEvent.click(screen.getByLabelText(/music/i));
  expect(screen.getByLabelText(/music/i)).toBeChecked();

  userEvent.click(screen.getByLabelText(/music/i)); // Uncheck music
  expect(screen.getByLabelText(/music/i)).not.toBeChecked();
});

test('displays a success message upon form submission', () => {
  render(<NewsletterForm />);

  userEvent.type(screen.getByLabelText(/name:/i), 'John Doe');
  userEvent.type(screen.getByLabelText(/email:/i), 'john@example.com');
  userEvent.click(screen.getByLabelText(/coding/i));
  
  userEvent.click(screen.getByText(/submit/i));
  
  expect(screen.getByText(/form submitted successfully!/i)).toBeInTheDocument();
  expect(screen.getByText(/name: john doe/i)).toBeInTheDocument();
  expect(screen.getByText(/email: john@example.com/i)).toBeInTheDocument();
  expect(screen.getByText(/interests: coding/i)).toBeInTheDocument();
});
