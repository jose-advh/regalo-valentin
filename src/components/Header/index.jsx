const Header = () => {
  return (
    <header className="p-2">
      <nav className="flex flex-col items-center">
        <ul className="w-[100%] border-b-4 border-dashed border-red-500 flex justify-between p-2">
          <li>De José</li>
          <li>Para Jenny Paola</li>
        </ul>
        <ul className="w-[100%] d-flex items-center justify-center border-b-4 border-dashed border-red-500 flex justify-between p-2">
          <li className="font-valentin text-8xl">SAN VALENTIN</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
