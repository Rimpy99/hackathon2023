const mockTasks = [
    [
        [],
        [
            {
                subject: "Math",
                description: "Solve the following algebraic equations: 2x + 5 = 15"
            },
            {
                subject: "English",
                description: "Write a short story using at least five vocabulary words from this week's lesson"
            }
        ],
        [],
        [
            {
                subject: "Spanish",
                description: "Create flashcards with vocabulary words related to daily activities."
            }
        ],
        []
    ],
    [
        [
            {
                subject: "History",
                description: "Write an essay discussing the impact of a historical figure on society."
            }
        ],
        [],
        [],
        [
            {
                subject: "Art",
                description: "Create a collage representing different art movements and styles."
            }
        ],
        []
    ]
];

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const Week = ({slideNumber}) => {
    return(
        <>
            {mockTasks[slideNumber].map((day, index) => {
                return(
                    <div className={`flex-1 ${index % 2 && 'bg-gray-700'} h-[500px]`}>
                        <h1 className="font-bold text-center bg-blue-500 py-6">{weekDays[index]}</h1>
                        {day.length
                        ?
                            day.map(task => {
                                return <div className="h-32 mx-5 bg-white border-l-4 border-red-400 rounded my-4 text-xl text-center text-black flex flex-col overflow-auto">
                                    <div className="bg-red-500">{task.subject}</div>
                                    <div className="text-base">{task.description}</div>
                                </div>
                            }) 
                        :
                        ""
                        }
                    </div>
                )
            })}
        </>
    )
}

export default Week;