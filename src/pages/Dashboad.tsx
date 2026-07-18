import {user} from "../data/user";
 
 export default function Dashboard() {
    return (
        <>
          <section className="flex flex-col justify-center min-h-screen gap-7 items-center ">
               
               <div className="flex flex-col justify-start gap-7">
                 <h1 className="text-5xl text-blue text-blue-900 ">Welcome Back , {user.name} ✌️</h1>
               <p className="text-2xl text-blue-900 ">Current Streak: <strong>{user.streak}</strong></p>
               </div> 
              <div>
                <span className="text-shadow-xl text-blue-900 text-3xl">
                    keeps building momentum towards your  future.  
                </span>
              </div>
          </section>
        </>
    )
}