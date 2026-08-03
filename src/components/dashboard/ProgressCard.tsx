export default function ProgressCard({title , value} : {title: string , value: number | string}) {
     return (
         <>
            <div className="flex flex-col justify-start text-blue-900  gap-2">
                <p className="text-md font-medium">{title}</p>
                <h1 className="justify-center text-5xl flex"><strong>{value}</strong></h1>
            </div>
         </>
     )
}