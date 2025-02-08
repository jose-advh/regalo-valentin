const Mensaje = () => {
  return (
    <section className="h-screen w-[75%] m-auto" id="mensaje">
      <img
        src="/imgs/img-pao.png"
        alt="Imagen de putichi"
        className="rounded-xl"
      />
      <audio controls>
        <source src="/songs/alma-dinamita.mp3" />
      </audio>
    </section>
  );
};

export default Mensaje;
