import { Icon } from "@iconify/react";
import { useState } from "react";

const EditableInfo = ({type,heading, text, icon, image}) => {

    const [enableEdit, setEnableEdit] = useState(true);
    const [boxText, setBoxTxt] = useState(text);
    
    const handleEdit = () => {
        setEnableEdit(!enableEdit)
    }

    const handleChange = (e) => {
        setBoxTxt(e.target.value);
    }


    if (type==='headingBox'){
    return(
        <>
        <div className="flex flex-row gap-2 items-center">
        <h1 className="text-[#189EFF] font-semibold">
            {heading}
        </h1>
        <Icon onClick={handleEdit} icon="tabler:edit" className="text-md cursor-pointer" />
        </div>
        <textarea disabled={enableEdit} onChange={handleChange} value={boxText} className={!enableEdit?"font-semibold resize-none w-full size-20 border border-gray-400 rounded-md p-2":"font-semibold resize-none w-full size-20"}/>
        </>
    )}
    else if(type=='linkbox'){
        return(
            <>
            <div className="flex flex-row gap-2 items-center">
            <Icon  icon={icon} className="text-md text-[#189EFF]" />
            <h1 className="text-[#189EFF]">{heading}</h1>
            <Icon onClick={handleEdit} icon="tabler:edit" className="text-md cursor-pointer" />
            </div>
            {!enableEdit?<textarea onChange={handleChange} value={boxText} className="font-semibold resize-none w-full size-10 border border-gray-400 rounded-md p-1"/>
        :
            <a href={boxText} target="_blank" className="underline">{boxText}</a>
        }
            </>
        )
    }
    else if(type=='imageBox'){
        return(
            <div className="flex flex-col w-fit items-center gap-2">
                <img src={image} className="w-18 h-18"/>
                <button
                    className="text-sm border border-gray-700 rounded-xl flex flex-row items-center gap-2 px-4 py-[1px]"
                >
                    Edit Image
                    <Icon icon="tabler:camera" className="text-lg cursor-pointer" />
                </button>
            </div>
        )
    }
    else{
        return(
            <>
        <div className="flex flex-row gap-2 items-center justify-center">
        <h1 className="text-[#189EFF] font-semibold text-2xl">
            {heading}
        </h1>
        </div>
        <div className="flex felx-row items-center justify-center gap-4 font-semibold w-[40%] h-fit">
        <textarea disabled={enableEdit} onChange={handleChange} value={boxText} className={!enableEdit?"resize-none w-[100%] size-20 text-center border border-gray-500 rounded-xl p-2":"resize-none w-[100%] size-20 text-center"}/>
        <Icon onClick={handleEdit} icon="tabler:edit" className="text-lg cursor-pointer" />
        </div>
        </>
        );
    }
}

export default EditableInfo;