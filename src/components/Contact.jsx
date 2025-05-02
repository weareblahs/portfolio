import contact from "../data/home/contact.json";

export const Contact = () => {
  const contacts = contact.filter((c) => c.type != "template");
  return (
    <div className="block lg:flex">
      <h1 className="text-3xl font-bold mb-3 me-0 lg:me-5 lg:text-6xl">
        Contact Me
      </h1>
      <div className="grid grid-cols-4 lg:grid-cols-12 mt-auto mb-auto">
        {contacts.map((c) => {
          return (
            <div className="ms-2 me-2">
              <div className="w-[100%] text-white light:text-black p-4">
                <a className="text-center flex cursor-pointer" href={c.link}>
                  <i className={`${c.icon} text-4xl`}></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
