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

const Week = ({slideNumber}) => {
    return(
        <>
            {mockTasks[slideNumber].map(day => {
                return(
                    <div>
                        {day.length 
                        ?
                            day.map(task => {
                                return task.subject;
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