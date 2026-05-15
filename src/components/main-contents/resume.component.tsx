import { Badge } from "../retroui/Badge"
import { Card } from "../retroui/Card"
import { Text } from "../retroui/Text"

import BriefCaseIcon from '../../assets/brief-case.svg?react';
import GraduationCapIcon from '../../assets/graduation.svg?react';

const experiences = [
    {
        position: "Software Engineer",
        company: "ArtFollowUs",
        beginTime: "Jul 2025",
        endTime: "Present",
        descriptions: [
            "Developed a real-time multiplayer game using Unity, C# & FishNet Networking framework. ",
            "Implemented server-authoritative game logic to prevent cheating and ensure consistent game state across all clients using Nest.js & PostgreSQL.",
            "Built networked player movement with client-side prediction and server reconciliation.",
            "Integrated lag compensation and interpolation to ensure smooth gameplay for high delay network status."
        ]
    },
    {
        position: "Software Engineer",
        company: "Mirailabs.co",
        beginTime: "May 2022",
        endTime: "Mar 2025",
        descriptions: [
            "Using Unity, C# and FishNet Networking to implement a real-time multiplayer game client.",
            "Apply lag compensation, client side prediction, EMP-style to improve player experience.",
            "Built a matchmaking microservice using Node.js and Redis pub/sub with Socket.IO, reducing player wait times and improving server resource efficiency.",
            "Developed backend data persistence layer using Node.js and PostgreSQL to manage user and session data reliably.",
            "Implemented a real-time user ranking leaderboard system with Node.js, Redis, Socket.IO.",
            "Migrated infrastructure from AWS GameLift to EdgeGap, improving cost efficiency and enhancing on-demand scalability."
        ]
    },
    {
        position: "Software Engineer",
        company: "STI Solution",
        beginTime: "Apr 2021",
        endTime: "Mar 2022",
        descriptions: [
            "Built a mini WebGL game using Unity & C# to increase user engagement and collect coupons.",
            "Developed and maintained backend APIs using Node.js and Express.js.",
            "Developed real-time multiplayer game server using Node.js & Colyseus,  implemented game client using Unity & C#."
        ]
    },
    {
        position: "Software Engineer",
        company: "BAP IT Co., JSC",
        beginTime: "Apr 2021",
        endTime: "Mar 2022",
        descriptions: [
            "Designed and built backend web applications using .NET Core, ASP.NET, and Entity Framework Core with PostgreSQL.",
            "Maintained and extended a legacy .NET Framework MVC application, refactoring modules to improve code quality and reduce technical debt.",
        ]
    },
]

const educations = [
    {
        grad: "Bachelor of Computer Science",
        school: "University of Science, Hue University",
        beginTime: "2015",
        endTime: "2019"
    }
]

export default function Resume() {
    return (
        <>
            <Card className="p-4 mt-4 w-full">
                <Card.Header className="pb-0">
                    <Card.Title className="flex items-center gap-4 text-primary">
                        <BriefCaseIcon className="w-8 h-8 fill-primary" />
                        Experience
                    </Card.Title>
                </Card.Header>
                <Card.Content>
                    {
                        experiences.map((item, index) => (
                            <div
                                className="flex gap-4 mt-2 items-start relative"
                                key={`resume-item-${index}`}
                            >
                                <div className="bg-primary rounded-full w-4 h-4 mx-2 mt-1"></div>
                                <div className="absolute w-1 bg-primary rounded-full left-3.5 top-2 bottom-2"></div>

                                <div className="flex flex-col w-full">
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-row items-center justify-center gap-2">
                                            <Text as="h5" className="text-primary">{item.position} </Text>
                                            <Badge size={"sm"} variant={"default"}>{item.company}</Badge>
                                        </div>
                                        <Text className="text-muted-foreground">{item.beginTime} - {item.endTime}</Text>
                                    </div>
                                    <ul>
                                        {item.descriptions.map((desc, index) => (
                                            <Text
                                                as="li"
                                                className="text-muted-foreground"
                                                key={`${item.company}-${index}`}
                                            >
                                                - {desc}
                                            </Text>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                </Card.Content>
            </Card>

            <Card className="p-4 mt-4 w-full">
                <Card.Header className="pb-0">
                    <Card.Title className="flex items-center gap-4 text-primary">
                        <GraduationCapIcon className="w-8 h-8 fill-primary" />
                        Education
                    </Card.Title>
                </Card.Header>
                <Card.Content>
                    {
                        educations.map((item, index) => (
                            <div
                                className="flex gap-4 mt-2 relative"
                                key={`education-item-${index}`}
                            >
                                <div className="bg-primary rounded-full w-4 h-4 mx-2 mt-1"></div>
                                <div className="absolute w-1 bg-primary rounded-full left-3.5 top-2 bottom-2"></div>
                                <div className="flex flex-col">
                                    <Text as="h5" className="text-primary">{item.grad}</Text>
                                    <Text className="text-muted-foreground">{item.school}</Text>
                                    <Text className="text-muted-foreground">{item.beginTime} - {item.endTime}</Text>
                                </div>
                            </div>
                        ))
                    }
                </Card.Content>
            </Card>
        </>
    )
}