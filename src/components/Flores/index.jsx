import React, { useState, useEffect } from "react";

const Flower = ({ position, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const positions = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  return (
    <div
      className={`absolute ${positions[position]} transition-all duration-1000 
      ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
    >
      <div className="relative w-16 h-16">
        {/* Pétalos */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-6 h-6 bg-pink-300 rounded-full transform origin-center"
            style={{
              left: "50%",
              top: "50%",
              marginLeft: "-12px",
              marginTop: "-12px",
              transform: `rotate(${i * 45}deg) translateY(-16px)`,
            }}
          />
        ))}
        {/* Centro de la flor */}
        <div className="absolute w-8 h-8 bg-yellow-400 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
};

const Flores = () => {
  const positions = ["top-left", "top-right", "bottom-left", "bottom-right"];

  return (
    <div className="fixed inset-0 pointer-events-none">
      {positions.map((position, index) => (
        <Flower key={position} position={position} delay={index * 300} />
      ))}
    </div>
  );
};

export default Flores;
