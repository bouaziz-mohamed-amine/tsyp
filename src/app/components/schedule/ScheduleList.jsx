import { useEffect, useState } from "react";
import ScheduleItem from "./ScheduleItem";

export default function ScheduleList({ allDays }) {
	return (
		<div>
			<ScheduleOverview allDays />
		</div>
	);
}

export function ScheduleOverview({ allDays }) {
	const [allSlot, setallSlot] = useState(true);
	const [program, setProgram] = useState([]);
	const [day, setDay] = useState(1);
	const [day1, setDay1] = useState([]);
	const [day2, setDay2] = useState([]);
	const [day3, setDay3] = useState([]);
	const [slotIndex, setSlotIndex] = useState(0);
	const [subSlotKey, setsubSlotKey] = useState("");

	useEffect(() => {
		const getData = async () => {
			setSlotIndex(0);
			setsubSlotKey("");
			await fetch("/assets/day" + day + ".json")
				.then((response) => response.json())
				.then((response) => {
					setProgram([...response]);
				})
				.catch((err) => console.error(err));
			if (allDays) {
				await fetch("/assets/day1.json")
					.then((response) => response.json())
					.then((response) => {
						setDay1([...response]);
					})
					.catch((err) => console.error(err));
				await fetch("/assets/day2.json")
					.then((response) => response.json())
					.then((response) => {
						setDay2([...response]);
					})
					.catch((err) => console.error(err));
				await fetch("/assets/day3.json")
					.then((response) => response.json())
					.then((response) => {
						setDay3([...response]);
					})
					.catch((err) => console.error(err));
			}
		};
		getData();
	}, [day]);

	function renderActivities() {
		if (subSlotKey.length > 0) {
			return program[slotIndex].children.filter((el) => el.key == subSlotKey);
		}
		return program[slotIndex].children;
	}

	function setProgramSlot(index, key = "") {
		setSlotIndex(index);
		setsubSlotKey("");
	}

	function scrollToElement(index) {
		if (allDays && allSlot) {
			const element = document.getElementById("day-" + index);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
			}
		} else {
			setDay(index);
		}
	}

	return (
		<section>
			<div className="my-4 flex justify-center gap-2 md:my-8">
				<div className="text-2xl font-bold md:text-4xl">Schedule Overview</div>
			</div>
			{/* descktop  */}
			<div className="">
				<div class="mb-4 flex justify-center md:mb-8">
					<a
						onClick={() => scrollToElement(1)}
						aria-current="page"
						className="text-md hidden cursor-pointer rounded-l-lg border-2 border-gray-200 px-2 py-2 font-medium text-gray-900 hover:bg-gray-100 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500 md:block"
					>
						Sunday 22 December 2024
					</a>
					<a
						onClick={() => scrollToElement(1)}
						aria-current="page"
						class="block flex cursor-pointer justify-center rounded-l-lg border border-gray-200 px-2 py-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500 md:hidden"
					>
						Day One
					</a>
					<a
						onClick={() => scrollToElement(2)}
						className="text-md hidden cursor-pointer border-t-2 border-b-2 border-gray-200 px-2 py-2 font-medium text-gray-900 hover:bg-gray-100 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500 md:block"
					>
						Monday 23 December 2024
					</a>
					<a
						onClick={() => scrollToElement(2)}
						aria-current="page"
						class="block flex cursor-pointer justify-center border-t border-b border-gray-200 px-2 py-2 py-1  text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500 md:hidden"
					>
						Day Two
					</a>
					<a
						onClick={() => scrollToElement(3)}
						className="text-md hidden cursor-pointer  rounded-r-lg border-2 border-gray-200 px-2 py-2 font-medium text-gray-900 hover:bg-gray-100 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500 md:block"
					>
						Tuesday 24 December 2024
					</a>
					<a
						onClick={() => scrollToElement(3)}
						aria-current="page"
						class="block flex cursor-pointer justify-center rounded-r-lg border border-gray-200 px-2 py-2 py-1 text-sm  font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500 md:hidden md:px-6"
					>
						Day Three
					</a>
					{/* <a
						onClick={() => {
							if (allSlot) {
								setDay(1);
								setSlotIndex(0);
							}
							setallSlot(!allSlot);
						}}
						className="text-md hidden cursor-pointer rounded-r-lg border-2 border-gray-200 px-2 py-2 font-medium text-gray-900 hover:bg-gray-100 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500 md:block"
					>
						{allSlot ? (
							<img src="/assets/filter-6535.svg" width={25} />
						) : (
							<img src="/assets/filter-results-6566.svg" width={25} />
						)}
					</a>
					<a
						onClick={() => {
							if (allSlot) {
								setDay(1);
								setSlotIndex(0);
							}
							setallSlot(!allSlot);
						}}
						className="text-md block cursor-pointer rounded-r-lg border border-gray-200 px-2 py-2 font-medium text-gray-900 hover:bg-gray-100 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500 md:hidden"
					>
						{allSlot ? (
							<img src="/assets/filter-6535.svg" width={20} />
						) : (
							<img src="/assets/filter-results-6566.svg" width={20} />
						)}
					</a> */}
				</div>
				{/* list view  */}
				{false && !allSlot && (
					<div className="flex">
						<div className="m-2 basis-1/3">
							{program.map((slot, index) => (
								<div>
									<div
										onClick={() => setProgramSlot(index)}
										className="text-md cursor-pointer rounded-lg border border-gray-200 px-6 py-2 text-center font-medium text-gray-900 hover:bg-gray-100 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
									>
										{slot.title}
									</div>
									<div>
										{slot.subSlot &&
											index == slotIndex &&
											slot.subSlot.map((sub) => (
												<div
													onClick={() => {
														setsubSlotKey(sub.key);
													}}
												>
													<div className="mx-8 cursor-pointer rounded-lg border border-gray-200 px-6 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500">
														{sub.title}
													</div>
												</div>
											))}
									</div>
								</div>
							))}
						</div>
						<div className="m-2 basis-2/3">
							<div class="w-full rounded-lg border border-gray-200 shadow ">
								<div class="flow-root">
									<ul
										role="list"
										class="divide-y divide-gray-200 dark:divide-gray-700"
									>
										{program[slotIndex] &&
											renderActivities().map((activity) => (
												<li class="p-3">
													<ScheduleItem activity={activity} />
												</li>
											))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				)}
				{/* card view  */}
				{allSlot && allDays == true && (
					<div>
						<div className="my-4 flex justify-center gap-2 md:my-8">
							<div id="day-1">
							<span className="text-2xl font-bold md:text-4xl text-[#115D85] dark:text-[#BA0D15]">Day One : </span>
							<span className="text-lg font-bold md:text-2xl">Sunday 22 December 2024</span>
							</div>
						</div>
						<SLotInfo day={day1}/>
						<div className="my-4 flex justify-center gap-2 md:my-8">
							<div id="day-2" className="">
							<span className="text-2xl font-bold md:text-4xl text-[#115D85] dark:text-[#BA0D15]">Day Two : </span>
							<span className="text-lg font-bold md:text-2xl">Monday 23 December 2024</span>
							</div>
						</div>
						<SLotInfo day={day2}/>
						<div className="my-4 flex justify-center gap-2 md:my-8">
							<div id="day-3" >
							<span className="text-2xl font-bold md:text-4xl text-[#115D85] dark:text-[#BA0D15]">Day Three : </span>
							<span className="text-lg font-bold md:text-2xl">Tuesday 24 December 2024</span>
							</div>
						</div>
						<SLotInfo day={day3}/>
					</div>
				)}
				{allSlot && allDays == false && (
					<ul role="list">
						{program.map((slot) => (
							<div>
								<div className="my-3 flex text-lg font-bold">
									<p className="ml-2 mr-4">{slot.time}</p>
									<p>{slot.title}</p>
								</div>
								<div className="grid grid-cols-12 gap-4">
									{slot.children.map((activity) => (
										<li class="col-span-12 rounded-lg border-2 border-gray-200 md:col-span-4">
											<ScheduleItem activity={activity} />
										</li>
									))}
								</div>
							</div>
						))}
					</ul>
				)}
			</div>
			{/* mobile */}
			{false && (
				<div className="">
					<div className="flex items-center justify-between">
						{program[slotIndex] && (
							<p class="mr-2 ml-2 truncate  rounded-l-lg py-4 text-xs font-bold text-gray-900 dark:text-white">
								{program[slotIndex].title}
							</p>
						)}
						<div className="mx-2 flex">
							<div className="mr-2">
								<button
									type="button"
									class="inline-flex rotate-180 items-center rounded-lg border border-gray-300  py-2 px-1 text-center text-sm font-medium text-gray-400 dark:bg-gray-800"
									onClick={() => {
										let pre = slotIndex - 1;
										if (program[pre]) setSlotIndex(pre);
									}}
								>
									<svg
										class="h-5 w-6"
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
							</div>
							<div className="mr-2">
								<button
									type="button"
									class=" inline-flex items-center rounded-lg border border-gray-300  py-2 px-1 text-center text-sm font-medium text-gray-400 dark:bg-gray-800"
									onClick={() => {
										let next = slotIndex + 1;
										if (program[next]) setSlotIndex(next);
									}}
								>
									<svg
										class="h-5 w-6"
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
							</div>
						</div>
					</div>
					<div class="rounded-lg border border-gray-200 shadow ">
						<div class="flow-root">
							<ul
								role="list"
								class="max-w-5 divide-y divide-gray-200 dark:divide-gray-700"
							>
								{program[slotIndex] &&
									renderActivities().map((activity) => (
										<li class="p-1">
											<ScheduleItem activity={activity} />
										</li>
									))}
							</ul>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}

export  function SLotInfo({ day }) {
	return (
		<ul role="list">
							{day.map((slot) => (
								<div>
									<div className="hidden md:block">
										<div className="my-3 flex w-2/4  justify-between text-lg font-bold">
											<p>{slot.title}</p>
											<p className="ml-2 mr-4">
												{slot.timeStart} To {slot.timeEnd}
											</p>
										</div>
									</div>
									<div className="block md:hidden">
									<div className="my-3 flex items-center justify-between text-sm font-bold">
										<p>{slot.title}</p>
										<div>
										<p className="text-xs">{slot.timeStart}</p>
										<p className="text-xs">{slot.timeEnd}</p>
										</div>
									</div>
									</div>
									<div className="grid grid-cols-12 gap-4">
										{slot.children.map((activity) => (
											<li class="col-span-12 rounded-lg border-2 border-gray-200 p-2 md:p-3 md:col-span-4">
												<ScheduleItem activity={activity} />
											</li>
										))}
									</div>
								</div>
							))}
						</ul>
	);
}