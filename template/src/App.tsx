import React from 'react';
import { Routes, Route } from "react-router-dom";
import AppLayout from './AppLayout';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import Page1 from './routes/Page1';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="page1" element={<Page1 />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}