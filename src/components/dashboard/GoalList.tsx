import GoalCard from "./GoalCard";


export default function GoalList({goals}: {goals: string[]}) {
    return (
        <>
          <div className="flex-col-center gap-5">
              <h1 className="text-3xl text-blue-900 "><strong>{goals.length > 0 ? `${goals.length} ` : ''}</strong> Goals To Achieve 🔥</h1>
               <GoalCard goals={goals} />
          </div>
        </>
    )
}