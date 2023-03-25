import { useEffect, useState } from 'react';
import { getAllQuestionsByLevel } from '../../service/questionBank';
import './advanced.css';

function Advanced() {

    const [advancedData, setAdvancedData] = useState([{
        "id": 1,
        "Question": "What is a react?",
        "Answer": "React is a JavaScript library which used to build web applications"
    }])

    useEffect(() => {
        getAllQuestionsByLevel('Advanced').then(res => {
            setAdvancedData(res.data);
        });
    }, []);

    return (
        <div className='Advanced-main'>
            <h2>Welcome to Advanced Level Questions</h2>
            <div className='Beginner-content'>
                {
                    advancedData.map((ques, i) => {
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

export default Advanced;