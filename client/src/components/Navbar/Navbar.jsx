import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="text-white relative flex justify-center items-center text-lg">
      {/* left section  */}
      <div className="left-0 absolute">Lomgo</div>
      {/* right section  */}
      <div className="flex py-2">
        <ul className="flex  max-md:hidden font-semibold gap-8">
          <li className="navElem hover:font-bold">Home</li>
          <li className="navElem hover:font-bold">Leaderboard</li>
          <li className="navElem hover:font-bold">Commitments</li>
          <li className="navElem hover:font-bold">About</li>
        </ul>
        <button className="right-0 top-0 absolute text-blackcls
         bg-[#D3E763] py-2 font-semibold px-7 rounded-full hover:bg-[#313639] hover:text-[#D3E763] transition-all"> Sign In </button>
      </div>
    </nav>
  );
};

export default Navbar;
