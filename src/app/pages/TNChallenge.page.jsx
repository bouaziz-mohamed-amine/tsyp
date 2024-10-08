import CustomImage from "../components/CustomImage";

import { Link } from "react-router-dom";
import ContactDetails from "./Contact.page";
import { useEffect, useState } from "react";

export function TNChallengePage() {


	const [tasksData, setTasksData] = useState([]);
	const [taskSelected, settaskSelected] = useState(null)
		useEffect(() => {
			const getData = async () => {
				fetch("/assets/tn-tasks.json")
					.then((response) => response.json())
					.then((response) => {
						setTasksData(response);
						settaskSelected(0);
					})
					.catch((err) => console.error(err));
			};
			getData();
		}, []);

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
				<div className="col-span-12 pb-16 md:mx-auto">
				<h1 className=" text-center text-4xl font-bold tracking-tight  lg:text-center lg:text-6xl lg:font-extrabold lg:leading-none">
					TN 2056 Tasks
				</h1>
			</div>
			<div  className="flex flex-row gap-4 w-4/5  mx-auto">
				<div className="basis-1/3">
				{tasksData.map((task,index) => 
								<div class="cursor-pointer  border rounded-lg dark:bg-neutral-900 dark:border-neutral-900 my-4" onClick={()=>settaskSelected(index)}>
								<div class="text-xs  text-center text-gray-800 transition duration-700 dark:text-white py-4">
									<span class="">
										{task.name}
									</span>
								</div>
							</div>
			)}
				</div>
				<div className="basis-2/3 py-4">
					{taskSelected != null && <img src={tasksData[taskSelected].url} alt=""  className="border rounded-lg h-3-5"/>}
				</div>
			</div>
		</div>
		
	);
}
