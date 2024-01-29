import EditableInfo from "../editableInfo/EditableInfo";

const Profile = ({image, name, subtitle, bio, company, lookingFor, link}) => {
  return (
    <>
    <img src="./leftarrowbackground.png" className="absolute -z-40 w-full"/>
    <div className="flex flex-row gap-2 items-center font-normal w-[80%] mx-auto mt-4">
      <span className="font-bold">{'<'}</span>
      Back
    </div>
    <div className="flex flex-col gap-2 py-4 w-[80%] items-center mx-auto my-8">
    <EditableInfo
        type='imageBox'
        image={image}
      />
    <EditableInfo
        heading={name}
        text={subtitle}
    />
     <div className="flex flex-col w-[80%] gap-2 border border-gray-300 p-4 rounded-xl">
      <EditableInfo
        type='headingBox'
        heading="Bio"
        text={bio}
      />
      <EditableInfo
      type='headingBox'
      heading='Company'
      text={company}
      />
      <EditableInfo
      type='headingBox'
      heading="What are you looking for?"
      text={lookingFor}
      />
      
      </div>
      <div className="self-start w-[80%] mx-auto px-4 mt-2">
      <EditableInfo
      type='linkbox'
      heading='LinkedIn'
      icon='ant-design:linkedin-filled'
      text={link}
      />   
      </div>
      </div>
    </>
  );
};

export default Profile;
