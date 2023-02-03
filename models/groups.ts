import { SessionTemplate } from "./sessionTemplates"

export type Group = {
    id: number,
    letter: string,
    startDate: string,
    sessionTemplates: SessionTemplate[]
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
        ]
    },
]