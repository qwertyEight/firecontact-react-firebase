import React, { useState } from "react";
import "./App.css";
import Form from "./components/form/Form";
import Contacts from "./components/table/Contacts";
import firebase from "./utils/firebase";
import { ToastContainer } from "react-toastify";
import { succesNotify } from "./utils/CustomToastify";

function App() {
  const [info, setInfo] = useState({
    username: "",
    phoneNumber: "",
    gender: "No Info!",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      const contactRef = firebase.database().ref("contact").child(info.id);
      contactRef.update(info);
      succesNotify("Updated Successfully!");
    } else {
      const inpRef = firebase.database().ref("contact");
      inpRef.push(info);
      succesNotify("Added Successfully!");
    }
    setInfo({ username: "", phoneNumber: "", gender: "" });
  };

  const editHandler = (id, username, phoneNumber, gender) => {
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
