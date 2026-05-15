import React from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/retroui/Text.tsx
var textVariants = cva("font-head", {
	variants: { as: {
		p: "font-sans text-base",
		li: "font-sans text-base",
		a: "font-sans text-base hover:underline underline-offset-2 decoration-primary",
		h1: "text-4xl lg:text-5xl font-bold",
		h2: "text-3xl lg:text-4xl font-semibold",
		h3: "text-2xl font-medium",
		h4: "text-xl font-normal",
		h5: "text-lg font-normal",
		h6: "text-base font-normal"
	} },
	defaultVariants: { as: "p" }
});
var Text = (props) => {
	const { className, as, ...otherProps } = props;
	return /* @__PURE__ */ jsx(as || "p", {
		className: cn(textVariants({ as }), className),
		...otherProps
	});
};
//#endregion
//#region src/components/retroui/Card.tsx
var Card = ({ className, ...props }) => {
	return /* @__PURE__ */ jsx("div", {
		className: cn("inline-block border-2 rounded shadow-md transition-all hover:shadow-none bg-card", className),
		...props
	});
};
var CardHeader = ({ className, ...props }) => {
	return /* @__PURE__ */ jsx("div", {
		className: cn("flex flex-col justify-start p-4", className),
		...props
	});
};
var CardTitle = ({ className, ...props }) => {
	return /* @__PURE__ */ jsx(Text, {
		as: "h3",
		className: cn("mb-2", className),
		...props
	});
};
var CardDescription = ({ className, ...props }) => /* @__PURE__ */ jsx("p", {
	className: cn("text-muted-foreground", className),
	...props
});
var CardContent = ({ className, ...props }) => {
	return /* @__PURE__ */ jsx("div", {
		className: cn("p-4", className),
		...props
	});
};
var CardComponent = Object.assign(Card, {
	Header: CardHeader,
	Title: CardTitle,
	Description: CardDescription,
	Content: CardContent
});
//#endregion
//#region src/components/intro.component.tsx
function Intro() {
	return /* @__PURE__ */ jsxs(CardComponent, {
		className: "p-4 flex flex-row md:flex-col items-center gap-2 left-0 top-8 sticky",
		children: [/* @__PURE__ */ jsx("img", {
			src: "/avatar.jpeg",
			alt: "Avatar",
			className: "w-28 h-28 object-cover"
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col items-start gap-2",
			children: [
				/* @__PURE__ */ jsx(Text, {
					as: "h3",
					children: "hoatruongdev"
				}),
				/* @__PURE__ */ jsx(Text, {
					as: "h6",
					children: "Software Developer"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-center md:w-full gap-2",
					children: [/* @__PURE__ */ jsx("a", {
						href: "https://www.linkedin.com/in/hoatruongdev09/",
						children: /* @__PURE__ */ jsx("img", {
							src: "/linkedin.png",
							alt: "LinkedIn",
							className: "w-7 h-7"
						})
					}), /* @__PURE__ */ jsx("a", {
						href: "https://github.com/hoatruongdev09",
						children: /* @__PURE__ */ jsx("img", {
							src: "/github.png",
							alt: "Github",
							className: "w-7 h-7"
						})
					})]
				})
			]
		})]
	});
}
//#endregion
//#region src/components/retroui/Badge.tsx
var badgeVariants = cva("font-semibold rounded inline-flex items-center", {
	variants: {
		variant: {
			default: "bg-muted text-muted-foreground",
			outline: "outline-2 outline-foreground text-foreground",
			solid: "bg-foreground text-background",
			surface: "outline-2 bg-primary text-primary-foreground"
		},
		size: {
			sm: "px-2 py-1 text-xs",
			md: "px-2.5 py-1.5 text-sm",
			lg: "px-3 py-2 text-base"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "md"
	}
});
function Badge({ children, size = "md", variant = "default", className = "", ...props }) {
	return /* @__PURE__ */ jsx("span", {
		className: cn(badgeVariants({
			variant,
			size
		}), className),
		...props,
		children
	});
}
//#endregion
//#region src/components/main-contents/about.component.tsx
var skills = [
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
];
var areasOfFocus = [
	"Backend development",
	"Game development",
	"Database design",
	"System architecture"
];
function About() {
	return /* @__PURE__ */ jsxs(CardComponent, {
		className: "p-4 mt-4 md:mt-0",
		children: [/* @__PURE__ */ jsxs(CardComponent.Header, {
			className: "pb-0",
			children: [/* @__PURE__ */ jsx(CardComponent.Title, { children: "About Me" }), /* @__PURE__ */ jsx(CardComponent.Description, { children: "Software developer with 5 years of experience building high-performance backend systems and interactive games. Proficient in designing RESTful APIs with NestJS/Node.js, modeling relational databases with PostgreSQL, and delivering cross-platform games with Unity & C#. Passionate about clean architecture, maintainable code, and smooth user experiences." })]
		}), /* @__PURE__ */ jsxs(CardComponent.Content, { children: [
			/* @__PURE__ */ jsx(Text, {
				as: "h5",
				children: "Skills"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "flex flex-wrap gap-2 mt-1",
				children: skills.map((skill, index) => /* @__PURE__ */ jsx(Badge, {
					variant: "outline",
					children: skill
				}, index))
			}),
			/* @__PURE__ */ jsx(Text, {
				as: "h5",
				className: "mt-2",
				children: "Area of focus"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "flex flex-wrap gap-2 mt-1",
				children: areasOfFocus.map((area, index) => /* @__PURE__ */ jsx(Badge, {
					variant: "outline",
					children: area
				}, index))
			})
		] })]
	});
}
//#endregion
//#region src/components/main-contents/resume.component.tsx
var experiences = [
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
		descriptions: ["Designed and built backend web applications using .NET Core, ASP.NET, and Entity Framework Core with PostgreSQL.", "Maintained and extended a legacy .NET Framework MVC application, refactoring modules to improve code quality and reduce technical debt."]
	}
];
var educations = [{
	grad: "Bachelor of Computer Science",
	school: "University of Science, Hue University",
	beginTime: "2015",
	endTime: "2019"
}];
function Resume() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(CardComponent, {
		className: "p-4 mt-4 w-full",
		children: [/* @__PURE__ */ jsx(CardComponent.Header, {
			className: "pb-0",
			children: /* @__PURE__ */ jsxs(CardComponent.Title, {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ jsx("img", {
					src: "/briefcase.png",
					alt: "briefcase",
					className: "w-8 h-8"
				}), "Experience"]
			})
		}), /* @__PURE__ */ jsx(CardComponent.Content, { children: experiences.map((item, index) => /* @__PURE__ */ jsxs("div", {
			className: "flex gap-4 mt-2 items-start relative",
			children: [
				/* @__PURE__ */ jsx("img", {
					src: "/checkbox-blank-circle.png",
					alt: "checkbox-blank-circle",
					className: "w-4 h-4 mx-2 mt-1"
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute w-1 bg-black rounded-full left-3.5 top-2 bottom-2" }),
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col w-full",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex flex-row items-center justify-center gap-2",
							children: [/* @__PURE__ */ jsxs(Text, {
								as: "h5",
								children: [item.position, " "]
							}), /* @__PURE__ */ jsx(Badge, {
								size: "sm",
								variant: "outline",
								children: item.company
							})]
						}), /* @__PURE__ */ jsxs(Text, { children: [
							item.beginTime,
							" - ",
							item.endTime
						] })]
					}), /* @__PURE__ */ jsx("ul", { children: item.descriptions.map((desc, index) => /* @__PURE__ */ jsxs(Text, {
						as: "li",
						children: ["- ", desc]
					}, `${item.company}-${index}`)) })]
				})
			]
		}, `resume-item-${index}`)) })]
	}), /* @__PURE__ */ jsxs(CardComponent, {
		className: "p-4 mt-4 w-full",
		children: [/* @__PURE__ */ jsx(CardComponent.Header, {
			className: "pb-0",
			children: /* @__PURE__ */ jsxs(CardComponent.Title, {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ jsx("img", {
					src: "/school.png",
					alt: "school",
					className: "w-8 h-8"
				}), "Education"]
			})
		}), /* @__PURE__ */ jsx(CardComponent.Content, { children: educations.map((item, index) => /* @__PURE__ */ jsxs("div", {
			className: "flex gap-4 mt-2 relative",
			children: [
				/* @__PURE__ */ jsx("img", {
					src: "/checkbox-blank-circle.png",
					alt: "checkbox-blank-circle",
					className: "w-4 h-4 mx-2 mt-1"
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute w-1 bg-black rounded-full left-3.5 top-2 bottom-2" }),
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col",
					children: [
						/* @__PURE__ */ jsx(Text, {
							as: "h5",
							children: item.grad
						}),
						/* @__PURE__ */ jsx(Text, { children: item.school }),
						/* @__PURE__ */ jsxs(Text, { children: [
							item.beginTime,
							" - ",
							item.endTime
						] })
					]
				})
			]
		}, `education-item-${index}`)) })]
	})] });
}
//#endregion
//#region src/components/retroui/Button.tsx
var buttonVariants = cva("font-head transition-all rounded outline-hidden cursor-pointer duration-200 font-medium flex justify-center items-center disabled:opacity-60 disabled:cursor-not-allowed", {
	variants: {
		variant: {
			default: "shadow-md hover:shadow active:shadow-none bg-primary text-primary-foreground border-2 border-black transition hover:translate-y-1 active:translate-y-2 active:translate-x-1 hover:bg-primary-hover",
			secondary: "shadow-md hover:shadow active:shadow-none bg-secondary shadow-primary text-secondary-foreground border-2 border-black transition hover:translate-y-1 active:translate-y-2 active:translate-x-1 hover:bg-secondary-hover",
			outline: "shadow-md hover:shadow active:shadow-none bg-transparent border-2 transition hover:translate-y-1 active:translate-y-2 active:translate-x-1",
			link: "bg-transparent hover:underline",
			ghost: "bg-transparent hover:bg-accent"
		},
		size: {
			sm: "px-3 py-1 text-sm shadow hover:shadow-sm",
			md: "px-4 py-1.5 text-base",
			lg: "px-6 lg:px-8 py-2 lg:py-3 text-md lg:text-lg",
			icon: "p-2"
		}
	},
	defaultVariants: {
		size: "md",
		variant: "default"
	}
});
var Button = React.forwardRef(({ children, size = "md", className = "", variant = "default", asChild = false, ...props }, forwardedRef) => {
	return /* @__PURE__ */ jsx(asChild ? Slot : "button", {
		ref: forwardedRef,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props,
		children
	});
});
Button.displayName = "Button";
//#endregion
//#region src/components/main-contents/project-item.component.tsx
function ProjectItem(props) {
	return /* @__PURE__ */ jsxs(CardComponent, {
		className: "flex flex-col",
		children: [
			/* @__PURE__ */ jsx(CardComponent.Content, {
				className: "pb-0 hidden xl:block",
				children: /* @__PURE__ */ jsx("img", {
					src: props.imageUrl,
					alt: "Project Image",
					className: "w-full xl:w-full xl:aspect-square object-center xl:object-scale-down"
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-row xl:flex-col gap-2",
				children: [/* @__PURE__ */ jsx("img", {
					src: props.imageUrl,
					alt: "Project Image",
					className: "ml-4 mt-5 w-32 h-32 aspect-square block xl:hidden object-cover object-top"
				}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(CardComponent.Header, {
					className: "pb-0",
					children: /* @__PURE__ */ jsx(CardComponent.Title, { children: props.title })
				}), /* @__PURE__ */ jsx(CardComponent.Content, {
					className: "pb-0",
					children: props.description
				})] })]
			}),
			/* @__PURE__ */ jsx(CardComponent.Content, {
				className: "flex items-center gap-2 justify-end mt-auto",
				children: props.urls?.map((item) => /* @__PURE__ */ jsx(Button, {
					variant: "secondary",
					size: "sm",
					onClick: () => window.open(item.url, "_blank"),
					children: item.name
				}, `${props.title}-${item.name}`))
			})
		]
	});
}
//#endregion
//#region src/components/main-contents/featured-portfolio.component.tsx
var portfolios = [
	{
		title: "Bag master: Isekai",
		description: "I contributed to the development of Bag master: Isekai, a mobile game that has achieved over 500k downloads on the Google Play Store. My responsibilities included designing and implementing core gameplay mechanics, expanding the code base for new game mode and collaborating with artists and designers to create an engaging user experience.",
		imageUrl: "/portfolios/bagmaster.jpeg",
		urls: [{
			name: "Play Store",
			url: "https://play.google.com/store/apps/details?id=com.DoorTeam.BagMaster&hl=en_US"
		}, {
			name: "App Store",
			url: "https://apps.apple.com/us/app/bagmaster-isekai-bag-battle/id6760184819"
		}]
	},
	{
		title: "Room Decor: Aesthetic Makeover",
		description: "I contributed to the development of Room Decor: Aesthetic Makeover, a mobile game that has achieved over 500k downloads on the Google Play Store. My responsibilities included designing and implementing core gameplay mechanics, expanding the code base for new game mode and collaborating with artists and designers to create an engaging user experience.",
		imageUrl: "/portfolios/room-decor.jpg",
		urls: [{
			name: "Play Store",
			url: "https://play.google.com/store/apps/details?id=com.fc.pk.decor.home.unpacking.makeover"
		}]
	},
	{
		title: "Petopia - Hero Battle Arena",
		description: "I contributed to the development of Petopia - Hero Battle Arena when working at Mirailabs.co, a mobile game that has achieved over 100k downloads on the Google Play Store. My responsibilities included designing and implementing core gameplay mechanics, expanding the code base for new game mode and collaborating with artists and designers to create an engaging user experience.",
		imageUrl: "/portfolios/petopia.webp",
		urls: [{
			name: "Play Store",
			url: "https://play.google.com/store/apps/details?id=co.mirailabs.petopia&hl=en_US"
		}]
	},
	{
		title: "Pegaxy Blaze PvP Horse Racing",
		description: "I contributed to the development of Pegaxy Blaze PvP Horse Racing when working at Mirailabs.co, a mobile game that has achieved over 100k downloads on the Google Play Store. My responsibilities included designing and implementing multiplayer gameplay mechanics.",
		imageUrl: "/portfolios/pegaxy.webp",
		urls: [{
			name: "Play Store",
			url: "https://play.google.com/store/apps/details?id=co.mirailabs.pegaxyv2"
		}]
	},
	{
		title: "Airport Landing Challenge",
		description: "A casual game where players guide airplanes to land safely on runways. I designed and implemented the game mechanics, including airplane movement, collision detection, and scoring system. The game features multiple levels with increasing difficulty and various types of airplanes.",
		imageUrl: "/portfolios/plane.png",
		urls: [{
			name: "Itch.io",
			url: "https://hoatruongdev09.itch.io/air-traffic-controller"
		}]
	},
	{
		title: "Make Squares",
		description: "A puzzle game like tetris but players need to move blocks to form square to clear them. I developed the game using Unity and C#, implementing the core gameplay mechanics, including block movement, rotation, and square formation. The game features multiple levels with increasing difficulty and various types of blocks.",
		imageUrl: "/portfolios/makesqare.png",
		urls: [{
			name: "Itch.io",
			url: "https://hoatruongdev09.itch.io/make-squares"
		}]
	}
];
function FeaturedPortfolio() {
	return /* @__PURE__ */ jsxs(CardComponent, {
		className: "p-4 mt-4 ",
		children: [/* @__PURE__ */ jsx(CardComponent.Header, {
			className: "pb-0",
			children: /* @__PURE__ */ jsx(CardComponent.Title, { children: "Featured Portfolios" })
		}), /* @__PURE__ */ jsx(CardComponent.Content, {
			className: "flex flex-col xl:grid xl:grid-cols-3 gap-4",
			children: portfolios.map((portfolio, index) => /* @__PURE__ */ jsx(ProjectItem, { ...portfolio }, index))
		})]
	});
}
//#endregion
//#region src/components/main-content.component.tsx
function MainContent() {
	return /* @__PURE__ */ jsxs("div", {
		className: "w-full",
		children: [
			/* @__PURE__ */ jsx(About, {}),
			/* @__PURE__ */ jsx(Resume, {}),
			/* @__PURE__ */ jsx(FeaturedPortfolio, {})
		]
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Home() {
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", {
		className: "p-8 flex flex-col gap-0 md:flex-row md:gap-4",
		children: [/* @__PURE__ */ jsx("div", {
			className: "relative",
			children: /* @__PURE__ */ jsx(Intro, {})
		}), /* @__PURE__ */ jsx(MainContent, {})]
	}) });
}
//#endregion
export { Home as component };
