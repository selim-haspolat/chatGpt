import React, { useState } from "react";

const Vacation = ({
  openai,
  loading,
  setLoading,
  setAllQuestionsAndAnswers,
  allQuestionsAndAnswers,
  setShowVacation,
}) => {
  const [vacationInputs, setVacationInputs] = useState({});

  const askQuestion = async ({ place, type, min, max , day}) => {
    setLoading(true);
    setShowVacation(false);
    try {
      const { data } = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `I want to go ${place} , i am looking for${type} , for ${day} days , min budget ${min}$, max budget ${max}$ can you give me some vacation places an some details`,
          },
        ],
        max_tokens: 500,
      });
      console.log(data.choices[0].message.content);
      setAllQuestionsAndAnswers([
        ...allQuestionsAndAnswers,
        // { q: msg, a: false },
        { a: data.choices[0].message.content, q: false },
      ]);
    } catch (error) {
      console.log(error.message);
      setAllQuestionsAndAnswers([
        ...allQuestionsAndAnswers,
        // { q: msg, a: false },
        { a: error.message, q: false },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    askQuestion(vacationInputs);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-indigo-400 h-[90vh] flex flex-col gap-3 justify-center items-center container rounded-lg text-white"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="place">Place</label>
        <input
          onChange={(event) =>
            setVacationInputs({ ...vacationInputs, place: event.target.value })
          }
          className="px-2 py-1 rounded-sm w-72 md:w-96 outline-none text-black"
          type="text"
          id="place"
          placeholder="Istanbul , Paris . . ."
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="type">Type</label>
        <input
          onChange={(event) =>
            setVacationInputs({ ...vacationInputs, type: event.target.value })
          }
          className="px-2 py-1 rounded-sm w-72 md:w-96 outline-none text-black"
          type="text"
          id="type"
          required
          placeholder="Loking for . . ."
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="days">Day</label>
        <input
          onChange={(event) =>
            setVacationInputs({ ...vacationInputs, day: event.target.value })
          }
          className="px-2 py-1 rounded-sm w-72 md:w-96 outline-none text-black"
          type="days"
          id="type"
          required
          placeholder="How many days"
        />
      </div>
      <div className="flex flex-col gap-1 w-72 md:w-96">
        <label htmlFor="budget">Budget ( $ )</label>
        <div className="flex gap-2">
          <input
            onChange={(event) =>
              setVacationInputs({
                ...vacationInputs,
                min: event.target.value,
              })
            }
            className="px-2 py-1 rounded-sm w-1/2 outline-none text-black"
            type="number"
            min="0"
            id="budget"
            placeholder="Min"
            required
          />
          <input
            onChange={(event) =>
              setVacationInputs({
                ...vacationInputs,
                max: event.target.value,
              })
            }
            className="px-2 py-1 rounded-sm w-1/2 outline-none text-black"
            type="number"
            min={0}
            id="budget"
            required
            placeholder="Max"
          />
        </div>
      </div>
      <button
        type="submit"
        className="flex items-center gap-2 px-2 py-1 outline outline-1 mt-5 outline-white rounded-sm hover:text-indigo-600 hover:bg-white stroke-white hover:stroke-indigo-600 transition-colors"
      >
        Search
        <svg
          className="w-6"
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
            <g id="Interface / Search_Magnifying_Glass">
              <path
                id="Vector"
                d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </g>
        </svg>
      </button>
    </form>
  );
};

export default Vacation;
