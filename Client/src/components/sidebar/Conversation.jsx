
const Conversation = () => {
  return (
    <>
        <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
        <div className="w-12 rounded-full ">
            <img alt='Tailwind CSS chat bubble component' src="https://th.bing.com/th?id=OIP.audMX4ZGbvT2_GJTx2c4GgHaHw&w=244&h=255&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
        </div>
        </div> 
        <div className="flex flex-col flex-1 ">
        <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200 ">John Doe</p>
            <span className="text-xl">😎</span>
        </div>
        </div>
        </div>
        <div className="divider my-0 py-0 h-1"/>
    </>
    
  )
}

export default Conversation