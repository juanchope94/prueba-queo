import React, { useEffect, useLayoutEffect } from 'react';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { forwardRef } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { listCompanyRequest, deleteCompanyRequest } from '../../redux/actions/companyAction'



const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};


function MaterialTableDemo(props) {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Email', field: 'email' },
            { title: 'Website', field: 'website' },

        ],
        data: [
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            {
                name: 'Zerya Betül',
                surname: 'Baran',
                birthYear: 2017,
                birthCity: 34,
            },
        ],
    });

    useLayoutEffect(() => {
        props.handleListRequest();
    }, []);

    return (
        <MaterialTable
            icons={tableIcons}
            title="Lista de empresas"
            columns={state.columns}
            isLoading={props.loadTab}
            data={props.companys}
            detailPanel={rowData => {
                console.log(rowData)
                return (
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        {rowData.logo !== null ?
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <h1>Logo: &nbsp;&nbsp;&nbsp; </h1>
                                <img src={rowData.logo} style={{ width: '200px', height: "auto" }} />
                            </div>
                            :
                            <h1>No tiene logo</h1>
                        }

                    </div>)


            }}
            editable={{
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data.push(newData);
                            setState({ ...state, data });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data[data.indexOf(oldData)] = newData;
                            setState({ ...state, data });
                        }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        resolve();
                        props.handleDeleteRequest(oldData.id)
                    }),
            }}
        />
    );
}

const mapDispatchToProps = dispatch => (
    {
        handleListRequest: bindActionCreators(listCompanyRequest, dispatch),
        handleDeleteRequest: bindActionCreators(deleteCompanyRequest, dispatch)

    }
)

const mapStateToProps = state => {
    return {
        companys: state.companyReducer.companys,
        loadTab:  state.companyReducer.loadTable
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MaterialTableDemo);
