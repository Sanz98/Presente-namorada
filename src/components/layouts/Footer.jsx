import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                Desenvolvido por{' '}
                <a 
                  href="https://github.com/Sanz98" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#ff0081', textDecoration: 'none', fontWeight: 'bold' }}
                >
                  Diogo
                </a>
            </p>
        </footer>
    );
}

export default Footer;