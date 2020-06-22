import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import WarningIcon from '@material-ui/icons/Warning';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { closeModal } from '../../redux/actions/loginAction'


function AlertDialog(props) {
    const handleClose = () => {
        props.handleCloseModal()
    };
    return (
        <div>
            <Dialog
                open={props.open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Advertencia "}<WarningIcon /></DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <h4 style={{color:'black'}}>Credenciales incorrectas, por favor revise y vuelva a intentar</h4>
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Aceptar
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const mapDispatchToProps = dispatch => (
    {
        handleCloseModal: bindActionCreators(closeModal, dispatch)
    }
)


export default connect(null, mapDispatchToProps)(AlertDialog);