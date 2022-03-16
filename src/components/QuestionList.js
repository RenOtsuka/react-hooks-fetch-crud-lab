import React, {useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questionList, setQuestionList, handleDeleteItem}) {

  useEffect( () => {
    fetch(`http://localhost:4000/questions`)
    .then(r => r.json())
    .then(data => setQuestionList(data));
  }, []);

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionList.map(item => (
            <QuestionItem 
            key={item.id} 
            question={item}
            handleDeleteItem={handleDeleteItem}
            />
          )
        )}
      </ul>
    </section>
  );
}

export default QuestionList;
