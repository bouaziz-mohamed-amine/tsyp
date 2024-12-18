import { useEffect, useState } from "react";
import CustomImage from "../components/CustomImage";
import { Link } from "react-router-dom";

export function TNChallengePage() {
	const [tasksData, setTasksData] = useState([]);
	const [partners, setpartners] = useState([]);
	const [taskSelected, settaskSelected] = useState(null);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [mentorsdata, setmentorsdata] = useState([]);
	const [day1, setDay1] = useState([]);


	useEffect(() => {
		const getData = async () => {
			await fetch("/assets/tn_program.json")
				.then((response) => response.json())
				.then((response) => {
					setDay1([...response]);
				})
				.catch((err) => console.error(err));
		};
		getData();
	}, []);

	useEffect(() => {
		const getData = async () => {
			fetch("/assets/tn-tasks.json")
				.then((response) => response.json())
				.then((response) => {
					setTasksData(response);
					settaskSelected(0);
				})
				.catch((err) => console.error(err));
				fetch("/assets/tn_partners.json")
				.then((response) => response.json())
				.then((response) => {
					console.log(response);
					
					setpartners(response);
				})
				.catch((err) => console.error(err));	
		};
		getData();
	}, []);
	useEffect(() => {
		const getData = async () => {
			try {
				const response = await fetch("/assets/TNmentors.json");
				const data = await response.json();
				setmentorsdata(data);
			} catch (error) {
				console.error("Erreur lors de la récupération des données:", error);
			}
		};
		getData();
	}, []);

	const handleNextSlide = () => {
		if (tasksData[taskSelected].sessions) {
			setCurrentSlide(
				(prev) => (prev + 1) % tasksData[taskSelected].sessions.length
			);
		}
	};

	const handlePrevSlide = () => {
		if (tasksData[taskSelected].sessions) {
			setCurrentSlide(
				(prev) =>
					(prev - 1 + tasksData[taskSelected].sessions.length) %
					tasksData[taskSelected].sessions.length
			);
		}
	};

	return (
		<div className="h-full">
			<div className="col-span-12 md:mx-auto lg:py-20">
				<h1 className=" text-center text-4xl font-bold tracking-tight  lg:text-center lg:text-6xl lg:font-extrabold lg:leading-none">
					Tunisia 2056 Challenge
				</h1>
			</div>

			<section className="mb-12 grid items-center justify-center gap-4 py-8 md:grid-cols-12">
				<div className="col-span-6 mx-auto mb-4 md:order-last">
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
					
					<Link
								to="https://docs.google.com/forms/d/e/1FAIpQLSfsOJqhd7wq-B0Yh34CdIcBx5N64BQuj0gsyyuqqIMyYvm9Xg/viewform"
								id="Final-Submission"
								className=" fgroup relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-sky-900 to-sky-500 dark:from-[#BA0D15] dark:to-red-700  p-0.5 text-sm font-medium  transition-shadow text-white focus:outline-none focus:ring-4 focus:ring-sky-200 dark:focus:ring-red-400 group-hover:from-purple-500 group-hover:to-pink-500  dark:focus:ring-purple-800"
							>
								{/* <button
								type="button"
								className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 text-sm font-medium  transition-shadow hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500  dark:focus:ring-purple-800"
							> */}
								<div className=" relative flex items-center justify-center rounded-md bg-white  transition-all duration-75 ease-in bg-opacity-0  hover:font-bold focus:font-bold">
									{/* <FontAwesomeIcon className="-rotate-45" icon={faTicket} /> */}
									<span className=" hidden md:block px-5 py-2.5 text-center"> Final Submission Form</span>
									<span className="md:hidden px-2.5 text-center py-1">Final Submission Form </span>
								</div>
								{/* </button> */}
							</Link>
					
				</div>
			</section>

			<div className="col-span-12 pb-16 md:mx-auto">
				<h1 className=" text-center text-4xl font-bold tracking-tight  lg:text-center lg:text-6xl lg:font-extrabold lg:leading-none">
					About Info Session
				</h1>
			</div>
			<section className="mb-12 grid items-center justify-center gap-4 py-8 md:grid-cols-12 ">
				<div className="  col-span-6 mx-auto  mb-4 w-full text-center ">
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
					Meet Our Partners
				</h1>
			</div>
			<div className="">
			<section className="py-8 md:py-10">
				<div className="grid grid-cols-12 gap-4">
				{partners.map((e) => (
								<Link
									to={e.webSite}
									className="col-span-12 md:col-span-4 rounded-xl border-2 p-2 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500  md:px-6  md:pt-6"
								>
									<div className="mb-2 rounded-lg bg-gray-50 p-2 py-6">
										<CustomImage
											src={e.image}
											alt=""
											className="h-40 w-full object-contain py-6 md:h-40"
											loading="lazy"
										/>
									</div>
									<div className=" h-16  text-center text-lg font-bold text-black line-clamp-2 dark:text-gray-300 md:h-24 lg:h-16 ">
										<div className=" flex  items-center justify-center">
											<div>{e.name}</div>
										</div>
									</div>
								</Link>
							))}	
				</div>
			</section>
			</div>
			<div className="col-span-12 py-4 md:mx-auto">
				<h1 className=" text-center text-4xl font-bold tracking-tight  lg:text-center lg:text-6xl lg:font-extrabold lg:leading-none">
					Program
				</h1>
			</div>
			<div className="">
							<div className="my-8 md:my-16 ">
								<FullDate text={"Monday 23 December 2024"} index={1} />
								{day1.map((slot) => (
									<div className="grid grid-cols-12  text-gray-900 dark:text-white">
										<SLotTime slot={slot} />
										<SlotAllActivities slot={slot} />
									</div>
								))}
							</div>
			</div>
			<div className="my-8">
			<div className="col-span-12 pb-16 md:mx-auto">
				<h1 className=" text-center text-4xl font-bold tracking-tight  lg:text-center lg:text-6xl lg:font-extrabold lg:leading-none">
					Mentors
				</h1>
			</div>

				<div className="grid grid-cols-12 gap-6">
					{mentorsdata.map((item0, index0) => (
						<div className="col-span-12 md:col-span-3" key={index0}>
							<CustomImage
								className="h-full w-full rounded-2xl object-cover"
								src={item0.url}
								alt=""
							/>
						
						</div>
					))}
				</div>
			</div>
			<div className="col-span-12 py-16 md:mx-auto">
				<h1 className="text-center text-4xl font-bold tracking-tight lg:text-center lg:text-6xl lg:font-extrabold lg:leading-none">
					TN 2056 Tasks
				</h1>
			</div>

			<div className="mx-auto flex w-4/5 flex-row gap-4">
				<div className="hidden basis-1/3 md:block">
					{tasksData.map((task, index) => (
						<div
							key={index}
							className="my-4 cursor-pointer rounded-lg border hover:bg-slate-100 dark:border-neutral-900 dark:bg-neutral-900"
							onClick={() => {
								settaskSelected(index);
								setCurrentSlide(0); // Reset slide index when selecting a new task
							}}
						>
							<div className="py-4 text-center text-xs text-gray-800 transition duration-700 dark:text-white">
								<span>{task.name}</span>
							</div>
						</div>
					))}
				</div>

				<div className="basis-3/3 py-4 md:basis-2/3">
					<div className="hidden md:block">
						{taskSelected != null &&
							(tasksData[taskSelected].sessions ? (
								<div className="relative">
									<img
										src={tasksData[taskSelected].sessions[currentSlide].url}
										alt={
											tasksData[taskSelected].sessions[currentSlide].sessionName
										}
										className="h-3-5 rounded-lg border"
									/>
									<button
										onClick={handlePrevSlide}
										type="button"
										class="me-2 absolute left-2 top-1/2 inline-flex rotate-180 items-center rounded-lg bg-stone-400 p-2.5 text-center text-sm font-medium text-white dark:bg-gray-800"
									>
										<svg
											class="h-5 w-5"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 14 10"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M1 5h12m0 0L9 1m4 4L9 9"
											/>
										</svg>
									</button>
									<button
										onClick={handleNextSlide}
										type="button"
										class="me-2 absolute right-2  top-1/2 inline-flex items-center rounded-lg bg-stone-400 p-2.5 text-center text-sm font-medium text-white dark:bg-gray-800 "
									>
										<svg
											class="h-5 w-5"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 14 10"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M1 5h12m0 0L9 1m4 4L9 9"
											/>
										</svg>

										<span class="sr-only">Icon description</span>
									</button>
								</div>
							) : (
								<img
									src={tasksData[taskSelected].url}
									alt={tasksData[taskSelected].name}
									className="h-3-5 rounded-lg border"
								/>
							))}
					</div>

					<div className="block md:hidden">
						{tasksData.map((task, index) =>
							task.sessions ? (
								<div key={index}>
									{task.sessions.map((session, sessionIndex) => (
										<img
											key={sessionIndex}
											src={session.url}
											alt={session.sessionName}
											className="h-3-5 my-2 rounded-lg border"
										/>
									))}
								</div>
							) : (
								<img
									key={index}
									src={task.url}
									alt={task.name}
									className="h-3-5 my-2 rounded-lg border"
								/>
							)
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
export function SLotTime({ slot }) {
	return (
		<div
			className={`col-span-2 flex items-center justify-center flex-wrap border-r-2 border-l-2 border-b-2 border-gray-200 py-1 text-sm font-bold dark:border-gray-400 md:col-span-2 md:text-base`}
		>
			<p>{slot.timeStart}</p><p className="hidden md:block px-1">-</p><p>{slot.timeEnd}</p>
		</div>
	);
}

export function SlotAllActivities({ slot }) {
	return (
		<div className="col-span-10">
			{slot.title && slot.title != "-" && (
				<p className="border-b-2 border-r-2 border-gray-200 bg-gray-200 py-1 text-center text-base font-medium dark:border-gray-400 dark:bg-transparent dark:text-gray-400">
					{slot.title}
				</p>
			)}
			<div className="grid grid-cols-12">
				{slot.children.map((activity) => (
					<SlotActivity
						activity={activity}
						location={slot.location}
						slotchildren={slot.children.length}
					/>
				))}
			</div>
		</div>
	);
}
export function FullDate({ text, index }) {
	return (
		<div
			id={"day-" + index}
			className="grid grid-cols-12 rounded-tl-2xl rounded-tr-2xl border-2 border-gray-200 py-3  text-center font-bold dark:border-gray-400  md:text-xl "
		>
			<div className="col-span-2"></div>
			<div className="col-span-10 text-[#115D85] dark:text-[#BA0D15] ">
				{text}
			</div>
		</div>
	);
}

export function SlotActivity({ activity, location, slotchildren }) {
	return (
		<div
			className={`col-span-12 md:col-span-${
				slotchildren > 2 ? 4 : slotchildren == 1 ? 12 : 6
			} border-r-2 border-r-2 border-b-2  border-gray-200 text-center dark:border-gray-400`}
		>
			{!location && (
				<p className="border-b-2 border-gray-200 bg-gray-200 py-1 text-base font-medium dark:border-gray-400 dark:bg-transparent dark:text-gray-400">
					{activity.location}
				</p>
			)}
			<div className=" py-2 dark:text-gray-300 ">
				<p className="text-base font-semibold">{activity.title}</p>
				{activity.speakers && (
					<div>
						{activity.speakers.map((speaker) => (
							<p id={speaker.id} className="text-sm font-medium">
								{speaker.name}
							</p>
						))}
					</div>
				)}
			</div>
		</div>
	);
}