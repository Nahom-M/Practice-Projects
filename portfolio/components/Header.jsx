"use client";

const Header = () => {
  return (
    <header className="bg-white text-center p-6 mt-15 mb-5">
      <img
        src="https://nahom-others.s3.us-east-2.amazonaws.com/nahom-image.jpg"
        alt="Profile"
        className="mx-auto w-100 h-100 rounded-full object-cover border-10 border-black-300"
      />
      <div className="mt-5 text-2xl font-medium text-black">
        Hello, my name is Nahom Mesele and I'm a recent Humber graduate from
        Computer Programming.
      </div>
    </header>
  );
};

export default Header;
