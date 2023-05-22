import './user.scss'


function User() {
   return (
      <main class="main">
         <section class="account-header">
            <h1>Welcome back, Tony Jarvis !</h1>
         </section>

         <section class="account">
         <div class="account-content-wrapper">
            <h2 class="account-title">Argent Bank Checking (x8349)</h2>
            <p class="account-amount">$2,082.79</p>
            <p class="account-amount-description">Available Balance</p>
         </div>

         <div class="account-content-wrapper cta">
            <button class="transaction-button">View transactions</button>
         </div>
         </section>

         <section class="account">
         <div class="account-content-wrapper">
            <h2 class="account-title">Argent Bank Savings (x6712)</h2>
            <p class="account-amount">$10,928.42</p>
            <p class="account-amount-description">Available Balance</p>
         </div>

         <div class="account-content-wrapper cta">
            <button class="transaction-button">View transactions</button>
         </div>
         </section>

         <section class="account">
         <div class="account-content-wrapper">
            <h2 class="account-title">Argent Bank Credit Card (x8349)</h2>
            <p class="account-amount">$184.30</p>
            <p class="account-amount-description">Current Balance</p>
         </div>

         <div class="account-content-wrapper cta">
            <button class="transaction-button">View transactions</button>
         </div>
         </section>
      </main>
   )
 }
 
 export default User