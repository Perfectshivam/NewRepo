const Actions = {
  LOGIN: "SET_USER_STATE",
  SET_TOKEN: "SET_AUTH_TOKEN",
  LOGOUT: "SET_USER_LOGOUT",

};
const Incr=()=>{
  return{ type:"INCREASE"}
}

  

const Decr=()=>
{
  return{
  type:"DECREASE"}
}

export default Actions;
export{Incr,Decr};
