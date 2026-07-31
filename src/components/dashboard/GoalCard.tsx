import type { Goal } from "../../types/goal";

export default function GoalCard({goal , handleDeleteGoal , handleToggleGoal }: {goal: Goal , handleDeleteGoal: (id: number) => void , handleToggleGoal: (id: number) => void }) {
    return (
        <>
         <span className= {`flex-center gap-5  border ${goal.completed ? "bg-gray-300 border-gray-500" : "bg-blue-300 border-blue-500"}  rounded-xl px-3 py-2`}> 
            <input type="checkbox" checked={goal.completed} className="w-5 h-5" onClick={ () =>  handleToggleGoal(goal.id)}/>
           <p> <strong className="text-blue-900 text-xl">•  {goal.title}</strong></p>
            <button  className="text-blue-900 text-2xl font-bold hover:opacity-50 hover:cursor-pointer" onClick={ () => handleDeleteGoal(goal.id) } >×</button>
         </span>
        </>
    )
}