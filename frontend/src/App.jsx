import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
