import { doc, getDoc } from "firebase/firestore";
import { db } from './firebaseConfig';

export const firestoreFetchOne = async (idItem) => {
    const docRef = doc(db, "prods", idItem);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      let result = {
        id: idItem,
        ...docSnap.data()
      }
      
      return result;
    } else {

      console.log("No such document!");
    }
}