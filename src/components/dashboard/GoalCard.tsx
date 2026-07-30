import type { Goal } from "../../types/goal";

export default function GoalCard({goal , handleDeleteGoal }: {goal: Goal , handleDeleteGoal: (id: number) => void}) {
    return (
        <>
         <span className=" flex-center gap-5"> 
           <p> <strong className="text-blue-900 text-xl">•  {goal.title}</strong></p>
            <button  className="text-blue-900 text-2xl font-bold hover:opacity-50 hover:cursor-pointer" onClick={ () => handleDeleteGoal(goal.id) } >×</button>
         </span>
        </>
    )
}