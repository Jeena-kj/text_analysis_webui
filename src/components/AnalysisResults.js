import React from 'react';
import fileDownload from 'js-file-download';

const AnalysisResults = ({ results }) => {

  const exportToPDF = () => {
    const plainTextContent = `
      Text Analysis Results
      ---------------------
      Word Count: ${results.wordCount}
      Character Count: ${results.characterCount}
      Character Count (No Spaces): ${results.characterCountNoSpaces}
      Sentence Count: ${results.sentenceCount}
      Paragraph Count: ${results.paragraphCount}
      Most Frequent Word: ${results.mostFrequentWord}
      Longest Word: ${results.longestWord}
    `;

    fileDownload(plainTextContent, 'text-analysis-results.pdf');
  };

  return (
    <div className="results">
      <h2>Analysis Results</h2>
      <ul>
        <li>Word Count: {results.wordCount}</li>
        <li>Character Count: {results.characterCount}</li>
        <li>Character Count (No Spaces): {results.characterCountNoSpaces}</li>
        <li>Sentence Count: {results.sentenceCount}</li>
        <li>Paragraph Count: {results.paragraphCount}</li>
        <li>Most Frequent Word: {results.mostFrequentWord}</li>
        <li>Longest Word: {results.longestWord}</li>
      </ul>
      <div className="export-buttons">
        <button onClick={exportToPDF}>Export as PDF</button>
      </div>
    </div>
  );
};

export default AnalysisResults;
