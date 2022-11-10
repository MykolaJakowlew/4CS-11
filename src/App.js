import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation';
import Content from './components/content';
import NotFoundPage from './components/notFoundPage';
import About from './components/about';

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path='/' element={<Content />} >
            <Route path='/card/:cardId' element={<Content />} />
          </Route>
          <Route path='/about' element={<About />} />

          <Route path='*' element={<NotFoundPage />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
