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
import { closeModal } from '../../redux/actions/companyAction'


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
                        {props.messages.map(item=>{
                            if(item.code_message === '[REGISTERED]')
                            {
                                return <h4 style={{color:'black'}}>Empresa registrada satisfactoriamente</h4>
                            }
                            if(item.code_message === '[ERR_UNIQUE]')
                            {
                                return <h4 style={{color:'black'}}>- Error: El email ya se encuentra registado</h4>
                            }
                            if(item.code_message === '[NOTHING]')
                            {
                                return <h4 style={{color:'black'}}>- Error: Formato invalido en el website, ejemplo de un formato correcto: https://www.queo.com</h4>
                            }
                            if(item.code_message === '[DELETED]')
                            {
                                return <h4 style={{color:'black'}}>La empresa se elimino correctamente!</h4>
                            }
                            if(item.code_message === '[UPDATED]')
                            {
                                return <h4 style={{color:'black'}}>La empresa se actualizo correctamente!</h4>
                            }
                           
                        })}
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