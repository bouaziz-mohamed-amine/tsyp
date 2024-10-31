import React, { useRef, useState } from "react";
import { SparrowSurvey } from "./Home.page";
import { Link } from "react-router-dom";
import CustomImage from "../components/CustomImage";

export default function ForeignRegistrationPage() {
	return (
		<div className="h-full">
			<h1 className="mb-4 text-4xl font-bold lg:mt-8 dark:text-gray-300 text-center lg:text-5xl lg:font-extrabold lg:leading-none">
				IEEE Tunisian SYP Congress 2024
			</h1>
			<h3 className="mb-4 text-2xl dark:text-gray-300 font-bold lg:mb-8 text-center lg:text-2xl lg:font-extrabold lg:leading-none">
				Registration for the IEEE Tunisian SYP Congress 2024 is NOW OPEN for
				FOREIGN IEEE Members!
			</h3>
			<h1 className=" text-lg font-medium  lg:text-start dark:text-gray-300 lg:font-normal">
					IEEE Tunisian SYP Congress 2024 is co-organized by IEEE Tunisia Section & IEEE ENETCOM SB. It is scheduled to take place from the
					<span className="font-bold"> 22nd to the 24th of December 2024, at El Medina Congress Center, Yasmine Hammamet, Tunisia.</span>
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
					Building on the success of previous events like Tunisian SYP11 2023 , R8SYP 2022, TSYPX 2022, NASYP 2021 all held in Tunisia, the expectations within the IEEE community have never been higher. This year, <span className="font-bold">Tunisian SYP12</span> continues its legacy as one of the biggest Tech congresses in Tunisia, with an audience of 1200+ national & international engineering students and young professionals. 
					</h1>
					<p className="mb-3 text-base font-bold text-gray-700 dark:text-gray-300 ">
						IEEE Tunisian SYP is pleased to offer attendees a two packs option:
					</p>

					<ul class=" ml-4 list-disc">
						<li className="ml-4 text-base font-normal text-gray-700 dark:text-gray-300 ">
						<span className="font-bold">Event Registration (US$105 - Professional / US$85 - Student)</span>: Includes access to all technical and non-technical sessions, panel discussions, keynote speeches, ceremonies, TN2056 forum, Tunisian SYP EXPO, networking breaks, dinner on Days 1 and 2, lunch on Day 2, and social activities. A welcome kit is also provided.
						</li>
						<li className="ml-4 text-base font-normal text-gray-700 dark:text-gray-300 ">
						<span className="font-bold">Full Registration Options (Professionals & Students)</span>:
						Includes Event Registration and 2-night hotel accommodation (December 22nd - 24th):
						<ul class=" ml-4 list-disc">
						<li className="ml-4 text-base font-normal text-gray-700 dark:text-gray-300 ">
						<span className="font-bold">Double Room:</span> US$205 - Professional / US$185 - Student ( US$50 per night)
						</li>
						<li className="ml-4 text-base font-normal text-gray-700 dark:text-gray-300 ">
						<span className="font-bold" >Single Room:</span> US$245 - Professional / US$225 - Student ( US$70 per night)
						</li>
						</ul>
						</li>
					</ul>
					<div className="flex flex-wrap justify-center my-2">
						< p className="ml-4 text-base font-normal text-gray-700 dark:text-gray-300 mr-3 mt-2">For any inquiries, feel free to contact us at: tsyp@ieee.org</p>
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
	);
}
