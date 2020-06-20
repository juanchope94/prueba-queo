import React, { Component } from 'react';
import {connect} from 'react-redux';




class productos extends Component {

    render() {
        return (
            <div>
               {this.props.lista.map(item=>{
                   return <img src={item.imagen_principal.ruta}></img>
               })}
            </div>


        );
    }
}

const mapStateToProps= state =>{
    return{
        lista :state.productos
    }
}

export default connect(mapStateToProps,null)( productos);
