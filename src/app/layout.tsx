import { Nav, ReduxProvider } from "@/components";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Boldo | Home",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={manrope.className}>
				<ReduxProvider>
					<Nav />
					{children}
				</ReduxProvider>
			</body>
		</html>
	);
}
