
type GoalCardProps = {
    goals: string[];
} 

export default function GoalCard({ goals }: GoalCardProps) {
    return (
        <>
         <div className="flex-col-center">
            {goals.length === 0 ? (<p>No goals added yet.</p>) 
              : (
            <ul className="grid grid-cols-3 gap-5 ">
                {goals.map((goal: string , index: number) => (
                     <li key={index} className="bg-blue-300 border-blue-500 border px-3 py-2 rounded-xl">
                        <strong className="text-blue-900 text-xl">• {goal}</strong>
                     </li>
                ))}
            </ul>
            )}
         </div>
        </>
    )
}