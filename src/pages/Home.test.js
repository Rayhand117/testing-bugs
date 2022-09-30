import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

test('Render halaman Users dengan benar', () => {
    render(<HomePage />)

    // mencari tombol tertentu
    // pastikan button kita memiliki role="button"
    const linkElement = screen.getByText(/Why do we need Test ?/i);
    expect(linkElement).toBeInTheDocument();
    // const table = screen.getByRole('table')
    // expect(table).toBeInTheDocument();
    // const btn = screen.getByRole('Button')
    // expect(btn).toBeInTheDocument();
    // expect(btn).toHaveTextContent('Home Page');
})