import CustomImage from "../components/CustomImage";
import TNimage from "../../assets/images/tn2056.png"
import pdfTN2056 from "../../pdf/TN_2056_Program_RD-copy1.pdf";
import { Link } from 'react-router-dom';
import ContactDetails from './Contact.page'

export function TNChallengePage() {

	return (
		<div className="h-full  items-center justify-center" >
			<div className="col-span-12 md:mx-auto py-8">
				<h1 className="mb-4 text-center text-4xl font-bold tracking-tight lg:mb-7 lg:text-center lg:text-6xl lg:font-extrabold lg:leading-none">
					Tunisia 2056 Challenge
				</h1>
			</div>
			<div className="col-span-6 mx-2 my-2 ">


				<CustomImage
				    className="rounded-2xl my-10 object-cover w-full"
					src={TNimage}
					alt={"TN2056image"}
				/>
			</div>

			<div className="mb-8">
				
				<div className="mb-6 text-gray-600 dark:text-gray-400 ">
					<strong>The Tunisia 2056 Challenge (TN2056 Challenge) </strong>
					embodies the transformative vision for TSYP in its 12th edition,
					emphasizing collaboration among Tunisia Student Branches to tackle
					critical challenges facing Tunisia and envision its future by 2056
					through the launch of innovative start-ups.
				</div>
				<div>
				
					<Link
						// type="button"
						to={pdfTN2056}
						target="_blank"
						rel="noreferrer"
						className="relative inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black  dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
					>
						{/* <div className="flex flex-wrap items-center justify-start gap-2"> */}
						<span className="">Learn more about TN 2056 Challenge</span>
						{/* </div> */}
					</Link>
				
					
				</div>
			</div>
		</div>
	);
}
