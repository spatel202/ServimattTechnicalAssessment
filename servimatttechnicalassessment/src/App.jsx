
import './App.css'
import Prompt from './Prompt.jsx'
import PromptErrorBoundary from './PromptErrorBoundary'
import { Provider } from "./components/ui/provider"

function App() {

    return (
        <>
            <h1>Servimatt Technical Assessment: Simon Patel</h1>
            <br></br>
            <h2>Type anything and press "Submit" to talk to ChatGPT</h2>
            <PromptErrorBoundary>
                <Provider>
                    <Prompt></Prompt>
                </Provider>
            </PromptErrorBoundary>
        </>
    )

}

export default App
