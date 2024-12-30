import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router";
import Cards from "./cards";
import Register from "./register";
import { useState } from "react";

export const Home = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/cards/:id" element={<Cards />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
};

const Default = () => {
  const navigate = useNavigate();
  const [cardId, setCardId] = useState("");
  const [error, setError] = useState("");

  const handleNavigate = () => {
    if (cardId.trim()) {
      setError("");
      navigate(`/cards/${cardId}`);
    } else {
      setError("カードIDを入力してください");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl py-2 font-bold">Home</h1>
      <div className="flex flex-col">
        <input
          className="border-2 border-gray-400 rounded-md px-2 w-full"
          type="text"
          value={cardId}
          onChange={(e) => {
            setCardId(e.target.value);
            setError("");
          }}
          placeholder="ユーザーIDを入力してください"
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        <button
          type="button"
          onClick={handleNavigate}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          カードを表示
        </button>
      </div>
      <button
        type="button"
        onClick={handleNavigate}
        className="mt-2 p-2 bg-blue-500 text-white rounded-md w-full"
      >
        <Link to="/register">新規登録</Link>
      </button>
    </div>
  );
};
