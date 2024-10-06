import React, { useEffect, useState } from "react";

export default function Programs() {
	const [show, setShow] = useState(false); 
	const [firstProgramData, setFirstProgramData] = useState([]); 
	const [secondProgramData, setSecondProgramData] = useState([]); 

	
	const ShowMore = () => {
		setShow(!show);
	};

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await fetch("/assets/programs.json");
				const data = await response.json();
				setFirstProgramData(data.slice(0, 1)); 
				setSecondProgramData(data.slice(1)); 
			} catch (error) {
				console.error("Erreur lors de la récupération des données:", error);
			}
		};
		getData();
	}, []);

	return (
		<div>
			<ol className="border-s border-gray relative  dark:border-gray-700">
				{firstProgramData.map((item, index) => (
					<li key={index} className="relative">
						<div className="flex">
							<div className="mx-8">
								<span className="me-2 ms-3 ml-4 flex flex-nowrap rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
									{item.time1}
								</span>
							</div>

							<div>
								{item.activities.map((act, actIndex) => (
									<div key={actIndex}>
										<div className="relative">
											<span className="absolute top-0 left-[-10px] flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
												<svg
													className="h-2.5 w-2.5 text-blue-800 dark:text-blue-300"
													xmlns="http://www.w3.org/2000/svg"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
												</svg>
											</span>
										</div>
										<div className="border-2 border-r-0 border-t-0 border-b-0 border-blue-800 p-8">
											<h3 className="font-cursive text-lg font-semibold text-violet-500">
												{act.title}
											</h3>
											<h2 className="mb-1 flex items-center text-lg text-gray-900 dark:text-white">
												{act.title}
												<span className="me-2 ms-3 ml-4 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
													Latest
												</span>
											</h2>
											<time className="mb-2 block text-sm font-bold leading-none text-blue-800 dark:text-gray-500">
												{act.time}
											</time>
											<p className="text-base font-normal text-gray-500 dark:text-gray-400">
												{act.location}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</li>
				))}

				
				{show &&
					secondProgramData.map((item1, index1) => (
						<li key={index1} className="relative">
							<div className="flex">
								<div className="mx-8">
									<span className="me-2 ms-3 ml-4 flex flex-nowrap rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
										{item1.time1}
									</span>
								</div>

								<div>
									{item1.activities.map((act1, actIndex1) => (
										<div key={actIndex1}>
											<div className="relative">
												<span className="absolute top-0 left-[-10px] flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
													<svg
														className="h-2.5 w-2.5 text-blue-800 dark:text-blue-300"
														xmlns="http://www.w3.org/2000/svg"
														fill="currentColor"
														viewBox="0 0 20 20"
													>
														<path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
													</svg>
												</span>
											</div>
											<div className="border-2 border-r-0 border-t-0 border-b-0 border-blue-800 p-8">
												<h3 className="font-cursive text-lg font-semibold text-violet-500">
													{act1.title}
												</h3>
												<h2 className="mb-1 flex items-center text-lg text-gray-900 dark:text-white">
													{act1.title}
													<span className="me-2 ms-3 ml-4 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
														Latest
													</span>
												</h2>
												<time className="mb-2 block text-sm font-bold leading-none text-blue-800 dark:text-gray-500">
													{act1.time}
												</time>
												<p className="text-base font-normal text-gray-500 dark:text-gray-400">
													{act1.location}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</li>
					))}
			</ol>

			<button
				type="button"
				onClick={ShowMore}
				className="me-2 mb-8 relative left-36 mt-2 mb-2 items-center rounded-lg border border-gray-200 bg-white py-2.5 px-5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
			>
				{show ? "Show Less" : "Show More"}
			</button>
		</div>
	);
}
