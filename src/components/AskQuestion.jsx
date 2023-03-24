import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const AskQuestion = ({
  allQuestionsAndAnswers,
  setAllQuestionsAndAnswers,
  setLoading,
  loading,
}) => {
  const [questionInput, setQuestionInput] = useState("");

  const openai = new OpenAIApi(
    new Configuration({
      apiKey: process.env.REACT_APP_API_KEY,
    })
  );

  const askQuestion = async (msg) => {
    setAllQuestionsAndAnswers([
      ...allQuestionsAndAnswers,
      { q: msg, a: false },
    ]);
    setLoading(true);
    try {
      const { data } = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: msg }],
      });
      setAllQuestionsAndAnswers([
        ...allQuestionsAndAnswers,
        { q: msg, a: false },
        { a: data.choices[0].message.content, q: false },
      ]);
    } catch (error) {
      console.log(error.message);
      setAllQuestionsAndAnswers([
        ...allQuestionsAndAnswers,
        { q: msg, a: false },
        { a: error.message, q: false },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleAskQuestion = (e) => {
    e.preventDefault();
    askQuestion(questionInput);
    setQuestionInput("");
  };

  return (
    <form
      onSubmit={handleAskQuestion}
      className="bg-white w-[95%] rounded-xl mx-auto mt-auto m-2 flex items-center gap-2 pr-2 relative"
    >
      <input
        value={questionInput}
        onChange={(e) => setQuestionInput(e.target.value)}
        className={`rounded-xl bg-white outline-none p-2 md:p-3 pr-0 w-full ${
          loading && "cursor-not-allowed"
        }`}
        disabled={loading}
        required
      />
      <button
        type="submit"
        className={`${loading && "cursor-not-allowed"}`}
        disabled={loading}
      >
        <svg
          className="w-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M20 4L3 11L10 14L13 21L20 4Z"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      </button>
      {loading && (
        <div role="status" className="absolute left-[50%] translate-x-[-50%]">
          <svg
            aria-hidden="true"
            className="inline w-7 h-7 mr-2 text-white animate-spin fill-gray-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </form>
  );
};

export default AskQuestion;
