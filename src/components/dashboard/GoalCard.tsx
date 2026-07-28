
export default function GoalCard({goal}: {goal: string}) {
    return (
        <>
         <p className="text-blue-900 text-xl"> 
            <strong>•{goal}</strong>
         </p>
        </>
    )
}