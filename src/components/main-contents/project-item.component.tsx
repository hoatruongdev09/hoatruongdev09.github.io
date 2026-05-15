import { Button } from "../retroui/Button";
import { Card } from "../retroui/Card";

export type ProjectItemUrl = {
    name: string;
    url: string;
}

export type ProjectItemProps = {
    title: string;
    description: string;
    imageUrl: string;
    linkUrl?: string;
    urls: ProjectItemUrl[];
}

export default function ProjectItem(props: ProjectItemProps) {
    return (
        <Card className="flex flex-col">
            <Card.Content className="pb-0 hidden xl:block">
                <img
                    src={props.imageUrl}
                    alt="Project Image"
                    className="w-full xl:w-full xl:aspect-square object-center xl:object-scale-down"
                />
            </Card.Content>

            <div className="flex flex-row xl:flex-col gap-2">

                <img
                    src={props.imageUrl}
                    alt="Project Image"
                    className="ml-4 mt-5 w-32 h-32 aspect-square block xl:hidden object-cover object-top"
                />
                <div>
                    <Card.Header className="pb-0">
                        <Card.Title>
                            {props.title}
                        </Card.Title>
                    </Card.Header>
                    <Card.Content className="pb-0">
                        {props.description}
                    </Card.Content>
                </div>
            </div>
            <Card.Content
                className="flex items-center gap-2 justify-end mt-auto"
            >
                {props.urls?.map((item) => (
                    <Button
                        key={`${props.title}-${item.name}`}
                        variant={"secondary"}
                        size={"sm"}
                        onClick={() => window.open(item.url, "_blank")}
                    >
                        {item.name}
                    </Button>
                ))}
            </Card.Content>
        </Card>
    )
}