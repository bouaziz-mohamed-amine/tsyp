import { useEffect, useState } from "react";
import AwardListItem from "./AwardListItem";
import ChallengeListItem from "./ChallengeListItem";

export default function WinnersList() {
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
		return (
			<div>
				<div className="mb-8">
					<div className="mb-4 text-4xl font-bold   lg:mb-7 lg:text-center lg:text-5xl lg:font-extrabold lg:leading-none">
						Awards
					</div>
					<div className="text-center text-lg text-gray-600 dark:text-gray-400">
					Learn more about our congress awards.
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
				
								{!!challengesData?.length && (
									<div>
										{/* <div className="sticky top-0 bg-gray-50 py-4 text-2xl font-bold dark:bg-black">
											IEEE Global Partners
										</div> */}
										<div className="grid grid-cols-12 gap-y-4 md:gap-4">
											{  challengesData
												.slice()
												.reverse().filter(e => e.slug != "2024 IEEE Tunisian Student and Young Professional (TSYP) Congress SAC Challenge")
												.map((e) => {
													return ( 
														<div className="col-span-12 md:col-span-6  " key={e.slug}>
															<AwardListItem data={e} />
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
