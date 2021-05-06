import React, { useState } from "react";
import "./App.css";
import Form from "./components/form/Form";
import Contacts from "./components/table/Contacts";
import firebase from "./utils/firebase";

function App() {
  const [info, setInfo] = useState({
    username: "",
    phoneNumber: "",
    gender: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!info.id) {
      const inpRef = firebase.database().ref("contact");
      console.log(info);
      inpRef.push(info);
    } else {
      const contactRef = firebase.database().ref("contact").child(info.id);
      contactRef.update(info);
    }
    setInfo({ username: "", phoneNumber: "", gender: "" });
  };

  const editHandler = (id, username, phoneNumber, gender) => {
    console.log("Appjs");
    console.log("editHandler", id, username, phoneNumber, gender);
    setInfo({
      id: id,
      username: username,
      phoneNumber: phoneNumber,
      gender: gender,
    });
  };

  return (
    <div className="App">
      <Form
        className="form"
        info={info}
        setInfo={setInfo}
        handleFormSubmit={handleFormSubmit}
      />
      <Contacts className="contacts" editHandler={editHandler} />
    </div>
  );
}

export default App;
