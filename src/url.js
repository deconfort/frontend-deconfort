let apiUrl= "https://back-deconfort.onrender.com/"
/* let apiUrl= "http://localhost:8000/" */

  
if(process.env.NODE_ENV==="production"){
    apiUrl = process.env.REACT_APP_URL
}

module.exports=apiUrl