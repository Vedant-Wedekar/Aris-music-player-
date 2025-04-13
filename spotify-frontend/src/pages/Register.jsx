import React from 'react';
import { useState } from 'react'
import axios from 'axios'

function Register() {
  const [data, setData] = useState({ username: "", email: "", password: "" })
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/api/auth/register', data);
      alert('Registered successfully');
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="flex flex-col gap-3 w-80" onSubmit={handleSubmit}>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          className="p-2 border"
          onChange={e => setData({ ...data, username: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 border"
          onChange={e => setData({ ...data, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border"
          onChange={e => setData({ ...data, password: e.target.value })}
        />
        <button className="bg-green-600 text-white p-2 rounded">Register</button>
      </form>
    </div>
  )
}

export default Register
