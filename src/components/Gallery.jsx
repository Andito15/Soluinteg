function Gallery() {
    const projects = [
        'Foto de trabajo 1',
        'Foto de trabajo 2',
        'Foto de trabajo 3',
        'Foto de trabajo 4',
        'Foto de trabajo 5',
        'Foto de trabajo 6',
    ]

    return (
        <section id="trabajos" className="section">
            <div className="container">
                <div className="section-heading">
                    <p className="section-tag">Trabajos realizados</p>
                    <h2>Nuestros trabajos</h2>
                    <p>
                        Aquí irán las fotos de los trabajos realizados. Esta será la parte más
                        importante de la página.
                    </p>
                </div>

                <div className="gallery-grid">
                    {projects.map((project, index) => (
                        <div className="gallery-item" key={index}>
                            <div className="gallery-placeholder">{project}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Gallery