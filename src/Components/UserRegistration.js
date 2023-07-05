import Input from "./input";
import './input.css'

function UserRegistration() {
  const fields = [
    { type: "text", id: "name", name: "Name", required: true },
    { type: "email", id: "email", name: "Email", required: true },
    { type: "password", id: "password", name: "Password", required: true },
    { type: "password", id: "confirm_password", name: "ConfirmPassword", required: true }
  ];

  const handleSubmit = () => {
  }

  return (
    <div>
      {fields.map((field) => (
        <Input key={field.id} type={field.type} id={field.id} name={field.name} required={field.required} />
      ))}
      <button className="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default UserRegistration;
