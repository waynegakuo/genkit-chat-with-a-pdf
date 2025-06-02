# 📄 Chat with a PDF 🤖

This project allows you to chat with the contents of a PDF file using Google's Gemini AI model. You can ask questions about the PDF content, and the AI will respond based on the information contained in the document. The project comes with a Formula One (F1) 🏎️ PDF, but you can replace it with any PDF of your choice!

## 🔧 Prerequisites

- Node.js (v20 or later)
- npm
- Gemini API Key (Get one from [Google AI Studio](https://aistudio.google.com/app/apikey))

## 📥 Installation

1. Clone this repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

4. Set up your Gemini API Key:

> **Note:** Git Bash is the recommended terminal for setting Gemini API keys and running other Genkit commands.

```bash
# In Git Bash (Recommended)
export GEMINI_API_KEY=<your API key>

# On Windows (Command Prompt)
set GEMINI_API_KEY=<your API key>

# On Windows (PowerShell)
$env:GEMINI_API_KEY="<your API key>"

# On macOS/Linux
export GEMINI_API_KEY=<your API key>
```

## 🚀 Usage

Run the application with the following command:

```bash
npx tsx src/index.ts <path-to-pdf-file>
```

For example, to chat with the included Formula One PDF 🏁:

```bash
npx tsx src/index.ts src\docs\Formula_One_F1_Explained.pdf
```

You can also provide an optional custom prompt:

```bash
npx tsx src/index.ts <path-to-pdf-file> "Your custom prompt here"
```

## ⚙️ How It Works

1. The application reads the PDF file and extracts its text content 📄
2. The text is sent to the Gemini AI model as context 🧠
3. You can then chat with the AI, asking questions about the PDF content 💬
4. The AI will respond based on the information in the PDF ✨

## 💬 Example Conversation

After starting the application, you'll see a prompt where you can type your questions:

```
You're chatting with Gemini. Ctrl-C to quit.

> What is Formula One?
```

The AI will respond with information from the PDF about Formula One.

## 📂 Project Structure

- `src/index.ts`: Main application code
- `src/docs/`: Contains example PDF files
  - `Formula_One_F1_Explained.pdf`: An example PDF about Formula One racing 🏎️ 🏁

## 🛠️ Technologies Used

- [Genkit](https://genkit.dev/): AI toolkit for building generative AI applications 🤖
- [Google AI (Gemini)](https://ai.google.dev/): Google's multimodal AI model 🧠
- [pdf-parse](https://www.npmjs.com/package/pdf-parse): Library for extracting text from PDF files 📄

## 📚 Resources

- [Tutorial: Chat with a PDF](https://genkit.dev/docs/tutorials/tutorial-chat-with-a-pdf/): Official Genkit tutorial for this project 🔍
