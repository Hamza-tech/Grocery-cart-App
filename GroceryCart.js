import React, { Component } from 'react';
import "./App.css"



export default class GroceryCart extends Component {
    total(){
        return this.props.items.reduce((total,item) =>{
            return total + item.price
        },0)
    }
    
    render() {
        if (this.props.items.length ===0){
            return <div id="grocery-cart">
                <p>The Cart is Empty</p>
            </div>
        }
        return (
            <div id= "groecery-cart">
                <table border= "2">
                    <tbody>
                    <tr>
                        <th>Cart</th>
                         <th>Item Name</th>
                         <th>Item Price</th>
                    </tr>
                    {this.props.items.map((item, index) =>{
                      return  <tr key={index}>
                            <td>
                                <button onClick={()=> this.props.removeFromCart(index)}>Remove</button>
                            </td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
                <p>
                    Total : ${this.total()}
                </p>
            </div>
        )
    }
}
