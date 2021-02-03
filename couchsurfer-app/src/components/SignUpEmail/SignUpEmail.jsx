import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../../Redux/Users/action";
import styles from "./SignUpEmail.module.css";
 const obj={
  name: "",
  email: "",
  password: "",
  username: "",
  mobile: "999999999",
  description: "A Transformation in education!" 
}

const SignUpEmail = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    obj.name = `${firstName} ${lastName}`;
    console.log(obj);
    e.preventDefault();
    dispatch(register(obj));

  }
  const { email, password } = obj;

  return (
    <div className={styles.signUpEmail__background}>
      <div>Sign Up With Email</div>

      <form onSubmit={handleSubmit}>
        <div className={styles.signUpEmail__label}>
          <label>First Name</label>
          <input type="text" onChange={(e)=>setFirstName(e.target.value)}  placeholder="First Name" />
        </div>

        <div className={styles.signUpEmail__label}>
          {/* <input type="text" placeholder="First Name" /> */}
          <label>Last Name</label>
          <input type="text" onChange={(e)=>setLastName(e.target.value)} placeholder="Last Name" />
        </div>

        <br />
        <div className={styles.signUpEmail__label}>
          <label>Email</label>
          <input type="text" onChange={(e)=>obj.email=e.target.value} placeholder="Email" />
        </div>
        <br />
        <br />

        <div className={styles.signUpEmail__label}>
          <label>Password</label>
          {/* <p>Must be at least 8 characters</p> */}
          <input type="password"  onChange={(e)=>obj.password=e.target.value} placeholder="Password" />
        </div>

        <div className={styles.signUpEmail__join}>
          <input type="submit"  value="Join" />
        </div>
        <br />
      </form>
    </div>
  );
};

export { SignUpEmail };
