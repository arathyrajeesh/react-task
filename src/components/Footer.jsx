import '../styles/Footer.css'




const Footer = () =>{

    return(
    <footer className="footer">
        <div className="footer-top">
            <div class="footer-brand">
                <h3>Nexcent</h3>
                <p>Copyright © 2020 Landify UI Kit.<br/>All rights reserved</p>
            </div>
            <div className="footer-links">
                <div>
                    <h4>Company</h4>
                    <ul>
                        <li>About us</li>
                        <li>Blog</li>
                        <li>Contact us</li>
                        <li>Pricing</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <div>
                    <h4>Support</h4>
                    <ul>
                        <li>Help center</li>
                        <li>Terms of service</li>
                        <li>Legal</li>
                        <li>Privacy policy</li>
                        <li>Status</li>
                    </ul>
                </div>
                <div>
                    <h4>Stay up to date</h4>
                    <input type="email" placeholder="Your email address" />
                </div>
            </div>
        </div>
    </footer>
    )
}


export default Footer