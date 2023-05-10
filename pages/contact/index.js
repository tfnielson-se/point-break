import { VscGithub } from "react-icons/vsc";
import { TfiEmail } from "react-icons/tfi";
import {FaLinkedin} from "react-icons/fa"

const Contact = () => {
	return (
        <>
		<div className="flex justify-around mx-10 my-10">
			<div>
				<VscGithub className="hover:text-stone-800 text-6xl my-2" />
                <span className="text-2xl">developer: </span>
                <a
					href="https://github.com/tfnielson-se"
					className="text-2xl nav-btn m-auto"
				>
					{" "}
					tfnielson-se
				</a>
			</div>
            <div>
				<FaLinkedin className="hover:text-stone-800 text-6xl my-2" />
				<a
					href="https://www.linkedin.com/in/thomasfnielson/"
					className="text-2xl nav-btn m-auto"
				>
					{" "}
					coming soon...
				</a>
			</div>
			<div>
				<TfiEmail className="hover:text-stone-800 text-6xl my-2" />
                <span className="text-2xl">e-mail: </span>
				<a
					href="mailto: pointbreak.se@gmail.com"
					className="text-2xl nav-btn m-auto"
				>
					{" "}
					pointbreak.se@gmail.com
				</a>
			</div>
		</div>
            <div className=" flex justify around">
            {""}
            <section className="ml-2 w-5 h-2 fourth-color m-auto rounded"></section>
            <section className="ml-2 w-10 h-2 fourth-color m-auto rounded"></section>
            <section className="ml-2 w-20 h-2 fourth-color m-auto rounded"></section>
            <section className="ml-2 w-40 h-2 fourth-color m-auto rounded"></section>

            <section className="w-full h-2 third-color m-auto mx-5 rounded "></section>
            <section className="w-1/4 h-2 second-color m-auto rounded"></section>

            <section className="w-full h-2 third-color m-auto mx-5 rounded"></section>
            <section className="mr-2 w-40 h-2 fourth-color m-auto rounded"></section>
            <section className="mr-2 w-20 h-2 fourth-color m-auto rounded"></section>
            <section className="mr-2 w-10 h-2 fourth-color m-auto rounded"></section>
            <section className="mr-2 w-5 h-2 fourth-color m-auto rounded"></section>
       
            </div>
            </>
	);
};

export default Contact;
