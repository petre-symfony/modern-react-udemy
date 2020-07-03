import React, { useState, useEffect } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');

  console.log('I run eith every render');

  useEffect(() => {
    console.log('I run after every render and initial render')
  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            type="text"
            className="input"
            value={term}
            onChange={e => {
              setTerm(e.target.value)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Search;