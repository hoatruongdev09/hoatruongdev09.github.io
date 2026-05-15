import { Badge } from "../retroui/Badge";
import { Card } from "../retroui/Card";
import { Text } from "../retroui/Text";

import InfoCardIcon from '../../assets/info-card.svg?react';

const skills = [
    "JavaScript",
    "TypeScript",
    "C#",
    "SQL",
    "Node.js",
    "NestJS",
    "ReactJS",
    "PostgreSQL",
    "Unity",
    ".NET"
]

const areasOfFocus = [
    "Backend development",
    "Game development",
    "Database design",
    "System architecture"
]

export default function About() {
    return (
        <Card className="p-4 mt-4 md:mt-0">
            <Card.Header className="pb-0">
                <Card.Title className="flex items-center gap-4 text-primary">
                    <InfoCardIcon className="w-8 h-8 fill-primary" />
                    About Me
                </Card.Title>
                <Card.Description>
                    Software developer with 5 years of experience building high-performance backend systems and interactive games. Proficient in designing RESTful APIs with NestJS/Node.js, modeling relational databases with PostgreSQL, and delivering cross-platform games with Unity & C#. Passionate about clean architecture, maintainable code, and smooth user experiences.
                </Card.Description>
            </Card.Header>
            <Card.Content>
                <Text as="h5" className="text-primary">Skills</Text>
                <div className="flex flex-wrap gap-2 mt-1">
                    {
                        skills.map((skill, index) => (
                            <Badge
                                key={`skill-${index}`}
                                variant={"default"}
                                className="text-muted-foreground"
                            >{skill}</Badge>
                        ))
                    }
                </div>
                <Text as="h5" className="mt-2 text-primary">Area of focus</Text>
                <div className="flex flex-wrap gap-2 mt-1">
                    {
                        areasOfFocus.map((area, index) => (
                            <Badge
                                key={`aof-${index}`}
                                variant={"default"}
                                className="text-muted-foreground"
                            >{area}</Badge>
                        ))
                    }
                </div>
            </Card.Content>
        </Card >
    )
}