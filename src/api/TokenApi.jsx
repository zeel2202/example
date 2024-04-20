import axios from 'axios'
import React, { useEffect, useState } from 'react'

function TokenApi() {
    // 0a5dd53d67b9ec24b96e00ff6013b569ff4240b133270a2b1d97716215a54507
    const [obj, setobj] = useState({})
    const [blankObj, setBlankObj] = useState({})
    const [aray, setAray] = useState([])
    useEffect(() => {
        fetchData()
    }, [])

    let auth = { headers: { Authorization: "Bearer 0a5dd53d67b9ec24b96e00ff6013b569ff4240b133270a2b1d97716215a54507" } }

    const fetchData = async () => {
        try {
            await axios.get("https://gorest.co.in/public/v2/users",auth).then((res) => {
                // console.log(res.data);
                setAray([...res.data])
            })

        } catch (error) {
            console.log(error);
        }
    }

    const getdata = (e) => {
        obj[e.target.name] = e.target.value
        blankObj[e.target.name] = ""
        setobj({ ...obj })
        setBlankObj({ ...blankObj })
    }
    const savedata =async () => {
        console.log(obj);
        if(obj.id === undefined){
            try {
              await  axios.post("https://gorest.co.in/public/v2/users", obj, auth).then((res) => {
                    console.log(res.data);
                    fetchData()
                })
            } catch (error) {
                console.log(error);
            }
        }else{
            try {
                console.log(obj.id);
                await axios.patch("https://gorest.co.in/public/v2/users/"+obj.id,obj,auth).then((res)=>{
                    console.log(res.data);
                    fetchData()
                })
            } catch (error) {
                console.log(error);
            }
        }
        setobj({ ...blankObj })
    }
    const editdata = async(id) => {
        try {
            await axios.get("https://gorest.co.in/public/v2/users/"+id,auth).then((res)=>{
                // console.log(res.data);
                setobj({...res.data})
            })
        } catch (error) {
            
        }
    }
    const deleteData = async(id) => {
        try {
            await axios.delete("https://gorest.co.in/public/v2/users/"+id,auth).then((res)=>{
                fetchData()
            })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <form action="" className="w-50 mx-auto shadow p-3" >
                <label className="d-block"> Name</label>
                <input
                    type="text"
                    name="name"
                    className="w-100"
                    onChange={getdata}
                    value={obj.name}
                />
                <label className="d-block">email</label>
                <input
                    type="email"
                    name="email"
                    className="w-100"
                    onChange={getdata}
                    value={obj.email}
                />

                <label className="d-block">gender</label>
                <input
                    type="radio"
                    name="gender"
                    className=""
                    onChange={getdata}
                    value={"male"}
                    checked={obj.gender === 'male'}
                />  male
                <input
                    type="radio"
                    name="gender"
                    className=""
                    value={"female"}
                    onChange={getdata}
                    checked={obj.gender === 'female'}
                />female <br />
                <label className="d-block">Status</label>
                <input
                    type="radio"
                    name="status"
                    className=""
                    onChange={getdata}
                    value={"active"}
                    checked={obj.status === 'active'}
                />  active
                <input
                    type="radio"
                    name="status"
                    className=""
                    value={"inactive"}
                    onChange={getdata}
                    checked={obj.status === 'inactive'}
                />inactive <br />

                <button className='btn btn-success' type="button" onClick={savedata}>Save</button>
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <th> name</th>
                        <th>email</th>
                        <th>Gender</th>
                        <th>status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        aray.map((x, i) => {
                            return (
                                <tr key={i}>
                                    <td>{x.name}</td>
                                    <td>{x.email}</td>
                                    <td>{x.gender}</td>
                                    <td>{x.status}</td>
                                    <td>
                                        <button className='btn btn-warning' onClick={() => editdata(x.id)}>Edit</button>
                                        <button className='btn btn-danger' onClick={() => deleteData(x.id)}>delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TokenApi