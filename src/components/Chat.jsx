import React, { useState } from "react";
import AskQuestion from "./AskQuestion";
import UserBubble from "./ChatBubble";

const Chat = () => {
  const [allQuestionsAndAnswers, setAllQuestionsAndAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex flex-col gap-5 container mx-5 rounded-lg bg-indigo-400 h-[90vh] overflow-auto pt-10">
      <div className="flex flex-col grow justify-end gap-2">
        {allQuestionsAndAnswers.map((v, i) => (
          <UserBubble key={i} Ai={v.a} msg={v.q || v.a} />
        ))}
      </div>
      {allQuestionsAndAnswers.length === 0 && (
        <div className="absolute top-[40%] left-[50%] translate-x-[-50%]">
          <h1 className="text-white font-bold text-7xl ">ChatGPT</h1>
        </div>
      )}

      <AskQuestion
        setAllQuestionsAndAnswers={setAllQuestionsAndAnswers}
        allQuestionsAndAnswers={allQuestionsAndAnswers}
        setLoading={setLoading}
        loading={loading}
      />
    </div>
  );
};

export default Chat;
