const Nav = () => {
  return (
    <div className="bg-transparent">
      <nav className=" flex justify-between">
        <div className="pt-[29px] -ml-[6px] ">
          {" "}
          <img src="/img/logo.svg" className="w-40 mp-12 ml-12 " />
        </div>
        <div className="text-white pt-[29px] mr-[36px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
