import React, { useState, useEffect } from 'react';

/*
export default function MyPage(){

    const [count, setCount] = useState(0);
  
    return <div>
    <button onClick={()=> setCount(count+1)}> You clicked me {count} times </button>
    <p> Try clicking the button </p>
  </div>
  }
*/
  const MyComponent = () => <div>Hello</div>;

export default function OtherComponent(){
  
      return <>
        <MyComponent/>
        <p> Look at my component </p>
  </>
}