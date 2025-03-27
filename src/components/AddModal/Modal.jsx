import React from "react";
import { Component } from "react";
import style from "./Modal.module.css";
//import { VscChromeClose } from "react-icons/vsc";
class Modal extends Component {

    state = {
        info: null
    }

    getInformation = (event) => {
        event.preventDefault();
        const name = event.target.elements.productName.value;
        const photo = event.target.elements.productPhoto.value;
        const price = event.target.elements.productPrice.value;
        const description = event.target.elements.productDescription.value;
        const productInfo = {
            productName: name,
            productPhoto: photo,
            productPrice: price,
            productDescription: description
        }
        //this.setState({info: productInfo})
        //{...{ info: null,test:'test'},...{info: productInfo}}
        this.setState({ info: productInfo })

    }

    /*const testTask = (a,b) => {
     const sum = a+b;
     return sum;
     }
    //Явне повернення
 
 
 
    //Неявне повернення
    //      const testTask = (a,b) => a+b;
     */





    render() {
        console.log(this.state.isOpen)
        return (
            <div className={style.backdrop} id="modal">
                <div className={style.modal}>
                  <button type="button" onClick={this.props.close} className={style.btn} >
                    Close
                  </button>
                    <form onSubmit={this.getInformation}>
                        <label>
                            <input type="text" name="productName" placeholder="Name" />
                        </label>
                        <label>
                            <input type="text" name="productPhoto" placeholder="Photo" />
                        </label>
                        <label>
                            <input type="number" name="productPrice" placeholder="price" />
                        </label>
                        <label>
                            <input type="text" name="productDescription" placeholder="description" />
                        </label>
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default Modal;