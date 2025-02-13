const Presentacion = () => {
  const handleScroll = (id, e) => {
    e.preventDefault();
    const seccion = document.getElementById(id);
    seccion.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <article className="flex flex-col items-center justify-center bg-hearts h-screen">
      <section className="flex flex-col p-2 lg:flex-row lg:p-1 justify-around items-center border-4 border-red-300 w-[90%] lg:w-[75%] h-[75%] rounded-lg bg-white/70">
        <img
          src="/imgs/img-osohearts.png"
          alt="oso con corazones"
          className="w-25 md:w-75"
        />
        <article className="flex flex-col items-center justify-center text-yellow-600 text-2xl gap-7">
          <section className="flex flex-col">
            <h1 className="font-valentin line-h-0  text-center text-red-400 text-8xl">
              MI MEJOR AMIGA <br /> TQM
            </h1>
          </section>
          <section className="flex flex-col gap-3">
            <p>
              De:{" "}
              <span className="border-b-2 py-1 px-4 border-yellow-600">
                JOSÉ ARMANDO
              </span>
            </p>
            <p>
              Para:{" "}
              <span className="border-b-2 py-1 px-4 border-yellow-600">
                JENNY PAOLA
              </span>
            </p>
          </section>
          <audio controls>
            <source src="/songs/mai.mp3" />
          </audio>
        </article>
        <img
          id="floating-image"
          src="/imgs/icons/icon-down.svg"
          alt="Click para bajar"
          onClick={(e) => handleScroll("mensaje", e)}
          className="w-10 absolute cursor-pointer bottom-[2%]"
        />
      </section>
    </article>
  );
};

export default Presentacion;
