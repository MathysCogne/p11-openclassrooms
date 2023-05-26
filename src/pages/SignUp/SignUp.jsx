import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import "./signup.scss";


function SignUp() {

   // States
   const token = useSelector((state) => state.auth.token);

   const [email, setEmail] = useState(''); 
   const [password, setPassword] = useState('');
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [username, setUsername] = useState(''); 
   const [error, setError] = useState('');

   // Hooks
   const navigate = useNavigate();


   // Fonction de gestion des changements de valeur des champs de formulaire
   const handleEmailChange = (event) => { 
      setEmail(event.target.value);
   };
   const handlePasswordChange = (event) => {
      setPassword(event.target.value);
   };
   const handleFirstNameChange = (event) => {
      setFirstName(event.target.value);
   };
   const handleLastNameChange = (event) => {
      setLastName(event.target.value);
   };
   const handleUsernameChange = (event) => {
      setUsername(event.target.value);
   };


   // Fonction de gestion de la soumission du formulaire
   const handleSignUp = (event) => {
      event.preventDefault();
      const userData = {
         email: email,
         password: password,
         firstName: firstName,
         lastName: lastName,
         username: username
      };

      fetch('http://localhost:3001/api/v1/user/signup', {
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
               alert('Your account has been created !');
               navigate("/signin");
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
         <section className="sign-up">
            <i className="fa fa-user-circle sign-up-icon"></i>

            <form onSubmit={handleSignUp}>
               <div className='sign-up-cont'>
                  <div className="input-wrapper">
                     <label htmlFor="email">Email</label>
                     <input className={error ? 'sign-up__error-border' : ''} type="email" id="email" value={email} onChange={handleEmailChange} required/>
                  </div>

                  <div className="input-wrapper">
                     <label htmlFor="password">Password</label>
                     <input className={error ? 'sign-up__error-border' : ''} type="password" id="password" value={password} onChange={handlePasswordChange} required/>
                  </div>
               </div>
               
               <div className='sign-up-cont'>
                  <div className="input-wrapper">
                     <label htmlFor="firstName">First Name</label>
                     <input className={error ? 'sign-up__error-border' : ''} type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} required/>
                  </div>

                  <div className="input-wrapper">
                     <label htmlFor="lastName">Last Name</label>
                     <input className={error ? 'sign-up__error-border' : ''} type="text" id="lastName" value={lastName} onChange={handleLastNameChange} required/>
                  </div>
               </div>

               <div className="input-wrapper">
                  <label htmlFor="userName">User Name</label>
                  <input className={error ? 'sign-up__error-border' : ''} type="text" id="userName" value={username} onChange={handleUsernameChange} required/>
               </div>

               {error && <p className="sign-up__error-message">An error has occurred</p>}

               <button className="sign-up__button" type="submit">Sign Up</button>
            </form>

            

         </section>
      </main>
   );
}
 
export default SignUp;
