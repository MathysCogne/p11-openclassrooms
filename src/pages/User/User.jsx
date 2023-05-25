import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

// import './user.scss'
import Transactions from '../../components/Transactions/Transactions'
import EditUser from '../../components/EditUser/EditUser'

function User() {

   const token = useSelector((state) => state.auth.token);
   const navigate = useNavigate();

   // Si l'utilisateur n'est pas connecté, redirection vers la page de connexion
   useEffect(() => {
      if (!token) {
         navigate("/signin");
      }
   }, [token, navigate]);

   return (
      <main className="main">

         <EditUser />
         
         <Transactions />
      
      </main>
   )
}
 
export default User