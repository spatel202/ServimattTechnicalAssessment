import './Prompt.css'
import { useState } from 'react'
import { useRef } from 'react';
import axios from 'axios';
import History from "./History.jsx"

import { Textarea, Spinner } from "@chakra-ui/react"
import { Toaster, toaster } from "./components/ui/toaster"
function Prompt() {
    const histRef = useRef();
    const [value, setValue] = useState('');
    const [disableSubmit, setDisableSubmit] = useState(true);
    const [showSpinner, setShowSpinner] = useState(false);
    const handlePrompt = (e) => {
        setValue(e.target.value);
        setDisableSubmit(e.target.value == '');
    };
    async function handleSubmit(e) {
        e.preventDefault();
        setShowSpinner(true);
        setDisableSubmit(true);
        try {
            histRef.current.AddItem(value, '');
            await axios.post('http://localhost:5000/api/chat', { Input: value })
                .then(
                    res => {
                        if(res.data.message !== undefined && res.data.message.error !== undefined){
                            toaster.create({
                                description: res.data.message.error.message,
                                type: 'error',
                                duration: 5000
                            })
                        }
                        setShowSpinner(false);
                        histRef.current.AddItem('', res.data.output_text);
                    })
                .catch(err => {
                    toaster.create({
                        title: `A connection error has occurred`,
                        type: 'error',
                        duration: 5000
                    })
                    setShowSpinner(false);
                    setDisableSubmit(false);
                    setValue('');
                    console.error(err);
                });

        } catch (ex) {
            console.error(ex)
        } finally {
            setDisableSubmit(false);
            setValue('');
        }

    }
    if (showSpinner) {
        return (
            <div className="main-container">
                <Toaster></Toaster>
                <History ref={histRef}></History>
                <Spinner></Spinner>
            </div>
        );
    } else {
        return (
            <div className="main-container">
            <Toaster></Toaster>
                <History ref={histRef}></History>
                <div>
                    <form onSubmit={handleSubmit}>
                        <Textarea
                            placeholder="Enter your prompt..."
                            autoresize
                            value={value}
                            onChange={handlePrompt}
                        >
                        </Textarea>
                        <button className="submit-button" type="submit" disabled={disableSubmit}>Submit</button>
                    </form>
                    <br></br>
                </div>

            </div>
        );
    }
    
}

export default Prompt;