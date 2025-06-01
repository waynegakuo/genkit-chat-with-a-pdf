import { googleAI } from '@genkit-ai/googleai';
import { genkit } from 'genkit/beta'; // chat is a beta feature
import pdf from 'pdf-parse';
import fs from 'fs';
import { createInterface } from 'node:readline/promises';

const ai = genkit({
    plugins: [googleAI()],
    model: googleAI.model('gemini-2.0-flash'),
});

(async () => {
    try {
        // Step 1: get command line arguments
        const filename = process.argv[2];
        if (!filename) {
            console.error('Please provide a filename as a command line argument.');
            process.exit(1);
        }

        // Step 2: load PDF file
        // PS: the AI model needs to be fed to it information in text format,
        // hence the reason for having a library that converts whatever media is presented to it
        // into text and then fed in as the prompt
        let dataBuffer = fs.readFileSync(filename);
        const { text } = await pdf(dataBuffer);
        // Step 3: construct prompt
        const prefix = process.argv[3] || "Sample prompt: Answer the user's questions about the contents of this PDF file.";
        const prompt = `
            ${prefix}
            Context:
            ${text}
        `;
        // Step 4: start chat
        const chat = ai.chat({ system: prompt });
        const readline = createInterface(process.stdin, process.stdout);
        console.log("You're chatting with Gemini. Ctrl-C to quit.\n");

        // Step 5: chat loop
        while (true) {
            const userInput = await readline.question('> ');
            const { text } = await chat.send(userInput);
            console.log(text);
        }
    } catch (error) {
        console.error('Error parsing PDF or interacting with Genkit:', error);
    }
})(); // <-- don't forget the trailing parentheses to call the function!