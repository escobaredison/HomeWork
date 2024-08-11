import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage/homePage';
import CharacterPage from './components/characterPage/characterPage';
import NotFoundPage from './components/notFoundPage/notFoundPage';
import EpisodesPage from './components/episodesPage/episodesPage';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/characters" element={<CharacterPage/>} />
          <Route path="/episodes" element={<EpisodesPage/>} />
          <Route path="/*" element={<NotFoundPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;