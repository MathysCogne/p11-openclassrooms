import { useSelector } from 'react-redux';

import './edituser.scss'

function EditUser() {

   // const user = useSelector((state) => state.name.username);
   const firstname = useSelector((state) => state.name.firstname);
   const lastname = useSelector((state) => state.name.lastname);


   return (
      <>
         <section className="account-header">
            <h1>Welcome back, {firstname} {lastname} !</h1>
         </section>
      </>
   )
}
 
export default EditUser