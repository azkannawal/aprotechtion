import { useRef } from "react";

const Form = () => {
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      "https://script.google.com/macros/s/AKfycbxAkEboKwnGtRgmwCY7CUCqA98h1_Vv0m5qmtGhsQX8f121BRZ543XszPVicZPJxoA/exec",
      {
        method: "POST",
        body: new FormData(formRef.current),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        alert(data.msg);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div
        style={{
          width: "50%",
          height: "100vh",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form
          style={{
            textAlign: "left",
            backgroundColor: "gray",
            padding: "5%",
            borderRadius: "15px",
          }}
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <h3>Contact Form</h3>
          <div className="mb-3">
            <label>Name</label>
            <input type="text" placeholder="Enter Name" name="Name" required />
          </div>
          <div className="mb-3">
            <label>Email Id</label>
            <input
              type="email"
              placeholder="Enter email"
              name="Email"
              required
            />
            <h1 className="text-muted">
              Well never share your email with anyone else.
            </h1>
          </div>
          <div className="mb-3">
            <label>Messege</label>
            <textarea rows={3} name="Message" required />
          </div>
          <button style={{ float: "right" }} type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default Form;
