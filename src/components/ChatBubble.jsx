import React from "react";

const ChatBubble = ({ Ai , msg}) => {
  return (
    <div className={`flex gap-2 items-center ${Ai || "flex-row-reverse"} mx-3`}>
      <img
        className="w-10 h-10 md:w-14 md:h-14 rounded-full"
        src={
          Ai
            ? "https://static.vecteezy.com/system/resources/previews/018/764/128/original/chatgpt-logo-open-ai-icon-with-chatbot-artificial-intelligence-openai-chatbot-icon-chatgpt-openai-icon-artificial-intelligence-smart-ai-virtual-smart-assistant-bot-free-vector.jpg"
            : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
        }
        alt="user"
      />
      <div className="py-1 px-3 md:py-2 max-w-[75%] bg-white rounded-xl break-words text-black">{msg}</div>
    </div>
  );
};

export default ChatBubble;
