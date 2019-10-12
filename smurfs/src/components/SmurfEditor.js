 
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { putSmurfs, fetchSmurfs } from '../actions';

export default function SmurfEditor() {
  const [smurfToUpdate, setSmurfToUpdate] = useState({});
  const [id, setId] = useState('');
  const dispatch = useDispatch();

  const smurfs = useSelector(state => state.smurfs);
  const isEditing = useSelector(state => state.isEditing);

  const handleSelect = e => {
    const targetSmurf = JSON.parse(e.target.value);
    setSmurfToUpdate({
      ...smurfToUpdate,
      name: targetSmurf.name,
      age: targetSmurf.age,
      height: targetSmurf.height,
    });
    setId(targetSmurf.id);
  };

  const handleChange = e => {
    setSmurfToUpdate({ ...smurfToUpdate, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(putSmurfs(id, smurfToUpdate));
  };

  useEffect(() => dispatch(fetchSmurfs()), [isEditing]);

  return (
    <div className='smurf-form'>
      <h2>Change a Smurf!</h2>
      <select onChange={handleSelect}>
        <option>Select a Smurf!</option>
        {smurfToUpdate.map(luckySmurf => (
          <option key={luckySmurf.id} value={JSON.stringify(luckySmurf)}>
            {luckySmurf.name}
          </option>
        ))}
      </select>
      <input
        type='text'
        name='name'
        value={smurfToUpdate.name}
        placeholder='...name'
        onChange={handleChange}
      />
      <input
        type='text'
        name='age'
        value={smurfToUpdate.age}
        placeholder='...age'
        onChange={handleChange}
      />
      <input
        type='text'
        name='height'
        value={smurfToUpdate.height}
        placeholder='...height'
        onChange={handleChange}
      />
 
      <button onClick={handleSubmit}>Make your changes</button>
    </div>
  );
}
