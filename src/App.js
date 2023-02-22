import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/home/Home';
import Navbar from './components/Navbar';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import BaseLayout from './components/BaseLayout';
const App = () => {
  return (
    <BaseLayout />
  )
};

export default App;
