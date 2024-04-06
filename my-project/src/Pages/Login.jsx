import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [text, setText] = useState({ 
    Email: '',
    Password: '' 
  });

  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { ...text };
  
    axios.get('http://localhost:3000/USERS')
      .then((response) => {
        const users = response.data;
        let isValid = false;
        const validationErrors = { Email: '', Password: '' };
  
        users.forEach(user => {
          if (user.Email === formData.Email) {
            isValid = true;
            if (user.Password === formData.Password) {
              alert('Login successful');
              navigate("Home");
            } else {
              validationErrors.Password = 'Incorrect password';
            }
          }
        });
  
        if (!isValid) {
          validationErrors.Email = 'User not found';
          alert('Invalid Email ')
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
  

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="card w-full" style={{ maxWidth: '500px' }}>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card w-full max-w-md shadow-2xl bg-base-100"> 
              <form className="card-body" onSubmit={handleSubmit}>
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
                    type='Password'
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
                  <button type="submit" className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;




