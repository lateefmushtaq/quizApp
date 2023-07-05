import Input from "./input";
import './input.css'
export default function UserLogin(type, id, name, required ){
    function handleSubmit(){}
    const fields = [
        { type: "email", id: "email", name: "Email", required: true },
        { type: "password", id: "password", name: "Password", required: true },
      ];

    return(

<div>
      {fields.map((field) => (
        <Input key={field.id} type={field.type} id={field.id} name={field.name} required={field.required} />
      ))}
      <button className="submit" onClick={handleSubmit}>Submit</button>
    </div>

    );
}