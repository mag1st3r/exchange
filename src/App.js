import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./services/history";
import { Routes } from "./routes/Routes";

function App() {
  return (
    <ConnectedRouter history={history}>
      <Routes history={history} />
    </ConnectedRouter>
  );
}

export default App;
