import React, { useState } from 'react'
import { render, screen, waitFor } from "@testing-library/react";
import UserPage from "./UserPage";
import '@testing-library/jest-dom';

test('Render halaman Users dengan benar', async () => {
    render(<UserPage />)
    const linkElement = screen.getByText(/Todo Page/i);
    expect(linkElement).toBeInTheDocument();
    const table = screen.getByRole('table')
    expect(table).toBeInTheDocument();
    
    const todo = await waitFor(() => {
        return screen.findByText('quis ut nam facilis et officia qui')
    }, { timeout: 3000 })
    expect(todo).toBeInTheDocument()
})
