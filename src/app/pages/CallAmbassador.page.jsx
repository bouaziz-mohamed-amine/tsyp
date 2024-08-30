import React, { useRef, useState } from "react";
import { SparrowSurvey } from "./Home.page";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import CustomImage from "../components/CustomImage";

export default function AmbassadorPage() {
	return (
		<div className="h-full">
			<h1 className="mb-4 text-4xl font-bold lg:mt-8 lg:text-center lg:text-5xl lg:font-extrabold lg:leading-none">
                Call for TSYP12 Ambassadors
			</h1>
						<h3 className="mb-4 text-2xl font-bold lg:mb-7 lg:text-center lg:text-3xl lg:font-extrabold lg:leading-none" >"TUNISIA 2056: Shaping the Future Together"</h3>
			<section className="grid items-center justify-center gap-4 py-8 md:grid-cols-12 mb-12">
				<div className="col-span-6 mx-auto md:order-last mb-4">
					<CustomImage
						src="https://media.discordapp.net/attachments/1199074591268667483/1278494608531128422/f551370b-9d40-4f3f-bd31-407ca0151ef6.jpg?ex=66d10263&is=66cfb0e3&hm=3661071bcb08fb25b04ed96737460f0904a54e3824aafb43ae2f00abb74ea776&=&format=webp&width=1440&height=360"
						className="object-cover mx-auto h-52  rounded-2xl sm:h-96"
						alt="call"
					/>
				</div>
				<div className="col-span-6">
					<h1 className=" text-lg font-medium  lg:mb-3 lg:text-start  lg:font-normal">
					The countdown has begun for the 12th Tunisian Student and Young Professional Congress (TSYP12), themed "TUNISIA 2056." As we anticipate Tunisia’s centennial of independence in 2056, we invite passionate and visionary IEEE members to join us as TSYP 12 Ambassadors and play a crucial role in this transformative journey.<br/>
					</h1>
					<p className="mb-3 text-lg font-bold text-gray-700 dark:text-gray-400 ">Important Notes:</p>
						
						<ul class=" ml-4 list-disc">
							<li className="ml-4 text-lg font-normal text-gray-700 dark:text-gray-400 ">To qualify as a TSYP Ambassador, you must have attended at least one previous TSYP event.</li>
					  <li className="ml-4 text-lg font-normal text-gray-700 dark:text-gray-400 ">New and smaller SBs founded within the last three years will be considered.</li>
					</ul>
											<p className="mt-3 mb-4 text-lg font-normal text-gray-700 dark:text-gray-400 "><span className="font-bold">Application Deadline:</span> September 10th, 2024, 23:59:59</p>
					
					<div className="flex flex-wrap justify-center ">
					<Link
						to={
							"https://ieee.surveysparrow.com/s/call-for-ambassadors-tsyp12/tt-drJSk"
						}
						target="_blank"
						rel="noreferrer"
						className="inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black  dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
					>
						<span className="">Survey Link</span>
					</Link>
					</div>
				</div>
			</section>
		</div>
	);
}