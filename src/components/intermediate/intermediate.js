import './intermediate.css';

function Intermediate() {

    const data = [{
        "id": 1,
        "Question": "What is a react?",
        "Answer": "React is a JavaScript library which used to build web applications"
    }, {
        "id": 2,
        "Question": "What is a react?",
        "Answer": "React is a JavaScript library which used to build web applications"
    }];

    return (
        <div className='Intermediate-main'>
            <h2>Welcome to Intermediate Level Questions</h2>
            <div className='Beginner-content'>
                {
                    data.map((ques, i) => {
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