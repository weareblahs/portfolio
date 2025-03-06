import { useEffect } from "react";
import "./Testlabs.css";

export const Testlabs = () => {
  const playAudio = () => {
    const iframe = window.document.getElementById("player");
    iframe.contentWindow.postMessage(
      '{ "event": "command", func: "playVideo" }',
      "*"
    );
  };

  useEffect(() => {
    window.document.title = "Public Test Labs™";
    playAudio();
  }, []);

  return (
    <div className="w-[100vw] h-[100vh] bg-[url('/testlabs/publictestlabs.png')] bg-center bg-repeat bg-black">
      <div className="grid grid-cols-2 p-8">
        <div className="">
          <h1 className="text-white text-4xl italic font-bold">
            Public Test Labs™
          </h1>
          <p className="text-white text-xl italic font-bold">
            Modernized for the modern era MERN stack application
          </p>
        </div>
        <div className="ms-auto flex">
          <h1 className="text-white w-96 mt-auto me-4 font-bold">
            Do note that the "royalty free jazz music" is now linked to the
            original YouTube video. Click "Play" to start.
          </h1>
          <iframe
            width="60"
            height="60"
            src="https://www.youtube-nocookie.com/embed/tG-3DyniRNk?enablejsapi=1&autoplay=1&loop=1&playlist=tG-3DyniRNk"
            title="Jazz Joint"
            id="player"
            frameborder="0"
            allow="autoplay"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
