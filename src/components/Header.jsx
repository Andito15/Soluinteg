import { Link } from 'react-router-dom'
import logo from '../assets/logo-soluinteg-solo.png'
import '../styles/header.css'

function Header() {
    return (
        <header className="header">
            <div className="container header-content">
                <Link to="/" className="brand">
                    <img src={logo} alt="Logo Soluinteg" className="brand-logo" />
                    <span className="brand-name">SOLUINTEG</span>
                </Link>

                <nav className="nav">
                    <Link to="/">Inicio</Link>
                    <Link to="/trabajos">Trabajos</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header