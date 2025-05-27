import React, { useState } from 'react';
import Header from './components/Header';
import TranslatorForm from './components/TranslatorForm';
import ResultBox from './components/ResultBox';

function App() {
  const [translated, setTranslated] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-3xl mx-auto">
        <TranslatorForm setTranslated={setTranslated} />
        {translated && <ResultBox translated={translated} />}
      </main>
    </div>
  );
}

export default App;