import React from 'react';

// Input box with an "Analyze" button
export default function TextInput({ text, setText, processText }) {
  return (
    <div className="input-card">
      <h5 className="text-center mb-4">Text Analyzer</h5>
      	<textarea
	        className="text-input"
	        placeholder="Type or Paste Your Text Here..." 
	        value={text}
	        onChange={(e) => setText(e.target.value)}
      	/>
      	<div className="d-flex justify-content-center">
	      <button className="analyze-btn btn-sm" onClick={processText}>
	        PROCESS TEXT
	      </button>
	    </div>
    </div>
  );
}
