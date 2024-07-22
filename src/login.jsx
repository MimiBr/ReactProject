import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  async function tryLogin(e) {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:8787/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ name: name, password: password })
      });

      if (res.status === 200) {
        setShowAlert(true);
        console.log("Login successful");
        setShowForm(false);
        alert("הקש כאן מכדי להכנס לדף בתור מנהל ");
        navigate("/Manager");
      } else {
        setShowAlert(false);
        setName("");
        setPassword("");
        alert("אינך ראשי להכנס לדף המנהל")
        console.log("Login failed");
      }

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      {showForm && (
        <form onSubmit={tryLogin}>
          <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">LOGIN</button>
        </form>
      )}
      {showAlert && (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            This is a success Alert with an encouraging title.
          </Alert>
          <Alert severity="info">
            <AlertTitle>Info</AlertTitle>
            This is an info Alert with an informative title.
          </Alert>
          <Alert severity="warning">
            <AlertTitle>Warning</AlertTitle>
            This is a warning Alert with a cautious title.
          </Alert>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error Alert with a scary title.
          </Alert>
        </Stack>
      )}
    </div>
  );
}
// import {useRef} from 'react';
// export default function LoginForm(){
//     const nameRef =useRef();
//     const passwordRef =useRef();
//     const url = "http://localhost:8787";

//     async function login(e){
//         e.preventDefault();
//         try{
//             const data ={name: nameRef.current.value, password: passwordRef.current.value}
//             const res = await fetch(url+'/login',{
//                 method: 'POST',
//                 headers: {
//                   'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(data)
//             });
//             console.log("res", res);
//             if (res.status === 200){

//             }
//         }
//         catch(err){
//             console.log("error ");
//         }
    
//     }
//     return(
//         <form>
//           <input type="text" placeholder='insert name' ref={nameRef}/>
//           <input type="text" placeholder='insert password' ref={passwordRef}/>
//           <button onClick={login}>submit</button>
//         </form>
//     )
// }
