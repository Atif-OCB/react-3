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

  function handleSpecialClick(myNumber) {
    console.log(myNumber);
  }

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
