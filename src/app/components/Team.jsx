import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import CustomImage from "./CustomImage";
import { useEffect, useState } from "react";

export default function Team({ limit = 0 }) {
	const [ocTeam, setOcTeam] = useState([]);

	useEffect(() => {
		const getData = async () => {
			fetch("/assets/oc_team.json")
				.then((response) => response.json())
				.then((response) => {
					setOcTeam(response);
				})
				.catch((err) => console.error(err));
		};
		getData();
	}, []);

	return (
		<div id="team">
			<div className="mb-8 text-center text-4xl font-bold">Meet the Team</div>
			<div className="grid grid-cols-12 gap-4 ">
				{ocTeam.map((oc, index) => {
					if (index < limit && limit !== 0) {
						return (
							<div className="col-span-6 md:col-span-4 lg:col-span-2 flex justify-center ">
								<div className="  rounded-full    ">
									<a href={oc.linkdin.url}>
										<CustomImage
											className="mx-auto h-[120px] w-[120px] md:h-[170px] md:w-[170px] rounded-full bg-[#115D85] dark:bg-[#BA0D15] object-cover"
											src={oc.image.url}
											alt="IeeeTunisia"
											// width={200}
											// height={200}
										/>
									</a>

									<div data-tooltip-target="tooltip-default">
										<a  href={ `mailto:${oc.email}` }>
											<p className="text-md text-center font-bold dark:bg-black">
												{oc.name}
											</p>
										</a>
										<a  href={ `mailto:${oc.email}` }>
											<p className="text-md text-center font-bold dark:bg-black">
												{oc.title}
											</p>
										</a>
									</div>
								</div>
							</div>
						);
					}
				})}

				{limit <= 5 ? (
					<div className="col-span-6 md:col-span-4 lg:col-span-2 flex justify-center">
						<Link
						to={`/about-us#team`}
						className=" flex h-[120px] w-[120px] md:h-[170px] md:w-[170px] flex-col items-center justify-center rounded-full border-2 p-6 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 md:col-span-3 lg:col-span-2"
					>
						<FontAwesomeIcon icon={faExternalLink} className="mb-2 h-6 w-6" />
						<div className="font-bold text-center">See more</div>
					</Link>
					</div>
				) : null}
			</div>
		</div>
	);
}
