import React from "react";
import "./Footer.css";

import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
  return (
    <div className="footer">
      <div>
        <div className="footer-data">
          {/* Contact Details */}
          <div className="contact-details">
            <h1>Contact Us</h1>
            <p><b>Saikumar Biradar</b></p>
            <p>Computer Engineering Student</p>
            <p>Savitribai Phule Pune University</p>
            <p>Pune, Maharashtra</p>
            <p>India</p>
            <p>
              <b>Email:</b> saikumarbiradar972@gmail.com
            </p>
            <p>
              <b>Phone:</b> +91 9356368420
            </p>
          </div>

          {/* Useful Links */}
          <div className="usefull-links">
            <h1>Useful Links</h1>
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/saikumar-biradar-a64750326/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://portfolio-link.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>

            <a
              href="mailto:your-email@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </div>

          {/* About */}
          <div className="librarian-details">
            <h1>About Me</h1>
            <p>Saikumar Biradar</p>
            <p>B.E. Computer Engineering (2023–2027)</p>
            <p>Full Stack MERN Developer</p>
            <p>Java | React | Node.js | MongoDB</p>
            <p>Problem Solver & Tech Enthusiast</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="contact-social">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <TwitterIcon
              style={{ fontSize: 40, color: "#E74C3C" }}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/saikumar-biradar-a64750326/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <LinkedInIcon
              style={{ fontSize: 40, color: "#0077B5" }}
            />
          </a>

          <a
            href="https://t.me/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <TelegramIcon
              style={{ fontSize: 40, color: "#229ED9" }}
            />
          </a>

          <a
            href="https://instagram.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <InstagramIcon
              style={{ fontSize: 40, color: "#E4405F" }}
            />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright-details">
        <p className="footer-copyright">
          © {new Date().getFullYear()} Library Management System. All Rights
          Reserved.
          <br />
          <span>
            Designed & Developed ❤️ by <b>Saikumar Biradar</b>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Footer;