import  { BrowserRouter as Autobahn, Switch, Route } from 'react-router-dom'
import './styles/App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import AboutMe from './components/pages/AboutMe'
import Skills from './components/pages/Skills'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'

function App() {
  return (
    <Autobahn>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about-me' component={AboutMe} />
        <Route path='/skills' component={Skills} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </Autobahn>
  )
}

export default App
