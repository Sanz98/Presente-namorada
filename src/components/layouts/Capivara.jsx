import styles from './Capivara.module.css';
import Button from './Button';
import { useState } from 'react';

// Importações atualizadas para as suas fotos em .jpg
import imagem1 from '../images/1.jpg';
import imagem2 from '../images/2.jpg';
import imagem3 from '../images/3.jpg';
import imagem4 from '../images/4.jpg';
import imagem5 from '../images/5.jpg'; // Adicionada a 5ª foto!

function Capivara() {
    const [showCapivara, setShowCapivara] = useState(false);
    
    function toggleCapivara() {
        setShowCapivara(!showCapivara);
    }

    return(
        <div>
            {/* Texto do botão atualizado para o clima romântico */}
            <Button text="Ver Nossas Fotos ❤️" onClick={toggleCapivara} />
            
            {showCapivara && 
                <div className={styles.capivara_container}>
                    <div className={styles.capivara_circle}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={styles.capivara_images}>
                        <img className={styles.inverted_radius}
                        src={imagem1} alt="Nossa Foto 1" 
                        style={{ objectFit: 'cover', width: '250px', height: '250px' }} />
                        
                        <img className={styles.inverted_radius}
                        src={imagem2} alt="Nossa Foto 2" 
                        style={{ objectFit: 'cover', width: '250px', height: '250px' }} />  
                        
                        <img className={styles.inverted_radius}
                        src={imagem3} alt="Nossa Foto 3" 
                        style={{ objectFit: 'cover', width: '250px', height: '250px' }} /> 
                        
                        <img className={styles.inverted_radius}
                        src={imagem4} alt="Nossa Foto 4" 
                        style={{ objectFit: 'cover', width: '250px', height: '250px' }} />      
                        
                        <img className={styles.inverted_radius}
                        src={imagem5} alt="Nossa Foto 5" 
                        style={{ objectFit: 'cover', width: '250px', height: '250px' }} />
                    </div>
                </div>
            }
        </div>
    )
}

export default Capivara;