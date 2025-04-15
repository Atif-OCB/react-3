import Button from "./components/Button";
import FnProps from "./components/FnProps";
import Input from "./components/Input";
import Title from "./components/Title";


const App = () => {
  const myName = "Atif";

  const handleLogs = (log) => {
    console.log("parent: ", log);
  }

  const handleUpdate = (key, value) => {
    console.log(key, value);
  }

  const handleSubmit = () => {
    // Gather all form input
    // Submit API
  }

  return (
    <>
      {/* <div>App</div>
      <Title myName={myName} />
      <Title myName={myName} lang="en" />
      <Title myName={myName} lang="my" />
      <Title myName={myName} lang="ru" />
      <Title isHidden />

      <Button>
        <Title myName={myName} lang="en" />
      </Button>

      <FnProps onLogs={handleLogs} /> */}

      <form onSubmit={handleSubmit}>
        <Input label="name" onUpdateField={(value) => {
          handleUpdate("name", value)
        }} />
        <Input label="age" onUpdateField={(value) => {
          handleUpdate("age", value)
        }} />
        <Input label="address" onUpdateField={(value) => {
          handleUpdate("address", value)
        }} />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App