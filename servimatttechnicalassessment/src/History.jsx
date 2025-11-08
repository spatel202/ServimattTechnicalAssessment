import { forwardRef, useImperativeHandle } from 'react';
import { useState } from 'react'
import './History.css'

const History = forwardRef((props, ref) => {
    const [history, setHistory] = useState([]);
    const [count, setCount] = useState(0);
    useImperativeHandle(ref, () => ({
        AddItem(prompt, response) {
            setHistory([...history, { key: count, prompt: prompt, response: response }]);
            setCount(count + 1);
        }
    }));
    function clearHistory() {
        setHistory([]);
    }
    if (history.length > 0) {
        return (
            <>
                <button className="clear-button" onClick={clearHistory}>Clear Chat History</button>
                <section>
                    <div>

                        {history.map(hist => (
                            <div key={hist.key}>
                                <div className="response"><p>{hist.response}</p></div><br></br><div className="prompt"><p>{hist.prompt}</p></div><br></br>
                            </div>
                        ))}
                    </div>
                </section>
            </>
        )
    }

});

export default History