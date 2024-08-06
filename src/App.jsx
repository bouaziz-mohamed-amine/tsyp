import { Suspense } from "react";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import AppLayout from "./app/components/AppLayout.jsx";
import Speaker from "./app/components/Speaker.jsx";
import Speakers from "./app/components/Speakers.jsx";
import SponsorsPage from "./app/pages/Sponsors.page.jsx";
import ExpoDetailsPage from "./app/pages/ExpoDetails.page.jsx";
import SchedulePage from "./app/pages/Schedule.page.jsx";
import { setInitialTheme } from "./app/utils/themeSwitcher.js";
import HomePage from "./app/pages/Home.page.jsx";
import Team from "./app/components/Team.jsx";
import TunisiaPage from "./app/pages/Tunisia.page.jsx";
import TeamMember from "./app/components/TeamMember.jsx";
import ContactPage from "./app/pages/Contact.page.jsx";
import SponsorUsPage from "./app/pages/SponsorUs.page.jsx";
import ThreeExperience from "./app/components/ThreeExperience.jsx";
import Phase from "./app/components/Phase.jsx";
import AboutUs from "./app/pages/AboutUs.page.jsx";
import TicketPage from "./app/pages/Ticket.page.jsx";
import VenuePage from "./app/pages/Venue.page.jsx";
import { ChallengesPage } from "./app/pages/Challenges.jsx";
import ChallengeDetailsPage from "./app/pages/ChallengeDetails.page.jsx";
import { ErrorPage } from "./app/error-page.jsx";
import RegistrationPage from "./app/pages/Registration.page.jsx";
import VirtualGamePage from "./app/pages/VirtualGame.page.jsx";
import Schedule from "./app/components/Schedule.jsx";
import LiveEventSpacePage from "./app/pages/LiveEventSpace.page.jsx";
import SessionsPage from "./app/pages/Sessions.page.jsx";
import EventSatisfactionFormPage from "./app/pages/EventSatisfactionForm.page.jsx";
import WinnersList from "./app/components/WinnersList.jsx";
import { WinnersPage } from "./app/pages/Winners.jsx";
import { TNChallengePage } from "./app/pages/TNChallenge.page.jsx";

setInitialTheme();

const router = createBrowserRouter([
	{
		element: <AppLayout></AppLayout>,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				// index: true,
				element: <HomePage />,
			},
			{
				path: "/registration",
				element: <RegistrationPage />,
			},
			{
				path: "/virtual-game",
				element: <VirtualGamePage />,
			},
			{
				path: "tunisia",
				element: <TunisiaPage />,
			},
			{
				path: "partners-sponsors",
				element: <SponsorsPage />,
			},
			{
				path: "schedule",
				element: <SchedulePage />,
			},
			{
				path: "partners-sponsors/:companySlug",
				element: <ExpoDetailsPage />,
			},
			{
				path: "challenges/:challengeSlug",
				element: <ChallengeDetailsPage />,
			},
			{
				path: "speakers",
				element: <Speakers />,
			},
			// {
			// 	path: "venue",
			// 	element: <VenuePage />,
			// },
			{
				path: "speakers/:speakerSlug",
				element: <Speaker />,
			},
			{
				path: "about-us",
				element: <AboutUs />,
			},
			// {
			// 	path: "team",
			// 	element: <Team />,
			// },
			// {
			// 	path: "virtual",
			// 	element: <Schedule />,
			// },
			// {
			// 	path: "live-event-space",
			// 	element: <LiveEventSpacePage />,
			// },
			{
				path: "sessions",
				element: <SessionsPage />,
			},
			// {
			// 	path: "team/:teamMemberSlug",
			// 	element: <TeamMember />,
			// },
			{
				path: "contact",
				element: <ContactPage />,
			},
			{
				path: "event-feedback",
				element: <EventSatisfactionFormPage />,
			},
			{
				path: "sponsor-us",
				element: <SponsorUsPage />,
			},
			{
				path: "challenges",
				element: <ChallengesPage />,
			},
			{
				path: "awards",
				element: <WinnersPage />,
			},
			// {
			// 	path: "ticket",
			// 	element: <TicketPage />,
			// },
			// {
			// 	path: "stage",
			// 	element: <Phase />,
			// },
			{
				path: "tn2056",
				element: <TNChallengePage/>
			},
			{
				path: "*",
				element: <HomePage />,
			},

		],
	},
	{
		path: "reveal",
		element: (
			<Suspense fallback={null}>
				<ThreeExperience />
			</Suspense>
		),
		errorElement: <ErrorPage />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
