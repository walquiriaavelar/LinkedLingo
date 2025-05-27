import React from 'react';

export default function ResultBox({ translated }) {
  return (
    <div className="p-4">
      <h2 className="font-semibold mb-2">Resultado:</h2>
      <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded">{translated}</pre>
    </div>
  );
}