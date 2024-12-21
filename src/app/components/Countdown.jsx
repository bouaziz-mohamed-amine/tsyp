import moment from "moment";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


const useCountdown = (targetDate) => {
	const countDownDate = new Date(targetDate).getTime();

	const [countDown, setCountDown] = useState(
		countDownDate - new Date().getTime()
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setCountDown(countDownDate - new Date().getTime());
		}, 1000);

		return () => clearInterval(interval);
	}, [countDownDate]);

	return getReturnValues(countDown);
};
const useCount = (targetDate) => {
	const countDate = new Date(targetDate).getTime();

	const [count, setCount] = useState(new Date().getTime() - countDate);

	useEffect(() => {
		const interval = setInterval(() => {
			setCount(new Date().getTime() - countDate);
		}, 1000);

		return () => clearInterval(interval);
	}, [countDate]);

	return getReturn(count);
};
const getReturn = (count) => {
	// calculate time left
	const days = Math.floor(count / (1000 * 60 * 60 * 24))+1;
	const hours = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((count % (1000 * 60)) / 1000);
	// format numbers to add leading zero if less than 10
	const formattedDays = days.toString().padStart(2, "0");
	const formattedHours = hours.toString().padStart(2, "0");
	const formattedMinutes = minutes.toString().padStart(2, "0");
	const formattedSeconds = seconds.toString().padStart(2, "0");

	return [formattedDays, formattedHours, formattedMinutes, formattedSeconds];
};
const getReturnValues = (countDown) => {
	// calculate time left
	const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

	// format numbers to add leading zero if less than 10
	const formattedDays = days.toString().padStart(2, "0");
	const formattedHours = hours.toString().padStart(2, "0");
	const formattedMinutes = minutes.toString().padStart(2, "0");
	const formattedSeconds = seconds.toString().padStart(2, "0");

	return [formattedDays, formattedHours, formattedMinutes, formattedSeconds];
};

export function Countdown(props) {
	var date = new Date("12/22/2024 00:00:00"); // some mock date
	var milliseconds = date.getTime();
	
	const [days, hours, minutes, seconds] = useCountdown(milliseconds);
	var date2 = new Date("12/22/2024 00:00:00");
	const [days2, hours2, minutes2, seconds2] = useCount(date2.getTime());
	const [CountData, setCountData] = useState([]);

	
	useEffect(() => {
	  const getData = async () => {
		try {
		  const response = await fetch("/assets/count.json");
		  const data = await response.json();
		  setCountData(data); 
		} catch (error) {
		  console.error("Error fetching count data:", error);
		}
	  };
  
	  getData();
	}, []);
	//var date = new Date("12/12/2024 00:00:00"); // some mock date
	//var milliseconds = date.getTime();
	//var CurrentHour =new Date.getHours();
	//const [days, hours, minutes, seconds] = useCountdown(milliseconds);
	//var date2=new Date("12/12/2024 00:00:00");
	//const [days2,hours2, minutes2, seconds2] = useCount(date2.getTime());

	if (
		new Date().getTime() > date2.getTime() &&
		days2 != null &&
		hours2 != null &&
		minutes2 != null &&
		seconds2 != null
	  ) {
		
		  return (
		
			<div className=" justify-center *">
        {CountData.map((item, index) => (
          <div key={index}>
            <h1 className="mx-2 mb-4 text-center text-2xl font-bold tracking-tight lg:mb-4 lg:text-start lg:text-4xl lg:font-extrabold lg:leading-none">
              Our Journey Has Began
            </h1>
            <div className="flex items-center">
              <h1 className="mx-2 text-center text-4xl font-bold tracking-tight text-[#115D85] dark:text-[#BA0D15] lg:text-start lg:text-6xl lg:font-extrabold lg:leading-none">
                Day {days2}:
              </h1>
              <h1 className="text-center text-xl font-bold tracking-tight lg:text-start lg:text-4xl lg:font-extrabold lg:leading-none">
                {item.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
		  );
		
	  }

	return (
		<div className="  xtext-[#2d459e]">
			{/* <h1 className="mb-4 text-center text-4xl font-bold tracking-tight lg:mb-7 lg:text-5xl lg:font-extrabold lg:leading-none">
					Starting in:
				</h1> */}
			<div className=" my-8 block items-center justify-center gap-4 p-4 text-center">
				{"days" && "hours" && "minutes" && "seconds" && (
					<div className="  grid grid-cols-[1fr_auto_1fr_auto]  items-center justify-center  text-2xl font-bold leading-[30px]">
						{/* <SVGCircle radius={daysRadius} />
						{days}
						<span className="text-xs font-bold uppercase">days</span> */}
						<div>
							<h1 className="  font-bold md:text-7xl  lg:text-9xl xs:text-5xl ms:text-7xl">
								{days}
							</h1>
						</div>
						<div className="">
							<h1 className=" xs:text-md rotate-90 text-xl font-bold text-[#115D85] dark:text-[#BA0D15]">
								{" "}
								Day
							</h1>
						</div>
						<div>
							<h1 className="  font-bold md:text-7xl  lg:text-9xl xs:text-5xl ms:text-7xl">
								{hours}
							</h1>
						</div>
						<div className="">
							<h1 className=" xs:text-md rotate-90 text-xl font-bold text-[#115D85] dark:text-[#BA0D15]">
								{" "}
								Hour
							</h1>
						</div>
						<div>
							<h1 className="  font-bold md:text-7xl  lg:text-9xl xs:text-5xl ms:text-7xl">
								{minutes}
							</h1>
						</div>
						<div className="">
							<h1 className="  xs:text-md rotate-90 text-xl font-bold text-[#115D85] dark:text-[#BA0D15]">
								{" "}
								Minute
							</h1>
						</div>
						<div className="">
							<h1 className="font-bold md:text-7xl  lg:text-9xl xs:text-5xl ms:text-7xl">
								{seconds}
							</h1>
						</div>
						<div className="">
							<h1 className="xs:text-md rotate-90 text-xl font-bold text-[#115D85] dark:text-[#BA0D15]">
								{" "}
								second
							</h1>
						</div>
					</div>
				)}
				{}
			</div>
		</div>
	);
}

const SVGCircle = ({ radius }) => {
	let nRadius = radius;
	if (radius === 0 || radius === 360) {
		nRadius = 359.999;
	}
	// return null;
	const transition = { duration: 0.5, yoyo: Infinity, ease: "easeInOut" };

	return (
		<svg className="absolute top-0 left-0 h-[100px] w-[100px]">
			<motion.path
				className="stroke-[#11638F] dark:stroke-gray-400"
				// className="stroke-[#3a55b4] dark:stroke-gray-400"
				fill="none"
				// stroke="#333"
				strokeWidth="4"
				d={describeArc(50, 50, 48, 0, nRadius)}
				// animate={{
				// 	d: [
				// 		"M 40,40 Q 160,40 160,160",
				// 		"M 160,40 Q 100,100 40,160",
				// 		"M 160,160 Q 100,160 40,160",
				// 		"M 160,40 Q 100,160 40,40",
				// 		"M 160,40 Q 100,40 40,40",
				// 		"M 40,40 Q 160,40 160,160",
				// 	],
				// }}
				// initial={{ pathLength: 0 }}
				// animate={{ pathLength: 1 }}
				// transition={transition}
			/>
		</svg>
	);
};

// From stackoverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
	var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

	return {
		x: centerX + radius * Math.cos(angleInRadians),
		y: centerY + radius * Math.sin(angleInRadians),
	};
}

function describeArc(x, y, radius, startAngle, endAngle) {
	var start = polarToCartesian(x, y, radius, endAngle);
	var end = polarToCartesian(x, y, radius, startAngle);

	var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

	var d = [
		"M",
		start.x,
		start.y,
		"A",
		radius,
		radius,
		0,
		largeArcFlag,
		0,
		end.x,
		end.y,
	].join(" ");

	return d;
}

// Stackoverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number, in_min, in_max, out_min, out_max) {
	return (
		((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
	);
}
