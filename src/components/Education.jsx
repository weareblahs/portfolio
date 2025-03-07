import education from "../data/home/education.json";

export const Education = () => {
  const current = education.filter((e) => e.type == "current");
  const former = education.filter((e) => e.type == "former");
  const comment = education.filter((e) => e.type == "comment")[0]["comment"];
  return (
    <>
      <h1 className="text-3xl font-bold mb-3 lg:text-6xl">Education</h1>
      <div className="text-center block lg:grid lg:grid-cols-2 lg:text-start">
        <div className="lg:ms-auto lg:me-6">
          <p className="text-xl">Current</p>
          <div>
            {current.map((e) => {
              return (
                <div>
                  <h1 className="text-6xl font-bold">{e.name}</h1>
                  <h1 className="text-2xl">
                    {e.period}
                    <br />
                    {e.course}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
        <div className="lg:me-6">
          <p className="text-xl mt-4 lg:mt-0">Former</p>
          <div className="block">
            {former.map((e) => {
              return (
                <div>
                  <h1 className="text-4xl font-bold">{e.name}</h1>
                  <h1 className="text-2xl">{e.period}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-center text-sm md:text-xl lg:text-2xl italic pt-4">
        {comment}
      </div>
    </>
  );
};
