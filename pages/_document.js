import { Html, Head, Main, NextScript } from "next/document";

export const metadata = {
	title: "Point Break",
	description: "",
};

export default function Document() {
	return (
		<Html lang="en" className="font-raj">
			<Head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
			</Head>

			<body className="font-raj">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
