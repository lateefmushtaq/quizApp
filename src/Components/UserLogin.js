import React, { useState } from "react";
import Input from "./input";
import "./input.css";
function UserRegistration() {
  const fields = [
    { type: "email", id: "email", name: "Email", required: true },
    { type: "password", id: "password", name: "Password", required: true },
  ];

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    const formData = {};

    // Get form values
    fields.forEach(field => {
      const input = document.getElementById(field.id);
      formData[field.id] = input.value;
    });

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        // Registration successful
        console.log("Login successful:", data);
        // Reset the form or redirect to another page
      } else if (response.status === 422) {
        // Unprocessable Entity - validation errors
        console.log("Validation errors:", data.errors);
      } else {
        // Other error occurred
        console.error("Error:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      {fields.map(field => (
        <Input key={field.id} type={field.type} id={field.id} name={field.name} required={field.required} />
      ))}
      {errorMessage && <p>{errorMessage}</p>}
      <button className="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default UserRegistration;
