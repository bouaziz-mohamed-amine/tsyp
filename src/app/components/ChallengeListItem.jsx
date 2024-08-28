import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import CustomImage from "./CustomImage";

export default function ChallengeListItem({ data, classNames, imgClassNames }) {
	return (
			<div>
						{false && <Link
			// to={`/challenges/${data.slug}`}
			to={data.link}
			target="_blank"
			className={twMerge(
				"block h-full rounded-xl border-2 p-2 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 md:p-6",
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
		<Link href="#" class="flex flex-col items-center  border border-gray-200 dark:border-gray-700  rounded-xl border-2 shadow md:flex-row  hover:bg-gray-100 dark:hover:bg-black">
    <img class="object-contain md:object-cover w-4/5 h-20 md:h-auto md:w-48 rounded-lg m-4" src="https://media.discordapp.net/attachments/1199074591268667483/1278494537962094685/300573218_598670121766748_7936883706513925378_n-removebg-preview.png?ex=66d10253&is=66cfb0d3&hm=c859ebe464471077533d96fbb0b16873115c2ff90001d748b6e2aa4a5953d560&=&format=webp&quality=lossless&width=593&height=593" alt="tt"/>
    <div class="flex flex-col justify-between p-4 leading-normal Link">
        <h4 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">BIoTI’2023: Best Project
		IoT and Industry 4.0</h4>
        <p class="mb-3 text-center  font-bold text-gray-600 dark:text-gray-400">IEEE CASS Tunisia Section Technical Challege.</p>
    </div>
</Link>
			</div>
		
	);
}
