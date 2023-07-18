import "@/styles/globals.css";
import { Rajdhani } from "@next/font/google";
import { Share_Tech_Mono } from "@next/font/google";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import Footer from "./components/Footer";

// const font = Rajdhani({
// 	subsets: ["latin"],
// 	weight: "400",
// 	variable: "--font-raj",
// });

const font = Share_Tech_Mono({
	subsets: ["latin"],
	weight: "400",
});

export default function App({ Component, pageProps }) {
	return (
		<section className={`${font.className} flex flex-col`}>
			<div className="flex-none">
				<Navbar />
				<MobileNavbar />
				<hr className=""></hr>
			</div>
			<main className={`min-h-screen grow`}>
				<Component {...pageProps} />
			</main>
			<div className="flex-none">
				<Footer />
			</div>
		</section>
	);
}
