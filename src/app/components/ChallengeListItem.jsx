import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import CustomImage from "./CustomImage";

export default function ChallengeListItem({ data, classNames, imgClassNames }) {
	return (
			<div className="">
						{false && <Link
			// to={`/challenges/${data.slug}`}
			to={data.link}
			target="_blank"
			className={twMerge(
				"block h-full rounded-xl border-2 p-2  bg-white  transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500   md:p-6",
				classNames
			)}
		> 
			<div className={twMerge("mb-4 rounded-lg bg-gray-50 p-6 py-8")}>
				<CustomImage
					src={data.logo.url || data.logo}
					alt=""
					className={twMerge(
						"h-40 w-full object-contain md:h-40",
						imgClassNames
					)}
				/>
			</div>

			<div class="font-bold">{data.name}</div>
			{/* <div className="text-gray-600 line-clamp-3 dark:text-gray-300">
				{data.description}
			</div> */}
		</Link>}
		<Link to={data.link}
		target="_blank" class="flex flex-col items-center  border border-gray-200   bg-white rounded-xl border-2 shadow md:flex-row  hover:bg-gray-100 ">
    {/* <img class="object-contain md:object-cover w-4/5 h-20 md:h-auto md:w-48 rounded-lg m-4" src="https://media.discordapp.net/attachments/1199074591268667483/1278504779479515177/Design_sans_titre_5.png?ex=66d10bdc&is=66cfba5c&hm=157709d127bdd1ddaa82594179245b319ebb2884fb79606afafafecb4fba15c0&=&format=webp&quality=lossless&width=442&height=442" alt="tt"/> */}
    {/* <img class="dark:hidden object-contain md:object-cover w-4/5 h-40 md:h-auto md:w-40 rounded-lg m-4 " src={data.logo.url || data.logo} alt="tt"/> */}
    <img class="object-contain md:object-cover w-4/5 h-40 md:h-auto md:w-40 rounded-lg m-4" src={data.logo.url || data.logo} alt="tt"/>
	<div class="flex flex-col justify-between p-4 leading-normal w-full Link">
        <h4 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 ">{data.name}
		</h4>
        <p class="mb-3 text-center  font-bold text-gray-600 ">{data.slug}</p>
    </div>
</Link>
			</div>
		
	);
}
