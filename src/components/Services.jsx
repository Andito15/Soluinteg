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
                    <p className="section-tag">Servicios</p>
                    <h2>Servicios que ofrece SOLUINTEG</h2>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <article className="card service-card" key={index}>
                            <h3>{service}</h3>
                            <p>
                                Espacio para agregar una descripción breve de este servicio cuando
                                tengas la información completa.
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services