import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import AppLayout from './AppLayout';
import Home from './routes/Home';
import NotFound from './routes/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}