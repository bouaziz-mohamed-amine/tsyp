import CustomImage from "../components/CustomImage";
import TNimage from "../../assets/images/tn2056/tn2056.png";
import pdfTN2056 from "../../pdf/TSYP12_TN2056.pdf";
import { Link } from "react-router-dom";
import ContactDetails from "./Contact.page";

export function TNChallengePage() {
	return (
		<div className="h-full  ">
			<div className="col-span-12 lg:py-20 md:mx-auto">
				<h1 className=" text-center text-4xl font-bold tracking-tight  lg:text-center lg:text-6xl lg:font-extrabold lg:leading-none">
					Tunisia 2056 Challenge
				</h1>
			</div>

			<section className="grid items-center justify-center gap-4 py-8 md:grid-cols-12 mb-12">
				<div className="col-span-6 mx-auto md:order-last mb-4">
					<CustomImage
						src={TNimage}
						className=" mx-auto h-52  rounded-2xl sm:h-96"
						alt="tn2056"
					/>
				</div>
				<div className="col-span-6">
					<h1 className="mb-4 text-lg font-medium  lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
						The Tunisia 2056 Challenge (TN2056 Challenge) embodies the
						transformative vision for TSYP in its 12th edition, emphasizing
						collaboration among Tunisia Student Branches to tackle critical
						challenges facing Tunisia and envision its future by 2056 through
						the launch of innovative start-ups.
					</h1>
					<div>
						<Link
							// type="button"
							to={pdfTN2056}
							target="_blank"
							rel="noreferrer"
							className="relative inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black  dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
						>
							{/* <div className="flex flex-wrap items-center justify-start gap-2"> */}
							<span className="">TN2056 Document</span>
						</Link>
					</div>
				</div>
			</section>

			<div className="col-span-12 pb-16 md:mx-auto">
				<h1 className=" text-center text-4xl font-bold tracking-tight  lg:text-center lg:text-6xl lg:font-extrabold lg:leading-none">
					About Info Session
				</h1>
			</div>
			<section className="grid items-center justify-center gap-4 py-8 md:grid-cols-12 mb-12 ">
				<div className="  col-span-6 mx-auto  w-full text-center mb-4 ">
					<iframe
						className="mx-auto h-56 w-full rounded-2xl shadow-lg sm:h-96"
						src="https://www.youtube.com/embed/lCOTmTw0DWA?si=Xdw5N58MXQ7Y30JT"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
				</div>
				<div className="col-span-6 lg:ml-12">
					<h1 className="mb-4  text-lg font-medium   lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
						Our first step in the TN2056 Challenge was the info sessions phase.
						We began with a chair meeting where we introduced the 12th edition
						of TSYP and explained the concept of this new challenge. We then
						asked the chairs to hold info sessions for their student branches,
						as they are now our representatives. Following this, we held three
						Webex sessions, each focusing on one of our three sectors: Health
						Tech, Agritech, and Creative & Cultural Industries. These sessions
						were assisted by outstanding experts from these domains, providing
						valuable insights and guidance.n
					</h1>
					<div>
						<Link
							// type="button"
							to="https://drive.google.com/drive/folders/1k-84a_iVUq_8K7KhfXSJJJubsGRTuuJt"
							target="_blank"
							rel="noreferrer"
							className="relative inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black  dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
						>
							{/* <div className="flex flex-wrap items-center justify-start gap-2"> */}
							<span className="">Learn more about TN 2056 Challenge</span>
						</Link>
					</div>
				</div>
			</section>
			{/* <div className="col-span-12 pb-16 md:mx-auto">
				<h1 className=" text-center text-4xl font-bold tracking-tight  lg:text-center lg:text-6xl lg:font-extrabold lg:leading-none">
					Meet our experts
				</h1>
			</div>
			<section className="py-8 md:py-28">
					<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
						<div className="grid gap-4">
						<iframe
						className="mx-auto h-56 w-full rounded-2xl shadow-lg sm:h-96"
						src="https://www.youtube.com/embed/lCOTmTw0DWA?si=Xdw5N58MXQ7Y30JT"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
						</div>
						<div className="grid gap-4">
						<iframe
						className="mx-auto h-56 w-full rounded-2xl shadow-lg sm:h-96"
						src="https://www.youtube.com/embed/lCOTmTw0DWA?si=Xdw5N58MXQ7Y30JT"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
						</div>
						<div className="grid gap-4">
						<iframe
						className="mx-auto h-56 w-full rounded-2xl shadow-lg sm:h-96"
						src="https://www.youtube.com/embed/lCOTmTw0DWA?si=Xdw5N58MXQ7Y30JT"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
						</div>
					</div>
				</section> */}
		</div>
		
	);
}
