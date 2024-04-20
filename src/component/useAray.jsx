import React, { useState } from 'react'

function useAray(value) {
  const arayObj= value.map((x)=>{
       delete x.phone;
       return x
    })
    
   console.log(arayObj);
  return arayObj
}

export default useAray