import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postSmurfs, fetchSmurfs } from '../actions/index';
import {Button} from 'semantic-ui-react'

const SmurfForm = (props) => {
  const [newSmurf, setNewSmurf] = useState({});
  const dispatch = useDispatch();
  const isPosting = useSelector(state => state.isPosting);

  const handleChange = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(postSmurfs(newSmurf));
   
  };

  useEffect(() => dispatch(fetchSmurfs()), [isPosting]);

  return (
    // <Form>
    <div className='smurf-form'>
      <h2>Add a new Smurf!</h2>
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
     
      <Button className='add-smurf' primary onClick={handleSubmit}>Add this smurf!</Button>
    </div>
    // </Form>
  );
}

export default SmurfForm