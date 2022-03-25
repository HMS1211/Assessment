import React, { Component } from 'react';
import TableActionButtons from './TableActionButtons';


class TableRow extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <th>{ this.props.data.id }</th>
                <td>{ this.props.data.name }</td>
                <td>{ this.props.data.description }</td>
                <td>{ this.props.data.price }</td>
                
                <td>
                    
                    <TableActionButtons eachRowId={ this.props.data.id }/>
                </td>
            </tr>
        )
    }
}

export default TableRow;