import SponsorListItem from "./SponsorListItem";

import tn_flag from "../../assets/Flag_of_Tunisia.svg";
import { useEffect, useState } from "react";

export default function SponsorsList() {
	const [sponsorsData, setSponsorsData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			fetch("/assets/partners_sponsors.json")
				.then((response) => response.json())
				.then((response) => {
					setSponsorsData(response);
				})
				.catch((err) => console.error(err));
		};
		getData();
	}, []);

	const enabledCompanies = sponsorsData?.filter((e) => e.enabled === true);
	const enabledPartners = sponsorsData?.filter((e) => e.enabled === true);

	const sectionPartners = enabledPartners?.filter(
		(e) => e.type === "section-partner"
	);
	const IeeePartners = enabledPartners?.filter(
		(e) => e.type === "global-ieee-partner"
	);
	const TunisianPartners = enabledPartners?.filter(
		(e) => e.type === "tunisian-ieee-partner"
	);
	const hostedBy = enabledCompanies?.filter((e) => e.tierRank === 0);
	const apexPartners = enabledCompanies?.filter((e) => e.tierRank === 1);
	const vanguardPartners = enabledCompanies?.filter((e) => e.tierRank === 2);
	const ascendantPartners = enabledCompanies?.filter((e) => e.tierRank === 3);
	const explorerPartners = enabledCompanies?.filter((e) => e.tierRank === 4);
	const academicPartners = enabledCompanies?.filter((e) => e.tierRank === 5);
	const telecomPartners = enabledCompanies?.filter((e) => e.tierRank === 6);

	return (
		<div>
			<div className="mb-8">
				<div className="mb-4 text-4xl font-bold">Partners & Sponsors</div>
				<div className="text-gray-600 dark:text-gray-400">
					Learn more about our event partners & sponsors.
				</div>
			</div>

			<div className="flex flex-col gap-8">
				{!!hostedBy?.length && (
					<div>
						<div className="top-0 bg-gray-50 py-4 text-2xl font-bold dark:bg-black">
							Hosted By
						</div>
						<div className="grid grid-cols-12 gap-y-4 md:gap-4">
							{hostedBy.map((e) => (
								<div className="col-span-12 md:col-span-4" key={e.slug}>
									<SponsorListItem data={e} />
								</div>
							))}
						</div>
					</div>
				)}

				{!!hostedBy?.length && (
					<div>
						<div className=" top-0 bg-gray-50 py-4 text-2xl font-bold dark:bg-black">
							IEEE Partners
						</div>
						<div className="grid grid-cols-12 gap-y-4 md:gap-4">
							{IeeePartners.map((e) => (
								<div className="col-span-12 md:col-span-4 lg:col-span-3" key={e.slug}>
									<SponsorListItem data={e} />
								</div>
							))}
						</div>
					</div>
				)}

{!!hostedBy?.length && (
					<div>
						<div id="sponsors" className=" top-0 bg-gray-50 py-4 text-2xl font-bold dark:bg-black">
							 Partners and Sponsors
						</div>
						<div className="grid grid-cols-12 gap-y-4 md:gap-4">
							{TunisianPartners.map((e) => (
								<div className="col-span-12 md:col-span-4 lg:col-span-3" key={e.slug}>
									<SponsorListItem data={e} />
								</div>
							))}
						</div>
					</div>
				)}

			
				
			</div>
		</div>
	);
}
