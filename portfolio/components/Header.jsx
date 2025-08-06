"use client";

//https://www.usatoday.com/gcdn/media/USATODAY/WiresImages/2013/04/12/54377a2a534fd80c2e0f6a7067007217-3_4.jpg
const Header = () => {
  return (
    <header className="bg-white text-center p-6 mt-5 mb-5">
      <img
        src="/nahom-picture.jpg"
        alt="Profile"
        className="mx-auto w-100 h-100 rounded-full object-cover"
      />
      <div className="mt-5 text-2xl font-medium">
        Hello, my name is Nahom Mesele and I'm a recent Humber graduate from
        Computer Programming.
      </div>
    </header>
  );
};

export default Header;
