import { SessionLocationType, Session } from "./sessions"
import { SessionTemplate } from "./sessionTemplates"

export type Group = {
    id: number,
    letter: string,
    startDate: string,
    sessionTemplates: SessionTemplate[],
    sessions: Session[]
}

export const groupData: Group[] = [
    {
        id: 1,
        letter: 'A',
        startDate: 'March 2nd, 2023',
        sessionTemplates: [
            {
                description: 'Every Monday @ 7:00pm',
                location: 'Virtually'
            },
            {
                description: 'Every Wednesday @ 7:00pm',
                location: 'Virtually'
            },
            {
                description: 'Every Saturday @ 10:00am',
                location: 'In-Person'
            }
        ],
        sessions: [
            {
                id: 1,
                date: '2023-03-06',
                time: '7:00pm',
                locationType: SessionLocationType.Virtual
            },
            {
                id: 2,
                date: '2023-03-08',
                time: '7:00pm',
                locationType: SessionLocationType.Virtual
            },
            {
                id: 3,
                date: '2023-03-11',
                time: '10:00am',
                locationType: SessionLocationType.InPerson
            }
        ]
    },
    {
        id: 2,
        letter: 'B',
        startDate: 'March 3rd, 2023',
        sessionTemplates: [
            {
                description: 'Every Monday @ 8:00pm',
                location: 'Virtually'
            },
            {
                description: 'Every Wednesday @ 8:00pm',
                location: 'Virtually'
            },
            {
                description: 'Every Saturday @ 10:00am',
                location: 'In-Person'
            }
        ],
        sessions: [
            {
                id: 4,
                date: '2023-03-07',
                time: '8:00pm',
                locationType: SessionLocationType.Virtual
            },
            {
                id: 5,
                date: '2023-03-09',
                time: '8:00pm',
                locationType: SessionLocationType.Virtual
            },
            {
                id: 6,
                date: '2023-03-11',
                time: '10:00am',
                locationType: SessionLocationType.InPerson
            }
        ]
    },
    {
        id: 3,
        letter: 'C',
        startDate: 'March 2nd, 2023',
        sessionTemplates: [
            {
                description: 'Every Tuesday @ 8:00pm',
                location: 'Virtually'
            },
            {
                description: 'Every Thursday @ 8:00pm',
                location: 'Virtually'
            },
            {
                description: 'Every Saturday @ 11:30am',
                location: 'In-Person'
            }
        ],
        sessions: []
    },
]