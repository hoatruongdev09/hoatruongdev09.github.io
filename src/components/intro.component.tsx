import { Card } from "./retroui/Card";
import { Text } from "./retroui/Text";

export default function Intro() {
    return (
        <Card className="p-4 flex flex-row md:flex-col items-center gap-2 left-0 top-8 sticky">
            <img src="/avatar.jpeg" alt="Avatar" className="w-28 h-28 object-cover" />
            <div className="flex flex-col items-start gap-2">
                <Text as="h3">hoatruongdev</Text>
                <Text as="h6">Software Developer</Text>
                <div className="flex items-center justify-center md:w-full gap-2">
                    <a href="https://www.linkedin.com/in/hoatruongdev09/">
                        <img src='/linkedin.png' alt="LinkedIn" className="w-7 h-7" />

                    </a>
                    <a href="https://github.com/hoatruongdev09">
                        <img src='/github.png' alt="Github" className="w-7 h-7" />
                    </a>
                </div>
            </div>
        </Card>
    )
}

