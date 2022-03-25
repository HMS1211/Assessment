import axios from 'axios';
import React, { Component } from 'react';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class UpdateModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            productName: null,
            productPrice: null,
        }
    }

    inputProductName = (event) => {
        this.setState({
            productName: event.target.value,
        });

    }

    inputProductPrice = (event) => {
        this.setState({
            productPrice: event.target.value,
        });

    }

    static getDerivedStateFromProps(props, current_state) {

        let productUpdate = {
            productName: null,
            productPrice: null,
        } 
         //  up data
         if(current_state.productName && (current_state.productName !== props.productList.currentproductName)) {
             return null;
         }
            if(current_state.productPrice && (current_state.productPrice !== props.productList.currentproductPrice)) {
                return null;
            }



        //update prop
        if(current_state.productName !== props.productList.currentproductName ||
            current_state.productName === props.productList.currentproductName){
            productUpdate.productName = props.productList.currentproductName;
        }
        if(current_state.productPrice !== props.productList.currentproductPrice ||
            current_state.productPrice === props.productList.currentproductPrice ){
            productUpdate.productPrice = props.productList.currentproductPrice;
            
       }
        return productUpdate;

    }

    updateProductList = () => {
        axios.post('/update/products/list', {
            productId: this.props.modalId,
            productName: this.state.productName,
            productPrice: this.state.productPrice,
        }).then(() => {

            //console.log(response);
            // location.reload();
            toast.success("Product Updated Successfully");

            setTimeout(() => {
                location.reload();
            },2500)
        })
    

    }

    render() {
        return (
            <div className="modal fade" id={"updateModal"+this.props.modalId } tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Products Details</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <form className='form'>
                                <div className="form-group">
                                    <input type="text"
                                        id="productName"
                                        className='form-control mb-3'
                                        value={this.state.productName ?? ""}
                                        onChange={this.inputProductName}
                                    />
                                </div>  

                                <div className="form-group">
                                    <input type="text"
                                        id="productprice"
                                        className='form-control mb-3'
                                        value={this.state.productPrice ?? ""}
                                        onChange={this.inputProductPrice}
                                    />
                                </div>  
                            </form> 
                    </div>
                    <input type="submit"
                                className="btn btn-info"
                                value="Update"
                                onClick={this.updateProductList}
                            />
                         
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateModal;