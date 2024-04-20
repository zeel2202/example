import React, { useEffect, useRef, useState } from "react";

function CrudFunc() {
  let [obj, setobj] = useState({ hobbies: [] });
  let [blankObj, setBlankObj] = useState({ hobbies: [] });
  let [aray, setAray] = useState([]);
  let formref = useRef();
  let inputRef = useRef();
  let [count, setCount] = useState(0);
  let [errObj, setErrObj] = useState({});
  const [errAray, setErrAray] = useState([]);
  const [filterObj, setfilterObj] = useState({name:'',email:''})
  const [filteraray, setFilteraray] = useState([])

  // console.log(obj);
  // useEffect(() => {
  //   // console.log('akdmsfn');
  //   // console.log(JSON.parse(localStorage.getItem("aray")));
  //   const locataray = JSON.parse(localStorage.getItem("aray"));
  //   const localfilteraray = JSON.parse(localStorage.getItem("filteraray"));
  //   const localcount = JSON.parse(localStorage.getItem("count"));
  //   const localblank = JSON.parse(localStorage.getItem("blankobj"));

  //   // console.log(locataray);
  //   if (localcount && locataray && localblank && localfilteraray) {
  //     setAray(locataray);
  //     setCount(localcount);
  //     setBlankObj(localblank);
  //     setFilteraray(localfilteraray)
  //   }
  // }, []);
  // useEffect(() => {
  //   // console.log(aray);
  //   localStorage.setItem("aray", JSON.stringify(aray));
  //   localStorage.setItem("count", JSON.stringify(count));
  //   localStorage.setItem("blankobj", JSON.stringify(blankObj));
  //   localStorage.setItem("filteraray", JSON.stringify(filteraray));
  // }, [aray, count, blankObj]);

  const getdata = async (e) => {
    console.log(obj);
    if (e.target.type === "checkbox") {
      if (e.target.checked) {
        // console.log( obj.hobbies);
        obj.hobbies.push(e.target.value);
        // sethobbies([...hobbies])
        // console.log(obj.hobbies);
        // obj[e.target.name]=hobbies;
        // console.log(obj.hobbies);
      } else {
        // console.log(e.target.value);
        const newAray = obj.hobbies.filter((x) => x !== e.target.value);
        //  console.log(newAray);
        obj.hobbies = newAray;
      }
      blankObj.hobbies = [];
    } else if (e.target.type === "file") {
      obj[e.target.name] = await getBase64(e.target.files[0]);
      console.log(e.target.files[0].name);
      blankObj[e.target.name] = "";
      e.target.value = "";
    } else {
      obj[e.target.name] = e.target.value;
      blankObj[e.target.name] = "";
    }
    // console.log(obj.profile);
    // setobj({...obj})
    setBlankObj({ ...blankObj });

    if (e.target.name === "name") {
      if (e.target.value === "") {
        errObj[e.target.name] = "Name is required.";
      } else if (!/^[a-zA-Z]+$/.test(e.target.value)) {
        errObj[e.target.name] = "Name must be Alphabet.";
      } else {
        errObj[e.target.name] = "";
      }
    }
    if (e.target.name === "email") {
      if (e.target.value === "") {
        errObj[e.target.name] = "email is required.";
      } else if (
        !(
          e.target.value.includes("@gmail.com") ||
          e.target.value.includes("@yahoo.com")
        )
      ) {
        errObj[e.target.name] = "Email is invalid !";
      } else {
        errObj[e.target.name] = "";
      }
    }
    if (e.target.name === "gender") {
      if (!e.target.checked) {
        errObj[e.target.name] = "gender is required.";
      } else {
        errObj[e.target.name] = "";
      }
    }
    if (e.target.name === "hobbies") {
      if (obj.hobbies.length === 0) {
        errObj[e.target.name] = "hobbies is required";
      } else if (obj.hobbies.length < 3) {
        errObj[e.target.name] = "hobbies must be 3";
      } else {
        errObj[e.target.name] = "";
      }
    }
    if (e.target.name === "profile") {
      if (!obj.profile) {
        errObj[e.target.name] = "profile is required";
      } else {
        errObj[e.target.name] = "";
      }
    }
    if (e.target.name === "number") {
      if (e.target.value.length === 0) {
        errObj[e.target.name] = "Number is required";
      } else if (e.target.value.length !== 10 || e.target.value <= 0) {
        errObj[e.target.name] = "Invalid Number";
      } else {
        errObj[e.target.name] = "";
      }
    }
    if (e.target.name === "password") {
      if (obj.confirmpassword === undefined || obj.confirmpassword === "") {
        errObj.confirmpassword = "";
      } else if (e.target.value !== obj.confirmpassword) {
        errObj.confirmpassword = "password does not match";
      }

      if (e.target.value == "") {
        errObj[e.target.name] = "Password is required";
      } else if (e.target.value.length < 6) {
        errObj[e.target.name] = "Password must be 6 character";
      } else {
        errObj[e.target.name] = "";
      }
    }

    if (e.target.name === "confirmpassword") {
      if (e.target.value == "") {
        errObj[e.target.name] = "confirmpassword is required";
      } else if (obj.password !== e.target.value) {
        errObj[e.target.name] = "password does not match";
      } else {
        errObj[e.target.name] = "";
      }
    }

    if (e.target.name === "date") {
      // const newDate =  new Date(e.target.value);
      let today = new Date();
      // let total =new Date(today.getFullYear() - 18,today.getMonth( ),today.getDate( ))
      let age = today.setFullYear(today.getFullYear() - 18);
      // console.log(total);
      if (e.target.value == "") {
        errObj[e.target.name] = "date is required";
      } else if (new Date(e.target.value) >= new Date(age)) {
        errObj[e.target.name] = "date is must be 18 +";
      }
      //  if(newDate>=total){
      //   errObj[e.target.name] = "date is must be 18 +";
      // }
      else {
        errObj[e.target.name] = "";
      }
    }
    setErrObj({ ...errObj });
  };

  const numberhandle = (e) => {
    if (
      e.key === "e" ||
      e.key === "E" ||
      e.key === "+" ||
      e.key === "-" ||
      e.key === "." ||
      e.key === "*" ||
      e.key === "/"
    ) {
      errObj[e.target.name] = "Invalid Number";
    } else {
      errObj[e.target.name] = "";
    }
    setErrObj({ ...errObj });
  };

  const savedata = () => {
    console.log(blankObj);
    if (obj.name === undefined || obj.name === "") {
      errObj.name = "name is required";
    }
    if (obj.email === undefined || obj.email === "") {
      errObj.email = "email is required";
    }

    if (obj.gender === undefined || obj.gender === "") {
      errObj.gender = "gender is required";
    }

    if (obj.hobbies.length === 0) {
      errObj.hobbies = "hobbies is required";
    }
    if (obj.profile === undefined || obj.profile === "") {
      errObj.profile = "profile is required";
    }
    if (obj.number === undefined || obj.number === "") {
      errObj.number = "number is required";
    }
    if (obj.password === undefined || obj.password === "") {
      errObj.password = "password is required";
    }
    if (obj.confirmpassword === undefined || obj.confirmpassword === "") {
      errObj.confirmpassword = "confirmpassword is required";
    }
    if (obj.date === undefined || obj.date === "") {
      errObj.date = "date is required";
    }

    for (let key in errObj) {
      console.log(key, errObj[key]);
      errAray.push(errObj[key]);
      setErrAray([errAray]);
    }
    console.log(errAray);
    console.log(errAray.every((x) => x === ""));
    if (errAray.every((x) => x === "")) {
      if (obj.id) {
        const index = aray.findIndex((x) => x.id === obj.id);
        aray.splice(index, 1, obj);
        // setAray([...aray])
      } else {
        count++;
        setCount(count);
        obj.id = count;
        setobj({ ...obj });
        aray.push(obj);
        filteraray.push(obj)
        console.log(aray);
      }
      setFilteraray(filteraray)
      setAray([...aray]);
      setobj({ ...blankObj });
      setErrObj({ ...errObj });
    }
    setErrAray([]);
    // console.log(errAray);
    // console.log(obj);
    // inputRef.current.value=''
    // formref.current.reset();
  };
  const editData = (id) => {
   setErrObj({})
    // console.log(id);
    const editobj = aray.find((x) => x.id === id);
    // console.log(editobj);
    setobj({ ...editobj });
  };
  const deleteData = (id) => {
    let index = aray.findIndex((x) => x.id === id);
    // console.log(index);
    aray.splice(index, 1);
    filteraray.splice(index,1)
    setFilteraray([...filteraray])
    setAray([...aray]);
  };
  // const toBase64 = file => new Promise((resolve, reject) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => resolve(reader.result);
  //   reader.onerror = reject;
  // });
  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  const filterData=(e)=>{
    filterObj[e.target.name]=e.target.value
    setfilterObj({...filterObj});
    const newAray = filteraray.filter((x)=>{
     if( x.name.toLowerCase().includes(filterObj.name.toLowerCase()) && x.email.toLowerCase().includes(filterObj.email.toLowerCase())){
     return x
     }
    })
   if(!(Object.values(filterObj).every((x)=>x === ''))){
    console.log(filteraray);
    setAray([...newAray]);
    console.log('efefe'); 
  }else{  
      setAray([...filteraray]);
     console.log('wsfswf');
   }
  }
  return (
    <div>
    <div className="w-50 mx-auto">
    <input type="text" placeholder="name" name="name" onChange={filterData}/>
    <input type="text" placeholder="email" name="email" onChange={filterData}/>
    </div>
      <form action="" className="w-50 mx-auto shadow p-3" ref={formref}>
        <label className="d-block">Name</label>
        <input
          type="text"
          name="name"
          className="w-100"
          onChange={getdata}
          value={obj.name}
        />
        <span className="text-danger">{errObj.name}</span>
        <label className="d-block">Email</label>
        <input
          type="email"
          name="email"
          className="w-100"
          onChange={getdata}
          value={obj.email}
        />
        <span className="text-danger">{errObj.email}</span>
        <label className="d-block">D.O.B</label>
        <input
          type="date"
          name="date"
          className="w-100"
          onChange={getdata}
          value={obj.date}
        />
        <span className="text-danger">{errObj.date}</span>
        <label className="d-block">Number</label>
        <input
          type="number"
          name="number"
          className="w-100"
          onChange={getdata}
          value={obj.number}
          onKeyDown={numberhandle}
        />
        <span className="text-danger">{errObj.number}</span>
        <label className="d-block">Password</label>
        <input
          type="password"
          name="password"
          className="w-100"
          onChange={getdata}
          value={obj.password}
        />
        <span className="text-danger">{errObj.password}</span>
        <label className="d-block">Confirm Password</label>
        <input
          type="password"
          name="confirmpassword"
          className="w-100"
          onChange={getdata}
          value={obj.confirmpassword}
        />
        <span className="text-danger">{errObj.confirmpassword}</span>
        <label className="d-block">Gender</label>
        <input
          type="radio"
          name="gender"
          value={"male"}
          onChange={getdata}
          checked={obj.gender === "male"}
        />
        male
        <input
          type="radio"
          name="gender"
          value={"female"}
          onChange={getdata}
          checked={obj.gender === "female"}
        />
        female <br />
        <span className="text-danger">{errObj.gender}</span>
        <label className="d-block">Hobbies</label>
        <input
          type="checkbox"
          name="hobbies"
          value="cricket"
          onChange={getdata}
          checked={obj.hobbies.includes("cricket")}
        />
        Cricket
        <input
          type="checkbox"
          name="hobbies"
          value="hockey"
          onChange={getdata}
          checked={obj.hobbies.includes("hockey")}
        />
        Hockey
        <input
          type="checkbox"
          name="hobbies"
          value="basketball"
          onChange={getdata}
          checked={obj.hobbies.includes("basketball")}
        />
        Basketball
        <input
          type="checkbox"
          name="hobbies"
          value="khokho"
          onChange={getdata}
          checked={obj.hobbies.includes("khokho")}
        />
        Khokho
        <input
          type="checkbox"
          name="hobbies"
          value="football"
          onChange={getdata}
          checked={obj.hobbies.includes("football")}
        />
        Football <br />
        <span className="text-danger">{errObj.hobbies}</span>
        <label className="d-block">Profile</label>
        <input type="file" name="profile" onChange={getdata} ref={inputRef} />
        <br />
        <span className="text-danger">{errObj.profile}</span>
        <br />
        <button
          type="button"
          className="btn btn-success mt-2"
          onClick={savedata}
        >
          Save
        </button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Profile</th>
            <th>Name</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Number</th>
            <th>Password</th>
            <th>Gender</th>
            <th>Hobbies</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { aray.map((x, i) => {
            return (
              <tr key={i}>
                <td>{x.id}</td>
                <td>
                  <img src={x.profile} width={50} height={50} alt="" />
                </td>
                <td>{x.name}</td>
                <td>{x.email}</td>
                <td>{x.date}</td>
                <td>{x.number}</td>
                <td>{x.password}</td>
                <td>{x.gender}</td>
                <td>{x.hobbies.join(",")}</td>
                <td>
                  <button
                    className="btn btn-warning me-1"
                    onClick={() => editData(x.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteData(i)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="img-zoom">
        {/* <p className='text-white fs-1 position-fixed  end-0 top-0 pe-5' style={{cursor:"pointer"}} >x</p> */}
        <div className="img-inner"></div>
      </div>
    </div>
  );
}

export default CrudFunc;
