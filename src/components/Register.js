import React,{useState}from'react';

export default function Register({onRegister}){
  const[email, setEmail]=useState('');
  const[password, setPassword]=useState('');
  return(
    <div className="container">
      <h2>Регистрация</h2>
      <form onSubmit={e=>{e.preventDefault();onRegister(email);}}>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" required/>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Пароль" required/>
        <button type="submit" disabled={!email||!password}>Зарегистрироваться</button>
      </form>
    </div>
  );
}