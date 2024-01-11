import { firestore, analytics } from "./firebase";
import {collection, addDoc} from 'firebase/firestore'
import {logEvent} from 'firebase/analytics'

const sentEmail = async (data) => {
    const collectionRef = collection(firestore, 'Contact');

    try{
        await addDoc(collectionRef, data)

        return 'Message sent successfully';
    }catch(err){
        return err.message
    }

}

const getAnalytics = (eventName) => {
    try{
        logEvent(analytics, eventName);
    }catch(err){
        console.log(err.message);
    }
}

export {sentEmail, getAnalytics}