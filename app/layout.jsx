import "./globals.css";
import { Share_Tech_Mono } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import Footer from "./components/Footer";

const font = JetBrains_Mono({ subsets: ["latin"], weight: "400" });

export const metadata = {
	title: "Point Break - Software Engineering",
	description: "Simple Creative Solutions",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="min-h-screen">
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
			</head>
			<body className={`${font.className} flex flex-col m-auto`}>
				<div className="flex-none">
					<Navbar />
					<MobileNavbar />
					<hr className=""></hr>
				</div>
				<div className={`grow`}>
					<main>{children}</main>
				</div>
				<div className="grow">
					<Footer />
				</div>
			</body>
		</html>
	);
}
