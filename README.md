You must install npm to build and run this project.  Go to https://docs.npmjs.com/downloading-and-installing-node-js-and-npm for installation instructions.

## Setting up the Backend

This application relies on a simple Node.js backend with a single API endpoint to communicate with OpenAI.  

Navigate to the "api" directory via the command line or Powershell, and run command 'npm install cors dotenv express openai' to install the required packages.

You must have an API key for OpenAI as an environment variable in your system. Create an environment variable called "OPENAI_API_KEY" and set it to your API key you got from
OpenAI.  To obtain your API key and find setup instructions for your environment variables, go to https://platform.openai.com/docs/quickstart.  If the backend does not detect your environment variable the first time you run it, you may need to restart your computer.  If you already have an OPENAI_API_KEY set up as an environment variable, you can skip this step.

## Setting up the Frontend

In the root directory, run 'npm install axios' to install the axios package used to communicate with the API.
In the root directory, run 'npm i @chakra-ui/react @emotion/react' to install the Chakra UI library (used for some UI components).
For more detailed installation instructions for Chakra UI, see https://chakra-ui.com/docs/get-started/installation


## Running the Project

From the API directory, run the command 'npm start' to start the API server.  
From the root directory, run the command 'npm run dev' to start the project.  
By default, the server will run on port 5000 and the project will run on port 5173.  Navigate to http://localhost:5173 to use the application.
You MUST run both the client and server simultaneously to communicate with ChatGPT.