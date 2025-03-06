import ScrollContainer from "react-indiana-drag-scroll";
import skills from "/src/skills.json";
export const Skills = () => {
  const skillsList = skills.filter((p) => p.type != "template");
  console.log(skillsList);
  return (
    <>
      <h1 className="text-3xl font-bold mb-3 lg:text-6xl">Skills</h1>{" "}
      <ScrollContainer className="flex grid-cols-1 lg:grid-cols-4 md:grid-cols-2 overflow-x-auto">
        {skillsList.map((p) => {
          return (
            <div className="w-[800px] me-4 mt-2 mb-2">
              <div
                className="bg-black dark:bg-white h-full p-4 rounded-xl text-white dark:text-black "
                style={{ width: "100%" }}
              >
                <h1 className="text-8xl">
                  <i
                    class={`devicon-${p.icon}-plain devicon-${p.icon}-original`}
                  ></i>
                </h1>
                <div className="mt-2 mb-2">
                  <h1 className="text-4xl">{p.name}</h1>
                  <p className="text-xl w-[12em]">{p.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </ScrollContainer>
    </>
  );
};
