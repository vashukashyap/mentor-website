import Tags from "../tags/Tags";

const PersonFulInfoCard = ({ img, info, tags }) => {
  return (
    <>
      <div className="flex flex-row gap-6 border borrder-[#eoe2e3] p-4 justify-between items-start rounded-md">
        <div className="flex gap-4">
          <img src={img} className="self-start" />
          <div className="flex flex-col justify-start items-start">
            <h1 className="font-extrabold text-xl text-[#189EFF]">
              RaynCarruthers
            </h1>
            <h3 className="font-bold">
              eLearing, eCommerce | Founder @ Conversion Media
            </h3>
            <div className="text-gray-500 font-normal">{info}</div>
            <div className="my-2">
              {tags.map((tag, index) => {
                return <Tags key={index} text={tag} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonFulInfoCard;
