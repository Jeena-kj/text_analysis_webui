import React from 'react';

// Header component with Bootstrap styling
export default function Header() {
  return (
    <header className="container mt-4">
      <div className="text-end py-5">

        <h1 className="fw-bold text-white main-text text-end fs-5">
          Easily analyze your text with word, sentences, spaces, character, paragraph, frequent word and longest word counts!
        </h1>

        <p className="text-uppercase text-secondary text-white fw-bold fs-4">Using</p>

        <h1 className="fw-bold d-inline-block px-3 py-1 sub-text fs-4">
          Text Analyzer
        </h1>
      </div>
    </header>
  );
}
