import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { Banner } from './components/banner';

const root = document.getElementById('root')!;

createRoot(root).render(
    <BrowserRouter>
        <Banner />
    </BrowserRouter>
)