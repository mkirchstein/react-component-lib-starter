import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button component', () => {
  it('should render correctly', () => {
    render(<Button />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should have the correct text', () => {
    render(<Button text="Click me" />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Click me');
  });

  it('should have the primary styles when primary prop is true', () => {
    render(<Button primary />);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle({ color: '#fff', backgroundColor: '#FF5655' });
  });

  it('should have the default styles when primary prop is false', () => {
    render(<Button primary={false} />);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle({ color: '#000', backgroundColor: '#f4c4c4' });
  });

  it('should have the small size styles when size prop is "small"', () => {
    render(<Button size="small" />);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle({ padding: '7px 25px 8px' });
  });

  it('should have the medium size styles when size prop is "medium"', () => {
    render(<Button size="medium" />);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle({ padding: '9px 30px 11px' });
  });

  it('should have the default size styles when size prop is not provided', () => {
    render(<Button />);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle({ padding: '14px 30px 16px' });
  });
});
