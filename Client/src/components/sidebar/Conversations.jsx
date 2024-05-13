import useGetConversations from "../../Hooks/useGetConversations.js"
import { getRandomEmoji } from "../../utils/emojis.js";
import Conversation from "./Conversation"

const Conversations = () => {
  const {loading, conversations} = useGetConversations();
  console.log("CONVERSATIONS:", conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto ">

      {conversations.map((conversation, idx)=> (
        <Conversation 
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length -1}
          />
          
      ))}
        
        {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  )
}

export default Conversations