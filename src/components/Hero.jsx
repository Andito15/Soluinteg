function Hero() {
    return (
        <section id="inicio" className="hero section">
            <div className="container hero-content">
                <div className="hero-text">
                    <p className="section-tag">Construcción y mantenimiento</p>
                    <h1>Soluciones integrales para el mantenimiento en hogares, oficinas y espacios comerciales</h1>
                    <p className="hero-description">
                        Atención 24/7 en la GAM para remodelaciones, fontanería, electricidad,
                        pintura, estructuras livianas, soldadura y jardinería.
                    </p>

                    <div className="hero-buttons">
                        {/*<a*/}
                        {/*    className="btn btn-primary"*/}
                        {/*    href="https://wa.me/50672542310?text=Hola,%20quiero%20información%20sobre%20sus%20servicios"*/}
                        {/*    target="_blank"*/}
                        {/*    rel="noreferrer"*/}
                        {/*>*/}
                        {/*    WhatsApp*/}
                        {/*</a>*/}

                        <a className="btn btn-secondary" href="#trabajos">
                            Ver trabajos
                        </a>
                    </div>
                </div>

                <div className="hero-card">
                    <h3>Disponibilidad</h3>
                    <ul>
                        <li>Atención 24/7</li>
                        <li>Cobertura en la GAM</li>
                        <li>Servicios para hogares, oficinas y comercios</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Hero