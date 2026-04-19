import Header from '../components/Header'
import Footer from '../components/Footer'
import WorkSlider from '../components/WorkSlider'
import '../styles/trabajos.css'
import '../styles/slider.css'

function Trabajos() {
    const remodelaciones = [
        'https://picsum.photos/seed/remodelacion1/1200/800',
        'https://picsum.photos/seed/remodelacion2/1200/800',
        'https://picsum.photos/seed/remodelacion3/1200/800',
    ]

    const electricidad = [
        'https://picsum.photos/seed/electricidad1/1200/800',
        'https://picsum.photos/seed/electricidad2/1200/800',
        'https://picsum.photos/seed/electricidad3/1200/800',
    ]

    const pintura = [
        'https://picsum.photos/seed/pintura1/1200/800',
        'https://picsum.photos/seed/pintura2/1200/800',
        'https://picsum.photos/seed/pintura3/1200/800',
    ]

    const estructuras = [
        'https://picsum.photos/seed/estructura1/1200/800',
        'https://picsum.photos/seed/estructura2/1200/800',
        'https://picsum.photos/seed/estructura3/1200/800',
    ]

    const soldadura = [
        'https://picsum.photos/seed/soldadura1/1200/800',
        'https://picsum.photos/seed/soldadura2/1200/800',
        'https://picsum.photos/seed/soldadura3/1200/800',
    ]

    const jardineria = [
        'https://picsum.photos/seed/jardineria1/1200/800',
        'https://picsum.photos/seed/jardineria2/1200/800',
        'https://picsum.photos/seed/jardineria3/1200/800',
    ]

    return (
        <>
            <Header />
            <main className="trabajos-page">
                <section className="section">
                    <div className="container">
                        <div className="section-heading">
                            <p className="section-tag">Trabajos realizados</p>
                            <h1 className="trabajos-main-title">Galería de trabajos por servicio</h1>
                            <p>
                                Esta sección muestra ejemplos por cada área de servicio. Luego
                                puedes reemplazar estas imágenes de prueba por fotos reales de
                                SOLUINTEG.
                            </p>
                        </div>

                        <WorkSlider title="Remodelaciones" images={remodelaciones} />
                        <WorkSlider title="Fontanería y electricidad" images={electricidad} />
                        <WorkSlider title="Pintura interna y externa" images={pintura} />
                        <WorkSlider title="Construcción de estructura liviana" images={estructuras} />
                        <WorkSlider title="Soldadura" images={soldadura} />
                        <WorkSlider title="Jardinería" images={jardineria} />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Trabajos