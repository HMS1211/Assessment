import axios from 'axios';
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class CreateModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            productName: null,
            productPrice: null,
        }
        // this.state = {
        //     productName: null,
        //     productPrice: null,
            // productDescription: null,
       // }
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





    // Creating product name state.

    // inputProductName = (event) => {
    //     this.setState({
    //         productName: event.target.value,
    //     });

    // }

    // Creating product price state.

    // inputProductPrice = (event) => {
    //     this.setState({
    //         productPrice: event.target.value,
    //     });

    // }

    // inputProductDescription = (event) => {
    //     this.setState({
    //         productDescription: event.target.value,
    //     });
    // }

    // Storing product Data.

    storeProductList = () => {
        axios.post('/store/products/list', {
            productName: this.state.productName,
            productprice: this.state.productPrice,
            // productDescription: this.state.productDescription,
        }).then((response) => {
            toast.success("Product Saved Successfully");
            console.log(response.data);

            // setTimeout(() => {
            //     location.reload();
            // },2500)
        })
    }

    render() {
        return (
            <>
                <div className='row text-right mb-3 pb-3'>
                    <button className='btn btn-info text-right col-3 offset-md-9'
                        data-toggle="modal"
                        data-target="#modalCreate"
                    >
                        Add New Product
                    </button>
                </div>
                <div className="modal fade" id="modalCreate"  tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">product Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <form className='form'>
                                <div className="form-group">
                                    <input type="text"
                                        id="productName"
                                        className='form-control mb-3'
                                        placeholder='Product Name'
                                        onChange={this.inputProductName}
                                    />
                                </div>  

                                <div className="form-group">
                                    <input type="text"
                                        id="productprice"
                                        className='form-control mb-3'
                                       placeholder='Product Price'
                                        onChange={this.inputProductPrice}
                                    />
                                </div>  
                            </form> 
                                {/* <form className='form'>
                                    <div className="form-group">
                                        <input type="text"
                                            id="productName"
                                            className='form-control mb-3'
                                            placeholder="Product Name Here"
                                            onChange={this.inputProductName}
                                        />
                                    </div>  

                                    <div className="form-group">
                                        <input type="text"
                                            id="productPrice"
                                            className='form-control mb-3'
                                            placeholder="Price Here"
                                            onChange={this.inputProductPrice}
                                        />
                                    </div> */}
                                    {/* <div className="form-group">
                                        <input type="text"
                                        id="productDescription"
                                        className='form-control mb-3'
                                        placeholder="Description Here"
                                        onChange={this.inputProductDescription}
                                        />
                                    </div> */}

                                {/* </form>  */}
                        </div>
                            <div className="modal-footer">
                            <input type="button"
                                    value="Save"
                                    className='btn btn-info'
                                onClick={this.storeProductList}
                                        />

                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </>
        )
    }
}

export default CreateModal;