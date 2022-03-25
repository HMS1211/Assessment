import React, { Component } from 'react';
// import TableActionButtons from './TableActionButtons';
import ViewModal from './Modals/ViewModal';
 import UpdateModal from './Modals/UpdateModal';
 import DeleteModal from './Modals/DeleteModal';
import axios from 'axios';


class TableActionButtons extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentproductName: null,
            currentProductPrice: null,
        }
    }

    getProductList = (id) => {

        let self = this;

        axios.post('/get/individual/products/list', {
            productId: id
        }).then((response) => {
            //console.log(response.data);
            self.setState({
               currentproductName: response.data.name,
                currentproductPrice: response.data.price,
            });
            console.log(response.data);
        });

    }

    render() {
        return (
            <div className="btn-group" role="group" >
            <button type="button" className="btn btn-success"data-bs-toggle="modal"
                    data-bs-target={'#viewModal'+this.props.eachRowId}
                    onClick={ () => { this.getProductList(this.props.eachRowId) }}>View</button>
                    <ViewModal modalId={this.props.eachRowId} productList={ this.state }/>


            <button type="button" className="btn btn-warning" data-bs-toggle="modal"
                    data-bs-target={'#updateModal' + this.props.eachRowId}
                   onClick={() => { this.getProductList(this.props.eachRowId) }}>Update</button>
                   <UpdateModal modalId={this.props.eachRowId} productList={ this.state }/>



            <button type="button" className="btn btn-danger"data-bs-toggle="modal"
                    data-bs-target={'#deleteModal' + this.props.eachRowId}
                    onClick={() => { this.getProductList(this.props.eachRowId) }}>Delete</button>
            <DeleteModal  modalId={this.props.eachRowId} productList={ this.state }/>
             </div>
        )
    }
}

export default TableActionButtons;