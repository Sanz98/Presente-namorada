import styles from './Mensagem.module.css';
import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

function Mensagem({ mensagem_p1, mensagem_p2, remetente = "Sua Vida." }) {

  const containerRef = useRef(null);

  useEffect(() => {
   ScrollReveal().reveal(containerRef.current, {
    origin: 'bottom',
    distance: '20px',
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out',
    reset: false,
   });
  }, []);
  
  return (
   <div ref={containerRef} className={styles.mensagem_container}>
        <h1>Para o meu amor:</h1>
        <div className={styles.paragrafo_romantico}>
            <p>
                Que seja mais uma data especial na nossa vida juntos, que possamos viver intencionalmente juntos celebrando todos os nossos momentos especiais de nossas vidas, que nosso amor indestrutível nunca se rompe,
            </p>
            <p>
                pois eu agradeço milhões de vezes a vida por ter encontrado você para mim, eu te amo e te amarei infinitas vezes até não caber mais descrições do tamanho da minha paixão que tenho por você, eu amo demais ser seu namorado ❤️❤️
            </p>
            <p>Com todo meu amor,</p>
            <p>Diogo</p> {/* Substitua "Seu Namorado" pelo seu nome, se preferir! */}
        </div>
    </div>
  );
}

export default Mensagem;