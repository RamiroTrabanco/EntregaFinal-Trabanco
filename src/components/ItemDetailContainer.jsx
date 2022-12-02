import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { firestoreFetchOne }from '../utils/firebaseFetch'

function ItemDetailContainer () {
    const [dato, setDato] = useState()
    const { idItem } = useParams()

    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [idItem]);

    return (
            <>
            {
            dato && <ItemDetail item={dato} />
            }
            </>
    )
    

}


export default ItemDetailContainer