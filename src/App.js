import { useState } from "react";
import Chat from "./components/Chat";
import Vacation from "./components/Vacation";
import { Configuration, OpenAIApi } from "openai";

function App() {
  const [showVacation, setShowVacation] = useState(true);
  const [allQuestionsAndAnswers, setAllQuestionsAndAnswers] = useState([]);
  const [loading, setLoading] = useState(false);

  const openai = new OpenAIApi(
    new Configuration({
      apiKey: process.env.REACT_APP_API_KEY,
    })
  );

  return (
    <div className="bg-[#193718] min-h-screen flex items-center justify-center">
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
    </div>
  );
}

export default App;
