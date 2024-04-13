
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from "./HomePage/Home";
import { Routes,Route } from "react-router-dom";
import PageListStore from "./ListStoreFood/PageListStore";
import DetailFood from './PageDetailFood/DetailFood';
import Header from "./Header.png"
import Footer from "./Footer.png"

function App() {
  return (
    <div className="body">
        <div className='header'>
          <img className='img_main_child' src='https://food.grab.com/static/page-home/VN-new-2.jpg'></img>
          <a href="/"><div className='logo'><img className='logo_child' src={Header}></img></div></a>          
        </div>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/PageListStore" element={<PageListStore/>}/>
            <Route path="/DetailFood" element={<DetailFood/>}/>
          </Routes>
        </div>
        <div className="Footer">
        <div className='footer'><img className='Footer_img' src={Footer}></img></div>
        </div>
    </div>
  );
} 

export default App