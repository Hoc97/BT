import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import GameResult from './components/GameResult/GameResult';
import Overview from './components/Overview/Overview';
import './App.scss';
import Home from './components/Home/Home';
import Login from './components/Home/Login';
import PrivateRoute from './components/Home/PrivateRoute';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Overview />} />
                    <Route path='/results/:teamcode' element={<GameResult />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
