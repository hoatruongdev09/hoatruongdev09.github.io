import type { url } from "inspector";
import { Card } from "../retroui/Card";
import ProjectItem from "./project-item.component";

const portfolios = [
    {
        title: "Bag master: Isekai",
        description: "I contributed to the development of Bag master: Isekai, a mobile game that has achieved over 500k downloads on the Google Play Store. My responsibilities included designing and implementing core gameplay mechanics, expanding the code base for new game mode and collaborating with artists and designers to create an engaging user experience.",
        imageUrl: "/portfolios/bagmaster.jpeg",
        urls: [
            {
                name: "Play Store",
                url: "https://play.google.com/store/apps/details?id=com.DoorTeam.BagMaster&hl=en_US"
            },
            {
                name: "App Store",
                url: "https://apps.apple.com/us/app/bagmaster-isekai-bag-battle/id6760184819"
            }
        ]
    },
    {
        title: "Room Decor: Aesthetic Makeover",
        description: "I contributed to the development of Room Decor: Aesthetic Makeover, a mobile game that has achieved over 500k downloads on the Google Play Store. My responsibilities included designing and implementing core gameplay mechanics, expanding the code base for new game mode and collaborating with artists and designers to create an engaging user experience.",
        imageUrl: "/portfolios/room-decor.jpg",
        urls: [
            {
                name: "Play Store",
                url: "https://play.google.com/store/apps/details?id=com.fc.pk.decor.home.unpacking.makeover"
            }
        ]
    },
    {
        title: "Petopia - Hero Battle Arena",
        description: "I contributed to the development of Petopia - Hero Battle Arena when working at Mirailabs.co, a mobile game that has achieved over 100k downloads on the Google Play Store. My responsibilities included designing and implementing core gameplay mechanics, expanding the code base for new game mode and collaborating with artists and designers to create an engaging user experience.",
        imageUrl: "/portfolios/petopia.webp",
        urls: [
            {
                name: "Play Store",
                url: "https://play.google.com/store/apps/details?id=co.mirailabs.petopia&hl=en_US"
            },
        ]
    },
    {
        title: "Pegaxy Blaze PvP Horse Racing",
        description: "I contributed to the development of Pegaxy Blaze PvP Horse Racing when working at Mirailabs.co, a mobile game that has achieved over 100k downloads on the Google Play Store. My responsibilities included designing and implementing multiplayer gameplay mechanics.",
        imageUrl: "/portfolios/pegaxy.webp",
        urls: [
            {
                name: "Play Store",
                url: "https://play.google.com/store/apps/details?id=co.mirailabs.pegaxyv2"
            }
        ]
    },
    {
        title: "Airport Landing Challenge",
        description: "A casual game where players guide airplanes to land safely on runways. I designed and implemented the game mechanics, including airplane movement, collision detection, and scoring system. The game features multiple levels with increasing difficulty and various types of airplanes.",
        imageUrl: "/portfolios/plane.png",
        urls: [
            {
                name: "Itch.io",
                url: "https://hoatruongdev09.itch.io/air-traffic-controller"
            }
        ]
    },
    {
        title: "Make Squares",
        description: "A puzzle game like tetris but players need to move blocks to form square to clear them. I developed the game using Unity and C#, implementing the core gameplay mechanics, including block movement, rotation, and square formation. The game features multiple levels with increasing difficulty and various types of blocks.",
        imageUrl: "/portfolios/makesqare.png",
        urls: [
            {
                name: "Itch.io",
                url: "https://hoatruongdev09.itch.io/make-squares"
            }
        ]
    }
]

export default function FeaturedPortfolio() {
    return (
        <Card className="p-4 mt-4 ">
            <Card.Header className="pb-0">
                <Card.Title>
                    Featured Portfolios
                </Card.Title>
            </Card.Header>
            <Card.Content className="flex flex-col xl:grid xl:grid-cols-3 gap-4">
                {
                    portfolios.map((portfolio, index) => (
                        <ProjectItem
                            key={index}
                            {...portfolio}
                        />
                    ))
                }
            </Card.Content>

        </Card>
    )
}