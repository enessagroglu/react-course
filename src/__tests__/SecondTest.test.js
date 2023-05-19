import { render, screen } from '@testing-library/react'
import App from '../App.js';

test("change title button renders successfully", () => {
    render(<App/>);

    const element = screen.getByText(/change title/i);

    expect(element).toBeInTheDocument();
})