import React, { useState, useEffect } from "react";
import ContainerLayout from "../layouts/ContainerLayout";
import SpotifyPlayer from "../layouts/SpotifyPlayer"; 
import Mensagem from "../layouts/Mensagem";
import Temporizador from "../layouts/Temporizador";
import Footer from "../layouts/Footer";

// Importando a foto principal do topo
import fotoPrincipal from '../images/olharDela.jpg';

// Importando as 5 fotos para o carrossel do final
import foto1 from '../images/1.jpg';
import foto2 from '../images/2.jpg';
import foto3 from '../images/3.jpg';
import foto4 from '../images/4.jpg';
import foto5 from '../images/5.jpg';

function HomePage() {
    const fotosCarrossel = [foto1, foto2, foto3, foto4, foto5];
    
    const [indiceAtual, setIndiceAtual] = useState(0);
    
    // Estado para controlar se o carrossel está visível
    const [mostrarFotos, setMostrarFotos] = useState(false);

    // O temporizador agora só dispara se "mostrarFotos" for verdadeiro
    useEffect(() => {
        let intervalo;
        if (mostrarFotos) {
            intervalo = setInterval(() => {
                setIndiceAtual((prevIndice) => (prevIndice + 1) % fotosCarrossel.length);
            }, 3000); 
        }
        return () => clearInterval(intervalo); 
    }, [mostrarFotos, fotosCarrossel.length]);

    return (
        <ContainerLayout>
            
            {/* A imagem principal perfeitamente centralizada no topo */}
            <img 
              src={fotoPrincipal} 
              alt="O Olhar Dela" 
              style={{ 
                display: 'block',
                margin: '10px auto 30px auto',
                width: '260px', 
                height: '260px', 
                objectFit: 'cover', 
                borderRadius: '20px', 
                boxShadow: '0 8px 25px rgba(255, 0, 129, 0.3)'
              }} 
            />

            <SpotifyPlayer />
            
            <Temporizador />
            
            <Mensagem />
            
            <div style={{
                margin: '40px auto 30px auto',
                textAlign: 'center',
                maxWidth: '350px'
            }}>
                {/* Título Dinâmico: Muda de acordo com o clique (Atualizado) */}
                <h2 style={{
                    color: '#ff0081',
                    fontSize: '1.6rem',
                    marginBottom: '20px',
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    textShadow: '1px 1px 8px rgba(255, 0, 129, 0.2)'
                }}>
                    {mostrarFotos ? "Nossos Momentos ✨" : "Quer ver nossas fotos? 🙈"}
                </h2>

                {/* Condição: Se mostrarFotos for falso, exibe o botão. Se for verdadeiro, exibe o carrossel. */}
                {!mostrarFotos ? (
                    <button 
                        onClick={() => setMostrarFotos(true)}
                        style={{
                            background: 'linear-gradient(135deg, #ff0081 0%, #ff4d94 100%)',
                            color: 'white',
                            border: 'none',
                            padding: '16px 32px',
                            fontSize: '1.2rem',
                            borderRadius: '30px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            boxShadow: '0 8px 20px rgba(255, 0, 129, 0.4)',
                            transition: 'all 0.3s ease',
                            marginTop: '10px'
                        }}
                    >
                        Exibir Nossas Fotos ❤️
                    </button>
                ) : (
                    <div>
                        {/* Moldura de Vidro */}
                        <div style={{
                            position: 'relative',
                            width: '300px',
                            height: '300px',
                            margin: '0 auto',
                            borderRadius: '25px',
                            padding: '10px',
                            background: 'rgba(255, 255, 255, 0.5)',
                            backdropFilter: 'blur(10px)',
                            boxShadow: '0 15px 35px rgba(255, 0, 129, 0.25)',
                            border: '2px solid rgba(255, 255, 255, 0.7)'
                        }}>
                            {/* Renderiza todas as fotos com efeito fade e zoom */}
                            {fotosCarrossel.map((foto, index) => (
                                <img 
                                    key={index}
                                    src={foto} 
                                    alt={`Nosso Momento ${index + 1}`} 
                                    style={{ 
                                        position: 'absolute',
                                        top: '10px',
                                        left: '10px',
                                        width: '276px', 
                                        height: '276px', 
                                        objectFit: 'cover', 
                                        borderRadius: '18px',
                                        opacity: index === indiceAtual ? 1 : 0, 
                                        transform: index === indiceAtual ? 'scale(1)' : 'scale(0.95)', 
                                        transition: 'opacity 1s ease-in-out, transform 1s ease-in-out', 
                                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                                    }} 
                                />
                            ))}
                        </div>

                        {/* Bolinhas de Navegação (Dots) */}
                        <div style={{ 
                            display: 'flex', 
                            justifyContent: 'center', 
                            gap: '8px', 
                            marginTop: '25px' 
                        }}>
                            {fotosCarrossel.map((_, index) => (
                                <div 
                                    key={index}
                                    style={{
                                        width: index === indiceAtual ? '24px' : '8px',
                                        height: '8px',
                                        borderRadius: '10px',
                                        backgroundColor: index === indiceAtual ? '#ff0081' : 'rgba(255, 0, 129, 0.25)',
                                        transition: 'all 0.4s ease'
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
            
            <Footer/>
            
        </ContainerLayout>
    );
}

export default HomePage;