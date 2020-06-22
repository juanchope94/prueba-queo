import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { registerCompanyRequest } from '../../redux/actions/companyAction'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';




const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "70%"
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
}));

function OutlinedTextFields(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: '',
        email: '',
        website: '',

    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
    function handleRegisterSubmit(e) {
        e.preventDefault()
        props.handleRegisterRequest(values);
    }

    return (
        <div  >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1   >Registro empresa</h1>
            </div>
            <form onSubmit={handleRegisterSubmit} className={classes.container} autoComplete="off">

                <TextField
                    id="outlined-name"
                    label="Nombre"
                    required
                    className={classes.textField}
                    value={values.name}
                    onChange={handleChange('name')}
                    margin="normal"
                    variant="outlined"
                />

                <TextField
                    id="outlined-email-input"
                    label="Email"
                    required
                    className={classes.textField}
                    type="email"
                    name="email"
                    onChange={handleChange('email')}
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                />

                <TextField
                    id="outlined-website"
                    label="Website"
                    required
                    className={classes.textField}
                    onChange={handleChange('website')}
                    margin="normal"
                    variant="outlined"
                />


                {props.loginLoad ?
                    <CircularProgress style={{ color: "#FF8000"}} />
                    :
                    <Button
                        type="submit"
                        fullWidth
                        style={{ width: "50%", backgroundColor: "#FF8000", color: "white" }}
                        className={classes.submit}

                    >
                        Registrar
                      </Button>}


            </form>
        </div>
    );
}
const mapDispatchToProps = dispatch => (
    {
        handleRegisterRequest: bindActionCreators(registerCompanyRequest, dispatch)
    }
)

const mapStateToProps = state => {
    return {
        loginLoad: state.companyReducer.loading,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OutlinedTextFields);
