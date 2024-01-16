import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'
const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='projects' element={<Projects />} />
        <Route path='about' element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App
