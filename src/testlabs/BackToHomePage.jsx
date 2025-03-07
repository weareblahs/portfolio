export const BackToHomePage = () => {
  return (
    <div className="sticky text-center md:text-end lg:text-end mb-8 me-8 top-[100vh] ms-auto">
      <button
        className="text-2xl text-white underline cursor-pointer"
        onClick={() => (window.location.href = "/")}
      >
        Back to home page
      </button>
    </div>
  );
};
