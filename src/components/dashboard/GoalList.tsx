import type { Goal } from "../../types/goal";
import GoalCard from "./GoalCard";


export default function GoalList({goals , handleDeleteGoal , handleToggleGoal } : {goals: Goal[] , handleDeleteGoal: (id: number) => void , handleToggleGoal: (id: number) => void } ) {
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
                    <li key={goal.id} >
                         <GoalCard goal={goal} handleDeleteGoal={handleDeleteGoal} handleToggleGoal={handleToggleGoal} />
                    </li>
                     ))}
                  </ul>
                )}
            </div>    
          </div>
        </>
    )
}