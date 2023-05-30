import "@/styles/globals.css";
import { Rajdhani } from "@next/font/google";
import { Share_Tech_Mono } from "@next/font/google";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";

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
		<>
			<main className={font.className}>
				<Navbar />
                <MobileNavbar />
                <hr className="bg-orange-500"></hr>
					<Component {...pageProps} />
			</main>
		</>
	);
}
