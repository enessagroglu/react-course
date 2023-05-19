import { render, screen } from '@testing-library/react'
import App from '../App.js';

test("Toilet Paper card renders successfully", () => {
    render(<App/>);

    const element = screen.getByText(/Toilet Paper/i);

    expect(element).toBeInTheDocument();
})