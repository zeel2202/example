import React, { useEffect, useState } from 'react'
import axios from "axios"
import $, { error } from "jquery";
import { loaderFunc } from './loderFunc';
import Swal from 'sweetalert2'


function ApiCrud() {
  const [obj, setobj] = useState({ hobbies: [] })
  const [blankObj, setBlankObj] = useState({ hobbies: [] })
  const [aray, setAray] = useState([])
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    loaderFunc(true)
    await axios.get("https://student-api.mycodelibraries.com/api/student/get").then((res) => {
      console.log(res.data);
      setAray([...res.data.data]);
      loaderFunc(false)
    })
    // fetch("https://student-api.mycodelibraries.com/api/student/get").then(async(res)=>{
    //   const data =await res.json()
    //   setAray([...data.data])
    //   // console.log(await res.json());
    // })
    // $.ajax({
    //   type: 'GET',
    //   url: 'https://student-api.mycodelibraries.com/api/student/get',
    //   success: function (data, status, xhr) {
    //     console.log('data: ', data);
    //     setAray([...data.data])
    //   }
    // });
  }

  const getdata = (e) => {
    if (e.target.name === 'hobbies') {
      if (e.target.checked) {
        obj.hobbies.push(e.target.value)
      } else {
        obj.hobbies = obj.hobbies.filter((x) => x !== e.target.value)
      }
      blankObj.hobbies = []
    } else {
      obj[e.target.name] = e.target.value
      blankObj[e.target.name] = ''
    }
    setBlankObj({ ...blankObj })
    setobj({ ...obj })
  }
  const savedata = async () => {
    // console.log(obj._id);
    if (obj._id === undefined) {
      try {
        //   await axios.post("https://student-api.mycodelibraries.com/api/student/add",obj).then((res)=>{
        // console.log(res);
        // fetchData()

        // })
        // obj.age = Number(obj.age)
        loaderFunc(true)
        Swal.fire({
          position: "top-end",
          title: "Do you want to save the changes?",
          showDenyButton: true,
          confirmButtonText: "Save",
          denyButtonText: `Don't save`
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            fetch("https://student-api.mycodelibraries.com/api/student/add", {
              method: "POST",
              body: JSON.stringify(obj),
              headers: {
                "Content-Type": "application/json",
              },
            }).then((res) => {
              loaderFunc(false)
              fetchData()
            })
            Swal.fire("Saved!", "", "success");
            setobj({ ...blankObj })
          } else if (result.isDenied) {
            loaderFunc(false)
            Swal.fire("Changes are not saved", "", "info");
          }else if (result.isDismissed){
            loaderFunc(false)
          }
        });
      
      } catch (error) {
        console.log(error);
      }
      setobj({ ...obj })
    } else {
      obj.id = obj._id
      try {
        // axios.post("https://student-api.mycodelibraries.com/api/student/update",obj).then((res)=>{
        //   console.log(res);
        //   fetchData()
        // })
        fetch('https://student-api.mycodelibraries.com/api/student/update', {
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
            "Content-Type": "application/json"
          }
        }).then((res) => {
          fetchData()
        })
      }
      catch (error) {
        console.log(error);
      }
    }
    
  }
  const deleteData = async (id) => {
    try {
      //   await axios.delete(`https://student-api.mycodelibraries.com/api/student/delete?id=${id}`).then((res)=>{
      //     fetchData()
      //   console.log(res.data);
      //  })
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          loaderFunc(true)
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          fetch(`https://student-api.mycodelibraries.com/api/student/delete?id=${id}`, {
        method: "DELETE"
      }).then((res) => {
        loaderFunc(false)
        fetchData()
      })
        }
      });
     
      
    } catch (error) {
      console.log(error.message);
    }
    // console.log(id);
  }
  const editdata = (id) => {
    try {
      // axios.get ("https://student-api.mycodelibraries.com/api/student/get-student-by-id?id="+id).then((res)=>{
      //   console.log(res.data.data);
      //   setobj({...res.data.data})
      // })

      loaderFunc(true)
      fetch("https://student-api.mycodelibraries.com/api/student/get-student-by-id?id=" + id, {
        method: "GET"
      }).then(async (res) => {
        const editObj = await res.json()
        loaderFunc(false)
        setobj({ ...editObj.data })
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      c
      <table className="table">
        <thead>
          <tr>
            <th>First name</th>
            <th>last name</th>
            <th>age</th>
            <th>city</th>
            <th>Gender</th>
            <th>Hobbies</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>

          {
            aray.map((x, i) => {
              return (
                <tr key={i}>
                  <td>{x.firstName}</td>
                  <td>{x.lastName}</td>
                  <td>{x.age}</td>
                  <td>{x.city}</td>
                  <td>{x.gender}</td>
                  <td>{x.hobbies}</td>
                  <td>
                    <button className='btn btn-warning' onClick={() => editdata(x._id)}>Edit</button>
                    <button className='btn btn-danger' onClick={() => deleteData(x._id)}>delete</button>
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

export default ApiCrud