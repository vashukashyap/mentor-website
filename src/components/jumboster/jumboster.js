const Jumboster = ({ image, personName }) => {
  return (
    <>
      <div
        className="h-[200px] w-full flex items-center flex-row  justify-around gap-5 bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="flex flex-col gap-3 conatiner">
          <div className="text-3xl  tracking-wider font-bold capitalize">
            Welcome to your Dashboard, {personName}!
          </div>
          <div className="text-center text-sm sm:text-xl tracking-widest font-normal">
            Complete your profile to get full access to Expertize features.
          </div>
        </div>
        <button
          type="button"
          className="flex items-center justify-center mt-6 py-1 px-5 me-2 mb-2 text-lg font-normal font-medium text-[#189EFF] focus:outline-none bg-white rounded-xl border-[1px] border-[#189EFF] focus:z-10 focus:ring-4 focus:ring-gray-200"
        >
          View my profile
        </button>
      </div>
    </>
  );
};

export default Jumboster;
