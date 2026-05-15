import { Card } from "../retroui/Card"
import { Text } from "../retroui/Text"

export default function LatestBlogs() {
    return (
        <Card className="p-4 mt-4 w-full">
            <Card.Header>
                <Card.Title>Latest Blogs</Card.Title>
            </Card.Header>
            <Card.Content>
                <Text as="p">
                    Coming soon...
                </Text>
            </Card.Content>
        </Card>
    )
}