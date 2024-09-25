import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { areAllLocationsSame } from "../schedule/scheduleItems";
import "./TimelineSchedule.scss";

export default function TimelineSchedule() {
	const [selectedTab, setSelectedTab] = useState(0);

	const [dec18ScheduleRevamped, setDec18ScheduleRevamped] = useState([]);
	const [dec19ScheduleRevamped, setDec19ScheduleRevamped] = useState([]);
	const [dec20ScheduleRevamped, setDec20ScheduleRevamped] = useState([]);

	useEffect(() => {
		const getData = async () => {
			await fetch("/assets/dec18ScheduleRevamped.json")
				.then((response) => response.json())
				.then((response) => {
					setDec18ScheduleRevamped(response);
				})
				.catch((err) => console.error(err));
			await fetch("/assets/dec19ScheduleRevamped.json")
				.then((response) => response.json())
				.then((response) => {
					setDec19ScheduleRevamped(response);
				})
				.catch((err) => console.error(err));
			await fetch("/assets/dec20ScheduleRevamped.json")
				.then((response) => response.json())
				.then((response) => {
					setDec20ScheduleRevamped(response);
				})
				.catch((err) => console.error(err));
		};
		getData();
	}, []);

	const tabs = [
		dec18ScheduleRevamped,
		dec19ScheduleRevamped,
		dec20ScheduleRevamped,
	];

	const selectedSchedule = tabs?.[selectedTab];

	return (
		<div>
			<div>
<ol class="relative border-s border-gray dark:border-gray-700">                  
    <li class="realtive">
	<span  style={{left:"-11px"}} class=" absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>            
        <div className="p-8  border-2 border-blue-800  border-r-0 border-t-0 border-b-0">
		<h2 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Check-in<span class="ml-4 bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span></h2>
        <time class="block mb-2 text-sm font-bold leading-none text-blue-800  dark:text-gray-500">8:00 AM To 1:00 PM</time>
        <p class=" text-base font-normal text-gray-500 dark:text-gray-400">Medina Hall “Espace Jardin”</p>
		</div>
    </li>
	<li class="realtive">
	<span  style={{left:"-11px"}} class=" absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>            
        <div className="p-8  border-2 border-r-0 border-t-0 border-b-0">
		<h1 class="flex items-center mb-1 text-2xl font-bold text-gray-900 dark:text-white">Check-in<span class="ml-4 bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span></h1>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">8:00 AM To 1:00 PM</time>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Medina Hall “Espace Jardin”</p>
		</div>
    </li>
</ol>

</div>
			<div id="timeline-schedule-design">
			<div className="mb-6 flex w-full flex-wrap justify-around gap-6">
				<button
					onClick={() => setSelectedTab(0)}
					className={twMerge(
						"text-xl font-bold transition",
						selectedTab === 0 &&
							"scale-110 border-b-2 border-gray-600 font-extrabold"
					)}
				>
					December 18
				</button>
				<button
					onClick={() => setSelectedTab(1)}
					className={twMerge(
						"text-xl font-bold transition",
						selectedTab === 1 &&
							"scale-110 border-b-2 border-gray-600 font-extrabold"
					)}
				>
					December 19
				</button>
				<button
					onClick={() => setSelectedTab(2)}
					className={twMerge(
						"text-xl font-bold transition",
						selectedTab === 2 &&
							"scale-110 border-b-2 border-gray-600 font-extrabold"
					)}
				>
					December 20
				</button>
			</div>
			<div className="service-cloud">
				<div className="b-our-process">
					<div className="c-process-steps">
						<div className="step-in">
							<div className="row step-line">
								<div className="col-3 corner" />
								<div className="col-6 corner" />
							</div>
						</div>

						{/* <ul className="[counter-reset:section]"> */}

						{selectedSchedule?.map((day, idx) => {
							const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
							const allLocationsSame = areAllLocationsSame(day.activities);
							const currentLocation = day.activities[0]?.location;

							return (
								<>
									<div className="step">
										<div className="b-step-content">
											<div className="b-step-content__logo">
												<div className="circle bg-white dark:bg-black">
													<div className="font-mono text-lg font-semibold">
														{/* .replace(/-/g, "") */}
														{day.timeSlotStart}
														<br />
														{day.timeSlotEnd}
													</div>

													{/* <div className="text-4xl font-bold">{idx + 1}</div> */}
													{/* <FontAwesomeIcon
														icon={day?.icon}
														className="h-12 w-12"
													/> */}
												</div>
											</div>
											<div className="b-step-content__text">
												{day.activities?.map((activity) => {
													return (
														<div>
															<h4
																// className={
																// 	"b-step-content__title before:content-['gfer']"
																// }
																className={twMerge(
																	`b-step-content__title`,
																	`before:content-['${arr[idx]}']`
																	// `before:[content:'counters(section,'.')']`
																)}
															>
																{/* <FontAwesomeIcon
																icon={activity?.icon}
																className="h-6 w-6"
															/> */}
																{activity?.title}
																<br />
																{!allLocationsSame && (
																	<span className="text-lg font-medium tracking-wide">
																		{activity.location}
																	</span>
																)}
															</h4>
														</div>
													);
												})}

												{allLocationsSame && (
													<p className="b-step-content__description__location !min-h-0 text-lg font-medium tracking-wide">
														{currentLocation}
													</p>
												)}

												<div className="b-step-content__description__location">
													<p className="mt-1 font-mono text-sm text-slate-500">
														{day.timeSlot}
													</p>
													{/* <p style={{ textAlign: "left" }}>
											We craft a unique, interactive design for your application
											that delivers powerful customer experience and drives user
											engagement.{" "}
										</p> */}
												</div>
											</div>
										</div>
										{selectedSchedule?.length !== idx + 1 && (
											<div className="row step-line">
												<div className="col-3 corner" />
												<div className="col-6 corner-line" />
												<div className="col-3 corner" />
											</div>
										)}
									</div>

									{false && selectedSchedule?.length === idx + 1 && (
										<div className="step-out-left">
											<div className="row step-line">
												<div className="col-3 corner" />
												<div className="col-6 corner" />
												<div className="col-3" />
											</div>
										</div>
									)}
								</>
							);
						})}

						{false &&
							selectedSchedule?.map((s, idx) => {
								const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
								return (
									<>
										<div className="step">
											<div className="b-step-content">
												<div className="b-step-content__logo">
													<div className="circle bg-white dark:bg-black">
														<FontAwesomeIcon
															icon={s?.icon}
															className="h-12 w-12"
														/>
													</div>
												</div>
												<div className="b-step-content__text">
													<h4
														// className={
														// 	"b-step-content__title before:content-['gfer']"
														// }
														className={twMerge(
															`b-step-content__title`,
															`before:content-['${arr[idx]}']`
															// `before:[content:'counters(section,'.')']`
														)}
													>
														{s?.title}
													</h4>
													<div className="b-step-content__description">
														<p className="mt-1 font-mono text-sm text-slate-500">
															<time dateTime="2022-04-04T9:00AM-08:00">
																{s.startTime}
															</time>{" "}
															{/* */}-{/* */}{" "}
															<time dateTime="2022-04-04T10:00AM-08:00">
																{s.endTime}
															</time>{" "}
															{/* */}
															{s.timeZone}
														</p>
														{/* <p style={{ textAlign: "left" }}>
											We craft a unique, interactive design for your application
											that delivers powerful customer experience and drives user
											engagement.{" "}
										</p> */}
													</div>
												</div>
											</div>
											{selectedSchedule?.length !== idx + 1 && (
												<div className="row step-line">
													<div className="col-3 corner" />
													<div className="col-6 corner-line" />
													<div className="col-3 corner" />
												</div>
											)}
										</div>

										{false && selectedSchedule?.length === idx + 1 && (
											<div className="step-out-left">
												<div className="row step-line">
													<div className="col-3 corner" />
													<div className="col-6 corner" />
													<div className="col-3" />
												</div>
											</div>
										)}
									</>
								);
							})}
						{/* </ul> */}
					</div>
				</div>
			</div>
		</div>
		</div>
	);
}
