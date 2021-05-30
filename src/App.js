import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import List from "./components/List/List";
function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <Form />
        <List />
      </main>
    </div>
  );
}

export default App;
