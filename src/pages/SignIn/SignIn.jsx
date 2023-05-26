import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import "./signin.scss";


function SignIn() {
   const dispatch = useDispatch(); // Récupération de la fonction dispatch du store

   // States
   const token = useSelector((state) => state.auth.token);

   const [username, setUsername] = useState(''); 
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');

   // Hooks
   const navigate = useNavigate();


   // Fonction de gestion des changements de valeur des champs de formulaire
   const handleUsernameChange = (event) => { 
      setUsername(event.target.value);
   };
   const handlePasswordChange = (event) => {
      setPassword(event.target.value);
   };

   // Fonction de gestion de la soumission du formulaire
   const handleSignIn = (event) => {
      event.preventDefault();
      const userData = {
         email: username,
         password: password
      };

      fetch('http://localhost:3001/api/v1/user/login', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(userData)
      })
         .then(response => response.json())
         .then(data => {
            console.log(data);

            if (data.status !== 200) { // Gestion des erreurs
               setError(true);
               return;
            }
            else {
               dispatch({ // Enregistrement du token dans le store
                  type: 'LOGIN',
                  payload: {
                  token: data.body.token,
                  }
               });
               navigate("/user");
            }
         })
         .catch(error => {
            console.error(error);
         });
   };

   // Si l'utilisateur est déjà connecté, on le redirige vers la page user
   useEffect(() => {
      if (token) {
         navigate("/user");
      }
   }, [token, navigate]);


   return (
      <main>
         <section className="sign-in">
            <i className="fa fa-user-circle sign-in-icon"></i>

            <form onSubmit={handleSignIn}>
               <div className="input-wrapper">
                  <label htmlFor="username">Email</label>
                  <input className={error ? 'sign-in__error-border' : ''} type="email" id="username" value={username} onChange={handleUsernameChange} required/>
               </div>

               <div className="input-wrapper">
                  <label htmlFor="password">Password</label>
                  <input className={error ? 'sign-in__error-border' : ''} type="password" id="password" value={password} onChange={handlePasswordChange} required/>
               </div>

               {error && <p className="sign-in__error-message">The username or password incorrect</p>}

               <div className="input-remember">
                  <input type="checkbox" id="remember-me" />
                  <label htmlFor="remember-me">Remember me</label>
               </div>


               <button className="sign-in__button" type="submit">Sign In</button>
            </form>

            

         </section>
      </main>
   );
}
 
export default SignIn;
