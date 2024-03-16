import React, { useEffect } from "react";
import QuestionItem from "./QuestionItem";



function QuestionList({ questions, setQuestions }) {

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((r) => r.json())
    .then((data) => setQuestions(data))
  }, []);

  function deleteQuestion(q) {
    const updatedQuestions = questions.filter((question) => question.id !== q.id);
    setQuestions(updatedQuestions);
  };

  function changeAnswer(q) {
    const updatedQuestions = questions.map((question) => {
      if (q.id === question.id) {
        return q;
      } else {
        return question;
      }
    });
    setQuestions(updatedQuestions);
  };

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => (
        <QuestionItem 
        key={question.id} 
        question={question} 
        onDelete={deleteQuestion}
        onAnswerChange={changeAnswer}
        />
      ))}
      </ul>
    </section>
  );
}

export default QuestionList;