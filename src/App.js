import React from 'react';
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <section>Question</section>
      <section>Answers</section>
      <section>Description</section>
      <button>Next</button>
    </div>
  );
}

export default App;
