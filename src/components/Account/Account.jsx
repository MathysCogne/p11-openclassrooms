// IMPORTS
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';


import './account.scss'


function Account() {

   const dispatch = useDispatch();

   const token = useSelector((state) => state.auth.token); // Récupération du token ds Redux
   const username = useSelector((state) => state.name.username);
   // console.log("DEBUG RECUP STATE" + token);
 
   useEffect(() => {
      if (token) {
         const fetchData = async () => {
            try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`,
               },
            });
   
            if (response.ok) {
               const data = await response.json();
               console.log(data);

               dispatch({ // Enregistrement des donées dans le store
                  type: 'SET_USER',
                  payload: {
                     username: data.body.userName,
                     firstname: data.body.firstName,
                     lastname: data.body.lastName,
                  },
               });
               
            } else {
               console.log("Erreur lors de la récupération du profil de l'utilisateur");
            }
            } catch (error) {
               console.log("Erreur lors de la récupération du profil de l'utilisateur");
            }
         };
         
         fetchData();

      }
      }, [dispatch, token]);

   return (
      <>
         {username ? (
            <Link to="/user">
               <i className="fas fa-user-circle"></i>
               <p>{username}</p>
            </Link>

         ) : (

            <Link to="/signin">
               <i className="fas fa-user-circle"></i>
               <p>Sign In</p>
            </Link>

         )}
      </>
   )
 }
 
export default Account