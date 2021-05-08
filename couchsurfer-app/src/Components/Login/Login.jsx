import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Modal, Fade, Backdrop } from "@material-ui/core";
import styles from "./Login.module.css";
import { loginSuccess } from "../../Redux/Users/action";
import { Footer } from "../Footer/Footer";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "5px",

    width: "400px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  Input: {
    margin: "10px auto",
    width: "100%",
  },
  Buttons: {
    textAlign: "center",
  },
}));

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const users = useSelector((state) => state.auth.users);
  const [check, setCheck] = React.useState(false);

  const dispatch = useDispatch();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    const currentUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (currentUser === undefined) {
      setCheck(true);
    } else {
      setCheck(false);
      dispatch(loginSuccess(currentUser));
      localStorage.setItem("login", "true");
    }
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Login To Couchsurfing</h2>
            <div id="transition-modal-description">
              <TextField
                className={classes.Input}
                variant="outlined"
                label="Email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                className={classes.Input}
                variant="outlined"
                label="Password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {check === true ? <p>*wrong email or password</p> : <p></p>}
            <div className={classes.Buttons}>
              <Button
                fullWidth
                style={{
                  backgroundColor: "#287FB8",
                  color: "white",
                  marginTop: "20px",
                  fontWeight: "bold",
                }}
                onClick={handleLogin}
              >
                Login
              </Button>
              <p>or</p>
              <Button
                fullWidth
                style={{
                  backgroundColor: "#3B5998",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Continue with Facebook
              </Button>
            </div>
            <div className={classes.Buttons}>
              <p>Don't have account ?</p>
              <Button
                style={{
                  backgroundColor: "white",
                  width: "200px",
                  border: "1px solid #287FB8",
                  color: "#287FB8",
                  fontWeight: "bold",
                }}
              >
                Join
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
      <div className={styles.Navbar}>
        <div className={styles.Navbar__Left}>
          <img
            src="https://ht-assets.couchsurfing.com/assets/logo-orange-58ccd2edda8895d1e1742f7744683e61f2c6fa069290a9ff012ef09d51ea643b.png"
            alt="Label"
          />
        </div>
        <div className={styles.Navbar__Right}>
          <a href="https://about.couchsurfing.com/about/how-it-works/">
            How it works
          </a>
          <a href="https://about.couchsurfing.com/about/safety/">Safety</a>
          <Button> Join</Button>
          <Button onClick={handleOpen}> Log In</Button>
        </div>
      </div>

      <div className={styles.Container}>
        <div className={styles.Container__Top}>
          <h2>Stay with Locals and Meet Travelers</h2>
          <h3>Share Authentic Travel Experiences</h3>
        </div>
        <div className={styles.Container__Mid}>
          <div className={styles.Container__Mid__Left}>
            <h3>Sign Up Faster With</h3>
            <Button>Facebook</Button>
            <p>We will never post without your permission.</p>
          </div>

          <div className={styles.Container__Mid__Right}>
            <h3>Sign Up With Email</h3>
            <div>
              <TextField
                label="First Name"
                variant="outlined"
                placeholder="First Name"
              />
              <TextField
                label="Last Name"
                variant="outlined"
                placeholder="First Name"
              />
            </div>
            <div>
              <TextField label="Email" variant="outlined" placeholder="email" />
            </div>
            <div>
              <TextField
                label="Password"
                variant="outlined"
                placeholder="Password"
                type="password"
              />
            </div>
            <Button fullWidth>Join</Button>
          </div>
        </div>

        <div className={styles.Container__Bottom}>
          <h4>Already a member?</h4>
          <h4>Log In</h4>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
