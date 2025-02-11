const Card = (props) => {
  const { title, description } = props;

  return (
    <section className="flex flex-col items-center justify-center gap-4 border w-[20rem] h-[15rem] m-auto p-1 bg-white/65 border border-pink-400 rounded-xl shadow-lg shadow-pink-500">
      <h1 className="text-4xl general-font">{title}</h1>
    </section>
  );
};

export default Card;
