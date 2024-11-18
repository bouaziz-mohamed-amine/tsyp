import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import CustomImage from "./CustomImage";
import enetcom from "../../assets/images/logosb10final.png"
export default function SponsorListItem({ data, classNames, imgClassNames }) {
	return (
		<div className="" >
			<Link
			to={`/partners-sponsors/${data.slug}`}
			className={twMerge( 
				"relative block rounded-xl border-2 p-2 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 md:pt-6 md:px-6",
				classNames
			)}
		>
			<div className={twMerge(" rounded-lg bg-gray-50 p-2 py-6 mb-2")}>
				<CustomImage
					src={  data.name== "IEEE ENET'COM SB"? enetcom  : data.logo.url || data.logo}
					alt=""
					className={twMerge(
						"h-40 w-full object-contain md:h-40",
						imgClassNames
					)}
				/>
			</div>

			<div className=" h-12  md:h-24 lg:h-16 text-black text-center font-bold text-lg line-clamp-2 dark:text-gray-300">
				<div className="   flex items-center justify-center">
				<div>{data.name}</div>
				</div>
			</div>
		</Link>
		</div>
	);
}
