import React, { useState } from 'react'
// Firebase
import database from "./firebase config"
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const Firebase = () => {
    // Firebase Database

const [newname, setNewName] = useState("")

const [user, setUser] = useState({
  name: "",
  age: "",
  userName: ""
})
    const usersCollectionRef = collection(database, "users");
  
    const createUser = async () => {
      await addDoc(usersCollectionRef)
    }
    const updateUser = async (id, age) => {
      const userDoc = doc(database, "users", id);
      await updateDoc(userDoc)
    }
    
  const deleteUser = async (id) => {
    const userDoc = doc(database, "users", id);
    await deleteDoc(userDoc);
  };
  
    useEffect(() => {
      const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
  
      getUsers();
    }, []);
    const handleChange = e => {
      setUser(s => ({ ...s, [e.target.name]: e.target.value }))
    }
  return (
  <div className="styling">
  <form className="inputdata" onSubmit={handleSubmit}>
    <h1>Add User</h1>
    <input type="text" class="form-control mb-3" name="name" placeholder="Name" onChange={handleChange} />
    <input type="number" class="form-control mb-3" name="age" placeholder="Age" onChange={handleChange} />
    <input type="text" class="form-control mb-3" name="userName" placeholder="User Name" onChange={handleChange} />
    <button className="btn btn-danger dang " onClick={createUser}>Add User</button>
    <button className="btn btn-danger dang " onClick={()=>{updateUser(user.name,user.age, user.userName )}}>Add User</button>
    <button className="btn btn-danger dang " onClick={()=>{deleteUser(user.id)}}>Add User</button>
    
  </form>
</div>
  )
}

export default Firebase;