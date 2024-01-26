import { Icon } from "@iconify/react";

const Tags = ({ text, selected }) => {
  return (
    <>
      {
        selected?
        <button
        type="button"
        className="text-[#189EFF] flex flex-row items-center justify-center gap-2 border border-[#189EFF] focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-md px-2 py-1 text-center me-2 mb-2"
      >
        {text}
        <Icon icon="maki:cross" className="text-sm" />
        </button>
      :
      
        <button
        type="button"
        className="text-gray-900 border border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-xl text-md px-2 py-1 text-center me-2 mb-2"
      >
        {text}
      </button>
      
      }
    </>
  );
};

export default Tags;
