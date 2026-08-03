import ProgressCard from "./ProgressCard";
import type {Goal} from "../../types/goal";

export default function ProgressSummary({goals}: {goals: Goal[]}) {

  const totalGoals = goals.length;
  const completedGoals = goals.filter(goal => goal.completed).length;
  const remainingGoals = totalGoals - completedGoals;
  const completionPercentage = `${totalGoals > 0 ? Math.floor((completedGoals / totalGoals) * 100) : 0}%`;


    return (
        <>
           <div className=" mt-10 flex flex-col gap-7 border border-blue-300 px-7 py-7 rounded-2xl ">
            <div><h1 className="font-bold text-3xl text-blue-900">Progress Summary</h1></div>
            <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              <ProgressCard title="🎯 Total Goals" value={totalGoals} />
              <ProgressCard title="✅ Completed Goals" value={completedGoals} />
              <ProgressCard title="⏳ Remaining Goals" value={remainingGoals} />
              <ProgressCard title="📊 Completion Percentage" value={completionPercentage} />
            </div>
           </div>
        </>
    )
}

