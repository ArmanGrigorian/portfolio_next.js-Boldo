import { footerLinks } from "@/data/data";
import Link from "next/link";

const FooterNav = () => {
	return (
		<>
			{footerLinks.map((linkGroup) => (
				<dl
					key={linkGroup.id}
					className="font-OpenSans text-lg font-bold leading-8 dark:text-custom-white">
					<dt>{linkGroup.title}</dt>
					{linkGroup.links.map((link) => (
						<dd
							key={crypto.randomUUID()}
							className="relative text-base font-normal font-OpenSans leading-7 text-custom-light-grey">
							<Link
								href={link.href}
								className="block transition hover:text-custom-green peer active:scale-95 dark:text-custom-white">
								{link.title}
							</Link>
							<div className="hidden transition peer-hover:block absolute z-10 top-0 bottom-0 m-auto right-5 w-2 h-2 bg-custom-green rounded-full"></div>
						</dd>
					))}
				</dl>
			))}
		</>
	);
};

export default FooterNav;
