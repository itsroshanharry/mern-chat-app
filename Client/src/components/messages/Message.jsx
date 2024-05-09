
const Message = () => {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
            <img src="https://th.bing.com/th?id=OIP.audMX4ZGbvT2_GJTx2c4GgHaHw&w=244&h=255&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />

            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>Hi! What is Up?</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-white">12:30</div>
    </div>
  )
}

export default Message