import React, { useRef, useState } from "react";
import { SparrowSurvey } from "./Home.page";
import { Link } from "react-router-dom";
import CustomImage from "../components/CustomImage";
export default function ForeignRegistrationPage() {
	return (
		<div className="my-8  ">
			<div className="h-screen">
				<section className="py-28">
					<div className="max-w-8xl mx-auto">
						<div className="xl:mx-64 2xl:mx-60">
							<h1 className="my-8 text-4xl font-bold lg:mb-7 lg:text-center lg:text-5xl lg:font-extrabold lg:leading-none">
								IEEE Tunisian SYP Congress 2024
							</h1>
							<p className="mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-center lg:text-xl">
								Registration for the IEEE Tunisian SYP Congress 2024 is NOW OPEN
							</p>
						</div>
					</div>
					<div className="mb-6 flex flex-wrap justify-center gap-4">
						<Link
							to={"#pre-registration"}
							className="inline min-w-[216px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black  dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
						>
							<span className="flex items-center justify-center">
								Pre Registration{" "}
								<img
									src="/assets/tunisia.png"
									alt=""
									className="ml-4 h-6 w-6"
								/>{" "}
							</span>
						</Link>
						{false && <Link
							to={"#yp-registration"}
							className="inline min-w-[216px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black  dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
						>
							<span className="flex items-center justify-center">
							IEEE Professional's Registration{" "}
								<img
									src="/assets/tunisia.png"
									alt=""
									className="ml-4 h-6 w-6"
								/>{" "}
							</span>
						</Link>}

						<Link
							to={"#foreign-registration"}
							className="inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black  dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
						>
							<span className="flex items-center justify-center">
								International Participants{" "}
								<svg
									class="ml-4 h-6 w-6 text-gray-600"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									{" "}
									<path stroke="none" d="M0 0h24v24H0z" />{" "}
									<circle cx="12" cy="12" r="9" />{" "}
									<line x1="3.6" y1="9" x2="20.4" y2="9" />{" "}
									<line x1="3.6" y1="15" x2="20.4" y2="15" />{" "}
									<path d="M11.5 3a17 17 0 0 0 0 18" />{" "}
									<path d="M12.5 3a17 17 0 0 1 0 18" />
								</svg>{" "}
							</span>
						</Link>
					</div>
				</section>
			</div>

			{false && (
				<div id="yp-registration" className="my-2  ">
					<h1 className="mb-4 text-center text-4xl font-bold dark:text-gray-300 lg:mt-8 lg:text-5xl lg:font-extrabold lg:leading-none">
						IEEE Tunisian SYP Congress 2024
					</h1>
					<h3 className="mb-4 text-center text-2xl font-bold dark:text-gray-300 lg:mb-8 lg:text-2xl lg:font-extrabold lg:leading-none">
						Registration for the IEEE Tunisian SYP Congress 2024 is NOW OPEN
					</h3>

					<h1 className=" text-lg font-medium  dark:text-gray-300 lg:text-start lg:font-normal">
						IEEE Tunisian SYP Congress 2024 is co-organized by IEEE Tunisia
						Section & IEEE ENETCOM SB. It is scheduled to take place from the
						<span className="font-bold">
							{" "}
							22nd to the 24th of December 2024, at El Medina Congress Center,
							Yasmine Hammamet, Tunisia.
						</span>
					</h1>
					<section className="mb-12 grid items-center justify-center gap-4 py-8 md:grid-cols-12">
						<div className="col-span-6 mx-auto mb-4 md:order-last">
							<CustomImage
								src={"https://i.imgur.com/b27Snpr.jpeg"}
								className="mx-auto h-52 rounded-2xl  object-cover sm:h-96"
								alt="call"
							/>
						</div>
						<div className="col-span-6">
							<h1 className=" text-base font-medium dark:text-gray-300 lg:mb-3 lg:text-start  lg:font-normal">
								<span className="font-bold">TSYP12</span> is scheduled to take
								place from the 22nd to the 24th of December 2024, at El Medina
								Congress Center, Yasmine Hammamet, Tunisia.
							</h1>
							<h1 className=" text-base font-medium dark:text-gray-300 lg:mb-3 lg:text-start  lg:font-normal">
								The Deadline to fill this form is December 6th at 11:59PM
							</h1>
							{/* <h1 className=" text-base font-medium dark:text-gray-300 lg:mb-3 lg:text-start  lg:font-normal">
						Filling <span className="font-bold">TSYP12</span>{" "}
						</h1> */}
							<div className="my-2 flex flex-wrap ">
								<p className="mr-3 text-base font-normal text-gray-700 dark:text-gray-300">
									For any inquiries, feel free to contact us at: tsyp@ieee.org
								</p>
							</div>
							<div className="my-6 flex items-center justify-center">
								<Link
									to={"https://forms.gle/1APodcvXPEhzVa9y6"}
									target="_blank"
									rel="noreferrer"
									className="inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black  dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
								>
									<span className=""> Registration </span>
								</Link>
							</div>
						</div>
					</section>
				</div>
			)}
			<div id="foreign-registration" className="my-2  ">
				<h1 className="mb-4 text-center text-4xl font-bold dark:text-gray-300 lg:mt-8 lg:text-5xl lg:font-extrabold lg:leading-none">
					IEEE Tunisian SYP Congress 2024
				</h1>
				<h3 className="mb-4 text-center text-2xl font-bold dark:text-gray-300 lg:mb-8 lg:text-2xl lg:font-extrabold lg:leading-none">
					Foreign Participants for the IEEE Tunisian SYP Congress 2024 is NOW
					OPEN
				</h3>

				<h1 className=" text-lg font-medium  dark:text-gray-300 lg:text-start lg:font-normal">
					IEEE Tunisian SYP Congress 2024 is co-organized by IEEE Tunisia
					Section & IEEE ENETCOM SB. It is scheduled to take place from the
					<span className="font-bold">
						{" "}
						22nd to the 24th of December 2024, at El Medina Congress Center,
						Yasmine Hammamet, Tunisia.
					</span>
				</h1>
				<section className="mb-12 grid items-center justify-center gap-4 py-8 md:grid-cols-12">
					<div className="col-span-6 mx-auto mb-4 md:order-last">
						<CustomImage
							src={"https://i.imgur.com/dRHwmWe.png"}
							className="mx-auto h-52 rounded-2xl  object-cover sm:h-96"
							alt="call"
						/>
					</div>
					<div className="col-span-6">
						<h1 className=" text-base font-medium dark:text-gray-300 lg:mb-3 lg:text-start  lg:font-normal">
							This year, <span className="font-bold">Tunisian SYP12</span>{" "}
							continues its legacy as one of the biggest Tech congresses in
							Tunisia, with an audience of 1200+ national & international
							engineering students and young professionals.
						</h1>
						<p className="mb-3 text-base font-bold text-gray-700 dark:text-gray-300 ">
							IEEE Tunisian SYP is pleased to offer attendees a two packs
							option:
						</p>

						<ul class=" ml-4 list-disc">
							<li className="ml-4 text-base font-normal text-gray-700 dark:text-gray-300 ">
								<span className="font-bold">Event Participant</span>: Includes
								access to all technical and non-technical sessions, panel
								discussions, keynote speeches, ceremonies, TN2056 forum,
								Tunisian SYP EXPO, networking breaks, and social activities. A
								welcome kit is also provided.
							</li>
							<li className="ml-4 text-base font-normal text-gray-700 dark:text-gray-300 ">
								<span className="font-bold">
									Full Participant Options (Professionals & Students)
								</span>
								: Includes Event Registration and 2-night hotel accommodation
								(December 22nd - 24th):
							</li>
						</ul>
						<div className="my-2 flex flex-wrap ">
							<p className=" mt-2 text-base font-normal text-gray-700 dark:text-gray-300">
								For any inquiries, feel free to contact us at: tsyp@ieee.org
							</p>
						</div>

						<div className="my-6 flex items-center justify-center">
							<Link
								to={"https://forms.gle/WJwqbzMPE8PGcTmv8"}
								target="_blank"
								rel="noreferrer"
								className="inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black  dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
							>
								<span className="">Register Now</span>
							</Link>
						</div>
					</div>
				</section>
			</div>
			<div id="pre-registration" className="my-2  ">
				<h1 className="mb-4 text-center text-4xl font-bold dark:text-gray-300 lg:mt-8 lg:text-5xl lg:font-extrabold lg:leading-none">
					IEEE Tunisian SYP Congress 2024
				</h1>
				<h3 className="mb-4 text-center text-2xl font-bold dark:text-gray-300 lg:mb-8 lg:text-2xl lg:font-extrabold lg:leading-none">
					Pre Registration for the IEEE Tunisian SYP Congress 2024 is NOW OPEN
				</h3>

				<h1 className=" text-lg font-medium  dark:text-gray-300 lg:text-start lg:font-normal">
					IEEE Tunisian SYP Congress 2024 is co-organized by IEEE Tunisia
					Section & IEEE ENETCOM SB. It is scheduled to take place from the
					<span className="font-bold">
						{" "}
						22nd to the 24th of December 2024, at El Medina Congress Center,
						Yasmine Hammamet, Tunisia.
					</span>
				</h1>
				<section className="mb-12 grid items-center justify-center gap-4 py-8 md:grid-cols-12">
					<div className="col-span-6 mx-auto mb-4 md:order-last">
						<CustomImage
							src={"https://i.imgur.com/Gju0Eux.png"}
							className="mx-auto h-52 rounded-2xl  object-cover sm:h-96"
							alt="call"
						/>
					</div>
					<div className="col-span-6">
						<h1 className=" text-base font-medium dark:text-gray-300 lg:mb-3 lg:text-start  lg:font-normal">
						<span className="font-bold">TSYP12</span>{" "}is scheduled to take place from the 22nd to the 24th of December 2024, at El Medina Congress Center, Yasmine Hammamet, Tunisia.
						</h1>
						<h1 className=" text-base font-medium dark:text-gray-300 lg:mb-3 lg:text-start  lg:font-normal">
						The Deadline to fill this form is November 20th at 11:59PM
						</h1>
						<h1 className=" text-base font-medium dark:text-gray-300 lg:mb-3 lg:text-start  lg:font-normal">
						Filling out this form will boost your chance to attend <span className="font-bold">TSYP12</span>{" "} but  your registration will be accepted, please contact your SB Officers for further details about your participation.
						</h1>
						<div className="my-2 flex flex-wrap ">
							<p className="mr-3 text-base font-normal text-gray-700 dark:text-gray-300">
								For any inquiries, feel free to contact us at: tsyp@ieee.org
							</p>
						</div>
						<div  className="flex items-center justify-center my-6">
						<Link
								to={"https://forms.gle/WWHPrBPSYTE5M9Ps5"}
								target="_blank"
								rel="noreferrer"
								className="inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black  dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
							>
								<span className="">Pre Registration </span>
							</Link>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
