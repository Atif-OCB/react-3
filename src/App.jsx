import Title from "./components/Title";


const App = () => {
  const myName = "Atif";

  return (
    <>
      <div>App</div>
      <Title myName={myName} />
      <Title myName={myName} lang="en" />
      <Title myName={myName} lang="my" />
      <Title myName={myName} lang="ru" />
      <Title isHidden />
    </>
  )
}

export default App