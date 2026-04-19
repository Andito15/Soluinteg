import logo from '../assets/logo-soluinteg-solo.png'

function Header() {
    return (
        <header className="header">
            <div className="container header-content">
                <a href="#inicio" className="brand">
                    <img src={logo} alt="Logo Soluinteg" className="brand-logo" />
                    <span className="brand-name">SOLUINTEG</span>
                </a>

                <nav className="nav">
                    <a href="#inicio">Inicio</a>
                    <a href="#servicios">Servicios</a>
                    <a href="#trabajos">Trabajos</a>
                    <a href="#nosotros">Nosotros</a>
                    <a href="#footer-contacto">Contacto</a>
                </nav>
            </div>
        </header>
    )
}

export default Header