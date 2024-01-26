import { Icon } from "@iconify/react";

const PersonCard = ({ img, join, payment, approved, rejected }) => {
  return (
    <>
      <div className="flex flex-row gap-6 border borrder-[#eoe2e3] p-4 justify-between items-start rounded-md">
        <div className="flex gap-4">
          <img src={img} className="" />
          <div className="flex flex-col justify-start items-start">
            <h1 className="font-extrabold text-xl text-[#189EFF]">
              RaynCarruthers
            </h1>
            <h3 className="font-bold">
              eLearing, eCommerce | Founder @ Conversion Media
            </h3>
            <a className="align-end text-sm text-[#189EFF] mt-4">
              {"View Profile >"}
            </a>
          </div>
        </div>
        <div className="mx-6 flex flex-col gap-2 items-end max-w-80">
          <h1 className="text-sm font-normal self-end flex flex-row items-center gap-2">
            <Icon icon="uil:calender" className="text-xl" />
            Monday,15 Aug 2023
          </h1>
          <h2 className="text-sm font-normal self-end flex flex-row items-center gap-2">
            <Icon icon="ph:clock" className="text-xl" />
            12 pm - 1 pm (I.S.T)
          </h2>

          {join && (
            <a className="text-white bg-gradient-to-r to-[#11D910] via-[#0AB509] from-[#028B01] cursor-pointer focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-xl text-sm px-10 py-2 mt-4 text-center">
              Join Session
            </a>
          )}
          {payment && (
            <>
              <a
                className="text-[#189EFF] border border-[#189EFF] cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-xl text-md px-2 py-1 text-center mt-4"
              >
                Proceed to payment <span className="font-normal">{">"}</span>
              </a>
              <div className="text-[#f89402] flex flex-row items-center gap-2">
                <div className="w-4 h-4 bg-[#f89402] rounded-full"></div>
                Pay in Next 24 hrs for confirmation
              </div>
            </>
          )}
          {approved && (
            <div className="text-[#f89402] flex flex-row items-center gap-2">
              <div className="w-4 h-4 bg-[#f89402] rounded-full"></div>
              Expert approval pending
            </div>
          )}
          {rejected && (
            <>
              <div className="text-[#E32F2b] flex flex-row items-center gap-2">
                <div className="w-4 h-4 bg-[#E32f2b] rounded-full"></div>
                Request denined
              </div>
              <div className="flex flex-row items-center gap-2 text-end me-2">
                Lorem Ipsum daskdh sjkahd kajshd askjds daskjdh ajdh asdhkajsdh
                sdhsakd.
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PersonCard;
