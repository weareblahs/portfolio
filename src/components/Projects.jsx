import projects from "/src/data/home/projects.json";
import { useRef } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
export const Projects = () => {
  const projectList = projects.filter((p) => p.type != "template");
  console.log(projectList);
  return (
    <>
      <div className="block md:flex lg:flex">
        <h1 className="text-3xl font-bold mb-3 lg:text-6xl">Projects</h1>
        <h1 className="hidden text-3xl lg:block md:block italic ms-auto mt-auto mb-auto"></h1>
      </div>
      <div className="p-0 lg:p-4">
        <ScrollContainer className="flex overflow-y-auto lg:overflow-x-auto">
          {" "}
          {projectList.map((p) => {
            return (
              <div className="me-4 mt-2 mb-2">
                <div className="bg-black dark:bg-white h-full p-4 rounded-xl text-white dark:text-black w-84 md:w-100 lg:w-100">
                  <img src={p.image} className="rounded-tl-xl rounded-tr-xl" />
                  <h1 className="text-4xl mt-1 mb-1 font-bold">{p.name}</h1>
                  <p className="text-xl mb-3">{p.description}</p>
                  <div className="sticky top-[100%]">
                    <div>
                      {p.web ? (
                        <div className="grid grid-cols-2">
                          <div>
                            <button
                              className="bg-blue-500 text-white w-[100%] p-3 text-sm rounded-bl-xl hover:bg-blue-800 transition ease-in-out"
                              onClick={() => (window.location.href = p.webURL)}
                            >
                              {p.hostedOn == "githubPages" ? (
                                <i className="devicon-github-plain pe-2"></i>
                              ) : null}
                              {p.hostedOn == "vercel" ? (
                                <i className="devicon-vercel-plain pe-2"></i>
                              ) : null}
                              {p.hostedOn == "netlify" ? (
                                <i className="devicon-netlify-plain pe-2"></i>
                              ) : null}
                              View project
                            </button>
                          </div>
                          <div>
                            <button
                              className="bg-black text-white w-[100%] p-3 text-sm rounded-br-xl hover:bg-gray-800 transition ease-in-out"
                              onClick={() => (window.location.href = p.ghLink)}
                            >
                              <i className="devicon-github-plain pe-2"></i>
                              Source code
                            </button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div>
                            <button
                              className="bg-black text-white w-[100%] p-3 text-sm rounded-br-xl rounded-bl-xl hover:bg-gray-800 transition ease-in-out"
                              onClick={() => (window.location.href = p.ghLink)}
                            >
                              <i className="devicon-github-plain pe-2"></i>
                              Source code
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollContainer>
        <div className="text-center text-sm md:text-base lg:text-base italic">
          <h1>
            Other unlisted ones include{" "}
            <i
              className="underline cursor-pointer"
              onClick={() =>
                (window.location.href = "https://github.com/weareblahs/mccs")
              }
            >
              My Computer Cannot Sleep! (Node.js)
            </i>{" "}
            and{" "}
            <i
              className="underline cursor-pointer"
              onClick={() =>
                (window.location.href =
                  "https://github.com/weareblahs/scripts4fun")
              }
            >
              a collection of websites and useful stuff that I made (sometimes
              for fun, sometimes actually useful)
            </i>
            . See&nbsp;
            <i
              className="underline cursor-pointer"
              onClick={() =>
                (window.location.href = "https://github.com/weareblahs/")
              }
            >
              my GitHub account
            </i>
            &nbsp;for other stuff that I made.
          </h1>
        </div>
      </div>
    </>
  );
};
