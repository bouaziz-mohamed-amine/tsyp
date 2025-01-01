import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import CustomImage from "./CustomImage";

export default function AwardListItem({ data }) {
	return (
				<div className="">
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
		<div className="p-4">
			<p className="m-2 text-center text-2xl font-bold tracking-tight text-gray-900">winners</p>
			{data.winners.map(e =>(<p className="m-1 text-center  font-bold text-gray-600 ">{e}</p>))}
		</div>
	</Link>
				</div>
			
		);
	}
