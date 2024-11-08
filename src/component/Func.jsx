import React, { useEffect, useState } from "react";

const Func = () => {
  const [count, setCount] = useState(0);
  // const [message, setMessage] = useState([]);
  // const [notification, setNotification] = useState([]);

  console.log('this is bhadra class // rendered');

  useEffect(() => {
    console.log('Component mounted');

    return () => {
      console.log('Component will unmount' );
    };
  }, []);

  useEffect(() => {
    console.log('Count updated:', count );
  }, [count ]);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <p>Count: {count}</p>
      <button className="btn btn-secondary me-2"  onClick={increment}>Increment</button>
      <button className="btn btn-primary " onClick={decrement}>Decrement</button>
    </div>
  )
}
export default Func;