const Requests = ({ image, requested, pending, approved }) => {
  return (
    <>
      <section className="w-[80%] mx-auto my-2 border border-gray-300 rounded-lg py-6 px-10 my-4">
        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-row items-center gap-2">
            <img src={image} className="w-12 h-12" />
            <h1 className="text-xl font-semibold text-[#189EFF]">
              Ryan Carruthers
            </h1>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            <h1 className="border border-[#189EFF] text-[#189EFF] text-sm px-6 rounded-xl self-end">
              30 min
            </h1>
            {pending && (
              <h1 className="flex flex-row items-center gap-2">
                <div className="w-4 h-4 bg-[#f89402] rounded-full"></div>Payment
                Pending
              </h1>
            )}
            {approved && (
              <h1 className="flex flex-row items-center gap-2">
                <div className="w-4 h-4 bg-[#22A121] rounded-full"></div>Payment
                Recieved
              </h1>
            )}

          </div>
        </div>
        <div>
          <h1 className="text-lg font-bold my-2 flex flex-row gap-6">
            <span>15th Feb 2024</span> <span>4:00pm - 4:30pm</span>
          </h1>
        </div>
        <div className="my-4">
          <h1 className="text-[#189EFF]">What is your startup about?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          </p>
        </div>
        <div className="mt-10">
          <h1 className="text-[#189EFF]">
            Can you provide more context on the problems you need advise on?
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          </p>
        </div>
        <div className="flex flex-row justify-end gap-6 items-center">
          {requested && (
            <>
              <button className="bg-[#189EFF] text-white px-10 py-[2px] rounded-2xl">
                Accept
              </button>
              <button className="border border-[#189EFF] py-[2px] rounded-2xl px-10 text-[#189EFF] text-md">
                Reject
              </button>
            </>
          )}
          {pending &&
          <button className="bg-gray-500 text-white px-10 py-[2px] rounded-2xl">
                Join Meeting
              </button>
            }
            {approved &&
          <button className="bg-[#189EFF] text-white px-10 py-[2px] rounded-2xl">
                Join Meeting
              </button>
            }
        </div>
      </section>
    </>
  );
};

export default Requests;
