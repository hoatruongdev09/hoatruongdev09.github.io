import { useTheme } from "../lib/theme-context";
import { Card } from "./retroui/Card";
import { Text } from "./retroui/Text";

import LinkedinIcon from '../assets/linkedin.svg?react';
import GithubIcon from '../assets/github.svg?react';
import MoonIcon from '../assets/moon.svg?react';
import SunIcon from '../assets/sun.svg?react';

export default function Intro() {
    const { theme, toggleTheme } = useTheme();
    return (
        <Card className="p-2 md:p-4 flex flex-row md:flex-col items-start md:items-center gap-2 left-0 top-8 sticky">
            <img src="/avatar.jpeg" alt="Avatar" className="w-18 h-18 mt-1.5 md:mt-0 md:w-28 md:h-28 object-cover rounded border border-primary" />
            <div className="flex flex-col items-start md:items-center">
                <Text as="h3" className="text-primary">hoatruongdev</Text>
                <Text as="h6" className="text-muted-foreground">Software Developer</Text>
                <div className="flex items-center justify-center md:w-full gap-2">
                    <a
                        href="https://www.linkedin.com/in/hoatruongdev09/"
                        className="hover:cursor-pointer"
                    >
                        <LinkedinIcon className="w-7 h-7 fill-muted-foreground" />
                    </a>
                    <a
                        href="https://github.com/hoatruongdev09"
                        className="hover:cursor-pointer"
                    >
                        <GithubIcon className="w-7 h-7 fill-muted-foreground" />
                    </a>

                    <button
                        onClick={toggleTheme}
                        className="hover:bg-none hover:cursor-pointer"
                    >
                        {theme === "light" ? <MoonIcon className="fill-muted-foreground" /> : <SunIcon className="fill-muted-foreground" />}
                    </button>
                </div>
            </div>
        </Card>
    )
}

