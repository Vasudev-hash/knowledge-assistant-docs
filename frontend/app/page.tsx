"use client";

import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");

  return (
    <main style={{ padding: "20px" }}>
      <h1>Knowledge Assistant</h1>

      <input
        type="text"
        placeholder="Ask a question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{ padding: "10px", width: "300px" }}
      />

      <button style={{ marginLeft: "10px" }}>
        Ask
      </button>
    </main>
  );
}