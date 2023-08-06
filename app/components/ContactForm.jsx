import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_8qwak7b",
				"template_1zdsxg7",
				form.current,
				"weiBZxN-Fisp2yPue"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};

	return (
		<div className="flex flex-col w-min lg:w-max rounded-t-3xl border-4 border-stone-900 p-5 shadow-2xl">
			<div className="text-3xl m-3">
				<h3 className="m-auto">Contact Us</h3>
			</div>
			<form
				ref={form}
				onSubmit={sendEmail}
				className="flex flex-wrap justify-between px-3 "
			>
				<div>
					<div className="flex flex-col m-auto">
						<label>Name:</label>
						<input
							type="text"
							name="from_name"
							className="flex first-color rounded-3xl rounded-bl-none  p-2 border-2 border-blue-400 lg:w-96 mx-3 shadow-md"
						/>
					</div>
					<div className="flex flex-col m-auto">
						<label>Email:</label>
						<input
							type="email"
							name="from_email"
							className="flex first-color rounded-3xl rounded-bl-none p-2 border-2 border-blue-400 lg:w-96 mx-3 shadow-md"
						/>
					</div>
					<div className="hidden lg:flex flex-row justify-around m-auto">
						<button
							type="submit"
							value="Send"
							className="w-full m-5 p-2 font-first-color fourth-color rounded-3xl border-4 border-stone-900 tracking-widest nav-btn-contact shadow-md"
						>
							SEND
						</button>
					</div>
				</div>
				<div>
					<div className="flex flex-col m-auto">
						<label>Message:</label>
						<textarea
							name="message"
							className="flex first-color rounded-3xl rounded-bl-none p-3 border-2 border-blue-400 h-48 mx-3 shadow-md"
						/>
					</div>
                    <div className="lg:hidden flex">
							<button
								type="submit"
								value="Send"
								className="w-full m-5 p-2 font-first-color fourth-color rounded-3xl border-4 border-stone-900 tracking-widest nav-btn-contact shadow-md"
							>
								SEND
							</button>
						</div>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
