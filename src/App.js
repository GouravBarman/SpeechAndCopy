import React from 'react';
import "./App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import {useState} from "react";


const App = () => {

    const [current, updated] = useState();
    const [isCopied, setCopied] = useClipboard(current, {successDuration:1000 });

    const strtlisten = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    return (
        <>
            <div className="container">
                <h2> <u> 😄 Speech to Text Converter 😄</u></h2>
                <br/>
                <p> converts speech from the microphone to text </p>

                <div className="main-content" onClick={() =>  updated(transcript)}>
                    {transcript}
                </div>

                <div className="btn-style">

                    <button onClick={setCopied}>
                        {isCopied ? 'Copied! 😄' : 'Copy to clipboard'}
                    </button>
                    <button onClick={strtlisten}>Start Listening 🟢</button>
                    <button onClick={SpeechRecognition.stopListening}>Stop Listening 🔴</button>

                </div>

            </div>

        </>
    );
};

export default App;