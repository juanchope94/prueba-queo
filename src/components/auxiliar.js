import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Productos from './productos';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {productRequest} from '../redux/actions/productActions'



class auxiliar extends Component {
    componentDidMount(){
            this.props.handleProductRequest()
    }
    render() {
        return (
            <div>
                <Link to={{
                    pathname: `/productos`
                }} >
                    <h1>Consultar productos</h1>
                </Link>
                <Switch>
                    <Route path="/productos" component={Productos} />
                </Switch>
            </div>


        );
    }
}

const mapDispatchToProps= dispatch =>(
    {
        handleProductRequest : bindActionCreators(productRequest,dispatch)
    }
)

export default connect(null,mapDispatchToProps)( auxiliar);
