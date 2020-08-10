import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Logo from "./../../assets/queoLogo.png";
import Diplomatix from "./../../assets/Diplomatix.png";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loginRequest } from "../../redux/actions/loginAction";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Redirect } from "react-router-dom";
import Modal from "./../../components/modalLogin/modalLogin";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = (props) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const classes = useStyles();

  function handleStatusChange(e) {
    e.preventDefault();
    props.handleLoginRequest(Email, Password);
  }

  return (
    <Container component="main" maxWidth="xs">
      <Modal open={props.openModal} />
      <CssBaseline />
      <div className={classes.paper}>
        <img src={Diplomatix} style={{ width: "170px", height: "auto" }} />

        <form onSubmit={handleStatusChange} className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            placeholder="example@correo.com"
            label="Email Address"
            name="email"
            type="email"
            autoComplete="email"
            autoFocus
            onChange={() => setEmail(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={() => setPassword(event.target.value)}
          />
          {props.loginLoad ? (
            <CircularProgress style={{ color: "#FF8000", marginLeft: "42%" }} />
          ) : (
            <Button
              type="submit"
              fullWidth
              style={{ backgroundColor: "#FF8000", color: "white" }}
              className={classes.submit}
            >
              Iniciar sesión
            </Button>
          )}
          {props.tokenLogin !== "" ? (
            <Redirect to="/dashboard/list_companys" />
          ) : null}
        </form>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleLoginRequest: bindActionCreators(loginRequest, dispatch),
});

const mapStateToProps = (state) => {
  return {
    loginLoad: state.loginReducer.loading,
    tokenLogin: state.loginReducer.token,
    openModal: state.loginReducer.openModal,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
