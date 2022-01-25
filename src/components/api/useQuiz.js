import { useState, useEffect } from "react";
import axios from "axios";

const useQuiz = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const process = async () => {
    setIsLoading(true);

    const result = await getWithExpiry("questions");

    if (result == null) {
      let questions = [];

      axios
        .get(
          "https://my-json-server.typicode.com/DanielBarbakadze/Advanced-JS-and-React-Basics/db"
        )
        .then((response) => {
          response.data.questions.forEach((item, index) => {
            questions.push({
              type: item.type,
              question: item.question,
              answer: response.data.answers[index].answer,
            });
          });

          setWithExpiry("questions", questions).then(() => {
            setData(questions);
            setIsLoading(false);
          });
        });
    } else {
      setData(result);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    process();
  }, []);

  return { data: data, isLoading: isLoading };
};

const setWithExpiry = async (key, value) => {
  const setTime = new Date();

  const item = {
    value: value,
    expiry: setTime.getTime() + 600000,
  };

  localStorage.setItem(key, JSON.stringify(item));
};

const getWithExpiry = async (key) => {
  const fetchTime = new Date();
  const storageItem = localStorage.getItem(key);

  if (!storageItem) return null;

  const item = JSON.parse(storageItem);

  if (fetchTime.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  } else return item.value;
};

export default useQuiz;
