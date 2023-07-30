import Navbar from "./components/navbar"
import Main from "./components/main"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
    <main className=" h-screen">
      <Routes>
        <Route></Route>
      </Routes>
      <Navbar/>
      <Main/>
    </main>
 
    </BrowserRouter>

  )
}

export default App
