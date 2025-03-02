import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
function App() {
 

  return (
    <>
     <navbar />

    <div className="cards">
      <card title ="card 1" description = "card 1 description" />
      <card title ="card 2" description = "card 2 description" />
      <card title ="card 3" description = "card 3 description" />
      
    </div>

    <footer />
    </>
  )
}

export default App
