import data from './data';
import { useState } from 'react';
import { FaRegPlusSquare } from 'react-icons/fa';
const Accordion = () => {
  const [number, setNumber] = useState(0);
  return (
    <>
      {data.map(question => {
        return (
          <>
            <div className="individual-faq">
              <div className="question">
                {question.question}
                <div onClick={() => setNumber(question.id)}>{number === question.id ? '' : <FaRegPlusSquare className="icon" />}</div>
              </div>
              {number === question.id && <div className="answer">{question.answer}</div>}
            </div>
          </>
        );
      })}
    </>
  );
};

export default Accordion;
