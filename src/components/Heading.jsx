export const Heading = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}
      className="flex"
    >
      <div className="block align-middle mt-2 lg:mt-0">
        {/* introduction start */}
        <div className="">
          <h1 className="text-6xl lg:text-9xl font-bold">Uhh, Hi?</h1>
          <h1 className="text-2xl md:text-5xl lg:text-5xl xl:text-8xl 2xl:text-6xl">
            I'm Tan. A guy who is still a software engineering student that has
            an interest of coding and other technology-related stuff.
          </h1>
        </div>
        {/* introduction end */}

        {/* scrolling thing start */}
        <div
          style={{ width: "60%" }}
          className="hidden lg:block bg-green-400 p-6 rounded-3xl lg:mt-5 dark:text-black"
        >
          <div>
            <h2 className="text-4xl font-bold">
              Don't know what to see first?
            </h2>
            <h6 class="text-xl">
              Let the Scrolling Thing™ decide it for you! This thing will scroll
              as fast as it can, just click anywhere at the area below. Refresh
              if you didn't see stuff below.
            </h6>
          </div>
          <div className="text-4xl">
            <div>
              <marquee scrollamount="100">
                <h2>
                  <a href="https://github.com/weareblahs">
                    View my GitHub account
                  </a>
                  <span className="ms-2 me-2">|</span>
                  <a href="https://b.ntyx.dev">See one of my projects</a>{" "}
                  <span className="ms-2 me-2">|</span>
                  <a href="https://weareblahs.github.io/ikeatoys">
                    See another of my projects
                  </a>
                  <span className="ms-2 me-2">|</span>{" "}
                  <a href="#education">View my education status</a>{" "}
                  <span className="ms-2 me-2">|</span>
                  <a href="#skills">View my coding skills and how I use it</a>
                  <span className="ms-2 me-2">|</span>
                  <a href="publictestlabs">
                    You won't know what project I'm doing right now
                  </a>
                  <span className="ms-2 me-2">|</span>
                  <a href="https://youtube.com/OogaChakaOogaOoga">
                    "side quest"
                  </a>
                  <span className="ms-2 me-2">|</span>{" "}
                  <a href="#contact">Contact me</a>
                </h2>
              </marquee>
            </div>
          </div>
        </div>
        {/* scrolling thing end */}

        <div className="mt-4 mb-4 lg:sticky lg:top-[84%]">
          <div className="hidden lg:flex text-2xl italic">
            Tip: drag with your mouse to navigate for some parts of this site
          </div>
          <div className="block lg:flex text-2xl">
            <div className="flex">
              {" "}
              <p className="">
                {" "}
                <h1 className="block text-xl lg:hidden md:hidden italic ms-auto mb-4 font-extrabold">
                  TIP: Swipe left or right to navigate between some parts of
                  this site
                </h1>
                <span className="flex lg:hidden me-2 text-xl">
                  Unfortunately, Scrolling Thing™ is only visible on a computer,
                  so you can't make a random choice on what to see. However here
                  are some quick links:
                </span>
              </p>
              <p className="">
                <span className="hidden lg:flex me-2">Quick links:</span>
              </p>
            </div>
            <h1
              className="ms-4 me-4 lg:ms-0 lg:me-0 font-bold cursor-pointer underline"
              onClick={() =>
                window.document.getElementById("projects").scrollIntoView()
              }
            >
              Projects
            </h1>
            <p className="hidden lg:flex ms-2 me-2">{" | "}</p>
            <h1
              className="ms-4 me-4 lg:ms-0 lg:me-0 font-bold cursor-pointer underline"
              onClick={() =>
                window.document.getElementById("skills").scrollIntoView()
              }
            >
              Skills
            </h1>
            <p className="hidden lg:flex ms-2 me-2">{" | "}</p>
            <h1
              className="ms-4 me-4 lg:ms-0 lg:me-0 font-bold cursor-pointer underline"
              onClick={() =>
                window.document.getElementById("education").scrollIntoView()
              }
            >
              Education
            </h1>
            <p className="hidden lg:flex ms-2 me-2">{" | "}</p>
            <h1
              className="ms-4 me-4 lg:ms-0 lg:me-0 font-bold cursor-pointer underline"
              onClick={() =>
                window.document.getElementById("contact").scrollIntoView()
              }
            >
              Contact
            </h1>
            <p className="hidden lg:flex ms-2 me-2">{" | "}</p>
            <h1
              className="ms-4 me-4 lg:ms-0 lg:me-0 font-bold cursor-pointer underline"
              onClick={() => (window.location.href = "/testlabs")}
            >
              Public Test Labs™
            </h1>
          </div>
          <div className="text-2xl italic flex">
            <span className="flex">or </span>
            <span className="hidden lg:flex font-bold">&nbsp;scroll down</span>
            <span className="flex lg:hidden font-bold">&nbsp;swipe down</span>
            &nbsp;to see more
          </div>
        </div>
      </div>
    </div>
  );
};
