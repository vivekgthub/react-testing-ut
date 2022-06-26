import React from 'react'
function CounterApp() {
  const [count,setCount] = React.useState(0);

  return (
    <div>
      <button onClick={()=>setCount(c=>c+1)}>increment</button>
      {count}
      <button onClick={()=>setCount(c=>c-1)}>decrement</button>
    </div>
  );
}

export default CounterApp;
