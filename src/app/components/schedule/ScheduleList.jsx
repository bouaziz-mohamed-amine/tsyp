import { useEffect, useState } from "react";
import ScheduleBox from "../ScheduleBox";
import ScheduleItem from "./ScheduleItem";

export default function ScheduleList() {
	return (
		<div>
			{false && (
				<div className="mb-8">
					<div className="mb-4 text-4xl font-bold">Schedule</div>
					<div className="text-gray-600 dark:text-gray-400">
						Learn more about our event schedule.
					</div>
				</div>
			)}

			<ScheduleOverview showTimeline />

			{false && (
				<div className="flex flex-col gap-8">
					{stagesData.map((s) => (
						<div key={s.slug}>
							<div className="mb-4 text-2xl font-bold">{s.name}</div>
							<div className="grid grid-cols-12 gap-y-4 md:auto-rows-fr md:gap-4">
								{s.schedule.map((e) => (
									<div
										className="col-span-12 md:col-span-4 lg:col-span-3"
										key={e.title}
									>
										<ScheduleBox data={e} key={e.title} classNames={"h-full"} />
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export const companiesMock = [
	{
		name: "Vercel",
		description:
			"Vercel combines the best developer experience with an obsessive focus on end-user performance. Our platform enables frontend teams to do their best work.",
		slug: "vercel",
		tierRank: 0,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665957463-sponsor-logo-vercel.png",
		},
	},
	{
		name: "AWS",
		description:
			"Amazon Web Services (AWS) is the world’s most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally. Millions of customers—including the fastest-growing startups, largest enterprises, and leading government agencies—are using AWS to lower costs, become more agile, and innovate faster.",
		slug: "aws",
		tierRank: 1,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665798996-sponsor-logo-aws.png",
		},
	},
	{
		name: "ESports TN",
		description:
			"ESports TN (ESports By TT) is the official portal for gamers in Tunisia. Play matches in League of Legends, Teamfight Tactics, Valorant, and much more, to earn points and win prizes!",
		slug: "esportstn",
		tierRank: 1,
		logo: {
			url: "https://i.imgur.com/BJwI0qC.png",
		},
	},
	{
		name: "BigCommerce",
		description:
			"Headless Commerce for Greater Flexibility. Create differentiated shopping experiences, anywhere, with a powerful commerce engine on the back-end.",
		slug: "bigcommerce",
		tierRank: 1,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665799038-sponsor-logo-bigcommerce.png",
		},
	},
	{
		name: "MongoDB",
		description:
			"MongoDB is the developer data platform empowering innovators to create, transform, and disrupt industries by unleashing the power of software & data.",
		slug: "mongodb",
		tierRank: 1,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665799070-sponsor-logo-mongodb.png",
		},
	},
	{
		name: "Sanity",
		description:
			"Sanity offers a native editing experience for Next.js and Vercel. Instant previews, advanced collaboration, right on your own site.",
		slug: "sanity",
		tierRank: 1,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665817059-sponsor-logo-sanity.png",
		},
	},
	{
		name: "Sitecore",
		description:
			"One composable platform for rich customer experiences, from content to commerce.",
		slug: "sitecore",
		tierRank: 1,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665817092-sponsor-logo-sitecore.png",
		},
	},
	{
		name: "Checkly",
		description:
			"Checkly’s platform delivers advanced synthetic app and API monitoring in a programmable, monitoring-as-code workflow delivering visibility at speed and scale.",
		slug: "checkly",
		tierRank: 2,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665819740-sponsor-logo-checkly.png",
		},
	},
	{
		name: "ChiselStrike",
		description:
			"Build and deploy scalable serverless backends in minutes. Use TypeScript to define your data model, and ChiselStrike will automatically create your backend.",
		slug: "chiselstrike",
		tierRank: 2,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665819797-sponsor-logo-chiselstrike.png",
		},
	},
	{
		name: "Clerk",
		description: "Drop-in authentication and user profiles for Next.js",
		slug: "clerk",
		tierRank: 2,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665907037-sponsor-logo-clerk.png",
		},
	},
	{
		name: "Cloudinary",
		description:
			"Cloudinary helps brands create, manage and deliver engaging visual experiences at scale.",
		slug: "cloudinary",
		tierRank: 2,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665880097-sponsor-logo-cloudinary.png",
		},
	},
	{
		name: "Convex",
		description:
			"Convex is the reactive backend-as-a-service for web developers. Store data, query in JavaScript, update in real time.",
		slug: "convex",
		tierRank: 2,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665880116-sponsor-logo-convex.png",
		},
	},
	{
		name: "daily.dev",
		description: "All developer news in one place. ",
		slug: "daily-dev",
		tierRank: 2,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665880159-sponsor-logo-daily-dev.png",
		},
	},
	{
		name: "DatoCMS",
		description:
			"Simply put, the most complete, user-friendly, and performant Headless CMS.",
		slug: "datocms",
		tierRank: 2,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665880202-sponsor-logo-datocms.png",
		},
	},
	{
		name: "Grafbase",
		description:
			"Instant serverless GraphQL backends. \nGrafbase provides the best developer experience to deploy GraphQL APIs.",
		slug: "grafbase",
		tierRank: 2,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665880225-sponsor-logo-grafbase.png",
		},
	},
	{
		name: "JSworld Conference",
		description:
			"JSworld Conference USA is coming to the Tech Capital of America, join us on 31 March 2023 in San Francisco for The Must Attend JavaScript Conference in the US.",
		slug: "jsworldconference",
		tierRank: 2,
		logo: {
			url: "https://www.datocms-assets.com/35255/1666360389-sponsor-logo-js-world-conference-2.png",
		},
	},
	{
		name: "Mux",
		description:
			"Mux is a video API platform for on-demand, live, and real-time video, helping developers build amazing video experiences into their products via a simple API.",
		slug: "mux",
		tierRank: 2,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665880257-sponsor-logo-mux.png",
		},
	},
	{
		name: "Prisma",
		description:
			"Prisma is a next-generation ORM for Node.js & TypeScript. It’s the easiest way to work with a database in Next.js.",
		slug: "prisma",
		tierRank: 2,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665880279-sponsor-logo-prisma.png",
		},
	},
	{
		name: "Prismic",
		description: "The CMS that helps you grow through your website.",
		slug: "prismic",
		tierRank: 2,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665880303-sponsor-logo-prismic.png",
		},
	},
	{
		name: "Split",
		description:
			"Split is revolutionizing software delivery with its Feature Data Platform, pairing the speed and reliability of feature flags with data to measure the impact of every feature.",
		slug: "split",
		tierRank: 2,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665880365-sponsor-logo-split.png",
		},
	},
	{
		name: "Storyblok",
		description:
			"Storyblok is a Headless Content Management System that helps developers leverage the advantages of Next.js by using reusable components and a real-time visual editor.",
		slug: "storyblok",
		tierRank: 2,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665880399-sponsor-logo-storyblok.png",
		},
	},
	{
		name: "Strapi",
		description:
			"Strapi is the leading open-source headless CMS. It’s 100% JavaScript, fully customizable and developer-first.",
		slug: "strapi",
		tierRank: 2,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665880423-sponsor-logo-strapi.png",
		},
	},
	{
		name: "Supabase",
		description:
			" Open source SQL Database, Authentication, and Storage without the hassle. \nThe easiest way to persist and secure your data in Next.js.",
		slug: "supabase",
		tierRank: 2,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665880471-sponsor-logo-supabase.png",
		},
	},
	{
		name: "Tigris Data",
		description:
			"Tigris is the scalable real-time backend for Next.js applications. Build data-rich features, seamlessly implement search, and easily connect serverless functions.",
		slug: "tigris-data",
		tierRank: 2,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665901766-sponsor-logo-tigrisdata.png",
		},
	},
	{
		name: "Tinybird",
		description: "Build realtime applications on data at any scale.",
		slug: "tinybird",
		tierRank: 2,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665901823-sponsor-logo-tinybird.png",
		},
	},
	{
		name: "Uniform",
		description:
			"Uniform digital experience composition is making composable digital experiences mainstream by turning headless and legacy stacks into a seamless end-to-end digital delivery pipeline.",
		slug: "uniform",
		tierRank: 2,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665902280-sponsor-logo-uniform.png",
		},
	},
	{
		name: "WorkOS",
		description:
			"Implement features like single sign-on and multi-factor authentication in minutes instead of months.",
		slug: "workos",
		tierRank: 2,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665902502-sponsor-logo-workos.png",
		},
	},
	{
		name: "Xata",
		description:
			"The serverless, branchable, scalable, consistent, highly available, and searchable database service focused on the developer experience.",
		slug: "xata",
		tierRank: 2,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665902714-sponsor-logo-xata.png",
		},
	},
	{
		name: "10up",
		description:
			"We build finely crafted tools and websites for content creators.",
		slug: "10up",
		tierRank: 3,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665902764-sponsor-logo-10up.png",
		},
	},
	{
		name: "AKQA",
		description:
			"AKQA is an ideas and innovation company. We exist to create the future for our clients.",
		slug: "akqa",
		tierRank: 3,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665903239-sponsor-logo-akqa.png",
		},
	},
	{
		name: "AmericanEagle.com",
		description:
			"Americaneagle.com is a family-owned, full-service, global digital transformation agency specializing in website design, development, hosting, digital marketing, and post-launch support.",
		slug: "americaneagle-com",
		tierRank: 3,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665903263-sponsor-logo-americaneagle-com.png",
		},
	},
	{
		name: "Appnovation",
		description:
			"Appnovation is a global, full-service digital partner that combines bold ambition with practical action to create customer-first digital solutions. We build purposeful digital solutions that deliver real impact today and serve as strong foundations for future growth.",
		slug: "appnovation",
		tierRank: 3,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665903289-sponsor-logo-appnovation.png",
		},
	},
	{
		name: "Blazity",
		description: "We turn big ideas into world-class products with Next.js.",
		slug: "blazity",
		tierRank: 3,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665903316-sponsor-logo-blazity.png",
		},
	},
	{
		name: "Convert Digital",
		description:
			"Convert Digital is a leading eCommerce web design and development agency. We use market-leading tools and technologies to simplify complex problems; creating fully integrated, scalable, functional and high converting websites.",
		slug: "convert-digital",
		tierRank: 3,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665903351-sponsor-logo-convert-digital.png",
		},
	},
	{
		name: "FFW",
		description:
			"We create and scale digital experiences that move enterprises and people forward.",
		slug: "ffw",
		tierRank: 3,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665903377-sponsor-logo-ffw.png",
		},
	},
	{
		name: "Formidable",
		description:
			"Formidable is a global design and engineering consultancy, and open-source software organization, specializing in digital products and transformation.",
		slug: "formidable",
		tierRank: 3,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665903404-sponsor-logo-formidable.png",
		},
	},
	{
		name: "Horizontal",
		description:
			"We architect meaningful, end‑to‑end experiences through strategy, creativity and technology.",
		slug: "horizontal",
		tierRank: 3,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665903443-sponsor-logo-horizontal.png",
		},
	},
	{
		name: "Monogram",
		description:
			"Monogram is a digital agency from Atlanta, specializing in building composable products including websites, web apps, commerce, and more.",
		slug: "monogram",
		tierRank: 3,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665903518-sponsor-logo-monogram.png",
		},
	},
	{
		name: "Orium",
		description:
			"North America's leading composable commerce consultancy and system integrator. We help ambitious brands execute, innovate, and transform quickly.",
		slug: "orium",
		tierRank: 3,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665903554-sponsor-logo-orium.png",
		},
	},
	{
		name: "PeakActivity",
		description:
			"A digital acceleration and technology services company that enables progress for businesses at every point of their digital journey. through modernization, optimization, innovation, and engineering services.",
		slug: "peakactivity",
		tierRank: 3,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665903578-sponsor-logo-peakactivity.png",
		},
	},
	{
		name: "Publicis Sapient",
		description:
			"For 30 years, Publicis Sapient has helped organizations build the capabilities they need to not only meet but exceed customer expectations.",
		slug: "publicis-sapient",
		tierRank: 3,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665903637-sponsor-logo-publicis-sapient.png",
		},
	},
	{
		name: "RDA",
		description:
			"Proven digital consultancy that delivers customer value by simplifying complex technology environments through consistent strategy, design, and software engineering.",
		slug: "rda",
		tierRank: 3,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665903667-sponsor-logo-rda.png",
		},
	},
	{
		name: "Work & Co",
		description:
			"Work & Co is a global design and technology company focused on making digital products that transform companies. ",
		slug: "work-co",
		tierRank: 3,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665904012-sponsor-logo-work-co.png",
		},
	},
	{
		name: "Wunderman Thompson",
		description: "We Inspire Growth for Ambitious Brands.",
		slug: "wunderman-thompson",
		tierRank: 3,
		logo: {
			url: "https://www.datocms-assets.com/35255/1665903699-sponsor-logo-wundermanthompson.png",
		},
	},
];

export const stagesData = [
	{
		name: "December 18",
		slug: "keynote",
		stream: "https://www.youtube.com/embed/NiknNI_0J48?autoplay=1&loop=1",
		discord: "https://discord.gg/fake",
		buttons: [
			{
				text: "Next.js 13",
				url: "https://nextjs.org/blog/next-13",
				icon: "next",
			},
			{
				text: "Turbopack",
				url: "https://vercel.com/blog/turbopack",
				icon: "turbopack",
			},
		],
		schedule: [
			{
				start: "2022-10-25T10:00:00-07:00",
				end: "2022-10-25T10:30:00-07:00",
				title: "Preshow",
				metadata: "",
				speaker: [
					{
						name: "Lee Robinson",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059588-lee.jpg",
						},
					},
					{
						name: "Delba de Oliveira",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059775-delba.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T10:30:00-07:00",
				end: "2022-10-25T10:54:00-07:00",
				title: "Keynote",
				metadata: "",
				speaker: [
					{
						name: "Guillermo Rauch",
						image: {
							url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png",
						},
					},
					{
						name: "Delba de Oliveira",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059775-delba.jpg",
						},
					},
					{
						name: "Lydia Hallie",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059697-lydia.jpg",
						},
					},
					{
						name: "Lee Robinson",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059588-lee.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T10:54:00-07:00",
				end: "2022-10-25T11:45:00-07:00",
				title: "Live Q&A with Next.js / React Teams",
				metadata: "qa",
				speaker: [
					{
						name: "Lee Robinson",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059588-lee.jpg",
						},
					},
					{
						name: "Delba de Oliveira",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059775-delba.jpg",
						},
					},
					{
						name: "Maia Teegarden",
						image: {
							url: "https://www.datocms-assets.com/35255/1664999736-3dcd52xg.png",
						},
					},
				],
			},
		],
	},
	{
		name: "December 19",
		slug: "j",
		stream: "https://www.youtube.com/embed/qe6kkw2ut_Q?autoplay=1&loop=1",
		discord: "https://discord.gg/fake",
		buttons: [],
		schedule: [
			{
				start: "2022-10-25T10:00:00-07:00",
				end: "2022-10-25T10:30:00-07:00",
				title: "Preshow",
				metadata: "",
				speaker: [
					{
						name: "Lee Robinson",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059588-lee.jpg",
						},
					},
					{
						name: "Delba de Oliveira",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059775-delba.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T10:30:00-07:00",
				end: "2022-10-25T10:54:00-07:00",
				title: "Keynote",
				metadata: "",
				speaker: [
					{
						name: "Guillermo Rauch",
						image: {
							url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png",
						},
					},
					{
						name: "Delba de Oliveira",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059775-delba.jpg",
						},
					},
					{
						name: "Lydia Hallie",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059697-lydia.jpg",
						},
					},
					{
						name: "Lee Robinson",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059588-lee.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T10:54:00-07:00",
				end: "2022-10-25T11:45:00-07:00",
				title: "Live Q&A with Next.js / React Teams",
				metadata: "qa",
				speaker: [
					{
						name: "Lee Robinson",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059588-lee.jpg",
						},
					},
					{
						name: "Delba de Oliveira",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059775-delba.jpg",
						},
					},
					{
						name: "Maia Teegarden",
						image: {
							url: "https://www.datocms-assets.com/35255/1664999736-3dcd52xg.png",
						},
					},
				],
			},
			{
				start: "2022-10-25T11:45:00-07:00",
				end: "2022-10-25T11:56:00-07:00",
				title: "Enterprise-grade composable commerce with Next.js",
				metadata: "",
				speaker: [
					{
						name: "TJ Kohli",
						image: {
							url: "https://www.datocms-assets.com/35255/1664999882-punefi1ubi.jpeg",
						},
					},
				],
			},
			{
				start: "2022-10-25T11:56:00-07:00",
				end: "2022-10-25T12:17:00-07:00",
				title: "Introducing Turbopack",
				metadata: "",
				speaker: [
					{
						name: "Maia Teegarden",
						image: {
							url: "https://www.datocms-assets.com/35255/1664999736-3dcd52xg.png",
						},
					},
				],
			},
			{
				start: "2022-10-25T12:17:00-07:00",
				end: "2022-10-25T12:41:00-07:00",
				title: "Nested layouts by example",
				metadata: "",
				speaker: [
					{
						name: "Sam Selikoff",
						image: {
							url: "https://www.datocms-assets.com/35255/1664999142-headshot.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T12:41:00-07:00",
				end: "2022-10-25T13:15:00-07:00",
				title: "A/B testing: performative experimentation at scale",
				metadata: "",
				speaker: [
					{
						name: "Kylie Czajkowski",
						image: {
							url: "https://www.datocms-assets.com/35255/1665002718-kylie.jpeg",
						},
					},
				],
			},
			{
				start: "2022-10-25T13:15:00-07:00",
				end: "2022-10-25T13:34:00-07:00",
				title: "Beats in the browser",
				metadata: "",
				speaker: [
					{
						name: "Kaho Cheung",
						image: {
							url: "https://www.datocms-assets.com/35255/1602516567-kaho1000px-kaho-cheung.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T13:34:00-07:00",
				end: "2022-10-25T13:56:00-07:00",
				title: "Optimally using third-party services with Next.js",
				metadata: "",
				speaker: [
					{
						name: "Steve Sewell",
						image: {
							url: "https://www.datocms-assets.com/35255/1664997070-steve.jpeg",
						},
					},
				],
			},
			{
				start: "2022-10-25T14:00:00-07:00",
				end: "2022-10-25T15:26:00-07:00",
				title: "The Future of the Web: From Cloud to Edge",
				metadata: "",
				speaker: [
					{
						name: "Kelsey Hightower",
						image: {
							url: "https://www.datocms-assets.com/35255/1634263804-kelsey.jpeg",
						},
					},
					{
						name: "Guillermo Rauch",
						image: {
							url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png",
						},
					},
				],
			},
			{
				start: "2022-10-25T15:26:00-07:00",
				end: "2022-10-25T15:53:00-07:00",
				title:
					"Scaling Next.js with WordPress to a million developers (OISR + MDX + WP)",
				metadata: "",
				speaker: [
					{
						name: "Ahmad Awais",
						image: {
							url: "https://www.datocms-assets.com/35255/1664998185-ahmad-awais-dp-purple.jpeg",
						},
					},
				],
			},
			{
				start: "2022-10-25T15:53:00-07:00",
				end: "2022-10-25T15:57:00-07:00",
				title: "Deploying multiple brands in multiple regions",
				metadata: "",
				speaker: [
					{
						name: "Debra Gail White",
						image: {
							url: "https://www.datocms-assets.com/35255/1664991281-debrawhite.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T15:59:00-07:00",
				end: "2022-10-25T16:10:00-07:00",
				title: "Waterbeds to Wayfair competitor",
				metadata: "",
				speaker: [
					{
						name: "Rebecca Bakels",
						image: {
							url: "https://www.datocms-assets.com/35255/1664986697-rebecca_bakels.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T16:10:00-07:00",
				end: "2022-10-25T16:21:00-07:00",
				title: "Data that scales: from modern frontends to the EDGE!",
				metadata: "",
				speaker: [
					{
						name: "Jesse Hall",
						image: {
							url: "https://www.datocms-assets.com/35255/1664987782-jesse-hall-square.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T16:21:00-07:00",
				end: "2022-10-25T16:38:00-07:00",
				title: "How Next.js & Prisma make frontend developers full stack",
				metadata: "",
				speaker: [
					{
						name: "Amy Dutton",
						image: {
							url: "https://www.datocms-assets.com/35255/1664992229-avatar-2x.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T16:38:00-07:00",
				end: "2022-10-25T16:54:00-07:00",
				title: "Why Next.js for my Strapi application",
				metadata: "",
				speaker: [
					{
						name: "Trecia Kat",
						image: {
							url: "https://www.datocms-assets.com/35255/1664987337-trecia_kat.jpg",
						},
					},
				],
			},
		],
	},
	{
		name: "December 20",
		slug: "s",
		stream: "https://www.youtube.com/embed/RwyaNPWMiwU?autoplay=1&loop=1",
		discord: "https://discord.gg/fake",
		buttons: [],
		schedule: [
			{
				start: "2022-10-25T10:30:00-07:00",
				end: "2022-10-25T10:54:00-07:00",
				title: "Keynote",
				metadata: "",
				speaker: [
					{
						name: "Guillermo Rauch",
						image: {
							url: "https://www.datocms-assets.com/35255/1665002893-t0caq00tu-u0cal2338-286336d9a71b-512.png",
						},
					},
					{
						name: "Delba de Oliveira",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059775-delba.jpg",
						},
					},
					{
						name: "Lydia Hallie",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059697-lydia.jpg",
						},
					},
					{
						name: "Lee Robinson",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059588-lee.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T10:00:00-07:00",
				end: "2022-10-25T10:30:00-07:00",
				title: "Preshow",
				metadata: "",
				speaker: [
					{
						name: "Lee Robinson",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059588-lee.jpg",
						},
					},
					{
						name: "Delba de Oliveira",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059775-delba.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T10:54:00-07:00",
				end: "2022-10-25T11:45:00-07:00",
				title: "Live Q&A with Next.js / React Teams",
				metadata: "qa",
				speaker: [
					{
						name: "Lee Robinson",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059588-lee.jpg",
						},
					},
					{
						name: "Delba de Oliveira",
						image: {
							url: "https://www.datocms-assets.com/35255/1665059775-delba.jpg",
						},
					},
					{
						name: "Maia Teegarden",
						image: {
							url: "https://www.datocms-assets.com/35255/1664999736-3dcd52xg.png",
						},
					},
				],
			},
			{
				start: "2022-10-25T11:45:00-07:00",
				end: "2022-10-25T12:19:00-07:00",
				title: "Enabling data at massive scale with Next.js",
				metadata: "",
				speaker: [
					{
						name: "Tejas Kumar",
						image: {
							url: "https://www.datocms-assets.com/35255/1664991819-tejas.png",
						},
					},
				],
			},
			{
				start: "2022-10-25T12:19:00-07:00",
				end: "2022-10-25T12:49:00-07:00",
				title: "Building a feedback widget using Next.js",
				metadata: "",
				speaker: [
					{
						name: "Mahmoud Abdelwahab ",
						image: {
							url: "https://www.datocms-assets.com/35255/1664994239-mahmoud.webp",
						},
					},
				],
			},
			{
				start: "2022-10-25T12:52:00-07:00",
				end: "2022-10-25T13:15:00-07:00",
				title: "Is React Native + Next.js production-ready?",
				metadata: "",
				speaker: [
					{
						name: "Fernando Rojo",
						image: {
							url: "https://www.datocms-assets.com/35255/1664991007-rojo.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T13:15:00-07:00",
				end: "2022-10-25T13:28:00-07:00",
				title: "Making Typesafe APIs easy with tRPC",
				metadata: "",
				speaker: [
					{
						name: "Chris Bautista",
						image: {
							url: "https://www.datocms-assets.com/35255/1664992526-img_7541.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T13:28:00-07:00",
				end: "2022-10-25T13:40:00-07:00",
				title: "Next.js is a backend framework",
				metadata: "",
				speaker: [
					{
						name: "Theo Browne",
						image: {
							url: "https://www.datocms-assets.com/35255/1664988146-headshot-main.jpeg",
						},
					},
				],
			},
			{
				start: "2022-10-25T13:40:00-07:00",
				end: "2022-10-25T14:16:00-07:00",
				title: "What's new in web UI",
				metadata: "",
				speaker: [
					{
						name: "Una Kravets",
						image: {
							url: "https://www.datocms-assets.com/35255/1664996835-dsc052331.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T14:38:00-07:00",
				end: "2022-10-25T15:11:00-07:00",
				title: "Impatience is a virtue",
				metadata: "",
				speaker: [
					{
						name: "Samuel Goff",
						image: {
							url: "https://www.datocms-assets.com/35255/1665000255-sam-hr_w5ho8t.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T15:09:00-07:00",
				end: "2022-10-25T15:24:00-07:00",
				title: "Community driven composable commerce with Next.js",
				metadata: "",
				speaker: [
					{
						name: "Lina Murton",
						image: {
							url: "https://www.datocms-assets.com/35255/1665150695-lina-headshot.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T15:24:00-07:00",
				end: "2022-10-25T15:30:00-07:00",
				title: "Make amazing docs, faster with StackBlitz and Next.js",
				metadata: "",
				speaker: [
					{
						name: "Sylwia Vargas",
						image: {
							url: "https://www.datocms-assets.com/35255/1664998439-sylwia-headshot.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T15:31:00-07:00",
				end: "2022-10-25T15:51:00-07:00",
				title: "Excalidraw - Under the Hood of the Virtual Whiteboard",
				metadata: "",
				speaker: [
					{
						name: 'Christopher "vjeux" Chedeau',
						image: {
							url: "https://www.datocms-assets.com/35255/1665150410-christopher.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T15:51:00-07:00",
				end: "2022-10-25T16:01:00-07:00",
				title:
					"How a team of 3 built an extensible web analytics SaaS in 3 weeks with Next.js",
				metadata: "",
				speaker: [
					{
						name: "Raquel Yuste",
						image: {
							url: "https://www.datocms-assets.com/35255/1664997370-photo.png",
						},
					},
				],
			},
			{
				start: "2022-10-25T16:18:00-07:00",
				end: "2022-10-25T16:41:00-07:00",
				title: "Stand up a commerce storefront in 5 minutes",
				metadata: "",
				speaker: [
					{
						name: "Pieter Brinkman",
						image: {
							url: "https://www.datocms-assets.com/35255/1664988506-pieter-bio-image-300x300.webp",
						},
					},
				],
			},
			{
				start: "2022-10-25T16:04:00-07:00",
				end: "2022-10-25T16:18:00-07:00",
				title: "Building a design system in Next.js with Tailwind",
				metadata: "",
				speaker: [
					{
						name: "Tru Narla",
						image: {
							url: "https://www.datocms-assets.com/35255/1664998811-tru-headshot.png",
						},
					},
				],
			},
			{
				start: "2022-10-25T16:41:00-07:00",
				end: "2022-10-25T17:03:00-07:00",
				title: "Puma's multi-platform infrastructure with Sanity and Next.js",
				metadata: "",
				speaker: [
					{
						name: "Simeon Griggs",
						image: {
							url: "https://www.datocms-assets.com/35255/1665150031-simon.jpg",
						},
					},
				],
			},
			{
				start: "2022-10-25T14:16:00-07:00",
				end: "2022-10-25T14:38:00-07:00",
				title: "How to add a built-in authoring experience to Next.js",
				metadata: "",
				speaker: [
					{
						name: "Kapehe",
						image: {
							url: "https://www.datocms-assets.com/35255/1665150456-kap.jpg",
						},
					},
				],
			},
		],
	},
];

export function ScheduleOverview({ showTimeline }) {
	const [isSeeMore, setIsSeeMore] = useState(false);
	const [program, setProgram] = useState([]);
	const [day, setDay] = useState(1);
	const [slotIndex, setSlotIndex] = useState(0);
	const [subSlotKey, setsubSlotKey] = useState("");

	function renderDaySchedule(day) {
		return day?.slice(0, isSeeMore ? undefined : 5)?.map((e, idx) => {
			const allLocationsSame = areAllLocationsSame(e.activities);
			const currentLocation = e.activities[0]?.location;

			return (
				<li aria-label="Steven McHail talking about one-time payments at 9:00AM - 10:00AM GMT+1">
					{idx > 0 && (
						<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
					)}
					<p className="mb-2 font-mono text-base text-slate-600">
						{e.timeSlotStart + " - " + e.timeSlotEnd}
					</p>
					{allLocationsSame && currentLocation && (
						<div className="mb-2 font-medium tracking-wide underline">
							{currentLocation}
						</div>
					)}
					<div className="flex flex-col gap-4">
						{e.activities?.map((activity, idx) => {
							return (
								<div className="">
									<h4 className="text-lg font-semibold tracking-tight ">
										{activity.title}
									</h4>
									{!allLocationsSame && (
										<div className="font-medium tracking-wide underline">
											{activity.location}
										</div>
									)}
								</div>
							);
						})}
					</div>

					{/* <p className="mt-1 tracking-tight ">One-time payments</p> */}
				</li>
			);
		});
	}

	useEffect(() => {
		const getData = async () => {
			setSlotIndex(0);
			setsubSlotKey("");
			await fetch("/assets/day" + day + ".json")
				.then((response) => response.json())
				.then((response) => {
					setProgram([...response]);
				})
				.catch((err) => console.error(err));
		};
		getData();
		console.log(program);
	}, [day]);

	function renderActivities() {
		if (subSlotKey.length > 0) {
			return program[slotIndex].children.filter((el) => el.key == subSlotKey);
		}
		return program[slotIndex].children;
	}

	function setProgramSlot(index, key = "") {
		setSlotIndex(index);
		setsubSlotKey("");
	}

	return (
		<section>
			<div className="my-4 flex justify-center gap-2 md:my-8">
				<div className="text-4xl font-bold">Schedule Overview</div>
			</div>
			<div className="hidden md:block">
				<div class="mb-8 flex justify-center">
					<a
						onClick={() => setDay(1)}
						aria-current="page"
						className="text-md cursor-pointer rounded-l-lg border-2 border-gray-200 px-6 py-2 font-medium text-gray-900 hover:bg-gray-100 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
					>
						December 22
					</a>
					<a
						onClick={() => setDay(2)}
						className="text-md cursor-pointer border-t-2 border-b-2 border-gray-200 px-6 py-2 font-medium text-gray-900 hover:bg-gray-100 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
					>
						December 23
					</a>
					<a
						onClick={() => setDay(3)}
						className="text-md cursor-pointer rounded-r-lg border-2 border-gray-200 px-6 py-2 font-medium text-gray-900 hover:bg-gray-100 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
					>
						December 24
					</a>
				</div>
				<div className="flex">
					<div className="m-2 basis-1/3">
						{program.map((slot, index) => (
							<div>
								<div
									onClick={() => setProgramSlot(index)}
									className="text-md cursor-pointer rounded-lg border border-gray-200 px-6 py-2 text-center font-medium text-gray-900 hover:bg-gray-100 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
								>
									{slot.title}
								</div>
								<div>
									{slot.subSlot &&
										index == slotIndex &&
										slot.subSlot.map((sub) => (
											<div
												onClick={() => {
													setsubSlotKey(sub.key);
												}}
											>
												<div className="text-sm cursor-pointer rounded-lg border border-gray-200 px-6 py-2 mx-8 text-center font-medium text-gray-900 hover:bg-gray-100 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500">
												{sub.title}
												</div>
											</div>
										))}
								</div>
							</div>
						))}
					</div>
					<div className="m-2 basis-2/3">
						<div class="w-full rounded-lg border border-gray-200 shadow ">
							<div class="flow-root">
								<ul
									role="list"
									class="divide-y divide-gray-200 dark:divide-gray-700"
								>
									{program[slotIndex] &&
										renderActivities().map((activity) => (
											<li class="p-3">
												<ScheduleItem  activity={activity}/>
											</li>
										))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className=" md:hidden">
				<div class="flex justify-center">
					<div>
						<a
							onClick={() => setDay(1)}
							aria-current="page"
							class="text-md flex cursor-pointer justify-center rounded-l-lg border border-gray-200  py-2 font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500 md:px-6"
						>
							<span className="px-2">December</span>{" "}
							<span className="pr-2">22</span>
						</a>
					</div>
					<div>
						<a
							onClick={() => setDay(2)}
							class="text-md flex cursor-pointer justify-center border-t border-b border-gray-200  py-2 font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500 md:px-6"
						>
							<span className="px-2">December</span>{" "}
							<span className="pr-2">23</span>
						</a>
					</div>
					<div>
						<a
							onClick={() => setDay(3)}
							class="text-md flex cursor-pointer justify-center rounded-r-lg border border-gray-200  py-2 font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500 md:px-6"
						>
							<span className="px-2">December</span>{" "}
							<span className="pr-2">24</span>
						</a>
					</div>
				</div>
				<div className="flex items-center justify-between">
					{program[slotIndex] && (
						<p class="text-md mr-2 ml-2 flex justify-center truncate rounded-l-lg py-4 font-medium text-gray-900 dark:text-white">
							{program[slotIndex].title}
						</p>
					)}
					<div className="mx-2 flex">
						<div className="mr-2">
							<button
								type="button"
								class="inline-flex rotate-180 items-center rounded-lg border border-gray-300  py-2 px-1 text-center text-sm font-medium text-gray-400 dark:bg-gray-800"
								onClick={() => {
									let pre = slotIndex - 1;
									if (program[pre]) setSlotIndex(pre);
								}}
							>
								<svg
									class="h-5 w-6"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 10"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M1 5h12m0 0L9 1m4 4L9 9"
									/>
								</svg>
							</button>
						</div>
						<div className="mr-2">
							<button
								type="button"
								class=" inline-flex items-center rounded-lg border border-gray-300  py-2 px-1 text-center text-sm font-medium text-gray-400 dark:bg-gray-800"
								onClick={() => {
									let next = slotIndex + 1;
									if (program[next]) setSlotIndex(next);
								}}
							>
								<svg
									class="h-5 w-6"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 10"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M1 5h12m0 0L9 1m4 4L9 9"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div class="rounded-lg border border-gray-200 shadow ">
					<div class="flow-root">
						<ul
							role="list"
							class="max-w-5 divide-y divide-gray-200 dark:divide-gray-700"
						>
							{program[slotIndex] &&
								renderActivities().map((activity) => (
									<li class="p-1">
										<ScheduleItem  activity={activity}/>
									</li>
								))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
