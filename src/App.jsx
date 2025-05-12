import React, { useState } from "react";
import "./App.css"; // Your CSS styles here

function App() {
  const [ticket, setTicket] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github: "",
    avatar: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTicket({
      name: formData.name,
      email: formData.email,
      github: formData.github,
      avatar: URL.createObjectURL(formData.avatar),
    });
  };

  return (
    <div className="app">
      {!ticket ? (
        <form className="form" onSubmit={handleSubmit}>
          <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
          <p>Secure your spot at next year's biggest coding conference.</p>

          <label className="avatar-upload">
            <input type="file" name="avatar" accept="image/*" onChange={handleChange} />
            <span>Drag and drop or click to upload</span>
          </label>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="github"
            placeholder="GitHub Username"
            value={formData.github}
            onChange={handleChange}
            required
          />

          <button type="submit">Generate My Ticket</button>
        </form>
      ) : (
        <div className="ticket">
          <h1>Congrats, <span>{ticket.name.split(" ")[0]}</span>!</h1>
          <p>Your ticket is ready.</p>
          <p>We've emailed your ticket to <b>{ticket.email}</b>.</p>

          <div className="ticket-card">
            <img src={ticket.avatar} alt="avatar" className="ticket-avatar" />
            <div>
              <h2>{ticket.name}</h2>
              <p>@{ticket.github}</p>
              <p>Coding Conf | Jan 21, 2025 | Austin, TX</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
