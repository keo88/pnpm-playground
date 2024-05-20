import { fireEvent, render, screen } from '@testing-library/react';
import Page from '@/app/page';
import Counter from '@/components/common/Counter';

describe('<Page />', () => {
  it('renders a heading', () => {
    render(<Page />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });

  it('increments the count', () => {
    render(<Counter />);

    const button = screen.getByRole('button');

    expect(screen.getByText('0')).toBeInTheDocument();

    fireEvent.click(button);

    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
