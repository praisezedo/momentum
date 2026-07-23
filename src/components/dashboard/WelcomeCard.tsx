export default function WelcomeCard({name}: {name: string}) {
    return (
        <> 
       <div className="flex mt-10 flex-col justify-start ">
                 <h1 className="text-5xl text-blue text-blue-900 ">Welcome Back , {name} ✌️</h1>
        </div> 
        </>
    )
}