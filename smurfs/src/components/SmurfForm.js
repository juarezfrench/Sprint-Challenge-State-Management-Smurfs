import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postSmurf, getSmurf } from '../store/actions';

function SmurfForm() {
  const [newSmurf, setNewSmurf] = useState({});
  const dispatch = useDispatch();
  const isPosting = useSelector(state => state.isPosting);

  const handleChange = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(postData(newSmurf));
  };

  useEffect(() => dispatch(getSmurf()), [isPosting]);

  return (
    // <Form>
    <div className='smurf-form'>
      <h2>Invite new Smurf!</h2>
      <input
        type='text'
        name='name'
        placeholder='...name'
        onChange={handleChange}
      />
      {/* {errors.name && <p>{errors.name}</p>} */}
      <input
        type='text'
        name='age'
        placeholder='...age'
        onChange={handleChange}
      />
      {/* {errors.age && <p>{errors.age}</p>} */}
      <input
        type='text'
        name='height'
        placeholder='...height'
        onChange={handleChange}
      />
      {/* {errors.height && <p>{errors.height}</p>} */}
      {/* <input
        type='text'
        name='image'
        placeholder='...image url (optional)'
        onChange={handleChange}
      /> */}
      <button onClick={handleSubmit}>Subsmurf!</button>
    </div>
    // </Form>
  );
}