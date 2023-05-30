import "@/styles/globals.css";
import { Rajdhani } from "@next/font/google";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";

const font = Rajdhani({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-raj",
});

export default function App({ Component, pageProps }) {
	return (
		<>
			<main className={font.className}>
				<Navbar />
                <MobileNavbar />
				<hr></hr>
					<Component {...pageProps} />
			</main>
		</>
	);
}
