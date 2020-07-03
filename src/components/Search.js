import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');

  console.log('I run eith every render');

  useEffect(() => {
    axios.get('xyz')
      .then((response) => {
        console.log(response);
      })

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