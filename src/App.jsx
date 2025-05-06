import { useState } from 'react';

const quotes = [
  "Believe in yourself.",
  "Push through the pain.",
  "Make today count.",
  "You are stronger than you think.",
  "Consistency is key."
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);

  const getNewQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Motivational Quote</h1>
      <p style={{ fontSize: '1.5rem', fontStyle: 'italic' }}>{quote}</p>
      <button onClick={getNewQuote} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
        New Quote
      </button>
      <p>Hi, My name is Sanya</p>
    </div>
  );
}

export default App;

