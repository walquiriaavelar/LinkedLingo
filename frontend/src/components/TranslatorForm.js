import React, { useState } from 'react';
import axios from 'axios';

export default function TranslatorForm({ setTranslated }) {
  const [text, setText] = useState('');

  const handleTranslate = async () => {
    const res = await axios.post('http://localhost:3000/translate', {
      text,
      targetLang: 'en'
    });
    setTranslated(res.data.translated);
  };

  return (
    <div className="p-4">
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md h-40"
        placeholder="Cole aqui seu resumo do LinkedIn"
      />
      <button
        onClick={handleTranslate}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Traduzir para Inglês
      </button>
    </div>
  );
}