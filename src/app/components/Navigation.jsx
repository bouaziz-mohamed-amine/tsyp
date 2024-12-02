import { Fragment, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import routes from "../routes";
import NavModal from "./NavModal";
import Logo from "../../assets/images/main logo black (Custom).png";
import LightLogo from "../../assets/images/Logo/dark_lightBG_blue_minimal.png";
import DarkLogo from "../../assets/images/Logo/darkBG-minimal.png";
import ThemeToggle from "./ThemeToggle";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import CustomImage from "./CustomImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlay, faTicket } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
	const [toggleModal, setToggleModal] = useState(false);

	const [appConfig, setAppConfig] = useState([]);

	const isEventLive = appConfig.eventStatus === "live";

	useEffect(() => {
		const getData = async () => {
			fetch("/assets/app-config.json")
				.then((response) => response.json())
				.then((response) => {
					setAppConfig(response);
				})
				.catch((err) => console.error(err));
		};
		getData();
	}, []);
	

	return (
		
		<div>
			<nav className="rounded border-gray-200 px-2 py-2 md:px-8 md:py-2.5 ">
				<div className="container mx-auto flex  items-center justify-between">
					<Link to="/" className="flex items-center">
						{/* <CustomImage
							loading="eager"
							src={LogoOnBlack || Logo}
							className={`mr-3 hidden h-10 dark:block ${LogoOnBlack ? "" : "dark:invert"
								} sm:h-12`}
							alt="TSYP 11"
						/> */}
						<CustomImage
							loading="eager"
							src={LightLogo}
							className={`h-12 md:h-16 dark:hidden `}
							alt="TSYP 12"
						/>
						<CustomImage
							loading="eager"
							src={DarkLogo}
							className={`h-12 md:h-16 hidden dark:block`}
							alt="TSYP 12"
						/>
						{/* <svg
							className="mr-3 h-6 fill-gray-900 dark:fill-gray-100 sm:h-9"
							aria-label="Vercel Logo"
							// fill="white"
							viewBox="0 0 75 65"
							height={26}
							data-testid="dashboard/logo"
						>
							<path d="M37.59.25l36.95 64H.64l36.95-64z" />
						</svg> */}

						{/* <span className="self-center whitespace-nowrap text-xl font-semibold">
							TSYP 11
						</span> */}
					</Link>
					<div className="fontt-['space_mono'] flex items-center gap-2">
						<div className="hidden w-auto items-center justify-between lg:flex">
							<ul className="flex flex-col rounded-lg border border-gray-100 p-4 dark:border-gray-700 md:mt-0 md:flex-row md:border-0 md:text-sm md:font-medium">
								{routes
									// .filter((r) => !r.mobile)
									.filter((r) => !r.mobileOnly)
									.map((route) => (
										<li className="" key={route.title}>
											{route?.type ? (
												<Menu
													as="div"
													className="relative inline-block text-left"
												>
													<div>
														<Menu.Button
															className={twMerge(
																// "inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",
																"inline-flex items-center p-4 px-4 text-gray-600 transition-all duration-75 hover:font-bold focus:font-bold dark:text-gray-400 dark:hover:text-gray-200"
															)}
														>
															{route?.title}
															<ChevronDownIcon
																className="ml-2 -mr-1 h-4 w-4 "
																aria-hidden="true"
															/>
														</Menu.Button>
													</div>
													<Transition
														as={Fragment}
														enter="transition ease-out duration-100"
														enterFrom="transform opacity-0 scale-95"
														enterTo="transform opacity-100 scale-100"
														leave="transition ease-in duration-75"
														leaveFrom="transform opacity-100 scale-100"
														leaveTo="transform opacity-0 scale-95"
													>
														<Menu.Items className="absolute left-0 z-10 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hover:text-[#115D85] focus:text-[#115D85] dark:bg-gray-900">
															<div className="px-1 py-1 ">
																{route?.items?.map((e) => (
																	<Menu.Item>
																		{({ active }) => (
																			<NavLink
																				className={({ isActive, isPending }) =>
																					twMerge(
																						"text-gray-600 transition-all duration-75 hover:font-bold focus:font-bold  hover:text-[#115D85] focus:text-[#115D85] dark:text-gray-400 dark:hover:text-gray-200",
																						"group flex w-full items-center rounded-md px-2 py-2 text-sm",
																						isActive
																							? "font-bold text-black dark:text-gray-200 "
																							: isPending
																								? ""
																								: ""
																					)
																				}
																				to={e.href}
																			>
																				{/* <button
																					className={`${
																						active ? "" : "text-gray-900"
																					} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
																				> */}
																				{e?.title}
																				{/* </button> */}
																			</NavLink>
																		)}
																	</Menu.Item>
																))}
															</div>
														</Menu.Items>
													</Transition>
												</Menu>
											) : (
												<NavLink
													target={route.external && "_blank"}
													className={({ isActive, isPending }) =>
														twMerge(
															"block p-4 px-4 text-gray-600 transition-all duration-75 hover:font-bold focus:font-bold dark:text-gray-400 dark:hover:text-gray-200",
															isActive
																? "font-bold text-black dark:text-gray-200"
																: isPending
																	? ""
																	: ""
														)
													}
													to={route.href}
												>
													{route.title}
												</NavLink>
											)}
										</li>
									))}

								{/* <li>
									<a
										href="#"
										className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white  md:bg-transparent md:p-0 md:text-blue-700"
										aria-current="page"
									>
										Keynote
									</a>
								</li>
								<li>
									<a
										href="#"
										className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
									>
										Stage J
									</a>
								</li> */}
							</ul>
						</div>

						{false && (
							<Link className="hidden md:block" to="/reveal" target="_blank">
								<FontAwesomeIcon
									icon={faPlay}
									className="block h-5 w-5 -rotate-90 p-2 transition hover:scale-110"
								/>
							</Link>
						)}
						<div className="hidden lg:block">
							<ThemeToggle />
						</div>
						 {/* <Link
							to="https://github.com/hichemfantar/TSYP-11-Official-Website"
							target="_blank"
						>
							<FontAwesomeIcon icon={faGithub} className="block h-5 w-5 p-2" />
						</Link> */}

						{false && (
							<Link
								to="/sponsor-us"
								className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 text-sm font-medium  transition-shadow hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500  dark:focus:ring-purple-800"
							>
								{/* <button
								type="button"
								className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 text-sm font-medium  transition-shadow hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500  dark:focus:ring-purple-800"
							> */}
								<span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
									Sponsor us
								</span>
								{/* </button> */}
							</Link>
						)}
						{false&&!isEventLive && (
							<>
								<Link
									to="/live-event-space"
									className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 text-sm font-medium  transition-shadow hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500  dark:focus:ring-purple-800"
								>
									{/* <button
								type="button"
								className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 text-sm font-medium  transition-shadow hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500  dark:focus:ring-purple-800"
							> */}
									<div className="relative flex items-center justify-center gap-2 rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
										{/* <FontAwesomeIcon className="-rotate-45" icon={faTicket} /> */}
										<span className="">We're live!</span>
									</div>
									{/* </button> */}
								</Link>

								{false && (
									<Link
										to="/registration"
										className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 text-sm font-medium  transition-shadow hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500  dark:focus:ring-purple-800"
									>
										{/* <button
								type="button"
								className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 text-sm font-medium  transition-shadow hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500  dark:focus:ring-purple-800"
							> */}
										<div className="relative flex items-center justify-center gap-2 rounded-md bg-white px-5 py-2.5  transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
											{/* <FontAwesomeIcon className="-rotate-45" icon={faTicket} /> */}
											<span className="hidden md:block">Register Now</span>
											<span className="md:hidden">Register Now</span>
										</div>
										{/* </button> */}
									</Link>
								)}
							</>
						)}
						{false&&isEventLive && (
							<Link
								to="/live-event-space"
								className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 text-sm font-medium  transition-shadow hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500  dark:focus:ring-purple-800"
							>
								{/* <button
								type="button"
								className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 text-sm font-medium  transition-shadow hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500  dark:focus:ring-purple-800"
							> */}
								<div className="relative flex items-center justify-center gap-2 rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
									{/* <FontAwesomeIcon className="-rotate-45" icon={faTicket} /> */}
									<span className="hidden md:block">We're Live!</span>
									<span className="md:hidden">We're Live!</span>
								</div>
								{/* </button> */}
							</Link>
						)}
						{false && (
							<Link
								to="/call-ambassador"
								className=" mx-4 fgroup relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-sky-900 to-sky-500 dark:from-[#BA0D15] dark:to-red-700  p-0.5 text-sm font-medium  transition-shadow text-white focus:outline-none focus:ring-4 focus:ring-sky-200 dark:focus:ring-red-400 group-hover:from-purple-500 group-hover:to-pink-500  dark:focus:ring-purple-800"
							>
								{/* <button
								type="button"
								className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 text-sm font-medium  transition-shadow hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500  dark:focus:ring-purple-800"
							> */}
								<div className=" relative flex items-center justify-center gap-2 rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in bg-opacity-0  hover:font-bold focus:font-bold">
									{/* <FontAwesomeIcon className="-rotate-45" icon={faTicket} /> */}
									<span className=" hidden md:block">Call For Ambassadors</span>
									<span className="md:hidden">Call For Ambassadors</span>
								</div>
								{/* </button> */}
							</Link>
						)}
						{true && (
							<Link
								to="/registration"
								className=" fgroup relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-sky-900 to-sky-500 dark:from-[#BA0D15] dark:to-red-700  p-0.5 text-sm font-medium  transition-shadow text-white focus:outline-none focus:ring-4 focus:ring-sky-200 dark:focus:ring-red-400 group-hover:from-purple-500 group-hover:to-pink-500  dark:focus:ring-purple-800"
							>
								{/* <button
								type="button"
								className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 text-sm font-medium  transition-shadow hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500  dark:focus:ring-purple-800"
							> */}
								<div className=" relative flex items-center justify-center rounded-md bg-white  transition-all duration-75 ease-in bg-opacity-0  hover:font-bold focus:font-bold">
									{/* <FontAwesomeIcon className="-rotate-45" icon={faTicket} /> */}
									<span className=" hidden md:block px-5 py-2.5 text-center"> Registration</span>
									<span className="md:hidden px-2.5 text-center py-1"> Registration</span>
								</div>
								{/* </button> */}
							</Link>
						)}
						{/* <button
							type="button"
							className="mr-3 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
						>
							Get started
						</button> */}

						{/* <ThemeToggle /> */}

						<button
							data-collapse-toggle="navbar-cta"
							type="button"
							className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
							aria-controls="navbar-cta"
							aria-expanded="false"
							onClick={() => setToggleModal(!toggleModal)}
						>
							<span className="sr-only">Open main menu</span>
							<svg
								className="h-6 w-6"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
					</div>
				</div>

				<NavModal toggleModal={toggleModal} setToggleModal={setToggleModal} />
			</nav>
		</div>
	);
}
