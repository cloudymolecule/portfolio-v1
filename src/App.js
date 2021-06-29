import  { BrowserRouter as Autobahn, Switch, Route } from 'react-router-dom'
import './styles/App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <Autobahn>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer />
    </Autobahn>
  )
}

export default App
