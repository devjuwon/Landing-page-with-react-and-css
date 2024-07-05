import React from 'react'
import "../styles/footer.css"

const Footer = () => {
  return (
   <>
  <footer class="footer">
    <div class="footer-container">
        <div class="logo">
            <a href="#">
                <img src="./assets/icon.png" alt="Logo" />
                <h1 class="logo-name">Nexcent</h1>
            </a>
        </div>

        <div class="footer-section">
            <h2>Company</h2>
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Testimonials</a></li>
            </ul>
        </div>

        <div class="footer-section">
            <h2>Support</h2>
            <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Legal</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Status</a></li>
            </ul>
        </div>

        <div class="footer-section">
            <h2>Stay up to date</h2>
            <form action="#">
                <input type="email" placeholder="Your Email Address" />
               
            </form>
        </div>
    </div>

    <div class="copyright">
        <p>&copy; 2024 DevJuwon. All rights reserved.</p>
    </div>
</footer>

   </>
  )
}

export default Footer
