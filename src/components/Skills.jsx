import ScrollContainer from "react-indiana-drag-scroll";
import skills from "/src/data/home/skills.json";
export const Skills = () => {
  const skillsList = skills.filter((p) => p.type != "template");
  console.log(skillsList);
  return (
    <>
      <h1 className="text-3xl font-bold mb-3 lg:text-6xl">Skills</h1>{" "}
      <div className="grid grid-cols-8">
        {" "}
        {skillsList.map((p) => {
          return (
            <div className="w-[800px] me-4 mt-2 mb-2">
              <div
                className="h-full p-4 rounded-xl text-white dark:text-black "
                style={{ width: "100%" }}
              >
                <h1
                  className="text-8xl text-black dark:text-white"
                  popoverTarget="popover-default"
                >
                  <i
                    class={`devicon-${p.icon}-plain devicon-${p.icon}-original`}
                  ></i>
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
