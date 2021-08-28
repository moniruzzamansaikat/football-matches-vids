import { collection, addDoc, getDocs, where, query, doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";

export const saveNewMatch = async (data) => {
  const docRef = await addDoc(collection(db, "matches"), data);
  const docId = docRef.id;
  return docId;
};

// get all saved matches
export const getSavedMatches = async (userId) => {
  const q = query(collection(db, "matches"), where("userId", "==", userId));
  const querySnapshot = await getDocs(q);

  const docs = [];

  querySnapshot.forEach((doc) => {
    docs.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return docs;
};

// remove match doc by id
export const removeDocById = async (id) => {
  return deleteDoc(doc(collection(db, "matches"), id))
    .then(function () {
      return "Item removed !";
    })
    .catch(function (error) {
      console.error("Error removing document: ", error);
    });
};
