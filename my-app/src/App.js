import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Detail from './pages/Detail';

function App() {
    return (
        <>
        <Header/>
        <Routes>
            
            <Route path="/" element={<Home />}/>
            
                <Route path=":category/search/:keyword"  element={<Catalog />}/>
                <Route path=':category/:id' element={<Detail/>} />
                <Route path='/:category' element={<Catalog/>} />
                
            
        </Routes>
        <Footer/>
        </>
    )
}

export default App;