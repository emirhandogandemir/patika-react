import React, { useEffect, useState } from "react";

export default function Form({ addContact, contacts }) {
  const initialFormValues = { fullname: "", phone_number: "" };

  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);



  const onChangeInput = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };



  const onSubmit = (event) => {
    event.preventDefault();

    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }
    addContact([...contacts, form]);

    console.log(form);
  };



  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="fullname"
          value={form.fullname}
          onChange={onChangeInput}
        ></input>
      </div>
      <div>
        <input
          name="phone_number"
          placeholder="phonenumber"
          value={form.phone_number}
          onChange={onChangeInput}
        ></input>
      </div>

      <button className="btn"> Add</button>
    </form>
  );
}
