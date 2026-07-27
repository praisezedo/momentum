import { useState , useEffect} from "react";
import StreakCard from "../components/dashboard/StreakCard";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import Layout from "../components/layout/Layout";
import {user} from "../data/user";
import AddGoalForm from "../components/dashboard/AddGoalForm";
import GoalList from "../components/dashboard/GoalList";
 
 export default function Dashboard() {

  const [streak , setStreak] = useState(user.streak);

      const [goalTitle , setGoalTitle] = useState("");
    const [goals , setGoals] = useState([] as string[]);
    const [goalMessage , setGoalMessage] = useState("");

    const handleAddGoal = () => {
          
          setGoalMessage("");
          
        if (goalTitle.trim() !== "") {
            setGoals([...goals, goalTitle]);
            setGoalTitle("");
            setGoalMessage("Goal added successfully!");
        }  

        else {
            setGoalMessage("Goal cannot be empty. Please enter a valid goal.");
        }
    }

    useEffect(() => {

        if (!goalMessage) return;

        const timer = setTimeout(() => {
            setGoalMessage("");
        }, 3000);

        return () => clearTimeout(timer);

    }, [goalMessage]);
    return (

        <Layout>
             <section className="flex flex-col justify-center min-h-screen gap-7 items-center mt-20">          
            <WelcomeCard  name={user.name}/>
            <StreakCard streak={streak} setStreak={setStreak}/>
            <AddGoalForm handleAddGoal={handleAddGoal} goalMessage={goalMessage} goalTitle={goalTitle} setGoalTitle={setGoalTitle} />
             <GoalList goals={goals}/>
          </section>
        </Layout>

    )
}