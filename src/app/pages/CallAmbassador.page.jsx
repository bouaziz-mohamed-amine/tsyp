import React, { useRef, useState } from "react";
import { SparrowSurvey } from "./Home.page";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import CustomImage from "../components/CustomImage";

export default function AmbassadorPage() {
	return (
		<div className="h-full">
			<section className="py-8 lg:py-8">
				<div className="max-w-8xl mx-auto">
					<div className="xl:mx-64 2xl:mx-60">
						<h1 className="mb-4 text-4xl font-bold lg:mb-7 lg:text-center lg:text-5xl lg:font-extrabold lg:leading-none">
                        Call For Ambassadors
						</h1>
                        <div className="">
					<CustomImage
						src="https://media.discordapp.net/attachments/1199074591268667483/1278494608531128422/f551370b-9d40-4f3f-bd31-407ca0151ef6.jpg?ex=66d10263&is=66cfb0e3&hm=3661071bcb08fb25b04ed96737460f0904a54e3824aafb43ae2f00abb74ea776&=&format=webp&width=1440&height=360"
						className="object-cover mx-auto h-48  rounded-2xl sm:h-96"
						alt="tn2056"
					/>
				</div>
					</div>
				</div>
                <p className="m-10 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-center lg:text-xl">
							Fill the appropriate form below and we'll do our best to make it
							happen!
						</p>
				<div className="mb-6 flex flex-wrap justify-center gap-4">
					<Link
						to={
							"https://docs.google.com/forms/d/e/1FAIpQLSdWzT28HrTniMtPlQetXLeG9hBr6ccADzIYM4GunDost_5TxQ/viewform"
						}
						target="_blank"
						rel="noreferrer"
						className="inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black  dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
					>
						<span className="">Speaker Suggestions</span>
					</Link>
				</div>
			</section>

			{false && <SparrowSurvey />}
		</div>
	);
}

export function ContactDetails({ title = "Reach us" }) {
	return (
		<section className="py-8 lg:py-8">
			<div className="max-w-8xl mx-auto">
				<div className="xl:mx-64 2xl:mx-80">
					<h1 className="mb-4 text-4xl font-bold lg:mb-7 lg:text-center lg:text-5xl lg:font-extrabold lg:leading-none">
						{title}
					</h1>
					<p className="mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-center lg:text-xl">
						We value teamwork and honesty. Join us if you share the same values.
					</p>
				</div>
			</div>

			<div className="grid gap-y-6 md:grid-cols-12 md:gap-12">
				<div className="flex flex-col justify-center md:col-span-6">
					<h1 className="mb-4 text-3xl font-bold   md:text-center lg:text-4xl lg:font-extrabold lg:leading-none">
						Reach out via Email
					</h1>
					<h1 className="mb-6 text-3xl font-semibold md:mb-12   md:text-center lg:text-4xl lg:leading-none">
						tsyp@ieee.org
					</h1>
					<h1 className="mb-4 text-3xl font-bold   md:text-center lg:text-4xl lg:font-extrabold lg:leading-none">
						Or call us
					</h1>
					<h1 className="mb-4 text-3xl font-semibold   md:text-center lg:text-4xl lg:leading-none">
						+216 55 074 545

					</h1>
				</div>

				<div className="md:col-span-6">
					<iframe
						title="tsyp location"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.1855888648197!2d10.75497610884798!3d34.83903016772566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13002cd2cef7333d%3A0xaa3a1cf6d7fb55b0!2sEcole%20nationale%20d&#39;Electronique%20et%20des%20T%C3%A9l%C3%A9communications%20de%20Sfax%D8%8C%20Technopole%20Sfax%2C%20Route%20Tunis%20km%2011%2C%20cite%20Ons%2C%20Sfax!5e0!3m2!1sfr!2stn!4v1720109358670!5m2!1sfr!2stn" 
						className="aspect-video w-full rounded-2xl shadow-lg"
						// height="400"
						style={{
							border: 0,
							// width: "100%",
						}}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</section>
	);
}

export function ContactForm({ title = "Contact us" }) {
	const form = useRef();

	const [isSuccess, setIsSuccess] = useState(false);
	const [isSending, setIsSending] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		setIsSuccess(false);
		setIsSending(true);
		emailjs
			.sendForm(
				"service_0eywd1w",
				"template_f3onrlp",
				form.current,
				"X1AqlHz3TEdbh55zo"
			)
			.then(
				(result) => {
					console.log(result.text);
					setIsSuccess(true);
					form.current.reset();
				},
				(error) => {
					console.log(error.text);
				}
			)
			.finally(() => {
				setIsSending(false);
			});
	};

	return (
		<section className="py-8 lg:py-16">
			<div className="max-w-8xl mx-auto px-4 lg:px-4">
				<div className="xl:mx-64 2xl:mx-80">
					<h1 className="mb-4 text-4xl font-bold   lg:mb-7 lg:text-center lg:text-5xl lg:font-extrabold lg:leading-none">
						{title}
					</h1>
					<p className="mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-center lg:text-xl">
						Let us know what you need and we will get back to you in no time.
					</p>
				</div>
			</div>
			<div className="max-w-8xl mx-auto px-4 lg:px-4">
				<div className="mx-auto max-w-3xl rounded-2xl border-2 border-gray-50 p-4 shadow-md dark:border-gray-800 lg:p-8">
					<form ref={form} onSubmit={sendEmail}>
						<div className="grid md:grid-cols-2 md:gap-8">
							<div className="mb-6">
								<label
									htmlFor="first_name"
									className="mb-2 block text-sm font-medium  dark:text-gray-300"
								>
									First name
								</label>
								<input
									required
									type="text"
									id="first_name"
									name="first_name"
									placeholder="John"
									className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
									defaultValue=""
								/>
							</div>
							<div className="mb-6">
								<label
									htmlFor="last_name"
									className="mb-2 block text-sm font-medium  dark:text-gray-300"
								>
									Last name
								</label>
								<input
									required
									type="text"
									id="last_name"
									name="last_name"
									placeholder="Doe"
									className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
									defaultValue=""
								/>
							</div>
						</div>
						<div className="mb-6">
							<label
								htmlFor="email"
								className="mb-2 block text-sm font-medium  dark:text-gray-300"
							>
								Email address
							</label>
							<input
								required
								type="email"
								id="email"
								name="email"
								placeholder="john.doe@company.com"
								className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
								defaultValue=""
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="subject"
								className="mb-2 block text-sm font-medium  dark:text-gray-300"
							>
								Subject
							</label>
							<input
								required
								type="text"
								id="subject"
								name="subject"
								className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
								placeholder="Subject name"
								defaultValue=""
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="message"
								className="mb-2 block text-sm font-medium  dark:text-gray-400"
							>
								Message
							</label>
							<textarea
								required
								id="message"
								name="message"
								rows={4}
								className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
								placeholder="Your message..."
								defaultValue={""}
							/>
						</div>

						{/* <p className="mb-6 text-sm text-gray-500">
						By submitting this form you agree to our{" "}
						<a
							className="text-blue-600 hover:underline dark:text-blue-500"
							href="/terms-and-conditions/"
						>
							Terms &amp; conditions
						</a>{" "}
						and our{" "}
						<a
							className="text-blue-600 hover:underline dark:text-blue-500"
							href="/privacy-policy/"
						>
							Privacy Policy
						</a>{" "}
						which explains how we may collect, use and disclose your
						personal information including to third parties.
					</p> */}
						<div
							className="g-recaptcha"
							data-sitekey="6LdkuJonAAAAADPOvXrCE1hnLvmqqGP7WMt2oK8s"
						></div>

						<button
							className={`w-full rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white sm:w-auto ${
								isSending ? "opacity-50" : ""
							}`}
							type="submit"
							disabled={isSending}
						>
							<span className="flex items-center justify-center">
								Send message
							</span>
						</button>
						{isSuccess && (
							<div
								className="mt-4 rounded-lg bg-green-50 p-4 text-sm text-green-800 dark:bg-gray-800 dark:text-green-400"
								role="alert"
							>
								<span className="font-medium">Message sent!</span> Thank you, we
								highly value your feedback.
							</div>
						)}
					</form>
				</div>
			</div>
			{/* <iframe
				src="https://docs.google.com/forms/d/e/1FAIpQLSfZLf1IajhxhCG89BGdzBye6t6HGNvYqJmGQ4I2bgyGcfvloQ/viewform?embedded=true"
				width="640"
				height="1561"
			loading="lazy"
				frameBorder="0"
				marginHeight="0"
				marginWidth="0"
			>
				Loading…
			</iframe> */}
		</section>
	);
}
