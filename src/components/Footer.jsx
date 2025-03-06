export const Footer = () => {
  let currentDate = new Date();
  return (
    <>
      <div className="mt-2 mb-2 text-center">
        &copy; {currentDate.getFullYear()}. All rights reserved. For project /
        repository license, please check LICENSE file in every project (hint:
        most of them are under MIT License).
        <br />
        Icons from{" "}
        <a href="https://fontawesome.com/" className="underline">
          Font Awesome
        </a>{" "}
        and{" "}
        <a href="https://devicon.dev/" className="underline">
          Devicon
        </a>
        . Made with{" "}
        <a href="https://tailwindcss.com/" className="underline">
          Tailwind CSS
        </a>
        . Site hosted on{" "}
        <a href="https://vercel.com/" className="underline">
          Vercel
        </a>
        . Registered on{" "}
        <a href="https://porkbun.com/" className="underline">
          Porkbun
        </a>
        . <br />
        Note: "ntyx" = "not Tan Yu Xuan".&nbsp;
        <a
          href="https://weareblahs.github.io/portfolio/original/"
          className="underline"
        >
          Old version
        </a>
      </div>
    </>
  );
};
