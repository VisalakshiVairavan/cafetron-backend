export const getInsertData = (data) => {
    return data.map((obj) => Object.values(obj));
  };

  
  export const getInData = (data) => {
    return data.map((obj) => Object.values(obj)[0]);
  };
  
  export const empIdGen = ()=>{
    return `UI${Math.random().toString(36).slice(6).toUpperCase()}`
  }