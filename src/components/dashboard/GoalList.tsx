import type { Goal } from "../../types/goal";
import GoalCard from "./GoalCard";


export default function GoalList({goals , handleDeleteGoal } : {goals: Goal[] , handleDeleteGoal: (id: number) => void}) {
    return (
        <>
          <div className="flex-col-center gap-5">
              <h1 className="text-3xl text-blue-900 "><strong>{goals.length > 0 ? `${goals.length} ` : ''}</strong> Goals To Achieve 🔥</h1>

            <div className="flex-col-center">
                {goals.length <= 0 ? 
                (<p className="text-black text-sm">No Goals Yet.</p>) 
                : 
                (
                  <ul className="grid grid-cols-3 gap-5 ">
                     {goals.map((goal: Goal ) => (
                    <li key={goal.id} className="bg-blue-300 border border-blue-500 rounded-xl px-3 py-2">
                         <GoalCard goal={goal} handleDeleteGoal={handleDeleteGoal}/>
                    </li>
                     ))}
                  </ul>
                )}
            </div>    
          </div>
        </>
    )
}