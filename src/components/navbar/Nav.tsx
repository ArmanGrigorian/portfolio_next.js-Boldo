import Image from "next/image";
import Link from "next/link";
import { DesktopNav, MobileNav } from "..";

const Nav = () => {
	return (
		<nav className="border-b border-custom-grey-blue max-w-7xl m-auto h-[72px] flex justify-between items-center bg-custom-dark-blue px-10 py-2 max-md:px-5 select-none ">
			<Link href="/" className="flex justify-start items-center gap-1">
				<Image
					src="/images/logoShape.svg"
					width={26}
					height={33}
					alt="Boldo logo svg"
					className="max-md:w-[18px] max-md:h-[25px]"
				/>
				<strong className="font-bold text-4xl text-custom-white hover:text-custom-green max-md:text-2xl">
					Boldo
				</strong>
			</Link>

			<DesktopNav />
			<MobileNav />
		</nav>
	);
};

export default Nav;
