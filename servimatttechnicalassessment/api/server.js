const OpenAI = require('openai')
const express = require('express');
const cors = require('cors');

const app = express();

app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true,
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

const ai = new OpenAI();
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.post('/api/chat', async function (req, res) {
    try {
        const response = await ai.responses.create({
            model: "gpt-5-nano",
            input: req.body.Input
        })
        res.json({ output_text: response.output_text });
    } catch (ex) {
        res.json({message: ex})
    }
});