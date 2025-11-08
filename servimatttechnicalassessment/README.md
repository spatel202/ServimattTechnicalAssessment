You must install npm to build and run this project.  Go to https://docs.npmjs.com/downloading-and-installing-node-js-and-npm for installation instructions.

## Setting up the Backend

This application relies on a simple Node.js backend with a single API endpoint to communicate with OpenAI.  

Navigate to the "api" directory via the command line or Powershell, and run command 'npm install cors dotenv express openai' to install the required packages.

You must have an API key for OpenAI as an environment variable in your system. Create an environment variable called "OPENAI_API_KEY" and set it to your API key you got from
OpenAI.  To obtain your API key and find setup instructions for your environment variables, go to https://platform.openai.com/docs/quickstart.

## Setting up the Frontend

## Running the Project

From the API directory, run the command 'npm start' to start the API server.  
From the root directory, run the command 'npm run dev' to start the project.  
By default, the server will run on port 5000 and the project will run on port 5173.  Navigate to http://localhost:5173 to use the application.
You MUST run both the client and server simultaneously to communicate with ChatGPT.