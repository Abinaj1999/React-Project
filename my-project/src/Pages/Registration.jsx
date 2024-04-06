import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const [text, setText] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNo: '',
    Password: ''
  });

const navigate= useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = { ...text };

    await axios.post('http://localhost:3000/USERS', formData)
      .then(()=>{
        alert('sucessfully registered');}
      )
      .then(navigate('Login'))

      .catch((error) => {
        console.error('Error posting data:', error);
      });
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="card w-full" style={{ maxWidth: '500px' }}>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card w-full max-w-md shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={(e)=>handleSubmit(e)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <input
                    type='text'
                    placeholder='FirstName'
                    value={text.FirstName}
                    onChange={(e) => setText({ ...text, FirstName: e.target.value })}
                    className="input input-bordered"
                    required
                  />
                  
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Last Name:</span>
                  </label>
                  <input 
                    type='text'
                    placeholder='LastName'
                    value={text.LastName}
                    onChange={(e) => setText({ ...text, LastName: e.target.value })}
                    className="input input-bordered"
                    required
                  
                  />
                 
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone No:</span>
                  </label>
                  <input 
                    type='Number'
                    placeholder='PhoneNo'
                    value={text.PhoneNo}
                    onChange={(e) => setText({ ...text, PhoneNo: e.target.value })}
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type='email'
                    placeholder='Email'
                    value={text.Email}
                    onChange={(e) => setText({ ...text, Email: e.target.value })}
                    className="input input-bordered"
                    required
                  />
                  
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type='password'
                    placeholder='Password'
                    value={text.Password}
                    onChange={(e) => setText({ ...text, Password: e.target.value })}
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary" >Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;

