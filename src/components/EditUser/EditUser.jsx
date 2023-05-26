import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './edituser.scss';

function EditUser() {

   const dispatch = useDispatch();

   const token = useSelector((state) => state.auth.token);
   const user = useSelector((state) => state.name.username);
   const firstname = useSelector((state) => state.name.firstname);
   const lastname = useSelector((state) => state.name.lastname);

   const [showForm, setShowForm] = useState(false);
   const [newUsername, setNewUsername] = useState('');

   const toggleForm = () => {
      setShowForm(!showForm);
   };

   const handleInputChange = (event) => {
      setNewUsername(event.target.value);
   };

   const handleSubmit = async (event) => {
      event.preventDefault();

      try {
         const response = await fetch('http://localhost:3001/api/v1/user/profile', {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify({userName: newUsername}),
         });

         if (response.ok) {
         console.log(response);
         dispatch({
            type: 'SET_USER',
            payload: {
               username: newUsername,
               firstname: firstname,
               lastname: lastname,
            },
         });

         
         } else {
         console.error('Erreur lors de l envoi du nouveau nom d utilisateur');
         }
         
      } catch (error) {
         console.error('Erreur lors de la requête :', error);
      }
      setNewUsername('');
      setShowForm(false);
   };

   useEffect(() => {
      setNewUsername(user);
   }, [user]);

   return (
      <>
         <section className="account-header">
            <h1>Welcome back, {firstname} {lastname}!</h1>

            {!showForm && (
               <button className="transaction-button button" onClick={toggleForm}>Edit your name</button>
            )}
         </section>

         {showForm && (
            <form className="account-form" onSubmit={handleSubmit}>
               <label>First Name:</label>
               <input type="text" value={firstname} disabled/>
               
               <label>Last Name:</label>
               <input type="text" value={lastname} disabled />
               
               <label>New Username:</label>
               <input type="text" value={newUsername} onChange={handleInputChange} required/>
               
               <button type="submit" className='transaction-button button'>Confirm</button>
            </form>

         )}
      </>
   );
}

export default EditUser;
