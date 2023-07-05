import './input.css'


function Input({ type, id, name, required }) {
  return (
    <div className="form-container">
      <label htmlFor={id}>{name}:</label>
      <input type={type} id={id} name={id} required={required} className="input-field" />


    </div>
  );
}

export default Input;
