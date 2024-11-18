import { useEffect, useState } from "react";
import ChallengeListItem from "./ChallengeListItem";
export default function ChallengesList() {
	const [challengesData, setChallengesData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			fetch("/assets/challenges.json")
				.then((response) => response.json())
				.then((response) => {
					setChallengesData(response);
				})
				.catch((err) => console.error(err));
		};
		getData();
	}, []);

	const enabledChallenges = challengesData?.filter((e) => e.enabled === true);

	const partners = enabledChallenges?.filter(
		(e) => e.type === "global-ieee-partner"
	);

	return (
		<div>
			<div className="mb-8">
				<div className="mb-4 text-4xl font-bold   lg:mb-7 lg:text-center lg:text-5xl lg:font-extrabold lg:leading-none">
					Challenges
				</div>
				<div className="text-center text-lg text-gray-600 dark:text-gray-400">
					Check out the TSYP12 technical and non-technical Challenges.
					<br />
					Participants are encouraged to review these requirements carefully to
					understand the expectations and prepare effectively.
					<br />
					Best of luck to all participants!
				</div>
			</div>

			<div className="flex flex-col gap-8">
				{/* {!!hostedBy?.length && (
					<div>
						<div className="sticky top-0 bg-gray-50 py-4 text-2xl font-bold dark:bg-black">
							Hosted By
						</div>
						<div className="grid grid-cols-12 gap-y-4 md:gap-4">
							{hostedBy.map((e) => (
								<div className="col-span-12 md:col-span-4" key={e.slug}>
									<SponsorListItem data={e} />
								</div>
							))}
						</div>
					</div>
				)} */}

				{!!enabledChallenges?.length && (
					<div>
						{/* <div className="sticky top-0 bg-gray-50 py-4 text-2xl font-bold dark:bg-black">
							IEEE Global Partners
						</div> */}
						<div className="grid grid-cols-12 gap-y-4 md:gap-4">
							{enabledChallenges
								.slice()
								.reverse()
								.map((e) => {
									return (
										<div className="col-span-12 md:col-span-6  " key={e.slug}>
											<ChallengeListItem data={e} />
										</div>
									);
								})}
						</div>
					</div>
				)}
			</div>
			
		</div>
	);
}
