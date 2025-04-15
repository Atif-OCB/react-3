function App() {
  const greeting = "Hello Greetings";
  const otherStyles = {
    backgroundColor: "burlywood",
    margin: "1rem"
  };

  const numVar = 4000;
  const boolVar = true;

  function handleClick() {
    alert("Hello")
  }

  // /**
  //  * 4 functions pattern
  //  */

  // // 1. Pure function (for predictability)
  // // - No parameter
  // const pureFn1 = () => {
  //   console.log("Pure function");
  //   // - No return
  // }

  // pureFn1();

  // // 2. Pure function (with return)
  // // - No parameter
  // const pureFn2 = () => {
  //   // - Have return
  //   return 5;
  // }

  // console.log(pureFn2());

  // // 3. Non-pure function
  // // - no params
  // const nonPureFn1 = (myNum) => {
  //   console.log(myNum);
  //   // - no return
  // }

  // // 4. Non-pure function (with return)
  // // - have params
  // const nonPureFn2 = (myNum) => {
  //   // - have return
  //   return myNum;
  // }

  return (
    <>
      <div id="header" style={otherStyles}>
        {/* 1. Function call by reference */}
        {/* <button onClick={handleClick}>Click here</button> */}
        {/* 2. Function call by value */}
        {/* Anonymous function */}
        <button onClick={function() {
          handleClick();
        }}>Click here</button>
        {/* Anonymous arrow function */}
        <button onClick={() => {
          handleClick();
        }}>Click here</button>
        <p>{greeting}</p>
      </div>
    </>
  )
}

export default App
