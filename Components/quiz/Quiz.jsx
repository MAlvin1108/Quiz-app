import React, { useRef, useState, useEffect } from 'react';
import './Quiz.css';
import { data } from '../../assets/data';

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);
  let [timeLeft, setTimeLeft] = useState(30);
  const timeLimit = 30;

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore(prev => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const next = () => {
    if (lock === true) {
      if (index === data.length - 1) {
        setResult(true);
        return;
      }
      setIndex(prevIndex => {
        const newIndex = prevIndex + 1;
        setQuestion(data[newIndex]);
        setLock(false);
        setTimeLeft(timeLimit); // Reset timer untuk pertanyaan berikutnya
        option_array.forEach(option => {
          if (option.current) {
            option.current.classList.remove("wrong");
            option.current.classList.remove("correct");
          }
        });
        return newIndex;
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
    setTimeLeft(timeLimit); // Reset timer saat reset kuis
    option_array.forEach(option => {
      if (option.current) {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
      }
    });
  };

  useEffect(() => {
    if (result) return; // Tidak menjalankan timer jika kuis selesai

    if (timeLeft === 0) {
      // Jika waktu habis, lanjut ke pertanyaan berikutnya
      next();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    // Bersihkan interval saat komponen unmount atau saat timer berubah
    return () => clearInterval(timer);
  }, [timeLeft, result]);

  return (
    <div className='container'>
      <h1>Quiz-App</h1>
      <hr />
      {!result ? (
        <div>
          <h2>{index + 1}. {question.question}</h2>
          <div className={`timer ${timeLeft <= 10 ? 'low-time' : ''}`}>
          Waktu Tersisa: {timeLeft} detik
        </div>
          <ul>
            <li ref={Option1} onClick={(e) => { checkAns(e, 1) }}>{question.option1}</li>
            <li ref={Option2} onClick={(e) => { checkAns(e, 2) }}>{question.option2}</li>
            <li ref={Option3} onClick={(e) => { checkAns(e, 3) }}>{question.option3}</li>
            <li ref={Option4} onClick={(e) => { checkAns(e, 4) }}>{question.option4}</li>
          </ul>
          <button onClick={next} disabled={!lock}>Next</button>
          <div className="index">{index + 1} of {data.length} question</div>
        </div>
      ) : (
        <>
          <h2>Your Score {score} out of {data.length}</h2>
          <button onClick={reset}>Reset</button>
        </>
      )}
    </div>
  );
};

export default Quiz;
