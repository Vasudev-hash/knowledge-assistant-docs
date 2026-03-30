"use client";

import { useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [question, setQuestion] = useState("");

  const handleLogin = () => {
    if (email && password) {
      setIsLoggedIn(true);
    } else {
      alert("Enter email and password");
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {!isLoggedIn ? (
        <div
          style={{
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "15px",
            width: "340px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            textAlign: "center",
          }}
        >
          <h1 style={{ marginBottom: "20px", color: "#333" }}>
            🔐 Login
          </h1>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "12px",
              width: "100%",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              color: "black",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "12px",
              width: "100%",
              marginBottom: "20px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              color: "black",
            }}
          />

          <button
            onClick={handleLogin}
            style={{
              padding: "12px",
              width: "100%",
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Login
          </button>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "15px",
            width: "400px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            textAlign: "center",
          }}
        >
          <h1 style={{ marginBottom: "20px" }}>
            🤖 Knowledge Assistant
          </h1>

          <input
            type="text"
            placeholder="Ask a question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            style={{
              padding: "12px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />

          <button
            style={{
              marginTop: "15px",
              padding: "12px",
              width: "100%",
              background: "linear-gradient(135deg, #43cea2, #185a9d)",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Ask
          </button>
        </div>
      )}
    </main>
  );
}