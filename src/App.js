import React from 'react';
import './App.css';
import QuoteSearcher from"./components/QuoteSearcher";


function App() {
  return (
    <div className="App">
        <main className="App-header">
          <h1>Tree-Quotes</h1>
          <hr></hr>
        <QuoteSearcher />
        </main>
    </div>
  );
}

export default App;
