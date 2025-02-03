
export const getLocalstorage = () => {
    const go=localStorage.getItem("reacttodo")
    if(!go) return[]
    return JSON.parse(go)
  
}
export const setLocalstorage = (task) => {

    localStorage.setItem("reacttodo", JSON.stringify(task));

  
}

