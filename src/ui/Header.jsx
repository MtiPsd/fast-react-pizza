import { Link } from "react-router-dom";
import SearchOrder from "./../features/order/SearchOrder";
import Username from "./../features/user/Username";

function Header() {
  return (
    <header
      className="sm:px-6z flex items-center justify-between border-b
     border-stone-500 bg-yellow-400 px-4 py-4 uppercase"
    >
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />

      <Username />
      <p>MTI</p>
    </header>
  );
}

export default Header;
