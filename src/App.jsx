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
      <main>
      <ProfileCard name="Shlomo" img="public\pic\man.png" des="Femose profsour" type="Teacher"></ProfileCard>
      <ProfileCard name="John" img="public\pic\svartzer.png" des="Nice goy" type="Teacher"></ProfileCard>
      <ProfileCard name="David" img="public\pic\almuny.png" des="Uknow student" type="Student"></ProfileCard>
      <ProfileCard name="Lora" img="public\pic\japen.png" des="Best student in class" type="Student"></ProfileCard>
      <ProfileCard name="dani" img="public\pic\boy.png" des="The happy friend" type="Friend"></ProfileCard>
      <ProfileCard name="Shoky" img="public\pic\child.png" des="Cuty friend" type="Friend"></ProfileCard>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
