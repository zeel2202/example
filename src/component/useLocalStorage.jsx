import React, { useEffect, useState } from 'react'

function useLocalStorage() {
    

    const getlocal =(value)=>{
       return (JSON.parse(localStorage.getItem(value)));
    }

  
    

    function setLocalstorage(setname,value){
        localStorage.setItem(setname,JSON.stringify(value))
    }



  return [getlocal,setLocalstorage]
}

export default useLocalStorage