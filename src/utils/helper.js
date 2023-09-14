export const getInsertData = (data) => {
    return data.map((obj) => Object.values(obj));
  };

  
  export const getInData = (data) => {
    return data.map((obj) => Object.values(obj)[0]);
  };
  