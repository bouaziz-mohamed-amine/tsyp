import CustomImage from "../components/CustomImage";

import { Link } from "react-router-dom";
import ContactDetails from "./Contact.page";

export function TNChallengePage() {
	return (
		<div className="h-full  ">
			<div className="col-span-12 lg:py-20 md:mx-auto">
				<h1 className=" text-center text-4xl font-bold tracking-tight  lg:text-center lg:text-6xl lg:font-extrabold lg:leading-none">
					Tunisia 2056 Challenge
				</h1>
			</div>

			<section className="grid items-center justify-center gap-4 py-8 md:grid-cols-12 mb-12">
				<div className="col-span-6 mx-auto md:order-last mb-4">
					<CustomImage
						src={"https://i.imgur.com/jaV94we.png"}
						className=" mx-auto h-52  rounded-2xl sm:h-96"
						alt="tn2056"
					/>
				</div>
				<div className="col-span-6">
					<h1 className="mb-4 text-lg font-medium  lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
						The Tunisia 2056 Challenge (TN2056 Challenge) embodies the
						transformative vision for TSYP in its 12th edition, emphasizing
						collaboration among Tunisia Student Branches to tackle critical
						challenges facing Tunisia and envision its future by 2056 through
						the launch of innovative start-ups.
					</h1>
					<div>
					</div>
				</div>
			</section>

			<div className="col-span-12 pb-16 md:mx-auto">
				<h1 className=" text-center text-4xl font-bold tracking-tight  lg:text-center lg:text-6xl lg:font-extrabold lg:leading-none">
					About Info Session
				</h1>
			</div>
			<section className="grid items-center justify-center gap-4 py-8 md:grid-cols-12 mb-12 ">
				<div className="  col-span-6 mx-auto  w-full text-center mb-4 ">
					<iframe
						className="mx-auto h-56 w-full rounded-2xl shadow-lg sm:h-96"
						src="https://www.youtube.com/embed/lCOTmTw0DWA?si=Xdw5N58MXQ7Y30JT"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
				</div>
				<div className="col-span-6 lg:ml-12">
					<h1 className="mb-4  text-lg font-medium   lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
						Our first step in the TN2056 Challenge was the info sessions phase.
						We began with a chair meeting where we introduced the 12th edition
						of TSYP and explained the concept of this new challenge. We then
						asked the chairs to hold info sessions for their student branches,
						as they are now our representatives. Following this, we held three
						Webex sessions, each focusing on one of our three sectors: Health
						Tech, Agritech, and Creative & Cultural Industries. These sessions
						were assisted by outstanding experts from these domains, providing
						valuable insights and guidance.
					</h1>
					<div>
						<Link
							// type="button"
							to="https://drive.google.com/drive/folders/1k-84a_iVUq_8K7KhfXSJJJubsGRTuuJt"
							target="_blank"
							rel="noreferrer"
							className="relative inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black  dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
						>
							{/* <div className="flex flex-wrap items-center justify-start gap-2"> */}
							<span className="">Learn more about TN 2056 Challenge</span>
						</Link>
					</div>
				</div>
			</section>
			<div className="col-span-12 pb-16 md:mx-auto">
				<h1 className=" text-center text-4xl font-bold tracking-tight  lg:text-center lg:text-6xl lg:font-extrabold lg:leading-none">
					Meet Our Experts
				</h1>
			</div>
			<section className="py-8 md:py-28">
					<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
						<div className="grid gap-4">
						<iframe
						className="mx-auto h-56 w-full rounded-2xl shadow-lg sm:h-96"
						src="https://www.youtube.com/embed/fGtaovfEMsk?si=qeKhTqVvShbma6Hi"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
						</div>
						<div className="grid gap-4">
						<iframe
						className="mx-auto h-56 w-full rounded-2xl shadow-lg sm:h-96"
						src="https://www.youtube.com/embed/yQifdi5ayzk?si=U_JuQwftTdTBmR4O"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
						</div>
						<div className="grid gap-4">
						<iframe
						className="mx-auto h-56 w-full rounded-2xl shadow-lg sm:h-96"
						src="https://www.youtube.com/embed/jYsry2bVTto?si=fwG37715PnjpIL7t"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
						</div>
					</div>
				</section> 
				<div className="">
				<div
					data-hs-carousel='{"loadingClasses": "opacity-0"}'
					class=" relative h-3/5"
				>
					<div class="hs-carousel flex space-x-2">
						<div class="flex-none">
							<div class="hs-carousel-pagination  flex flex-col gap-y-2 overflow-y-auto">
								<div class="hs-carousel-pagination-item h-[150px] w-[150px] shrink-0 cursor-pointer overflow-hidden rounded-md border hs-carousel-active:border-blue-400">
									<div class="flex h-full justify-center bg-gray-100 p-2 dark:bg-neutral-900">
										<span class="self-center text-xs text-gray-800 transition duration-700 dark:text-white">
											Task 1
										</span>
									</div>
								</div>
								<div class="hs-carousel-pagination-item h-[150px] w-[150px] shrink-0 cursor-pointer overflow-hidden rounded-md border hs-carousel-active:border-blue-400">
									<div class="flex h-full justify-center bg-gray-200 p-2 dark:bg-neutral-800">
										<span class="self-center text-xs text-gray-800 transition duration-700 dark:text-white">
											Task 2
										</span>
									</div>
								</div>
								<div class="hs-carousel-pagination-item h-[150px] w-[150px] shrink-0 cursor-pointer overflow-hidden rounded-md border hs-carousel-active:border-blue-400">
									<div class="flex h-full justify-center bg-gray-300 p-2 dark:bg-neutral-700">
										<span class="self-center text-xs text-gray-800 transition duration-700 dark:text-white">
											Task 3
										</span>
									</div>
								</div>
								<div class="hs-carousel-pagination-item h-[150px] w-[150px] shrink-0 cursor-pointer overflow-hidden rounded-md border hs-carousel-active:border-blue-400">
									<div class="flex h-full justify-center bg-gray-100 p-2 dark:bg-neutral-900">
										<span class="self-center text-xs text-gray-800 transition duration-700 dark:text-white">
											Task 3
										</span>
									</div>
								</div>
								<div class="hs-carousel-pagination-item h-[150px] w-[150px] shrink-0 cursor-pointer overflow-hidden rounded-md border hs-carousel-active:border-blue-400">
									<div class="flex h-full justify-center bg-gray-200 p-2 dark:bg-neutral-800">
										<span class="self-center text-xs text-gray-800 transition duration-700 dark:text-white">
											Task 3
										</span>
									</div>
								</div>
								<div class="hs-carousel-pagination-item h-[150px] w-[150px] shrink-0 cursor-pointer overflow-hidden rounded-md border hs-carousel-active:border-blue-400">
									<div class="flex h-full justify-center bg-gray-300 p-2 dark:bg-neutral-700">
										<span class="self-center text-xs text-gray-800 transition duration-700 dark:text-white">
											Task 4
										</span>
									</div>
								</div>
							</div>
						</div>

						<div class="min-h-96 relative grow overflow-hidden rounded-lg bg-white">
							<div class="hs-carousel-body start-0 absolute top-0 bottom-0 flex flex-nowrap opacity-0 transition-transform duration-700">
								<div class="hs-carousel-slide">
									<img src="https://i.imgur.com/SKLwJjC.png" alt="" />
								</div>
								<div class="hs-carousel-slide">
									<img src="https://i.imgur.com/ie7WeeV.jpeg" alt="" />
								</div>
								<div class="hs-carousel-slide">
									<img src="https://i.imgur.com/SdIsXYi.png" alt="" />
								</div>
								<div class="hs-carousel-slide">
									<img src="https://i.imgur.com/KVnfyWF.jpeg" alt="" />
								</div>
								<div class="hs-carousel-slide">
									<img src="https://i.imgur.com/5sSJMO6.png" alt="" />
								</div>
								<div class="hs-carousel-slide">
									<img src="https://i.imgur.com/DmwP8Tw.jpeg" alt="" />
								</div>
							</div>

							{/* <button type="button" class="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
        <span class="text-2xl" aria-hidden="true">
          <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </span>
        <span class="sr-only">Previous</span>
      </button>
      <button type="button" class="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
        <span class="sr-only">Next</span>
        <span class="text-2xl" aria-hidden="true">
          <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span>
      </button> */}
						</div>
					</div>
				</div>
			</div>
		</div>
		
	);
}
