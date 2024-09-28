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
										<div className="col-span-12 md:col-span-6" key={e.slug}>
											<ChallengeListItem data={e} />
										</div>
									);
								})}
						</div>
					</div>
				)}
			</div>
			<div className="my-16">
				<div
					data-hs-carousel='{
    "loadingClasses": "opacity-0"
  }'
					class="relative"
				>
					<div class="hs-carousel flex space-x-2">
						<div class="flex-none">
							<div class="hs-carousel-pagination flex max-h-96 flex-col gap-y-2 overflow-y-auto">
								<div class="hs-carousel-pagination-item h-[150px] w-[150px] shrink-0 cursor-pointer overflow-hidden rounded-md border hs-carousel-active:border-blue-400">
									
										<img  src={"https://i.imgur.com/g0i8OVM.jpeg"} className="h-full w-full"/>
									
								</div>
								<div class="hs-carousel-pagination-item h-[150px] w-[150px] shrink-0 cursor-pointer overflow-hidden rounded-md border hs-carousel-active:border-blue-400">
									<div class="flex h-full justify-center bg-gray-200 p-2 dark:bg-neutral-800">
										<span class="self-center text-xs text-gray-800 transition duration-700 dark:text-white">
											Second slide
										</span>
									</div>
								</div>
								<div class="hs-carousel-pagination-item h-[150px] w-[150px] shrink-0 cursor-pointer overflow-hidden rounded-md border hs-carousel-active:border-blue-400">
									<div class="flex h-full justify-center bg-gray-300 p-2 dark:bg-neutral-700">
										<span class="self-center text-xs text-gray-800 transition duration-700 dark:text-white">
											Third slide
										</span>
									</div>
								</div>
								<div class="hs-carousel-pagination-item h-[150px] w-[150px] shrink-0 cursor-pointer overflow-hidden rounded-md border hs-carousel-active:border-blue-400">
									<div class="flex h-full justify-center bg-gray-100 p-2 dark:bg-neutral-900">
										<span class="self-center text-xs text-gray-800 transition duration-700 dark:text-white">
											Fourth slide
										</span>
									</div>
								</div>
								<div class="hs-carousel-pagination-item h-[150px] w-[150px] shrink-0 cursor-pointer overflow-hidden rounded-md border hs-carousel-active:border-blue-400">
									<div class="flex h-full justify-center bg-gray-200 p-2 dark:bg-neutral-800">
										<span class="self-center text-xs text-gray-800 transition duration-700 dark:text-white">
											Fifth slide
										</span>
									</div>
								</div>
								<div class="hs-carousel-pagination-item h-[150px] w-[150px] shrink-0 cursor-pointer overflow-hidden rounded-md border hs-carousel-active:border-blue-400">
									<div class="flex h-full justify-center bg-gray-300 p-2 dark:bg-neutral-700">
										<span class="self-center text-xs text-gray-800 transition duration-700 dark:text-white">
											Sixth slide
										</span>
									</div>
								</div>
							</div>
						</div>

						<div class="min-h-96 relative grow overflow-hidden rounded-lg bg-white">
							<div class="hs-carousel-body start-0 absolute top-0 bottom-0 flex flex-nowrap opacity-0 transition-transform duration-700">
								<div class="hs-carousel-slide">
								<img  src={"https://i.imgur.com/g0i8OVM.jpeg"}className="h-full w-full"/>
								</div>
								<div class="hs-carousel-slide">
									<div class="flex h-full justify-center bg-gray-200 p-6 dark:bg-neutral-800">
										<span class="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">
											Second slide
										</span>
									</div>
								</div>
								<div class="hs-carousel-slide">
									<div class="flex h-full justify-center bg-gray-300 p-6 dark:bg-neutral-700">
										<span class="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">
											Third slide
										</span>
									</div>
								</div>
								<div class="hs-carousel-slide">
									<div class="flex h-full justify-center bg-gray-100 p-6 dark:bg-neutral-900">
										<span class="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">
											Fourth slide
										</span>
									</div>
								</div>
								<div class="hs-carousel-slide">
									<div class="flex h-full justify-center bg-gray-200 p-6 dark:bg-neutral-800">
										<span class="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">
											Fifth slide
										</span>
									</div>
								</div>
								<div class="hs-carousel-slide">
									<div class="flex h-full justify-center bg-gray-300 p-6 dark:bg-neutral-700">
										<span class="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">
											Sixth slide
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
