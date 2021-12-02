export const createProject = (project) => {
  
  // Normal way
  // return {
  //   type: 'ADD_PROJECT',
  //   project: project
  // }

    //Using Thunk, halting dispatch
    return (dispatch, getStore) => {
    //make async call to database
    dispatch({ type: 'CREATE_PROJECT', project });
  }
};

  

