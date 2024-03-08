import { db } from "../firebase/firebaseConfig"

export const loadNotes = async(uid) =>{
    const noteSnapshot = await db.collection(`${uid}/journal/notes`).get();
    const notes = [];

    noteSnapshot.forEach((snapshot)=>{
        notes.push({
            id:snapshot.id,
            ...snapshot.data()
        })
        
    })

    return notes;
}