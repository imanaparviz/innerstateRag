import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Solutions</h3>
            <ul>
              <li>
                <Link href="/inner-state-rag">Inner State RAG</Link>
              </li>
              <li>
                <Link href="/inner-state">Inner State</Link>
              </li>
              <li>
                <Link href="/rag">RAG Technology</Link>
              </li>
              <li>
                <Link href="/api">API</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/learning">Learning Hub</Link>
              </li>
              <li>
                <Link href="/rag-glossary">RAG Glossary</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/teams">Our Team</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Inner State RAG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
