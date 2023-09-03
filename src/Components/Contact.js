const Contact = (props) => {
  return (
    <div className="contact">
      Name:
      {props.data.firstName} {props.data.lastName}
      <br></br>
      Mobile:
      {props.data.mobile}
      <br></br>
      Email:
      {props.data.email}
      <br></br>
      Location:
      {props.data.location}
    </div>
  );
};

export default Contact;
