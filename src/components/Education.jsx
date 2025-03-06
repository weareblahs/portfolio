export const Education = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-3 lg:text-6xl">Education</h1>
      <div className="text-center block lg:grid lg:grid-cols-2 lg:text-start">
        <div className="lg:ms-auto lg:me-6">
          <p className="text-xl">Current</p>
          <h1 className="text-6xl font-bold">Forward College</h1>
          <h1 className="text-2xl">
            March 2024 - February 2026
            <br />
            NitroDegree in Applied Software Engineering
          </h1>
        </div>
        <div className="lg:me-6">
          <p className="text-xl mt-4 lg:mt-0">Former</p>
          <div className="block">
            <div>
              <h1 className="text-4xl font-bold">
                Jit Sin Independent High School
              </h1>
              <h1 className="text-2xl">January 2018 - December 2023</h1>
            </div>
            <div>
              <h1 className="text-4xl font-bold">SJK (C) Peng Bin</h1>
              <h1 className="text-2xl">January 2012 - December 2017</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        Once again, as per "that tradition", kindergarten not included in this
        part. The thing is that it's confusing - i went to 2 kindergartens that
        time.
      </div>
    </>
  );
};
