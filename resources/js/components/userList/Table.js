import axios from 'axios';
import React, { Component } from 'react';
import {ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TableRow from './TableRow';
import CreateModal from './Modals/CreateModal';



class Table extends Component {



    constructor(props) {
        super(props);
        this.state = { 
            products: [],
        }
    }
            //    life cycle
        componentDidMount() {
            this.getProductList();
        }
      
        //get product list

    getProductList=()=>{ 
        let self = this;

        axios.get('/get/products/list').then(function(response){
            //console.log(response.data);
            self.setState({
                products: response.data

            });
        });


    }
/////////////////////////////









    render() {

        return (
            <div className="container">
                <ToastContainer />
                
                <div className="row justify-content-center">
                    <div className="col-md-8"><CreateModal />
                        <div className="card"> 
                        <table className="table table-striped" >
                       
                        <thead>
                            <tr>
                            <th scope="col" width="100px">#</th>
                            <th scope="col" width="100px">Products</th>
                            <th scope="col" width="100px">Description</th>
                            <th scope="col" width="100px">Price</th>
                            <th scope="col" width="100px">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.products.map(function (x, i) {
                                    return <TableRow key={i} data={x} />
                                })}
                            
                           
                        </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        );


    }
}


export default Table;


