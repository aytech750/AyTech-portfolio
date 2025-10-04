import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({name:'', email:'', message:''});
  const [msg, setMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!form.name || !form.email || !form.message){
      setMsg('Please fill all fields');
      return;
    }
    setMsg(`Thank you ${form.name}, your message has been sent!`);
    setForm({name:'',email:'',message:''});
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})}/>
        <input type="email" placeholder="Email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/>
        <textarea placeholder="Message" value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})}></textarea>
        <button type="submit">Send Message</button>
      </form>
      {msg && <p className="message">{msg}</p>}
    </section>
  );
}
