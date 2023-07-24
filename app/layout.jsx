import "./globals.css";
import { Share_Tech_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import Footer from "./components/Footer";

const font = Share_Tech_Mono({ subsets: ["latin"], weight: "400" });

export const metadata = {
	title: "Point Break S.E.",
	description: "Simple Creative Solutions",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={font.className}>
            <section className={`${font.className} flex flex-col`}>
			<div className="flex-none">
				<Navbar />
				<MobileNavbar />
				<hr className=""></hr>
			</div>
			<main className={`min-h-screen grow`}>
				{children}
			</main>
			<div className="flex-none">
				<Footer />
			</div>
		</section>
			</body>
		</html>
	);
}
