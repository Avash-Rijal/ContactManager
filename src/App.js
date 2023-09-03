import { useState } from "react";
import ContactAdder from "./Components/ContactAdder";
import Contact from "./Components/Contact";

function App() {
  const [showBox, setShowBox] = useState(false);

  const getContactList = JSON.parse(localStorage.getItem("Contacts"));
  const [contactList, setContactList] = useState(
    getContactList ? getContactList : []
  );
  const addContactData = (contactInfo) => {
    let allContacts = [...contactList, contactInfo];
    setContactList(allContacts);
    localStorage.setItem("Contacts", JSON.stringify(allContacts));
  };
  const removeContactList = () => {
    setContactList([]);
    localStorage.clear();
  };

  const openContactAdder = () => {
    setShowBox(true);
  };

  const closeContactAdder = () => {
    setShowBox(false);
  };

  return (
    <>
      <ContactAdder
        showBox={showBox}
        onSubmit={closeContactAdder}
        onContactAdded={addContactData}
      ></ContactAdder>

      <h1 style={{ margin: "0px" }}>Contact List:</h1>
      <br></br>
      {contactList.map((data) => (
        <Contact data={data}></Contact>
      ))}
      <button onClick={openContactAdder} style={{ marginRight: "5px" }}>
        Add Contact
      </button>
      <button onClick={removeContactList} style={{ background: "#ac0d0d" }}>
        Clear List
      </button>
    </>
  );
}

export default App;
