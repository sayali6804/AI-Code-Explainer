# 🤖 AI Code Explainer

An AI-powered web application that analyzes source code and generates concise, human-readable explanations. The application supports multiple programming languages, provides algorithm complexity analysis, and suggests optimized code using Large Language Models (LLMs). It also includes an intelligent auto-detection feature that identifies the programming language without requiring manual selection.

---

## 📌 Project Overview

AI Code Explainer helps developers, students, and interview candidates quickly understand unfamiliar code by converting source code into plain-English explanations.

The application allows users to:

* Explain code written in multiple programming languages
* Automatically detect the programming language without manual selection
* Generate optimized versions of code
* Estimate Time Complexity and Space Complexity
* Display explanations in a clean and modern user interface

---

## 🚀 Features

* AI-powered code explanation
* Automatic language detection (no manual selection required)
* Support for multiple programming languages
* Code optimization suggestions
* Time Complexity estimation
* Space Complexity estimation
* Markdown rendering for formatted explanations
* Responsive and modern UI
* Copy explanation
* Download explanation
* REST API architecture

---

## 🛠 Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Backend

* Node.js
* Express.js

### AI Model

* Groq API
* Llama 3.3 70B Versatile

---

## 🏗 System Architecture

```
                User
                  │
                  ▼
          HTML / CSS / JavaScript
                  │
          HTTP REST API
                  │
            Express.js Server
                  │
        Prompt Engineering Layer
                  │
              Groq API
                  │
         Llama 3.3 70B Versatile
                  │
          AI Generated Response
                  │
                  ▼
             Browser UI
```

---

## ⚙ Technical Decisions

### Why Node.js + Express?

* Lightweight REST API development
* Simple integration with AI APIs
* Easy deployment
* Clean project structure

### Why Groq?

Groq was selected because it offers:

* High-speed inference
* Free developer tier
* Low latency
* Excellent support for code reasoning
* Easy SDK integration

### Why Plain HTML/CSS/JavaScript?

The assignment requirements focus on AI integration rather than frontend frameworks. A lightweight frontend reduces complexity, improves loading speed, and keeps the application easy to understand and maintain.

---

## 🧠 AI Workflow

1. User pastes code.
2. No language selection is required — the system automatically detects the programming language.
3. Backend creates a structured prompt including detected language context.
4. Prompt is sent to the Groq LLM.
5. AI analyzes the code.
6. AI returns:

   * Purpose
   * Inputs
   * Output
   * Logic
   * Time Complexity
   * Space Complexity
7. The explanation is rendered in the browser.

---

## 📂 Project Structure

```
AI-Code-Explainer/

├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── routes/
│   └── explain.js
│
├── server.js
├── package.json
├── .env
└── README.md
```

---

## ▶ Installation

Clone the repository

```bash
git clone https://github.com/sayali6804/AI-Code-Explainer
```

Move into the project

```bash
cd AI-Code-Explainer
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
GROQ_API_KEY=your_api_key
```

Start the server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

## 📷 Sample Workflow

Input

```python
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n-1)
```

Generated Output

* Purpose
* Inputs
* Output
* Logic
* Time Complexity
* Space Complexity
* Optimized Code (Bonus)

---

## 📌 Supported Languages

* Python
* JavaScript
* TypeScript
* Java
* C
* C++
* C#
* Go
* Rust
* PHP
* Ruby
* Kotlin
* Swift
* SQL
* HTML
* CSS

---

## 🔒 Error Handling

The application validates:

* Empty input
* Missing API key
* API request failures
* Invalid responses
* Network errors

Meaningful error messages are displayed to improve user experience.

---

## 📈 Future Improvements

* Syntax highlighting
* AST-based code analysis
* Side-by-side code diff viewer
* Conversation history
* Export as PDF
* Dark/Light mode
* User authentication
* Docker support
* Unit testing
* CI/CD pipeline

---

## 📚 AI Prompt Engineering

A structured prompt is used to minimize hallucinations by requesting:

* Purpose
* Inputs
* Outputs
* Logic
* Time Complexity
* Space Complexity

Low-temperature inference is used to improve consistency and reduce randomness. The prompt also incorporates automatic language detection to improve explanation accuracy.

---

## 🎯 Assignment Requirements Covered

| Requirement               | Status |
| ------------------------- | ------ |
| Python Support            | ✅      |
| JavaScript Support        | ✅      |
| Plain English Explanation | ✅      |
| Multiple Snippet Support  | ✅      |
| Public LLM Integration    | ✅      |
| Code Optimization         | ✅      |
| Time Complexity           | ✅      |
| Space Complexity          | ✅      |
| Responsive UI             | ✅      |

---

## 📄 License

This project was developed as part of a technical assessment to demonstrate full-stack development, AI integration, prompt engineering, and REST API design.
