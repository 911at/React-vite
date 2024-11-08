import React, { useState } from 'react';

const Home = () => {
  const [text, setText] = useState('');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 2000);
  };

  const handleUpperCase = () => {
    setText(text.toUpperCase());
    showAlert('Converted to uppercase!', 'success');
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
    showAlert('Converted to lowercase!', 'success');
  };

  const clearTextArea = () => {
    setText('');
    showAlert('Text cleared!', 'warning');
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    showAlert('Text copied to clipboard!', 'info');
  };

  const handleBold = () => {
    const textarea = document.getElementById('exampleFormControlTextarea1');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = text.slice(start, end);

    if (selectedText) {
      const newText = text.slice(0, start) + `**${selectedText}**` + text.slice(end);
      setText(newText);
      showAlert('Text made bold!', 'success');
    } else {
      showAlert('Please select text to make bold.', 'warning');
    }
  };

  const renderText = () => {
    // Split text based on '**' markers
    const boldedParts = text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
      part.startsWith('**') && part.endsWith('**') ? (
        <strong key={index}>{part.slice(2, -2)}</strong>
      ) : (
        part
      )
    );
    return boldedParts;
  };

  return (
    <div>
      <div className="mb-3 container">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleChange}
          placeholder="Enter text here..."
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>

        <button className="btn btn-success mt-3 mx-2" onClick={handleUpperCase}>Uppercase</button>
        <button className="btn btn-secondary mt-3 mx-2" onClick={handleLowerCase}>Lowercase</button>
        <button className="btn btn-info mt-3 mx-2" onClick={clearTextArea}>Clear</button>
        <button className="btn btn-dark mt-3 mx-2" onClick={handleCopy}>Copy</button>
        <button className="btn btn-warning mt-3 mx-2" onClick={handleBold}>Bold</button>
      </div>

      {alert && (
        <div className={`alert alert-${alert.type} mt-3`} role="alert">
          {alert.message}
        </div>
      )}

      <div className="container">
        <h4>Analyze your text</h4>
        <p>{text.trim().split(/\s+/).length} words and {text.length} characters</p>
        <p>{0.008 * text.trim().split(/\s+/).length} minutes to read</p>
        <h4>Preview Text</h4>
        <p>{text.length > 0 ? renderText() : "no preview to display"}</p>
      </div>
    </div>
  );
};

export default Home;
