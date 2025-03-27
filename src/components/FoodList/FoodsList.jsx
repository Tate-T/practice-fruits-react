import React from 'react';
import {foodsData} from '../../data.js'
import style from './FoodsList.module.css';
import FoodItem from '../FoodsItem/FoodItem.jsx';
import Modal from '../AddModal/Modal.jsx';
/*const  FoodsList = () => {
    return (
        <div>
            <h1 className={style.title}>Foods List</h1>
            <ol className={style.foodList}>
                {foodsData.map((fooddata)=>{
                    return (
                 <FoodItem food={fooddata} />
                    )
                })}
            </ol>
        </div>
    )
}*/

class FoodsList extends React.Component{

        state ={
            food:foodsData,
            isOpen:false
        }

    onOpenModal =() =>{
        const close = this.state.isOpen
        if (close === true) {
            const searchModal = document.querySelector("#modal")
           console.log(searchModal)
            // searchModal.classList.remove('hideModal')
           console.log(searchModal)
            this.setState({isOpen: false})
            
        } else {
            const searchModal = document.querySelector("#modal")
            // searchModal.classList.add('hideModal')
           this.setState({isOpen: true})
          console.log( this.state.isOpen)
        }
    }
    addProduct(){
    
    }

    render(){
       
        return (
            <div>
                
                <h1 className={style.title}>Foods List</h1>
                <button onClick={this.onOpenModal}>Add product</button>
                <ol className={style.foodList}>
                    {foodsData.map((fooddata)=>{
                        return (
                     <FoodItem food={fooddata} />
                        )
                    })}
                </ol>
            {this.state.isOpen && <Modal close={this.onOpenModal} />}
            </div>
        )
    }
 
}


export default FoodsList;