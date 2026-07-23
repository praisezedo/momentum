import { useState} from "react"; 

export default function AddGoalForm() {
    const [goalTitle , setGoalTitle] = useState("");

    return (
        <>
          <div className="flex flex-col items-center mt-7 border-blue-300 border rounded-2xl  justify-center gap-7 px-20 py-5" >

           <h1 className="flex justify-center items-center text-blue-900 font-bold text-3xl py-2">Add Goal</h1>

            <div className="flex flex-col justify-start gap-3">
                <label htmlFor="goal-title" className="text-xl font-bold text-blue-900">Goal Title</label>
                <input placeholder="Goal Title..." value={goalTitle} onChange={(e) => {setGoalTitle(e.target.value)}}  type="text" id="goal-title" className="p-3 rounded-2xl focus:border-blue-900 focus:outline-none  text-xl border border-gray-300 min-w-100"/>
            </div>

            <div className="flex justify-start gap-3">
                <span className="text-xl text-blue-900 font-serif">Live Preview: </span>
                 <p className="text-blue-900 text-xl"><strong>{!goalTitle ? "No Goal Yet..." : goalTitle }</strong></p>
            </div>

  
                <button className="bg-blue-900 text-white p-3 hover:opacity-50 hover:cursor-pointer rounded-2xl min-w-100">Add Goal</button>
           
          </div>
        </>
    )
}