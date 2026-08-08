import { useState } from "react";
import type { Goal } from "../../types/goal";
import GoalCard from "./GoalCard";


export default function GoalList({goals , handleDeleteGoal , handleToggleGoal } : {goals: Goal[] , handleDeleteGoal: (id: number) => void , handleToggleGoal: (id: number) => void } ) {

  const [searchTerm, setSearchTerm] = useState("");

  const filteredGoals = goals.filter((goal) => 
     goal.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return (
        <>
          <div className="flex-col-center gap-5">
              <h1 className="text-3xl text-blue-900 "><strong>{filteredGoals.length > 0 ? `${filteredGoals.length} ` : ''}</strong> Goals To Achieve 🔥</h1>
               
               <div className="flex gap-7 my-7 justify-between items-center">

                 <label className="text-blue-900 text-xl font-bold" htmlFor="search-goal-title">🔍 Search Goals:</label>
                 <input 
                 type="text" 
                 id="search-goal-title"
                  placeholder="Search Goals..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border border-gray-300 rounded-2xl px-3 py-2 min-w-100 focus:outline-none focus:border-blue-900"
                 />

               </div>
            <div className="flex-col-center">
                {filteredGoals.length === 0  ? 
                   goals.length > 0 ? (<p className="text-black text-sm">No goals match the search criteria.</p>) : (<p className="text-black text-sm">No Goals Yet.</p>)
                : 
                (
                  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                     {filteredGoals.map((goal: Goal ) => (
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