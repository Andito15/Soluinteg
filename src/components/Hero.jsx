import { Link } from 'react-router-dom'
import '../styles/hero.css'

function Hero() {
    return (
        <section id="inicio" className="hero section">
            <div className="container hero-content">
                <div className="hero-text">
                    <p className="hero-kicker">SOLUINTEG</p>

                    <h1 className="hero-title">
                        Soluciones integrales de manteniendo para tu casa, oficina o espacio comercial
                    </h1>


                    <div className="hero-buttons">
                        <a
                            className="btn btn-primary"
                            href="https://wa.me/50683246572?text=Hola,%20buen%20d%C3%ADa.%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20SOLUINTEG%20y%20solicitar%20una%20cotizaci%C3%B3n.%20Quedo%20atento(a)."
                            target="_blank"
                            rel="noreferrer"
                        >
                            Contáctanos
                        </a>

                        <Link className="btn btn-secondary" to="/trabajos">
                            Ver trabajos
                        </Link>
                    </div>
                </div>

                <div className="hero-card">
                    <p className="hero-card-label">Cobertura y atención</p>

                    <div className="hero-card-info">
                        <p><strong>Cobertura:</strong> Toda el Gran Área Metropolitana</p>
                        <p><strong>Atención:</strong> Disponible todos los días</p>
                        <p><strong>Enfoque:</strong> Hogares, oficinas y espacios comerciales</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero