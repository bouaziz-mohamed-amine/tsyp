import { useEffect, useState } from "react";
import ScheduleItem from "./ScheduleItem";

export default function ScheduleList({ allDay,speaker }) {
	console.log(speaker);
	
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
			<div class="mb-4 flex justify-center md:mb-8">
				<a
					onClick={() => scrollToElement(1)}
					aria-current="page"
					className="text-md hidden cursor-pointer rounded-l-lg border-2 border-gray-200 px-2 py-2 font-medium text-gray-900 hover:bg-gray-200 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500 md:block"
				>
					Sunday 22 December 2024
				</a>
				<a
					onClick={() => scrollToElement(1)}
					aria-current="page"
					class="block flex cursor-pointer justify-center rounded-l-lg border border-gray-200 px-2 py-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500 md:hidden"
				>
					Day One
				</a>
				<a
					onClick={() => scrollToElement(2)}
					className="text-md hidden cursor-pointer border-t-2 border-b-2 border-gray-200 px-2 py-2 font-medium text-gray-900 hover:bg-gray-200 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500 md:block"
				>
					Monday 23 December 2024
				</a>
				<a
					onClick={() => scrollToElement(2)}
					aria-current="page"
					class="block flex cursor-pointer justify-center border-t border-b border-gray-200 px-2 py-2 py-1 text-sm  font-medium text-gray-900 hover:bg-gray-200 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500 md:hidden"
				>
					Day Two
				</a>
				<a
					onClick={() => scrollToElement(3)}
					className="text-md hidden cursor-pointer  rounded-r-lg border-2 border-gray-200 px-2 py-2 font-medium text-gray-900 hover:bg-gray-200 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500 md:block"
				>
					Tuesday 24 December 2024
				</a>
				<a
					onClick={() => scrollToElement(3)}
					aria-current="page"
					class="block flex cursor-pointer justify-center rounded-r-lg border border-gray-200 px-2 py-2 py-1 text-sm font-medium  text-gray-900 hover:bg-gray-200 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500 md:hidden md:px-6"
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
						className="text-md hidden cursor-pointer rounded-r-lg border-2 border-gray-200 dark:border-gray-400 px-2 py-2 font-medium text-gray-900 hover:bg-gray-200 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500 md:block"
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
						className="text-md block cursor-pointer rounded-r-lg border border-gray-200 dark:border-gray-400 px-2 py-2 font-medium text-gray-900 hover:bg-gray-200 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500 md:hidden"
					>
						{allSlot ? (
							<img src="/assets/filter-6535.svg" width={20} />
						) : (
							<img src="/assets/filter-results-6566.svg" width={20} />
						)}
					</a> */}
			</div>
			<div className="">
				<div className="my-8 md:my-16 ">
					<FullDate text={"Sunday 22 December 2024"} index={1} />
					{day1.map((slot) => (
						<div className="grid grid-cols-12  text-gray-900 dark:text-white">
							<SLotTime slot={slot} />
							<SlotAllActivities slot={slot} />
						</div>
					))}
				</div>
				<div className=" my-8 md:my-16">
					<FullDate text={"Monday 23 December 2024"} index={2} />
					{day2.map((slot, slotindex) => (
						<div className="grid grid-cols-12  text-gray-900 dark:text-white">
							<SLotTime slot={slot} />

							<SlotAllActivities slot={slot} />
						</div>
					))}
				</div>
				<div className=" my-8 md:my-16">
					<FullDate text={"Tuesday 24 December 2024"} index={3} />
					{day3.map((slot, slotindex) => (
						<div className="grid grid-cols-12  text-gray-900 dark:text-white">
							<SLotTime slot={slot} />

							<SlotAllActivities slot={slot} />
						</div>
					))}
				</div>
			</div>
			<div className="hidden">
				{/* card view  */}
				{allSlot && allDays == true && (
					<div>
						<div className="my-4 flex justify-center gap-2 md:my-8">
							<div id="day-1">
								<span className="text-2xl font-bold text-[#115D85] dark:text-[#BA0D15] md:text-4xl">
									Day One :{" "}
								</span>
								<span className="text-lg font-bold md:text-2xl">
									Sunday 22 December 2024
								</span>
							</div>
						</div>
						<SLotInfo day={day1} />
						<div className="my-4 flex justify-center gap-2 md:my-8">
							<div id="day-2" className="">
								<span className="text-2xl font-bold text-[#115D85] dark:text-[#BA0D15] md:text-4xl">
									Day Two :{" "}
								</span>
								<span className="text-lg font-bold md:text-2xl">
									Monday 23 December 2024
								</span>
							</div>
						</div>
						<SLotInfo day={day2} />
						<div className="my-4 flex justify-center gap-2 md:my-8">
							<div id="day-3">
								<span className="text-2xl font-bold text-[#115D85] dark:text-[#BA0D15] md:text-4xl">
									Day Three :{" "}
								</span>
								<span className="text-lg font-bold md:text-2xl">
									Tuesday 24 December 2024
								</span>
							</div>
						</div>
						<SLotInfo day={day3} />
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
										<li class="col-span-12 rounded-lg border-2 border-gray-200 dark:border-gray-400 md:col-span-4">
											<ScheduleItem activity={activity} />
										</li>
									))}
								</div>
							</div>
						))}
					</ul>
				)}
			</div>
		</section>
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
			{slot.location && slot.location != "-" && (
				<p className="border-b-2 border-r-2 border-gray-200 bg-gray-200 py-1 text-center text-base font-medium dark:border-gray-400 dark:bg-transparent dark:text-gray-400">
					{slot.location}
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

export function SLotInfo({ day }) {
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
							<li class="col-span-12 rounded-lg border-2 border-gray-200 p-2 dark:border-gray-400 md:col-span-4 md:p-3">
								<ScheduleItem activity={activity} />
							</li>
						))}
					</div>
				</div>
			))}
		</ul>
	);
}
