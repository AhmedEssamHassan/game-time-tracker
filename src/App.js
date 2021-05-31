import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Table from "./components/Table/Table";
import TableIcon from "./components/Table/TableIcon/TableIcon";
function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <Form />
        <List />
        {/* <Table /> */}
      </main>
      <TableIcon />
    </div>
  );
}

export default App;
