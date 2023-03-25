import { useEffect, useState } from 'react';
import { getAllQuestionsByLevel } from '../../service/questionBank';
import './beginner.css';

function Beginner() {

    const [beginnerData, setBeginnerData] = useState([{
        "id": 1,
        "Question": "What is a react?",
        "Answer": "React is a JavaScript library which used to build web applications"
    }])

    useEffect(() => {
        getAllQuestionsByLevel('Beginner').then(res => {
            setBeginnerData(res.data);
        });
    }, []);

    return (
        <div className='Beginner-main'>
            <h2>Welcome to Beginner Level Questions</h2>
            <div className='Beginner-content'>
                {
                    beginnerData?.map((ques, i) => {
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
    );
}

export default Beginner;