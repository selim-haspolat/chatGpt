import { useState } from "react";
import Chat from "../components/Chat";
import Vacation from "../components/Vacation";
import { Configuration, OpenAIApi } from "openai";
import useAuthHook from "../hooks/useAuthHook";

const Home = () => {
  const [showVacation, setShowVacation] = useState(true);
  const [allQuestionsAndAnswers, setAllQuestionsAndAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const {logOut} = useAuthHook()

  const openai = new OpenAIApi(
    new Configuration({
      apiKey: process.env.REACT_APP_API_KEY,
    })
  );

  return (
    <div className="bg-[#193718] min-h-screen flex flex-col items-center justify-center gap-3">
      {showVacation ? (
        <Vacation
          openai={openai}
          loading={loading}
          setLoading={setLoading}
          setAllQuestionsAndAnswers={setAllQuestionsAndAnswers}
          allQuestionsAndAnswers={allQuestionsAndAnswers}
          setShowVacation={setShowVacation}
        />
      ) : (
        <Chat
          loading={loading}
          setLoading={setLoading}
          setAllQuestionsAndAnswers={setAllQuestionsAndAnswers}
          allQuestionsAndAnswers={allQuestionsAndAnswers}
          openai={openai}
        />
      )}
      <button onClick={logOut} className="text-red-500 px-4 rounded-sm py-1 outline outline-1 outline-red-500 hover:outline-white hover:text-white transition-colors">
        Logout
      </button>
    </div>
  );
};

export default Home;
