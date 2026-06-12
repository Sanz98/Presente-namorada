// src/components/layouts/Temporizador.jsx
import React, { useEffect, useState } from "react";
import ScrollReveal from 'scrollreveal';

// Componente de círculo individual
const ProgressCircle = ({ value, max, unit }) => {
  // Prevenção extra para garantir que nunca apareça NaN
  const safeValue = isNaN(value) ? 0 : value;
  
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (safeValue / max) * circumference;

  return (
    <div className="progress-circle" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      margin: '10px 5px' 
    }}>
      {/* Container relativo para centralizar o texto perfeitamente */}
      <div style={{ position: 'relative', width: '120px', height: '120px' }}>
        <svg width="120" height="120" viewBox="0 0 120 120">
          {/* Círculo de Fundo (Trilha) */}
          <circle
            cx="60"
            cy="60"
            r="45"
            fill="none"
            stroke="#333333" // Cor de fundo mais suave
            strokeWidth="6"
          />
          {/* Círculo de Progresso */}
          <circle
            cx="60"
            cy="60"
            r="45"
            fill="none"
            stroke="#ff0081" // Sua cor rosa
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round" // Deixa a pontinha do progresso arredondada
            transform="rotate(-90 60 60)"
            style={{ transition: 'stroke-dashoffset 1s linear' }} // Animação fluida
          />
        </svg>
        
        {/* Texto centralizado de forma absoluta */}
        <div style={{
           position: 'absolute',
           top: 0,
           left: 0,
           width: '100%',
           height: '100%',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           color: "#ff0081",
           fontSize: "1.8em",
           fontWeight: "bold"
         }}>
          {String(safeValue).padStart(2, "0")}
        </div>
      </div>
      <p style={{ fontSize: "1em", marginTop: "8px", color: "#e2e2e2", fontWeight: "500" }}>{unit}</p>
    </div>
  );
};

// Componente principal
export default function Temporizador() {
  
  // CORREÇÃO: O estado inicial agora usa os mesmos nomes em inglês que são chamados no HTML.
  // Isso evita que o navegador se perca no primeiro milissegundo e mostre o "NaN".
  const [time, setTime] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeElapsed = () => {
      // DATA E HORA ALTERADAS AQUI PARA 17/07/2022 às 21:39:00
      const startDate = new Date('2022-07-17T21:39:00');
      const currentDate = new Date();

      let years = currentDate.getFullYear() - startDate.getFullYear();
      let months = currentDate.getMonth() - startDate.getMonth();
      let days = currentDate.getDate() - startDate.getDate();
      let hours = currentDate.getHours() - startDate.getHours();
      let minutes = currentDate.getMinutes() - startDate.getMinutes();
      let seconds = currentDate.getSeconds() - startDate.getSeconds();

      // Ajustes matemáticos de tempo caso o valor seja negativo
      if (seconds < 0) {
        minutes -= 1;
        seconds += 60;
      }
      if (minutes < 0) {
        hours -= 1;
        minutes += 60;
      }
      if (hours < 0) {
        days -= 1;
        hours += 24;
      }
      if (days < 0) {
        months -= 1;
        // Pega quantos dias teve o mês passado para dar a diferença exata
        const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        days += prevMonth;
      }
      if (months < 0) {
        years -= 1;
        months += 12;
      }

      setTime({ years, months, days, hours, minutes, seconds });
    };

    calculateTimeElapsed(); // Chamada inicial para não esperar 1 seg
    const timer = setInterval(calculateTimeElapsed, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    ScrollReveal().reveal('.progress-circle', {
      origin: 'bottom',
      distance: '30px',
      duration: 1000,
      easing: 'ease-in-out',
      interval: 100, // Intervalo em cascata (um círculo aparece após o outro)
      reset: false
    });
  }, []);

  return (
    <div style={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", 
      gap: "15px", 
      justifyContent: "center",
      width: "95%",
      margin: "1rem auto 2rem auto" 
    }}>
      <ProgressCircle value={time.years} max={10} unit="Anos" />
      <ProgressCircle value={time.months} max={12} unit="Meses" />
      <ProgressCircle value={time.days} max={31} unit="Dias" />
      <ProgressCircle value={time.hours} max={24} unit="Horas" />
      <ProgressCircle value={time.minutes} max={60} unit="Minutos" />
      <ProgressCircle value={time.seconds} max={60} unit="Segundos" />
    </div>
  );
}