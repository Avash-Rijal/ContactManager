import { useState } from "react";

const ContactAdder = (props) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      fname.length < 1 ||
      lname.length < 1 ||
      mobile.length < 1 ||
      email.length < 1 ||
      location.length < 1
    ) {
      alert("Please fill all the boxes.");
    } else {
      const contactInfo = {
        id: Math.random(),
        firstName: fname,
        lastName: lname,
        mobile,
        email,
        location,
      };
      props.onContactAdded(contactInfo);
      setFname("");
      setLname("");
      setEmail("");
      setMobile("");
      setLocation("");

      props.onSubmit(false);
    }
  };
  return (
    <>
      {props.showBox ? (
        <div className="contactAdderBox">
          <h3 style={{ margin: "0px" }}>Fill the details: </h3>
          <br></br>
          <form>
            <label id="name">Name: </label>
            <br></br>
            <input
              id="name"
              type="text"
              name="name"
              value={fname}
              placeholder="First Name"
              onChange={(e) => setFname(e.target.value)}
              style={{ marginRight: "5px" }}
            ></input>
            <input
              id="name"
              type="text"
              name="name"
              value={lname}
              placeholder="Last Name"
              onChange={(e) => setLname(e.target.value)}
            ></input>
            <br></br>
            <br></br>
            <label id="phone">Phone: </label>
            <br></br>
            <input
              id="phone"
              type="number"
              name="number"
              value={mobile}
              placeholder="Number"
              onChange={(e) => setMobile(e.target.value)}
            ></input>
            <br></br>
            <br></br>
            <label id="email">Email: </label>
            <br></br>
            <input
              id="email"
              type="mail"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <br></br>
            <br></br>
            <label id="location">Location: </label>
            <br></br>
            <input
              id="location"
              type="text"
              name="location"
              value={location}
              placeholder="Location"
              onChange={(e) => setLocation(e.target.value)}
            ></input>
            <br></br>
            <br></br>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
};

export default ContactAdder;
