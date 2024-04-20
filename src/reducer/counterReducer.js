export const counterReducer =(state,action)=>{
   switch (action.type) {
    case "add":
        console.log(action.obj);
        state.push(action.obj)
        return [...state];
       
    default:
        return state;
   }
}