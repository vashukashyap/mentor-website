import Tags from "../tags/Tags";

const Suggestion = ({ tags }) => {
  return (
    <>
      <div className="w-[80%] mx-auto">
        <div className=" text-gray-700">Suggestions:</div>
        <section className="flex flex-row justify-between items-center">
          <div className="my-2">
            {tags.map((tag, index) => {
              return <Tags key={index} text={tag} />;
            })}
          </div>
          <button
            type="button"
            className="self-start mt-2 px-10 py-[2px] text-lg h-fit font-medium text-center text-white bg-[#189EFF] rounded-xl focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Proceed
          </button>
        </section>
      </div>
    </>
  );
};

export default Suggestion;
