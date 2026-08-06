import type { Goal } from "../../types/goal";

export default function GoalCard({goal , handleDeleteGoal , handleToggleGoal }: {goal: Goal , handleDeleteGoal: (id: number) => void , handleToggleGoal: (id: number) => void }) {
    return (
        <>
         <div className= {`flex flex-col justify-center gap-3  border ${goal.completed ? "bg-gray-300 border-gray-500" : "bg-blue-300 border-blue-500"}  rounded-xl px-3 py-2`}> 

             <div className="flex gap-5 justify-between items-center">
          <input type="checkbox" checked={goal.completed} className="w-5 hover:cursor-pointer h-5" onChange={ () =>  handleToggleGoal(goal.id)}/>
           <p> <strong className= {` text-xl  ${goal.completed ? "text-gray-700 line-through" : "text-blue-900"} `} >•  {goal.title}</strong></p>
            <button  className="text-blue-900 text-2xl font-bold hover:opacity-50 hover:cursor-pointer" onClick={ () => handleDeleteGoal(goal.id) } >×</button>
             </div>

    <span className="flex justify-end">
        <p className="text-sm text-blue-900">{goal.completed ? "✅ Completed" : "⏳ In Progress"}</p>
    </span>
         </div>
        </>
    )
}