import Tags from "../tags/Tags";
import { useState } from "react";

const SearchMentor = ({ title, searchDescription }) => {
  const [searchActive, setSearchActive] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);



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
        <div className="flex flex-row w-full border-b-2 border-gray-400
                      text-gray-600">
          {
            selectedTags.map((tag,index) => {
              return(
                <Tags text={tag} key={index} selected/>
              )
            })
          }
          
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
            className="pt-2
                      text-gray-600 placeholder-gray-400
                      outline-none w-[100%]"
          />
          {searchActive && (
            <button
              type="button"
              className="px-10 py-[2px] mb-2 w-fit self-end text-lg h-fit font-medium text-center text-white bg-[#189EFF] rounded-xl focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Search
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchMentor;
