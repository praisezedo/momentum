import StreakCard from "../components/dashboard/StreakCard";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import {user} from "../data/user";
 
 export default function Dashboard() {
    return (
        <>
          <section className="flex flex-col justify-center min-h-screen gap-7 items-center ">          
            <WelcomeCard  name={user.name}/>
            <StreakCard streak={user.streak}/>
          </section>
        </>
    )
}