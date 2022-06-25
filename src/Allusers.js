import React, { useState, useEffect } from "react"
import axios from "axios"
import './App.css'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

import { Link } from 'react-router-dom';
import img from "./assests/plus.png"
import edit from "./assests/edit.png"
import del from "./assests/delete.png"
function Allusers() {
    const URL = "http://localhost:3000"

    const [state, setState] = useState({
        name: "",
        age: "",
        userName: ""
    })
    const [model, setModel] = useState()

    const [modal, setModal] = useState()

    const [documents, setDocuments] = useState([])

    const handleChange = e => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    };
    const handleSubmit = (e) => {
            e.preventDefault();
    }
    useEffect(() => {
        axios.get(`${URL}/getusers`)
            .then((res) => {
                // console.log(res.data)
                setDocuments(res.data)
            })
            .catch((err) => {
             console.error(err)
            })
    }, [documents])

    const handleUpdate = doc => {
        console.log(doc);

        const {name,age,userName} = state

        let newData = { id: doc._id ,name, age, userName }

        axios.put(`${URL}/updateUser`, newData)
            .then((res) => {
                console.log("message from server", res.data)
                console.log("User has been successfully updated.")
            })
            .catch((err) => {
                console.error(err)
            })
    }
    const handleDelete = doc => {
        console.log(doc)

        const { _id } = doc

        axios.delete(`${URL}/deleteUser/${_id}`)
            .then((res) => {
                console.log("User deleted")
                console.log("message from server", res.data)
                // setDocuments(res.data)
                let newArray = documents.filter((doc, i) => {
                    return _id !== doc._id
                })
                setDocuments(newArray)



            }).catch((err) => {
                console.error(err)
            })
    }
    return (
        <div className="Allusers">
            <h1 className="uslist">Users List</h1>
            <table className="table  mt-5 " >
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Activity</th>
                    </tr>
                </thead>
                <tbody>
                    {documents.map((doc, i) => {
                        return <React.Fragment key={i}>
                            <tr >
                                <td><b><p>{doc.name}</p></b></td>
                                <td><b><p>{doc.age}</p></b></td>
                                <td><b><p>{doc.userName}</p></b></td>
                                <td>
                                    <img className="edit" src={edit} onClick={() => setModal(true)} alt="" />
                                    <img className="del" src={del} onClick={() => setModel(true)} alt="" />
                                </td>

                            </tr>

                            <Modal
                                centered
                                isOpen={model}
                                toggle={() => setModel(!model)}>
                                <ModalHeader toggle={() => setModel(!model)}>
                                    <h3>Delete User</h3>
                                </ModalHeader>
                                <ModalBody>
                                    Are you sure to delete user from list ?
                                </ModalBody>
                                <ModalFooter>
                                    <button className="cancel" >Cancel</button>
                                    <button className="btn btn-danger" onClick={() => { handleDelete(doc) }}>Delete</button>
                                </ModalFooter>
                            </Modal>
                            {/* Update Model */}
                            <Modal
                                centered
                                isOpen={modal}
                                toggle={() => setModel(!modal)}>
                                <ModalHeader toggle={() => setModal(!modal)}>
                                    <h3>
                                        Change User Data
                                    </h3>
                                </ModalHeader>
                                <ModalBody>
                                    <div>
                                        <form className="modaldata" onSubmit={handleSubmit}>
                                            
                                        <input type="text" class="form-control mb-3" name="name" placeholder="Name" onChange={handleChange} />
                                        <input type="number" class="form-control mb-3" name="age" placeholder="Age" onChange={handleChange} />
                                        <input type="text" class="form-control mb-3" name="userName" placeholder="User Name" onChange={handleChange} />
                                        </form>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <button className="btn btn-dark" onClick={() => { handleUpdate(doc) }}>Update User</button>
                                </ModalFooter>
                            </Modal>
                        </React.Fragment>

                    })}


                </tbody>
            </table>
            <footer>
                    <Link to="/"><img className="user" src={img} alt="" /></Link>
            </footer>
        </div>
    );
}

export default Allusers;
