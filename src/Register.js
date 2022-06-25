import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import './App.css'
import img from "./assests/menu.png"
import { Link } from 'react-router-dom';
function Register() {
  let navigate = useNavigate()
  const [state, setState] = useState({
    name: "",
    age: "",
    userName: ""
  })
  const URL = "http://localhost:3000"

  const handleChange = e => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault();

    let formData = { ...state }
    console.log(formData)

    axios.post(`${URL}/createUser`, formData)
      .then((res) => {
        navigate('/users')
        console.log("A new user has been successfully added.")
      })
      .catch(err => {
        console.error(err)
      })
  }

  // Firebase Configuration 

  // const [newname, steNewName] = useState()

  // const usersCollectionRef = collection(database, "users");

  // const createUser = async () => {
  //   await addDoc(usersCollectionRef, { name: newname, age: age, userName: userName })
  // }
  // const updateUser = async => {
  //   const userDoc = doc(database, "users", id);
  //   await updateDoc(userDoc)
  // }
  // const deleteUser = async => {
  //   const userDoc = doc(database, "users", id);
  //   await deleteDoc(userDoc)
  // }

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollectionRef);
  //     setDocuments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };

  //   getUsers();
  // }, []);
  

  return (
    <div className="register">
      <header>
        <Link to="/users"><img className="list" src={img} alt="" /></Link>
      </header>
      <div className="styling">
        <form className="inputdata" onSubmit={handleSubmit}>
          <h1>Add User</h1>
          <input type="text" class="form-control mb-3" name="name" placeholder="Name" onChange={handleChange} />
          <input type="number" class="form-control mb-3" name="age" placeholder="Age" onChange={handleChange} />
          <input type="text" class="form-control mb-3" name="userName" placeholder="User Name" onChange={handleChange} />
          <button className="btn btn-danger dang ">Add User</button>
        </form>
      </div>
    </div>
  );
}

export default Register;