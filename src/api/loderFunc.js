export const loaderFunc =(val)=>{
    if(val){
        document.documentElement.style.setProperty("--loader-Display",'flex')
    }else{
        document.documentElement.style.setProperty("--loader-Display",'none')
    }
}