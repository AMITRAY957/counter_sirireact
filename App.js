import React,{useState} from "react";
 function App(){
  const [count,setcount]=useState(0);


  const increment=()=>{
    setcount(count+1);
  }
  const decrement=()=>{
    if(count>0){
    setcount(count-1);
  }
  };
  const reset=()=>{
    setcount(0);
  };
  return (
    
    <div className="app">
    
      <div>count-{count}</div>
     <div>
        <button  onClick={increment}>Increase</button>
        <button  onClick={decrement}>Decrease</button>
         <button onClick={reset}>Reset</button>
     </div>
     
  </div>
  
  );
}
export default App;
