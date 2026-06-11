import { useState } from 'react'


function App() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(0);
  const handleClear = () => {
    setInputValue("");
    setResult("");
  }
  const handleResult = () => {
    try {
      if(inputValue.trim() === "") {
        setResult("Error");
        return;
      }
      setResult(eval(inputValue));
    } catch (error) {
      setResult("Error");
    }
  }
  return (
    <>
    <div className='container text-center mt-5'>
       <h1>React Calculator</h1>
       <input type="text" className='form-control w-50 mx-auto' value={inputValue} onChange={(e) => setInputValue(e.target.value)} /> 
    </div>
    {result !== 0 && <div className='container text-center mt-3'><h2>{result}</h2></div>}
   
    <div className='container text-center mt-3'>
      <button className='btn border m-2' onClick={() => setInputValue(inputValue + "7")}>7</button>
      <button className='btn border m-2' onClick={() => setInputValue(inputValue + "8")}>8</button>
      <button className='btn border m-2' onClick={() => setInputValue(inputValue + "9")}>9</button>
      <button className='btn border  m-2' onClick={() => setInputValue(inputValue + "+")}>+</button>
      <br />
      <button className='btn border m-2' onClick={() => setInputValue(inputValue + "4")}>4</button>
      <button className='btn border m-2' onClick={() => setInputValue(inputValue + "5")}>5</button>
      <button className='btn border m-2' onClick={() => setInputValue(inputValue + "6")}>6</button>
      <button className='btn border  m-2' onClick={() => setInputValue(inputValue + "-")}>-</button>
      <br />
      <button className='btn border  m-2' onClick={() => setInputValue(inputValue + "1")}>1</button>
      <button className='btn border  m-2' onClick={() => setInputValue(inputValue + "2")}>2</button>
      <button className='btn border  m-2' onClick={() => setInputValue(inputValue + "3")}>3</button>
      <button className='btn border  m-2' onClick={() => setInputValue(inputValue + "*")}>*</button>
      <br />
      <button className='btn border  m-2' onClick={handleClear}>C</button>
      <button className='btn border  m-2' onClick={() => setInputValue(inputValue + "0")}>0</button>
      <button className='btn border  m-2' onClick={handleResult}>=</button>
      <button className='btn border  m-2' onClick={() => setInputValue(inputValue + "/")}>/</button>
      <br />
       </div>
    </>
  )
}

export default App
