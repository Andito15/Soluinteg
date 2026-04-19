import herramientaIcon from '../assets/herramientas.png'

function Services() {
    const services = [
        'Remodelaciones',
        'Fontanería y electricidad',
        'Pintura interna y externa',
        'Construcción de estructura liviana',
        'Soldadura',
        'Jardinería',
    ]

    return (
        <section id="servicios" className="section section-alt">
            <div className="container">
                <div className="section-heading">
                    <p className="section-tag"></p>
                    <h2>Servicios</h2>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <article className="service-item" key={index}>
                            <img
                                src={herramientaIcon}
                                alt="Icono de herramientas"
                                className="service-icon"
                            />
                            <h3>{service}</h3>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services