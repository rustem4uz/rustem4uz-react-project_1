import React,{useState}from'react';

export default function SubscribeButton(){
  const[subscribed,setSubscribed]=useState(false);
  return(
    <button onClick={()=>setSubscribed(!subscribed)} style={{background:subscribed?'#4caf50':'#2196f3',color:'#fff'}}>
      {subscribed?'Отписаться':'Подписаться на обновления'}
    </button>
  );
}