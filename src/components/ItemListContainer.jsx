import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from '../utils/firebaseConfig'

function ItemListContainer () {
    const [datos, setDatos] = useState([])
    const { idCategory } = useParams()

    useEffect( () => {
        async function fetchData(){
        let querySnapshot
        if (idCategory) {
        let querySnapshot = await getDocs(query(collection(db, "prods"),where("category","==",idCategory)))}
        else {
        let querySnapshot = await getDocs(collection(db, "prods"))
        };

        const dataFromFirestore = querySnapshot.docs.map(item => ({
            id: item.id,
            ... item.data()
        }))
        
        dataFromFirestore.forEach((doc) => {
        setDatos(dataFromFirestore);
        })} fetchData()
    }
    , [idCategory])

    return (
        <>
            <ItemList items={datos} />
        </>
    )
    

}


export default ItemListContainer