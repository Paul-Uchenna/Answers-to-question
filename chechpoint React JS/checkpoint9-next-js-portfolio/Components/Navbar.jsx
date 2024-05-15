import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className="w-full fixed z-50 top-0 h-[11vh] bg-[#131b26] shadow-md">
        <div className="flex items-center justify-between w-[80%] mx-auto h-full">
          <h1 className="flex-[0.7] cursor-pointer text-xl text-white font-extrabold ">
            WEB<span className="text-[#f021b2]">DEV</span>
          </h1>
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/aboutpage" className="nav-link">
            About
          </Link>
          <Link href="/skillspage" className="nav-link">
            Skills
          </Link>
          <Link href="/projectpage" className="nav-link">
            Project
          </Link>
          <Link href="/contactpage" className="nav-link">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
