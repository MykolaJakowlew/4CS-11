import { useState } from 'react';
import './App.css';
import { SnackbarProvider } from 'react-snackbar-messages';
import Header from './components/header';
import Content from './components/content';
function App () {
  return (
    <div className='App'>
      <Header />
      <Content />
    </div>
  );
}

export default App;
