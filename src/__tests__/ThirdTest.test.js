import { render, screen } from '@testing-library/react'
import App from '../App.js';

test("filtered by renders successfully", () => {
    render(<App/>);

    const element = screen.getByText(/filtered by/i);

    expect(element).toBeInTheDocument();
})