import React,{useState}from'react';
import Login from'./components/Login';
import Register from'./components/Register';
import SubscribeButton from'./components/SubscribeButton';

export default function App(){
  const[user,setUser]=useState(null);
  const[mode,setMode]=useState('login');
  if(!user){
    return mode==='login'?<>
      <Login onLogin={setUser}/>
      <p style={{textAlign:'center',marginTop:'1rem'}}>
        Нет аккаунта? <button onClick={()=>setMode('register')} style={{background:'none',border:'none',color:'#2196f3',cursor:'pointer'}}>Регистрация</button>
      </p>
    </>:<>
      <Register onRegister={setUser}/>
      <p style={{textAlign:'center',marginTop:'1rem'}}>
        Есть аккаунт? <button onClick={()=>setMode('login')} style={{background:'none',border:'none',color:'#2196f3',cursor:'pointer'}}>Войти</button>
      </p>
    </>;
  }
  return(
    <div className="container" style={{textAlign:'center'}}>
      <h2>Добро пожаловать, {user}!</h2>
      <SubscribeButton/>
      <footer style={{marginTop:'2rem',fontSize:'0.85rem',textAlign:'center'}}>
        developer rustem4uz | <a href="https://github.com/rustem4uz" target="_blank">GitHub</a> | <a href="https://vk.com/rustem4uz" target="_blank">VK</a> | <a href="https://t.me/emirveliyevrustem" target="_blank">Telegram</a>
      </footer>
    </div>
  );
}