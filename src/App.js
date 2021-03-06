import "./App.css";
import "./fontawesome";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemCategoryContainer } from "./components/ItemCategoryContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/item/:itemId">
          <ItemDetailContainer />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/category/:categoryName">
          <ItemCategoryContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
