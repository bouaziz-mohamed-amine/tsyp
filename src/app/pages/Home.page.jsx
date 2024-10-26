import { useEffect } from "react";
import LogoOnBlack from "../../assets/images/main logo black (Custom).png";
import LightLogo from "../../assets/images/Logo-TSYP12_withoutBckg_white.png";
import Logo from "../../assets/images/main logo black (Custom).png";
import SBGroupPic from "../../assets/images/sb-group-pic3.jpg";
import TSYP2014 from "../../assets/tsyp-editions/tsyp-2014.jpg";
import TSYP2016 from "../../assets/tsyp-editions/tsyp-2016.jpg";
import TSYP2017 from "../../assets/tsyp-editions/tsyp-2017.jpg";
import TSYP2018 from "../../assets/tsyp-editions/tsyp-2018.png";
import TSYP2019 from "../../assets/tsyp-editions/tsyp-2019.jpg";
import TSYP2020 from "../../assets/tsyp-editions/tsyp-2020.jpg";
import enetcomlogo from "../../assets/images/logosb10final.png";
import { Link } from "react-router-dom";
import TSYP2021Dark from "../../assets/tsyp-editions/tsyp-2021-dark.png";
import TSYP2022 from "../../assets/tsyp-editions/tsyp-2022.png";
import TSYP2023 from "../../assets/tsyp-editions/tsyp-2023.png";
import {
	faExternalLink,
	faMasksTheater,
	faRocket,
	faTicket,
	faVrCardboard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fade } from "react-awesome-reveal";
import { useMediaQuery } from "usehooks-ts";
import { Countdown } from "../components/Countdown";
import CustomImage from "../components/CustomImage";
import Speakers from "../components/Speakers";
import { ScheduleOverview } from "../components/schedule/ScheduleList";

export default function HomePage() {
	const matches = useMediaQuery("(min-width: 768px)");

	return (
		<div className="h-full">
			<Fade triggerOnce className="dark:text-slate-200">
				<section className="grid grid-cols-12 items-center justify-center py-4">
					<div className="col-span-12 gap-4">
						<div className="justify-between md:flex xs:block">
							<div className="block">
								<div className="my-8 ">
									<h1 className="mb-4 text-center text-4xl font-bold tracking-tight lg:mb-4 lg:text-start lg:text-6xl lg:font-extrabold lg:leading-none ">
										IEEE Tunisian Student
									</h1>
									<h1 className="mb-4 text-center text-4xl font-bold tracking-tight lg:mb-4 lg:text-start lg:text-6xl lg:font-extrabold lg:leading-none">
										and Young
									</h1>
									<h1 className="mb-4 text-center text-4xl font-bold tracking-tight lg:mb-4 lg:text-start lg:text-6xl lg:font-extrabold lg:leading-none">
										Professional
									</h1>
									<h1 className="mb-4  text-center text-4xl font-bold tracking-tight text-[#115D85] dark:text-[#BA0D15] lg:mb-4 lg:text-start lg:text-6xl lg:font-extrabold lg:leading-none">
										12th Edition
									</h1>
								</div>
								<div className="my-8 block ms:items-center ms:justify-center">
									<h1 className="text-center text-2xl font-bold  text-black  dark:text-slate-200 lg:text-start">
										22, 23, 24 dec 2024
									</h1>
									<h1 className="text-md text-center font-bold lg:text-start">
										Medina Congress Center, Yasmine Hammamet
									</h1>
								</div>
							</div>
							<div className="my-8 items-center justify-center ">
								{true && (
									<Countdown
										timeTillDate="12 22 2024, 12:00 pm"
										timeFormat="MM DD YYYY, h:mm a"
									/>
								)}
							</div>
						</div>
						<div className="my-8 flex items-center justify-center text-[#115D85] dark:text-slate-200">
							<div className="w-full border border-[#115D85] dark:border-[#BA0D15]"></div>
							<div className="mx-4 block text-center">
								<h1 className="text-3xl font-bold">1200+</h1>
								<h1>Participants</h1>
							</div>
							<div className="mx-4 block text-center">
								<h1 className="text-3xl font-bold">50+</h1>
								<h1>Speakers</h1>
							</div>
							<div className="w-full border border-[#115D85] dark:border-[#BA0D15]"></div>
						</div>
						<Fade triggerOnce>
							{/* <CustomImage
					src={logoBar}
					alt=""
					className="hidden h-52 object-contain dark:invert lg:block"
				/> */}
							<CustomImage
								src={"https://i.imgur.com/OHgF9e3.png"}
								alt=""
								className="h-38 invert-1 mx-auto hidden object-contain dark:invert lg:block"
							/>
						</Fade>
					</div>
				</section>
			</Fade>

			{false && (
				<Fade triggerOnce>
					{/* <CustomImage
					src={logoBar}
					alt=""
					className="hidden h-52 object-contain dark:invert lg:block"
				/> */}
					<CustomImage
						src={"https://i.imgur.com/PQwQnYb.png"}
						alt=""
						className="mx-auto hidden h-28 object-contain invert dark:invert-0 lg:block"
					/>
				</Fade>
			)}

			{false && (
				<Fade triggerOnce>
					<h1 className="mt-8 mb-4 text-start text-xl font-bold tracking-tight lg:mb-7 lg:text-center lg:text-2xl lg:font-extrabold">
						In Conjunction with IES African Continent Chapter Workshop
						<br />&{" "}
						<Link
							to={
								"https://public-forum.embs.org/tunisia-na-healthcare-innovations-forum/"
							}
							target="_blank"
							className="hover:underline"
						>
							IEEE EMBS Tunisia North Africa Forum on Healthcare Innovations
						</Link>
					</h1>
					<div className="flex items-center justify-center gap-4">
						<CustomImage
							src={"https://i.imgur.com/Usd3WQr.png"}
							alt=""
							className="hidden aspect-video h-40 rounded-lg bg-white object-contain p-4 lg:block"
						/>
						<CustomImage
							src={"https://i.imgur.com/Gu6u9NO.png"}
							alt=""
							className="hidden aspect-video h-40 rounded-lg bg-white object-contain p-4 lg:block"
						/>
					</div>
				</Fade>
			)}

			<Fade triggerOnce>
				<AboutTSYP />
			</Fade>

			<Fade triggerOnce>
				<AboutTunisiaSection />
			</Fade>
			<Fade triggerOnce>
				<AboutESSTHSSB />
			</Fade>
			<Fade triggerOnce>
				<section className="py-8 md:py-10">
					<AboutCongress />
				</section>
			</Fade>
			<Fade triggerOnce>
				<section className="py-8 md:py-10">
					<PoweredBy />
				</section>
			</Fade>
			<Fade triggerOnce>
				<section className="py-8 md:py-10">
					<IEEEPartners />
				</section>
			</Fade>
			<Fade triggerOnce>
				<section className="py-8 md:py-10">
					<PreviousEditions />
				</section>
			</Fade>
			<Fade triggerOnce>
				<section className="py-8 md:py-10">
					<Memories />
				</section>
			</Fade>

			<Fade triggerOnce>
				<section className="py-8 md:py-10">
					{/* <SponsorsPreview /> */}
					{false && (
						<div className="hadow-xl bbg-white rounded-2xl py-24 sm:py-10">
							<Link
								className="flex max-w-7xl items-center justify-center gap-3 px-6 lg:px-8"
								to={`/partners-sponsors`}
							>
								<h2 className="text-center text-4xl font-bold">Our Sponsors</h2>
								<FontAwesomeIcon icon={faExternalLink} className="h-5 w-5" />
							</Link>
						</div>
					)}
				</section>
			</Fade>
			<Fade triggerOnce>
				<section className="py-8 md:py-10">
					<Speakers limit={8} />
				</section>
			</Fade>
			<Fade triggerOnce>
				<div className="md:mt-8 md:block">
					<ScheduleOverview />
				</div>
			</Fade>
			{/* <Fade triggerOnce>
				<section className="py-8 md:py-28">
					<Team limit={5} />
				</section>
			</Fade> */}
			{false && (
				<Fade triggerOnce>
					<section className="py-8 md:py-28">
						<div className="mx-auto">
							<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
								Find us here
							</h1>
							<iframe
								loading="lazy"
								title="tsyp location"
								src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4871.091984775575!2d10.531334003138053!3d36.36716367037959!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd6386597ae125%3A0x9bb64df24a0c4fc1!2sMedina%20of%20Yasmine%20Hammamet!5e0!3m2!1sen!2stn!4v1714774967429!5m2!1sen!2stn"
								className="w-full rounded-2xl shadow-lg"
								height="500"
								style={{
									border: 0,
									// width: "100%",
								}}
								allowFullScreen=""
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</section>
				</Fade>
			)}

			{/* <SparrowSurvey /> */}
		</div>
	);
}

export function AboutESSTHSSB(params) {
	return (
		<section className="grid items-center justify-center gap-4 py-8 md:grid-cols-12 md:py-28">
			<div className="col-span-6 mx-auto">
				<CustomImage
					src={SBGroupPic}
					className="mx-auto h-56 rounded-2xl object-cover shadow-lg sm:h-96"
					alt="TSYP 11"
				/>
			</div>
			<div className="col-span-6">
				<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
					IEEE ENET'COM Student Branch
				</h1>
				<h1 className="mb-4 text-lg font-medium   lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
					Established on November 2013, the IEEE ENETCOM Student Branch has been
					steadfast in promoting the IEEE and its mission within the realm of
					engineering students at ENET'Com. Our core focus is to invest in these
					students, aiding them in honing their general skills and fostering
					their development into future leaders and change-makers. With a
					membership exceeding 472 individuals, including engineers, degree
					holders, and master's degree holders, our Student Branch proudly
					stands as the largest in Sfax, ranking 3rd in the Tunisia Section and
					3rd in Region 8. Our influence extends through 6 Technical Chapters:
					CAS, CS, IAS, PES, RAS, EMBS, and an Affinity Group: WIE. We take
					great pride in our global recognition, having received numerous IEEE
					Awards across various fields. This success is a testament to the
					dedication and commitment exhibited by each of our members.
				</h1>
				<div>
					<Link
						// type="button"
						to={"https://enetcom.ieee.tn"}
						target="_blank"
						rel="noreferrer"
						className="relative inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black  dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
					>
						{/* <div className="flex flex-wrap items-center justify-start gap-2"> */}
						<span className="">Learn more about ENET'COM SB</span>
						{/* </div> */}
					</Link>
				</div>
			</div>
		</section>
	);
}

export function AboutTunisiaSection(params) {
	return (
		<section className="grid items-center justify-center gap-4 py-8 md:grid-cols-12 md:py-28">
			<div className="col-span-6 mx-auto md:order-last">
				<CustomImage
					src={"https://i.imgur.com/EpXVkCB.png"}
					className="mx-auto h-52 object-contain sm:h-96"
					alt="TSYP 11"
				/>
			</div>
			<div className="col-span-6">
				<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
					About IEEE Tunisia Section
				</h1>
				<h1 className="mb-4 text-lg font-medium  lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
					Founded in 2008, the IEEE Tunisia Section is dedicated to spreading
					IEEE initiatives throughout Tunisia. This is achieved through
					educational and technical programs, networking opportunities, and the
					advancement of technology and its applications to address humanitarian
					challenges. The section actively supports chapters, special interest
					groups, student activities, and student awards. IEEE has firmly
					established its presence in the Tunisian engineering community, with
					over 43 Student Branches located across various engineering schools,
					faculties, and universities.
				</h1>
				<div>
					<Link
						// type="button"
						to={"https://ieee.tn/"}
						target="_blank"
						rel="noreferrer"
						className="relative inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black  dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
					>
						{/* <div className="flex flex-wrap items-center justify-start gap-2"> */}
						<span className="">Learn more IEEE Tunisia Section</span>
						{/* </div> */}
					</Link>
				</div>
			</div>
		</section>
	);
}

export function AboutTSYP() {
	return (
		<section
			style={{ padding: "20px 0px" }}
			className="grid items-center justify-center gap-4 py-8 md:grid-cols-12 md:py-28"
		>
			<div className="col-span-6 ">
				<CustomImage
					src={LogoOnBlack || Logo}
					className={`mx-auto mb-8 hidden  object-contain dark:block ${
						LogoOnBlack ? "" : "dark:invert"
					} `}
					alt="TSYP 11"
				/>

				<CustomImage
					src={LightLogo}
					className="mx-auto object-contain dark:hidden "
					alt="TSYP 11"
				/>
			</div>
			<div className="col-span-6">
				<h1 className="mb-4 text-4xl font-bold tracking-tight lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
					About IEEE TSYP Congress
				</h1>
				<p className="mb-4  text-lg font-medium lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
					The Tunisian Student and Young Professional (TSYP) Congress, organized
					by IEEE ENETCOM Student Branch and IEEE Tunisia Section, annually
					brings together IEEE members in Tunisia. The 12th edition, themed
					"TUNISIA 2056," provides a unique platform for participants to delve
					into current and future challenges in science and engineering. The
					congress fosters connections within the national and international
					IEEE network, encouraging knowledge exchange and the sharing of
					experiences. "TUNISIA 2056" signifies a commitment to addressing
					challenges and envisioning a technologically advanced future for
					Tunisia, making the congress a dynamic forum for ideas, innovation,
					and collaboration.
				</p>
			</div>
		</section>
	);
}

function Memories() {
	return (
		<div>
			<h2 className="mb-12 text-center text-4xl font-bold">
				Memories from Previous Editions
			</h2>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
				<div className="grid gap-6">
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src="https://i.imgur.com/wGbAmaH.jpeg"
							alt=""
						/>
					</div>
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={"https://i.imgur.com/xqwrboq.jpeg"}
							alt=""
						/>
					</div>
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={"https://i.imgur.com/RdnsgRQ.jpeg"}
							alt=""
						/>
					</div>
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={"https://i.imgur.com/lYz1tZI.jpeg"}
							alt=""
						/>
					</div>
				</div>
				<div className="grid gap-6">
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={"https://i.imgur.com/9WxfPuY.jpeg"}
							alt=""
						/>
					</div>
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={"https://i.imgur.com/QCHQWE4.jpeg"}
							alt=""
						/>
					</div>
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={"https://i.imgur.com/nPXqChl.jpeg"}
							alt=""
						/>
					</div>
				</div>
				<div className="grid gap-6">
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={"https://i.imgur.com/g0i8OVM.jpeg"}
							alt=""
						/>
					</div>
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={"https://i.imgur.com/CvZUCld.jpeg"}
							alt=""
						/>
					</div>
					{/* <div>
						<CustomImage
							className="hidden h-full w-full rounded-2xl object-cover md:block "
							src={"https://i.imgur.com/O3PguYL.jpeg"}
							alt=""
						/>
					</div> */}
				</div>
			</div>
		</div>
	);
}

function AboutCongress() {
	return (
		<div className="hadow-xl bbg-white rounded-2xl py-24 sm:py-10">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="mb-12 text-center text-4xl font-bold">
					About TSYP Congress 2024
				</h2>
				<div className="mx-auto mt-10 grid max-w-lg items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-12">
					<div className="col-span-4 flex flex-col items-center gap-4">
						<CustomImage
							className="h-14 w-14 object-contain"
							src="https://sections-congress.ieee.org/assets/img/site_images/home/network.webp"
							alt=""
						/>
						<div className="text-2xl font-bold">Network</div>
						<p className="text-center">
							Network and build relationships with other volunteers within IEEE.
						</p>
					</div>
					<div className="col-span-4 flex flex-col items-center gap-4">
						<CustomImage
							className="h-14 w-14 object-contain"
							src="https://sections-congress.ieee.org/assets/img/site_images/home/learn.webp"
							alt=""
						/>
						<div className="text-2xl font-bold">Learn</div>
						<p className="text-center">
							To provide an opportunity for delegates to gain information and
							training skills.
						</p>
					</div>
					<div className="col-span-4 flex flex-col items-center gap-4">
						<CustomImage
							className="h-14 w-14 object-contain"
							src="https://sections-congress.ieee.org/assets/img/site_images/home/goal.webp"
							alt=""
						/>
						<div className="text-2xl font-bold">Plan ahead</div>
						<p className="text-center">
							Collectively shape the future and goals of the IEEE.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

function PreviousEditions() {
	return (
		<div className="hadow-xl bbg-white rounded-2xl py-24 sm:py-10">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="mb-12 text-center text-4xl font-bold">
					Previous Editions
				</h2>
				<div className="ggrid mx-auto mt-10 flex max-w-lg grid-cols-4 flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					<div className="transition hover:scale-105">
						<a
							href={"https://2023-tsyp.ieee.tn/"}
							target="_blank"
							rel="noreferrer"
						>
							<CustomImage
								className="col-span-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2023}
								alt="TSYP2023"
								// width={200}
								// height={200}
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2023</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href={"https://past-tsyp.ieee.tn/2022/"}
							target="_blank"
							rel="noreferrer"
						>
							<CustomImage
								className="col-span-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2022}
								alt="TSYP2022"
								// width={200}
								// height={200}
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2022</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href={"https://past-tsyp.ieee.tn/2021/index.html"}
							target="_blank"
							rel="noreferrer"
						>
							<CustomImage
								className="col-span-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2021Dark}
								alt="TSYP2021Dark"
								// width={200}
								// height={200}
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2021</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href={"https://past-tsyp.ieee.tn/2020/index.html"}
							target="_blank"
							rel="noreferrer"
						>
							<CustomImage
								className="col-span-2 h-[120px] w-[120px] rounded-full object-cover shadow-md shadow-gray-200 transition dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2020}
								alt="TSYP2020"
								// width={200}
								// height={200}
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2020</h1>
					</div>

					<div className="transition hover:scale-105">
						<a
							href={"https://past-tsyp.ieee.tn/2019/index.html"}
							target="_blank"
							rel="noreferrer"
						>
							<CustomImage
								className="col-span-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2019}
								alt="TSYP2019"
								// width={200}
								// height={200}
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2019</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href={"https://past-tsyp.ieee.tn/2018/index.html"}
							target="_blank"
							rel="noreferrer"
						>
							<CustomImage
								className="col-span-2 h-[120px] w-[120px] rounded-full object-contain p-4 shadow-md shadow-gray-200 transition dark:invert sm:col-start-2 md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2018}
								alt="TSYP2018"
								// width={200}
								// height={200}
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2018</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href={"https://past-tsyp.ieee.tn/2017/index.html"}
							target="_blank"
							rel="noreferrer"
						>
							<CustomImage
								className="col-span-2 col-start-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition dark:invert sm:col-start-auto md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2017}
								alt="TSYP2017"
								// width={200}
								// height={200}
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2017</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href={"https://past-tsyp.ieee.tn/2016/index.html"}
							target="_blank"
							rel="noreferrer"
						>
							<CustomImage
								className="col-span-2 col-start-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition dark:invert sm:col-start-auto md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2016}
								alt="TSYP2016"
								// width={200}
								// height={200}
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2016</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href={"https://past-tsyp.ieee.tn/2015/index.html"}
							target="_blank"
							rel="noreferrer"
						>
							<CustomImage
								className="col-span-2 col-start-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition sm:col-start-auto md:h-[200px] md:w-[200px] lg:col-span-1"
								src={"https://i.imgur.com/EpXVkCB.png"}
								alt="IeeeTunisia"
								// width={200}
								// height={200}
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2015</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href={"https://past-tsyp.ieee.tn/2014/index.html"}
							target="_blank"
							rel="noreferrer"
						>
							<CustomImage
								className="col-span-2 col-start-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-900 invert transition dark:invert-0 sm:col-start-auto md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2014}
								alt="TSYP2014"
								// width={200}
								// height={200}
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2014</h1>
					</div>
					<div className="transition hover:scale-105">
						<a href="#">
							<CustomImage
								className="col-span-2 col-start-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition sm:col-start-auto md:h-[200px] md:w-[200px] lg:col-span-1"
								src={"https://i.imgur.com/EpXVkCB.png"}
								alt="IeeeTunisia"
								// width={200}
								// height={200}
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2013</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

function PoweredBy() {
	return (
		<div className="mx-auto max-w-7xl px-6 lg:px-8">
			<h2 className="mb-12 text-center text-4xl font-bold">Powered By</h2>
			<div className="ggrid mx-auto mt-10 flex max-w-lg grid-cols-4 flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
				<a
					href="https://ieee.tn/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[120px] w-[120px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
						src={"https://i.imgur.com/EpXVkCB.png"}
						alt="IeeeTunisia"
						// width={200}
						// height={200}
					/>
				</a>
				{false && (
					<a
						href="https://yp.ieee.tn/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<CustomImage
							className="col-span-2 h-[120px] w-[120px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 dark:invert md:h-[200px] md:w-[200px] lg:col-span-1"
							src={"https://i.imgur.com/0JYgUki.png"}
							alt="YpTunisia"
							// width={200}
							// height={200}
						/>
					</a>
				)}
				<a
					href="https://enetcom.ieee.tn/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105 dark:invert"
				>
					<CustomImage
						className="col-span-2 h-[120px] w-[120px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
						src={enetcomlogo}
						alt="enetcomLogo"
						// width={200}
						// height={200}
					/>
				</a>
				{false && (
					<a
						href="https://uso.rnu.tn/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105 dark:invert"
					>
						<CustomImage
							className="col-span-2 h-[120px] w-[120px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
							src={"https://i.imgur.com/HalSgE1.png"}
							alt="university of sousse"
							// width={200}
							// height={200}
						/>
					</a>
				)}
				{false && (
					<a
						href="https://ieeer8.org/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<CustomImage
							className="col-span-2 h-[120px] w-[120px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
							src={"https://i.imgur.com/mFTrYL2.png"}
							alt="IEEE Region 8"
							// width={200}
							// height={200}
						/>
					</a>
				)}
				{false && (
					<a
						href="https://www.ieee.org/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full p-4 shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<CustomImage
							className="col-span-2 h-[120px] w-[120px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
							src={"https://i.imgur.com/mFTrYL2.png"}
							alt="IEEE"
							// width={200}
							// height={200}
						/>
					</a>
				)}
			</div>
		</div>
	);
}

function SponsorsPreview() {
	return (
		<div className="mx-auto max-w-7xl px-6 lg:px-8">
			<Link
				className="flex max-w-7xl items-center justify-center gap-3 px-6 lg:px-8"
				to={`/partners-sponsors#ExclusiveAcademicPartner`}
			>
				<h2 className="text-center text-4xl font-bold">Sponsored by</h2>
				<FontAwesomeIcon icon={faExternalLink} className="h-5 w-5" />
			</Link>
			<div className="ggrid mx-auto mt-10 flex max-w-lg grid-cols-4 flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
				<a
					href="https://www.orangedigitalcenters.com/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full bg-white p-4 shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[160px] md:w-[160px] lg:col-span-1"
						src={"https://i.imgur.com/FkG6VVq.png"}
						alt="Orange"
						// width={200}
						// height={200}
					/>
				</a>
				<a
					href="https://www.polytecsousse.tn/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full bg-white p-4 shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[160px] md:w-[160px] lg:col-span-1"
						src={"https://i.imgur.com/2AKS7s7.png"}
						alt="polytecsousse"
						// width={200}
						// height={200}
					/>
				</a>
			</div>
		</div>
	);
}

function IEEEPartners() {
	return (
		<div className="mx-auto max-w-7xl px-6 lg:px-8">
			<h2 className="mb-12 text-center text-4xl font-bold">
				IEEE Partners 
			</h2>
			<div className="ggrid mx-auto mt-10 flex max-w-lg grid-cols-4 flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
				{false && (
					<a
						href="https://www.ieee.org/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<CustomImage
							className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[180px] md:w-[180px] lg:col-span-1"
							src={"https://i.imgur.com/mFTrYL2.png"}
							alt="IEEE"
							// width={200}
							// height={200}
						/>
					</a>
				)}
				{false && (
					<a
						href="https://yp.ieee.tn/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<CustomImage
							className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 dark:invert md:h-[180px] md:w-[180px] lg:col-span-1"
							src={"https://i.imgur.com/0JYgUki.png"}
							alt="YpTunisia"
							// width={200}
							// height={200}
						/>
					</a>
				)}
				<a
					href="https://htb.ieee.org/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[180px] md:w-[180px] lg:col-span-1"
						src={"https://htb.ieee.org/wp-content/uploads/2023/06/cropped-HTB-Facebook-profile.png"}
						alt="Transistor"
						// width={200}
						// height={200}
					/>
				</a>
				<a
					href="https://www.computer.org/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] rounded-full bg-white object-contain p-4 shadow-md shadow-gray-200 transition hover:scale-105 dark:shadow-gray-800 dark:invert md:h-[180px] md:w-[180px] lg:col-span-1"
						src={"https://ieeecs-media.computer.org/wp-media/2018/04/27230619/cropped-cs-favicon-512x512.png"}
						alt="Transistor"
						// width={200}
						// height={200}
					/>
				</a>
				<a
					href="https://ieeecsc.org/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition dark:shadow-gray-800 dark:invert md:h-[180px] md:w-[180px] lg:col-span-1"
						src={"https://pbs.twimg.com/profile_images/1271535756008468480/QPKvgdiz_400x400.png"}
						alt="Transistor"
						// width={200}
						// height={200}
					/>
				</a>
				{false && (
					<a
						href="https://ias.ieee.org/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<CustomImage
							className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition dark:shadow-gray-800 md:h-[180px] md:w-[180px] lg:col-span-1"
							src={"https://i.imgur.com/y2PtVJQ.png"}
							alt="Transistor"
							// width={200}
							// height={200}
						/>
					</a>
				)}
				<a
					href="https://mtt.org/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition dark:shadow-gray-800 md:h-[180px] md:w-[180px] lg:col-span-1"
						src={"https://i.imgur.com/zGQmYnj.jpg"}
						alt="Transistor"
						// width={200}
						// height={200}
					/>
				</a>
				<a
					href="https://ieeedeis.org/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition dark:shadow-gray-800 md:h-[180px] md:w-[180px] lg:col-span-1"
						src={"https://i0.wp.com/ieeedeis.org/wp-content/uploads/2019/10/DEIS-Logo.png?fit=600%2C300&ssl=1"}
						alt="Transistor"
						// width={200}
						// height={200}
					/>
				</a>
				<a
					href="https://ieee-aess.org/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition dark:shadow-gray-800 dark:invert md:h-[180px] md:w-[180px] lg:col-span-1"
						src={"https://i.imgur.com/cV1QOQg.png"}
						alt="Transistor"
						// width={200}
						// height={200}
					/>
				</a>
				<a
					href="https://ieeeaps.org/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition dark:shadow-gray-800 md:h-[180px] md:w-[180px] lg:col-span-1"
						src={"https://ieee-aess.org/files/ieeeaess/styles/responsive_4_3_760w/public/images/media/photos/aps-logo.png?h=95f69879&itok=-6kw-OPF"}
						alt="Transistor"
						// width={200}
						// height={200}
					/>
				</a>
				<a
					href="/partners-sponsors"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<p className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition dark:shadow-gray-800 md:h-[180px] md:w-[180px] lg:col-span-1 flex items-center justify-center" >
					<div className="font-bold  text-center">
					<FontAwesomeIcon icon={faExternalLink} className="mb-2 h-6 w-6" />
					<p className="font-bold">See more</p>
					</div>
					</p>
				</a>

				{false && (
					<a
						href="https://www.ieeesmc.org/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<CustomImage
							className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition dark:shadow-gray-800 md:h-[180px] md:w-[180px] lg:col-span-1"
							src={"https://i.imgur.com/ABdMAlo.png"}
							alt="Transistor"
							// width={200}
							// height={200}
						/>
					</a>
				)}
			</div>
		</div>
	);
}

export function SparrowSurvey() {
	useEffect(() => {
		window.sparrowLaunch({
			/*add custom params here*/
		});

		return () => {};
	}, []);

	return (
		<div
			id="ss_survey_widget"
			className="h-[800px]!important mx-auto"
			style={{
				position: "relative",
				width: "100% !important",
				height: "1000px !important",
			}}
		></div>
	);
}
