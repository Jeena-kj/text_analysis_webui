import React, { useState } from 'react';
import jsPDF from 'jspdf';

// Displays text analysis results using a single rounded border
export default function TextAnalysis({ analysis }) {

	const exportToPDF = () => {
	    // Create a new PDF instance
	    const doc = new jsPDF();

	    // Add content to the PDF
	    doc.setFontSize(12);
	    doc.text('Text Analysis Results', 10, 10);
	    doc.text('---------------------', 10, 20);

	    doc.text(`Word Count: ${analysis.wordCount}`, 10, 30);
	    doc.text(`Character Count: ${analysis.charCount}`, 10, 40);
	    doc.text(
	      `Character Count (No Spaces): ${analysis.charCountWithoutSpaces}`,
	      10,
	      50
	    );
	    doc.text(`Sentence Count: ${analysis.sentenceCount}`, 10, 60);
	    doc.text(`Paragraph Count: ${analysis.paragraphCount}`, 10, 70);
	    doc.text(`Most Frequent Word: ${analysis.mostFrequentWord}`, 10, 80);
	    doc.text(`Longest Word: ${analysis.longestWord}`, 10, 90);
	    doc.text(`Sentiment Result: ${analysis.sentiment}`, 10, 100);

	    // Save the PDF
	    doc.save('text-analysis-results.pdf');
	};

	const [isProcessing, setIsProcessing] = useState(false);  
	// Function to check if the analysis data is populated
  	const isAnalysisComplete = Object.values(analysis).some(value => value !== 0 && value !== '');

  return (
    <div className="container mt-4">
      <h5 className="text-center mb-4">Analysis Results</h5>

      {/* Outer rounded border container */}
      <div className="p-3 border border-success rounded analysis-container mx-auto">
        {/* Characters Count */}
        <div className="d-flex justify-content-between align-items-center mb-1">
          <span className="fw-bold">Characters:</span>
          <span className="text-success">{analysis.charCount}</span>
        </div>

        {/* Characters Count (No spaces) */}
        <div className="d-flex justify-content-between align-items-center mb-1">
          <span className="fw-bold">Characters: No spaces:</span>
          <span className="text-success">{analysis.charCountWithoutSpaces}</span>
        </div>

        {/* Words Count */}
        <div className="d-flex justify-content-between align-items-center mb-1">
          <span className="fw-bold">Words:</span>
          <span className="text-success">{analysis.wordCount}</span>
        </div>

        {/* Sentences Count */}
        <div className="d-flex justify-content-between align-items-center mb-1">
          <span className="fw-bold">Sentences:</span>
          <span className="text-success">{analysis.sentenceCount}</span>
        </div>

        {/* Paragraph Count */}
        <div className="d-flex justify-content-between align-items-center mb-1">
          <span className="fw-bold">Paragraph Count:</span>
          <span className="text-success">{analysis.paragraphCount}</span>
        </div>

        {/* Most Frequent Word */}
        <div className="d-flex justify-content-between align-items-center mb-1">
          <span className="fw-bold">Most Frequent Word:</span>
          <span className="text-success">{analysis.mostFrequentWord}</span>
        </div>

         {/* Longest Word */}
        <div className="d-flex justify-content-between align-items-center mb-1">
          <span className="fw-bold">Longest Word:</span>
          <span className="text-success">{analysis.longestWord}</span>
        </div>
        {/* Sentiment Result */}
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold">Sentiment Result:</span>
          <span className="text-success">{analysis.sentiment}</span>
        </div>

        {/* Export Buttons */}
        {isAnalysisComplete && !isProcessing && (
      	<div className="mt-2 text-center">
	        <button className="btn btn-success me-2 export-btn" onClick={exportToPDF}>
	           Export as PDF
	        </button>
      	</div>
         )}

      </div>
    </div>
  );
}
