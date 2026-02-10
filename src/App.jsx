import { useState } from 'react'
import './App.css'
import Button from './components/Buttuon'
import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <ProfileCard></ProfileCard>
      <Footer></Footer>
    </div>
  )
}

export default App
