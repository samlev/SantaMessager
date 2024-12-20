import React from 'react';

const WriteLetter: React.FC = () => {
  return (
    <div>
      <h1>Write Your Letter to Santa</h1>
      <textarea placeholder="Dear Santa..." rows={10} cols={50}></textarea>
      <button onClick={() => alert('Letter Submitted!')}>Submit</button>
    </div>
  );
};

export default WriteLetter;
