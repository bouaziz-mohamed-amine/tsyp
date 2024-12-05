const routes = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Tunisia",
		href: "/tunisia",
	},
	{
		title: "TN 2056",
		href: "/tn2056",
	},
	// ...(new Date() >= new Date('2024-09-02') ? [{
	// 	title: "Challenges",
	// 	href: "/challenges",
	//   }] : []),
	// {
	// 	title: "Game",
	// 	href: "/virtual-game",
	// },
	{
		title: "Speakers",
		href: "/speakers",
	},
	{
		title: "Challenges",
		href: "/challenges",
		mobileOnly: true
	},
	{
		title: "Schedule",
		href: "/schedule",
		mobileOnly: true
		
	},
	{
		title: "Program",
		type: "group",
		items: [
			{
				title: "Challenges",
				href: "/challenges",
				
			},
			{
				title: "Schedule",
				href: "/schedule",
				
			},
			
			// {
			// 	title: "Speakers",
			// 	href: "/speakers",
			// },
			// {
			// 	title: "Venue",
			// 	href: "/venue",
			// },
		],
		
	},
	// {
	// 	title: "Awards",
	// 	href: "/awards",
	// },
	// {
	// 	title: "Schedule",
	// 	href: "/schedule",
	// 	mobileOnly: true,
	// },
	// {
	// 	title: "Speakers",
	// 	href: "/speakers",
	// 	mobileOnly: true,
	// },
	// {
	// 	title: "Challenges",
	// 	href: "/challenges",
	// 	mobileOnly: true,
	// },
	// {
	// 	title: "Venue",
	// 	href: "/venue",
	// 	mobileOnly: true,
	// },
	// {
	// 	title: "Partners",
	// 	type: "group",
	// 	items:[
	// 		{
	// 			title: "Partners",
	// 			href: "/partners-sponsors",
	// 		},
	// 		{
	// 			title: "Call For Sponsors",
	// 			href: "/sponsor-us",
	// 		},
	// 	]
	// },

	// {
	// 	title: "Registration",
	// 	href: "/registration",
	// 	mobileOnly: true,
	// },
	// {
	// 	title: "Ambassadors",
	// 	href: "https://forms.gle/Q88TpsVymyvDYQPBA",
	// 	external: true,
	// },
	// {
	// 	title: "Expo",
	// 	href: "/expo",
	// },
	{
		title: "Partners",
		href: "/partners-sponsors",
	},
	{
		title: "Call For Sponsors",
		href: "/sponsor-us",
	},
	{
		title: "About us",
		href: "/about-us",
	},
	// {
	// 	title: "Reveal",
	// 	href: "/reveal",
	// 	external: true,
	// },
	{
		title: "Contact us",
		href: "/contact",
	},
	// {
	// 	title: "Event Feedback",
	// 	href: "/event-feedback",
	// 	eventStatus: "ended",
	// },
	// {
	// 	title: "Game",
	// 	href: "/game",
	// },
];

export default routes;
