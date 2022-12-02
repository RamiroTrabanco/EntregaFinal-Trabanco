import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ( { children } ) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
    const findItem = cartList.find(prod => prod.idItem === item.id);

        if (findItem === undefined) { 
            setCartList([...cartList, 
            {
                idItem: item.id,
                imgItem: item.img,
                titleItem: item.title,
                priceItem: item.price,
                qtyItem: qty
            }
        ]);}
        
        else {
            findItem.qtyItem += qty
            setCartList([...cartList]);
        }
    }
    
    const clear = () => {
        setCartList([]) 
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.idItem != id)
        setCartList(result)
    }

    const totalCartQty = () => {
        let cartQty = cartList.map(item => item.qtyItem)
        return cartQty.reduce(((previousValue, currentValue) => previousValue + currentValue), 0)
    }

    const totalPerItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].priceItem * cartList[index].qtyItem;
    }

    const totalCart = () => { 
        let total = cartList.map(item => totalPerItem(item.idItem));
        return total.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, clear, deleteItem, totalCartQty, totalPerItem , totalCart}}>
            { children }
        </CartContext.Provider>
    )
}


export default CartContextProvider