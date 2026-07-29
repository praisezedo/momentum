
export default function GoalCard({goal , handleDeleteGoal }: {goal: string , handleDeleteGoal: (title: string) => void}) {
    return (
        <>
         <span className=" flex-center gap-5"> 
           <p> <strong className="text-blue-900 text-xl">•  {goal}</strong></p>
            <button  className="text-blue-900 text-2xl font-bold hover:opacity-50 hover:cursor-pointer" onClick={ () => handleDeleteGoal(goal) } >×</button>
         </span>
        </>
    )
}