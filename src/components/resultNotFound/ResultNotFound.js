import { useState } from "react";
import RequestExpertDialogbox from "../requestExpertDialogbox/RequestExpertDialogbox";
import Tags from "../tags/Tags";

const ResultNotFound = ({ tags }) => {
  const [showModal, setShowModal] = useState(false);


  const handleOnClick = () => setShowModal(false)


  return (
    <>
      <div className="w-[80%] mx-auto my-4">
        <div className=" text-gray-700 font-bold">0 Expert found:</div>
        <div className="flex flex-col justify-center items-center my-10">
          <h1 className="text-2xl">Provide more context on the advice that you are looking for:</h1>
          <a onClick={() => {setShowModal(true)}} className="text-[#189EFF] border border-[#189EFF] cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-md text-md px-2 py-1 text-center mt-4">
            Request an expert <span className="font-normal">{">"}</span>
          </a>
        </div>
        <section className="flex flex-col justify-center items-center">
          <h3 className="text-xs text-gray-500">Suggested tags</h3>
          <div className="my-2 flex flex-row flex-wrap items-center justify-center">
            {tags.map((tag, index) => {
              return <Tags key={index} text={tag} />;
            })}
          </div>
        </section>
        <RequestExpertDialogbox visible={showModal} onClose={handleOnClick}/>
      </div>
    </>
  );
};

export default ResultNotFound;
