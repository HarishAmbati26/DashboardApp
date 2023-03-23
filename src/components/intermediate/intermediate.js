import { useEffect, useState } from 'react';
import { getAllQuestions } from '../../service/questionBank';
import './intermediate.css';

function Intermediate() {

    const [intermediateData, setIntermediateData] = useState([{
        "id": 1,
        "Question": "What is a react?",
        "Answer": "React is a JavaScript library which used to build web applications"
    }])

    useEffect(() => {
        getAllQuestions().then(res => {
            setIntermediateData(res.data);
        });
    }, []);

    return (
        <div className='Intermediate-main'>
            <h2>Welcome to Intermediate Level Questions</h2>
            <div className='Beginner-content'>
                {
                    intermediateData.map((ques, i) => {
                        const key = "Question-" + i + 1;
                        return (
                            <div key={key}>
                                <h3>Question {i + 1} : {ques.Question}</h3>
                                <p>Answer : {ques.Answer}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Intermediate;