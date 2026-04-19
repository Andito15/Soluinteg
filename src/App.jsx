import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Trabajos from './pages/Trabajos'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trabajos" element={<Trabajos />} />
        </Routes>
    )
}

export default App