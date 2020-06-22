import React from 'react'
import List from './list-company'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { listCompanyRequest } from '../../redux/actions/companyAction'

class Container extends React.Component {
    componentDidMount() {
        this.props.handleListRequest()
    }

    render() {
        return (
            <List />
        );
    }

}

const mapDispatchToProps = dispatch => (
    {
        handleListRequest: bindActionCreators(listCompanyRequest, dispatch)
    }
)

const mapStateToProps = state => {
    return {
        companys: state.companyReducer.companys,
    }
}

export default connect(null, mapDispatchToProps)(Container);