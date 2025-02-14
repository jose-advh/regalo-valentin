import React, { useState } from "react";

const Card = ({ title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-[20rem] h-[15rem] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: "1000px" }}
    >
      <div
        className={`absolute w-full h-full transition-transform duration-700 ease-in-out`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "",
        }}
      >
        {/* Frente de la carta */}
        <section
          className="absolute w-full h-full flex flex-col items-center justify-center gap-4 
                     bg-white/65 border border-pink-400 rounded-xl shadow-lg shadow-pink-500 
                     backface-hidden"
        >
          <h1 className="text-4xl general-font opacity-70">{title}</h1>
        </section>

        {/* Reverso de la carta */}
        <section
          className="absolute w-full h-full flex flex-col items-center justify-center gap-4 
                     bg-white/65 border border-pink-400 rounded-xl shadow-lg shadow-pink-500 
                     backface-hidden p-4"
          style={{ transform: "rotateY(180deg)" }}
        >
          <p className="text-lg text-center opacity-70">{description}</p>
        </section>
      </div>
    </div>
  );
};

// Estilos CSS necesarios para agregar en tu archivo global de estilos
const styles = `
.backface-hidden {
  backface-visibility: hidden;
}
`;

export default Card;
