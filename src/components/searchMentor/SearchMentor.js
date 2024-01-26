import { useState } from "react";

const SearchMentor = ({ title, searchDescription }) => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <>
      <div className="flex flex-col py-8 items-center w-[80%] mx-auto">
        <label
          htmlFor="name"
          className="inline-block text-left 
                                 font-bold self-start text-3xl my-4"
        >
          {title}
        </label>
        <div className="flex flex-col w-full">
          {searchActive && (
            <button
              type="button"
              className="px-10 py-[2px] w-fit self-end absolute text-lg h-fit font-medium text-center text-white bg-[#189EFF] rounded-xl focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Search
            </button>
          )}
          <input
            onFocus={() => {
              setSearchActive(true);
            }}
            onBlur={() => {
              setSearchActive(false);
            }}
            type="text"
            id="search"
            name="mentor"
            placeholder={searchDescription}
            className="flex pt-2 border-b-2 border-gray-400
                      text-gray-600 placeholder-gray-400
                      outline-none my-2"
          />
        </div>
      </div>
    </>
  );
};

export default SearchMentor;
