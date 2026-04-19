function Contact() {
    return (
        <section id="contacto" className="section section-alt">
            <div className="container">
                <div className="section-heading">
                    <p className="section-tag">Contacto</p>
                    <h2>Espacio para que los clientes se comuniquen</h2>
                </div>

                <div className="contact-grid">
                    <div className="card">
                        <h3>WhatsApp</h3>
                        <p>
                            Coloca aquí el número oficial de contacto para cotizaciones o consultas.
                        </p>
                        <a
                            className="btn btn-primary"
                            href="https://wa.me/50600000000?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Abrir WhatsApp
                        </a>
                    </div>

                    <div className="card">
                        <h3>Instagram</h3>
                        <p>
                            Coloca aquí la cuenta de Instagram para que puedan ver más contenido.
                        </p>
                        <a
                            className="btn btn-secondary"
                            href="https://instagram.com/soluinteg_"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Ir a Instagram
                        </a>
                    </div>

                    <div className="card">
                        <h3>Información adicional</h3>
                        <p>Correo: correo@empresa.com</p>
                        <p>Teléfono: +506 0000-0000</p>
                        <p>Horario: Lunes a sábado</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact