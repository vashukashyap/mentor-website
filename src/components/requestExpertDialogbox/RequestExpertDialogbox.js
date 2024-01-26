import { Icon } from "@iconify/react";


const RequestExpertDialogbox = ({visible, onClose}) =>{

  const handleOnClose = (e) => {
    if(e.target.id === 'modalContainer')
    onClose();
  }

  if(!visible) return(null);

  return(
  <>
  <div 
  id="modalContainer"
  onClick={handleOnClose} className="fixed inset-0 backdrop-blur-[1px] bg-gray-500 bg-opacity-80 flex justify-center items-center">
    <form className="relative bg-white p-10 rounded-xl flex flex-col justify-around gap-4">
    
    <div className="flex flex-row justify-between mb-10">
    <h1 className="text-[#189EFF] font-bold text-lg">Request an expert</h1>
    <Icon onClick={onClose} icon="maki:cross" className="text-sm relative -top-2 -right-2" />
    </div>
    <div className="flex flex-col gap-6">
    <div>
      <label>
        What is your startup about?
      </label>
      <input type="text" name="startup" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg my-4 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
    </div>
    <div>
      <label>
        Can you provide more context on the problems you need advise on?
      </label>
      <input type="text" name="startup" className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg my-4 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
    </div>
    </div>
    <input
          type="button"
          className="self-end mt-2 px-10 py-2 text-md h-fit font-medium text-center text-white bg-[#189EFF] rounded-xl focus:ring-4 focus:outline-none focus:ring-blue-300"
          value='Submit'
        >
          
        </input>
        </form>
  </div>
</>

    );
}


export default RequestExpertDialogbox;

// 8213461247