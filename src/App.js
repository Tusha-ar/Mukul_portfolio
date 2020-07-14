import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import Intro from './Components/Intro/Intro';
import Home from './Components/Home/Home';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Photos from './Components/Photos/Photos';
import Sign from './Components/sign/Sign';
import VideoPage from './Components/VideoPage/VideoPage';
import Conatct from './Components/Contact/Contact';
import Footer from './Components/Footer/footer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className='fixed'>
      <Intro/>
      <Nav/>
      </div>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/photos' component={Photos}/>
        <Route path='/videos' component={VideoPage}/>
        <Route path='/contact' component={Conatct}/>
        </Switch>
      <Sign/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
