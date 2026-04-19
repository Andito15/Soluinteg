import whatsappIcon from '../assets/whatsapp.png'
import instagramIcon from '../assets/instagram.png'
import facebookIcon from '../assets/facebook.png'

function Footer() {
    return (
        <footer className="footer" id="footer-contacto">
            <div className="container footer-top">
                <div className="footer-brand">
                    <h3>SOLUINTEG</h3>
                    <p>Soluciones integrales para el mantenimiento en hogares, oficinas y espacios comerciales.</p>
                    <p>Horario: 24/7</p>
                    <p>Zona de atención: GAM</p>
                    <p>Correo: Por definir</p>
                </div>

                <div className="footer-contact">
                    <h4>Contacto</h4>

                    <a
                        href="https://wa.me/50672542310?text=Hola,%20quiero%20información%20sobre%20sus%20servicios"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-social-link"
                    >
                        <img src={whatsappIcon} alt="WhatsApp" className="footer-social-icon" />
                        <span>7254-2310 / 8324-6572</span>
                    </a>

                    <a
                        href="https://instagram.com/soluinteg_"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-social-link"
                    >
                        <img src={instagramIcon} alt="Instagram" className="footer-social-icon" />
                        <span>@soluinteg_</span>
                    </a>

                    <a
                        href="https://www.facebook.com/share/1837rW5PGz/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-social-link"
                    >
                        <img src={facebookIcon} alt="Facebook" className="footer-social-icon" />
                        <span>Soluinteg</span>
                    </a>
                </div>
            </div>

            <div className="container footer-bottom">
                <p>© 2026 SOLUINTEG. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer