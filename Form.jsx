import { useState } from "react";

function Form({ onAdd }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onAdd({ name, url });
    setName("");
    setUrl("");
  };

  return (
    <form onSubmit={submit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input value={url} onChange={e => setUrl(e.target.value)} placeholder="URL" />
      <button>Add</button>
    </form>
  );
}

export default Form;
