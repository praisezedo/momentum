import { useState } from "react";
import StreakCard from "../components/dashboard/StreakCard";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import Layout from "../components/layout/Layout";
import {user} from "../data/user";
import AddGoalForm from "../components/dashboard/AddGoalForm";
 
 export default function Dashboard() {
  const [streak , setStreak] = useState(user.streak);
    return (

        <Layout>
             <section className="flex flex-col justify-center min-h-screen gap-7 items-center ">          
            <WelcomeCard  name={user.name}/>
            <StreakCard streak={streak} setStreak={setStreak}/>
            <AddGoalForm />
          </section>
        </Layout>

    )
}