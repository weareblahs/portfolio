import "./style.css";

export const NoContent = () => {
  return (
    <div>
      <div
        className="hidden md:flex lg:flex"
        style={{
          width: "100vw",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="ball text-5xl">No content</div>
      </div>

      <div className="block md:hidden lg:hidden">
        <div className="text-white text-5xl ms-8 me-8 text-center font-bold">
          No content
        </div>
      </div>
    </div>
  );
};
