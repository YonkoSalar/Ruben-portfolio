import React, { useState, useEffect } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const scrollToSection = (sectionId : any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky bg-white z-10 px-8 md:flex-row">
      <div className="flex flex-row justify-between items-center py-4">
        <div>
          <p className="text-2xl font-proxima font-semibold text-black">
            RUBEN
          </p>
        </div>
        <div className="md:hidden">
          <button onClick={handleMenuClick}>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`${
            isOpen ? "flex justify-center" : "hidden justify-end"
          } fixed top-0 left-0 w-screen h-screen md:h-auto bg-white z-20 transform transition-transform ease-in-out duration-300 md:relative md:translate-x-0 md:bg-transparent md:flex`}
        >
          <ul className={`flex flex-col justify-center items-center h-full space-y-4 text-black text-md uppercase md:flex md:flex-row md:space-y-0 md:space-x-4 md:mt-0`}>
            <div onClick={handleMenuClick} className="absolute top-5 right-5 cursor-pointer text-2xl md:hidden">
              X
            </div>
            <li className="cursor-pointer md:py-2" onClick={() => scrollToSection("home")}>Home</li>
            <li className="cursor-pointer md:py-2" onClick={() => scrollToSection("projects")}>Projects</li>
            <li className="cursor-pointer md:py-2" onClick={() => scrollToSection("contact")}>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
