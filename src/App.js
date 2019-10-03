import React from 'react'
import Home from './components/Home'
import Gallery from './components/Gallery'
import Blog from './components/Blog'
import Contact from './components/Contact'
import './App.css'
class App extends React.Component {
   render() {
   return (
     <div className="is-preload">
       <div id="wrapper">
     <Home/>
     <Blog/>
     <Gallery/>
     <Contact/>
     <div class="copyright">&copy; Untitled. All rights reserved. Design: <a href="https://html5up.net">HTML5 UP</a>.</div>
     </div>
     </div>
   )
}
}
export default App;

