import { useState } from "react";

export default function StuffForm({onSubmit}) {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function handleName(event) {
    setName(event.target.value);
  }

  function handlePrice(event) {
    setPrice(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(name, price);
  }

  return (
    <form className="stuff-form" onSubmit={handleSubmit}>
      <p>Stuff name</p>
      <input type="search" placeholder="Banana" onChange={handleName}/>

      <p>Stuff price</p>
      <input type="search" placeholder="15" onChange={handlePrice}/>

      <button>Add Stuff</button>
    </form>
  );
}
