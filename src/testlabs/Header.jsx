export const Header = () => {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-2  md:grid-cols-2 p-8">
      <div className="">
        <h1 className="text-white text-4xl italic font-bold">
          Public Test Labs™
        </h1>
        <p className="hidden md:block lg:block text-white text-xl italic font-bold">
          Modernized for the modern era MERN stack application
        </p>
        <p className="block md:hidden lg:hidden text-white text-xl italic font-bold">
          Modernized for the modern era MERN stack application. Now with music
          straight from YouTube&reg;!
        </p>
      </div>
      <div className="ms-auto hidden md:flex lg:flex">
        <h1 className="text-white text-xl mt-auto mb-auto font-bold w-[100%]">
          Do note that the "royalty free jazz music" is now linked to the
          original YouTube video. If there is no music, Click "Play" to start.
        </h1>
        <iframe
          width="60"
          height="60"
          src="https://www.youtube-nocookie.com/embed/tG-3DyniRNk?enablejsapi=1&autoplay=1&loop=1&playlist=tG-3DyniRNk"
          title="Jazz Joint"
          id="player"
          allow="autoplay"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  );
};
