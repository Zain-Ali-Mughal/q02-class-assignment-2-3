import Header from "@/components/header";
import "./globals.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import icons

export default function Home() {
  return (
    <div>
      <Header />
      <div className="main-content">
        {/* Left side: Introduction */}
        <div className="introduction">
          <h1>Hay' i m Zain Ali</h1>
          <p >
            Currently exploring the exciting world of Generative AI. My focus is on
            understanding and developing AI models that can generate creative
            content, ranging from text to images, with the potential to revolutionize
            various industries. I’m passionate about the intersection of technology
            and creativity, and I aim to contribute to the growing field of artificial
            intelligence.
          </p>
          {/* Social Links */}
          <ul className="social-links">
            <li>
              <a href="https://github.com/Zain-Ali-Mughal?tab=repositories">
                <FaGithub /> Github
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/zain-ali-3948351bb/">
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:zamalimughal@gmail.com">
                <FaEnvelope /> Email
              </a>
            </li>
          </ul>
        </div>

        {/* Right side: Profile Image */}
        <div className="profile-image">
          <img src="./profile.jpg" alt="profile" />
        </div>
      </div>
    </div>
  );
}
