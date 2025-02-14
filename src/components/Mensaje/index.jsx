import Card from "../Cards";
import ImagenPao from "./ImagenPao";

const Mensaje = () => {
  return (
    <section
      className="w-[75%] h-[80rem] lg:h-screen m-auto flex flex-wrap items-center justify-around gap-5 lg:gap-0 pt-3 pb-3 "
      id="mensaje"
    >
      <Card
        title="Eres para mí..."
        description="un faro encendido,
        luz en mi ruta, refugio querido.
        Ríes, y el mundo brilla contigo,
        alma sincera, calor infinito.

        Eres abrigo en días oscuros,
        voz que consuela, la paz en lo duro.
        Nada nos quiebra, nada nos hunde,
        somos un lazo que el tiempo no funde."
      />
      <ImagenPao />
      <Card
        title="La mejor..."
        description="amiga, dulce y sincera,
        luz en mi vida, mi paz verdadera.
        Siempre conmigo, firme en mi rumbo,
        rayo que ahuyenta la sombra y el humo.

        Eres el canto que alivia mis miedos,
        voz que me anima, calor en mis dedos.
        Nada nos quiebra, nada nos calla."
      />
      <Card
        title="Del mundo..."
        description="eres un brillo sincero,
        luz que ilumina mi andar verdadero.
        Ríes y todo se torna alegría,
        dulce refugio, pura armonía.

        Eres el viento que impulsa mis sueños,
        voz que me calma, calor en inviernos.
        Nada nos quiebra, nada nos teme,
        somos un lazo que el tiempo no frena."
      />
    </section>
  );
};

export default Mensaje;
