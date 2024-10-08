import { FcLike } from "react-icons/fc";
import { ImProfile } from "react-icons/im";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";

const Header = () => {
  return (
    <div className="p-2 m-2 bg-black">
      <div className="flex  gap-56 ">
        <div>LEXICONS</div>

        <div className=" flex  gap-9">
          <input
            className=" border border-solid border-red-700 rounded-md w-[400px]  text-center"
            type="text"
            placeholder="search"
          />
          <button className="bg-[#FFA500] text-white rounded-lg w-[100px]">
            Search
          </button>
        </div>
      </div>
      <nav className="flex justify-between mt-6">
        <button className="flex bg-[#FFA500] text-white border rounded-md ml-10">
          {" "}
          <BiSolidCategoryAlt />
          <h6>All cateories</h6>
        </button>
        <div>
          <ul className="flex justify-between gap-4 text-red-300 ">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#"> Shop</a>
            </li>
            <li>
              {" "}
              <a href="#">Blog</a>
            </li>
            <li>
              <a href=""> Short code</a>
            </li>
            <li>
              <a href=""> Contact us</a>
            </li>
            <li>
              <a href=""> About Us</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-10 ">
          <FcLike />
          <ImProfile className="bg-white" />
          <MdOutlineShoppingCart className="bg-slate-100" />
          <div>
            <button className="bg-blue-700 rounded-lg w-[100px] h-7">
              my cart
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
