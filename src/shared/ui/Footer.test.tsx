// src/shared/ui/Footer.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Footer } from './Footer';

describe('Footer', () => {
  it('should render the current year and project name', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const footerText = screen.getByText(
      `© ${currentYear} JS Vibe Coding. All Rights Reserved.`
    );
    expect(footerText).toBeInTheDocument();
  });
});
