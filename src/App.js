import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import QuestionsPage from "./pages/QuestionsPage/QuestionsPage";
import Login from "./pages/Login/Login";
import { Reset } from "styled-reset";
import AskPage from "./pages/AskPage/AskPage";
import PostPage from "./pages/PostPage/PostPage";


function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <Reset />
      <BrowserRouter>
        <div className="App">
          <Routes>
            <>
              <Route path="/" element={<QuestionsPage />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/ask" element={<AskPage />}></Route>
              <Route path="/postpage/:id" element={<PostPage />}></Route>
            </>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
