import Button from "./components/Button";
import FnProps from "./components/FnProps";
import Title from "./components/Title";


const App = () => {
  const myName = "Atif";

  const handleLogs = (log) => {
    console.log("parent: ", log);
  }

  return (
    <>
      <div>App</div>
      <Title myName={myName} />
      <Title myName={myName} lang="en" />
      <Title myName={myName} lang="my" />
      <Title myName={myName} lang="ru" />
      <Title isHidden />

      <Button>
        <Title myName={myName} lang="en" />
      </Button>

      <FnProps onLogs={handleLogs} />
    </>
  )
}

export default App