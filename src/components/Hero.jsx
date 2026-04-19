function Hero() {
    return (
        <section id="inicio" className="hero section">
            <div className="container hero-content">
                <div className="hero-text">
                    <p className="hero-kicker">SOLUINTEG</p>

                    <h1 className="hero-title">
                        Soluciones integrales de mantenimiento y remodelación en la GAM
                    </h1>

                    <p className="hero-description">
                        Servicios para hogares, oficinas y espacios comerciales, con atención 24/7.
                    </p>

                    <div className="hero-buttons">
                        <a
                            className="btn btn-primary"
                            href="https://wa.me/50683246572?text=Hola,%20buen%20d%C3%ADa.%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20SOLUINTEG%20y%20solicitar%20una%20cotizaci%C3%B3n.%20Quedo%20atento(a)."
                            target="_blank"
                            rel="noreferrer"
                        >
                            Solicitar información
                        </a>

                        <a className="btn btn-secondary" href="#trabajos">
                            Ver trabajos
                        </a>
                    </div>
                </div>

                <div className="hero-card">
                    <p className="hero-card-label">Servicios principales</p>
                    <ul className="hero-card-list">
                        <li>Remodelaciones</li>
                        <li>Fontanería y electricidad</li>
                        <li>Pintura interna y externa</li>
                        <li>Soldadura y jardinería</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Hero