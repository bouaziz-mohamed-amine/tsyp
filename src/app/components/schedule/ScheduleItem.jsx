import React from "react";

const ScheduleItem = ({activity}) => {
	return (
		<div class="flex items-center">
			<div class="ms-4 min-w-0 flex-1">
				<p class="truncate text-sm md:text-lg font-bold text-[#115D85] dark:text-white">
					{activity.title}
				</p>
				<p class="truncate text-sm md:text-base font-bold text-gray-900 dark:text-gray-400">
					{activity.location}
				</p>

				{/* <p class="truncate text-base font-bold  text-gray-600 dark:text-gray-400">
															{activity.location}
														</p>
														<p class="truncate text-sm font-bold text-gray-900 dark:text-gray-400">
															{activity.location}
														</p> */}
			</div>
			<div class="items-end text-base font-semibold text-gray-900 dark:text-white">
				<p class="items-end">{activity.timeSlotStart}</p>
				<p class="items-end">{activity.timeSlotEnd}</p>
			</div>
		</div>
	);
};

export default ScheduleItem;
