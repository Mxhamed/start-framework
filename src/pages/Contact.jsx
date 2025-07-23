import { useState } from "react";
import StarTitle from "../components/StarTitle";

export default function Contact() {
  // Controlled Elements
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setName("");
    setAge("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <StarTitle color="#2c3e50" backgroundColor="#fff">
        Contact Section
      </StarTitle>
      <div className="container-md">
        <form className="contact-form" onSubmit={handleFormSubmit}>
          {/* Name Field */}
          <div className="form-group">
            <input
              autoComplete="off"
              placeholder="Full Name"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              pattern="^[a-zA-Z ]{2,50}$"
              title="2-50 alphabetic characters"
              required
            />
            <label htmlFor="name">Full Name:</label>
          </div>

          {/* Age Field */}
          <div className="form-group">
            <input
              autoComplete="off"
              placeholder="Age"
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              min="15"
              max="120"
              title="Must be between 15-120"
              required
            />
            <label htmlFor="age">Age:</label>
          </div>

          {/* Email Field */}
          <div className="form-group">
            <input
              autoComplete="off"
              placeholder="Email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="Enter a valid email address"
              required
            />
            <label htmlFor="email">Email:</label>
          </div>

          {/* Password Field */}
          <div className="form-group">
            <input
              autoComplete="off"
              placeholder="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$"
              title="Must contain at least one number, one uppercase and lowercase letter, and at least 8 characters"
              required
            />
            <label htmlFor="password">Password:</label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
