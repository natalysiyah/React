import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Search from "./Components/Search/Search";
import ContactList from "./Components/Contact list/Contact list";

const App = () => {
  const List = [
    {
      name: "Jack Sparrow",
      description: "Capitan jack",
      avatar: "https://bootdey.com/img/Content/user_1.jpg",
      facebook: "#",
      twitter: "#"
    }
  ];
  return (
    <div class="container bootstrap snippet">
      <Search />
      <ContactList ContactList={List} />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
