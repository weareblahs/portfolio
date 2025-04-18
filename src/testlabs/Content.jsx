export const Content = ({ content }) => {
  return (
    <div className="ml-8 mr-8">
      <h1 className="text-white">
        Public Test Labs™ found {content.length} item
        {content.length > 1 ? "s" : null} for public testing purposes:
      </h1>
      {content.map((c) => {
        return (
          <button
            className="text-white font-bold underline"
            onClick={() => (window.location.href = c.url)}
          >
            {c.name}
            <br />
          </button>
        );
      })}
    </div>
  );
};
