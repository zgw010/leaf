import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';

const Example: React.FC = () => {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `${count} times`;
    // fetch('https://easy-mock.com/mock/5cf38987cfcb92308b8d0582/example/query').then(console.log(res);)
    fetch('https://easy-mock.com/mock/5cf38987cfcb92308b8d0582/example/query')
      .then(function (res) {
        return res.json();
      })
      .then((res)=>{
        setCount(res.data.name)
        console.log(res.data);
      })
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me!
      </button>
    </div>
  );
}

const Main: React.FC = () => {
  return (
    <div className="App">
      <Example />
    </div>
  );
}

export default Main;
