const mockTasks = [
    [
        [],
        [
            {
                subject: "Math",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore inventore sit praesentium ex incidunt maiores architecto possimus iste tempora aliquid!"
            },
            {
                subject: "English",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nesciunt veniam rerum libero tempora iste reiciendis ipsa tempore amet animi deleniti, eius et! Consequatur adipisci itaque corporis, quaerat nulla cupiditate esse sed assumenda, eveniet aliquid error eos voluptatum repudiandae mollitia."
            }
        ],
        [],
        [
            {
                subject: "Spanish",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, fugit."
            }
        ],
        []
    ],
    [
        [
            {
                subject: "History",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae incidunt nihil quaerat, cupiditate eius."
            }
        ],
        [],
        [],
        [
            {
                subject: "Art",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus debitis sit vero perspiciatis, illum alias quos obcaecati nobis! Sequi, aliquam dolorum, ex rerum quia quae praesentium pariatur vel distinctio est optio dolore dignissimos voluptate maxime fugiat laborum nemo. Quo, commodi."
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
                        <h1>{weekDays[index]}</h1>
                        {day.length
                        ?
                            day.map(task => {
                                return <div className="h-32 w-52 bg-white border-4 border-purple-600 rounded-2xl my-4  text-xl text-center text-black ml-8 align-middle">
                                    <div>{task.subject}</div>
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