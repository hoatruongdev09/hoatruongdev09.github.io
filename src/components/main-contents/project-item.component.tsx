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
        <Card className="flex p-1 flex-col">
            {/* <Card.Content className="pb-0 hidden xl:block">
                <img
                    src={props.imageUrl}
                    alt="Project Image"
                    className="w-full xl:w-full xl:aspect-square object-center xl:object-scale-down"
                />
            </Card.Content> */}

            <Card.Header className="p-1 flex flex-row items-start md:items-center justify-start md:flex-col gap-2">
                <img
                    src={props.imageUrl}
                    alt="Project Image"
                    className="ml-1 mt-1 w-32 h-32 aspect-square block object-cover object-top rounded border border-primary
                                md:m-0 md:w-full md:aspect-square md:object-center md:object-scale-down"
                />
                <Card.Title className="text-primary">
                    {props.title}
                </Card.Title>
            </Card.Header>


            <Card.Content className="p-1 text-muted-foreground">
                {props.description}
            </Card.Content>
            <Card.Content
                className="flex items-center p-1 gap-2 justify-end mt-auto"
            >
                {props.urls?.map((item) => (
                    <Button
                        key={`${props.title}-${item.name}`}
                        variant={"default"}
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