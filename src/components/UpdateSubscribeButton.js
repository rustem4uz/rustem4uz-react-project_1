import React, { useState, useEffect } from 'react';

function UpdateSubscribeButton() {
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('subscribed') === 'true';
    setSubscribed(saved);
  }, []);

  const toggleSubscribe = () => {
    const newState = !subscribed;
    setSubscribed(newState);
    localStorage.setItem('subscribed', newState);
  };

  return (
    <button onClick={toggleSubscribe}>
      {subscribed ? 'Отписаться от обновлений' : 'Подписаться на обновления'}
    </button>
  );
}

export default UpdateSubscribeButton;
