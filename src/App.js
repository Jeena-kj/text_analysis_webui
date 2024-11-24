import React, { useState } from 'react';
import Header from './components/Header';
import TextInput from './components/TextInput';
import TextAnalysis from './components/TextAnalysis';
import Sentiment from 'sentiment';

const App = () => {
  // State to manage the text input
  const [text, setText] = useState('');

  // State to manage the analysis results
  const [analysis, setAnalysis] = useState({
    charCount: 0,
    charCountWithoutSpaces: 0,
    wordCount: 0,
    sentenceCount: 0,
    paragraphCount: 0,
    mostFrequentWord: 0,
    longestWord: 0,
    sentiment: 0,
  });

  // State to manage the processing indicator
  const [isProcessing, setIsProcessing] = useState(false);

  // Function to process the text and calculate analysis metrics
  const processText = () => {

    // Reset the analysis state before processing new text
    setAnalysis({
      charCount: 0,
      charCountWithoutSpaces: 0,
      wordCount: 0,
      sentenceCount: 0,
      paragraphCount: 0,
      mostFrequentWord: 0,
      longestWord: 0,
      sentiment: 0, // Reset sentiment result
    });

    // Check if the text input is empty
    if (text.trim() === '') {
      // Show an alert or error message if the text is empty
      alert('Please enter some text before processing.');
      return; // Stop the function from continuing
    }

    // Set processing to true
    setIsProcessing(true);

    // Simulate processing (optional, for visual effect)
    setTimeout(() => {
      // Character count includes all characters in the input
      const charCount = text.length;

      // Character count includes all characters in the input
      const charCountWithoutSpaces = text.replace(/\s/g, '').length;

      // Word count splits text by spaces after trimming whitespace
      const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

      // Sentence count splits text by punctuation marks (e.g., ".", "!", "?")
      const sentenceCount = text.split(/[.!?]+/).filter((s) => s.trim() !== '').length;

      // paragraphs splits the text by newlines
      const paragraphCount = text.split(/\n+/).filter((p) => p.trim() !== '').length;

      //finds the word with the highest frequency
      const findMostFrequentWord = (text) => {
        const words = text.toLowerCase().match(/\b\w+\b/g);
        if (!words) return null;
        const frequency = words.reduce((freq, word) => {
          freq[word] = (freq[word] || 0) + 1;
          return freq;
        }, {});
        return Object.keys(frequency).reduce((a, b) =>
          frequency[a] > frequency[b] ? a : b
        );
      };
      const mostFrequentWord = findMostFrequentWord(text);

      //Find the longest word in the text
      const longestWord = text.match(/\b\w+\b/g)?.reduce((longest, word) =>
      word.length > longest.length ? word : longest, '');

      // Sentiment analysis using the 'sentiment' library
      const sentiment = new Sentiment();
      const result = sentiment.analyze(text);
      const sentimentResult = result.score > 0
        ? 'Positive'
        : result.score < 0
        ? 'Negative'
        : 'Neutral';
      //console.log(sentimentResult);

      // Update the analysis state with calculated values
      setAnalysis({
        charCount,
        charCountWithoutSpaces,
        wordCount,
        sentenceCount,
        paragraphCount,
        mostFrequentWord,
        longestWord,
        sentiment:sentimentResult
      });

      // Set processing to false when processing is done
      setIsProcessing(false);
    }, 500); // Adjust time as needed
  };

  return (
    <div className="container-fluid app-container">
      <div className="row">
        {/* Left Section */}
        <div className="col-lg-5 col-md-12">
          <Header />
        </div>

        {/* Right Section */}
        <div className="col-lg-6 col-md-12 mb-3">
          <div className="card p-4 shadow-sm">
            <TextInput text={text} setText={setText} processText={processText} />
            {isProcessing ? (
              <div className="text-center mt-4">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Processing...</span>
                </div>
                <p>Processing...</p>
              </div>
            ) : (
              <TextAnalysis analysis={analysis} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
