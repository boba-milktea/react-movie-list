const Header = () => {
  return (
    <header className="flex flex-col items-center py-8 text-center ">
      <img
        className="size-40 hover:rotate-30 duration-400 ease-in-out"
        src="/src/assets/pop-corn.png"
        alt="icon"
      />
      <h1 className="font-roboto font-bold uppercase text-4xl text-graphite-gray">
        Pop-corn Time
      </h1>
      <p className="font-sans font-bold text-xl mt-4 text-graphite-gray">
        Discover your next favorite film!
      </p>
    </header>
  );
};

export default Header;
