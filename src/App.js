import  { BrowserRouter as Autobahn, Switch, Route } from 'react-router-dom'
import './styles/App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import AboutMe from './components/pages/AboutMe'
import Skills from './components/pages/skills/Skills'
import Projects from './components/pages/projects/Projects'
import Contact from './components/pages/Contact'
import NotFound from './components/NotFound'
import Ava from './components/pages/Ava'

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
        <Route path='/ava' component={Ava} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Autobahn>
  )
}

export default App
