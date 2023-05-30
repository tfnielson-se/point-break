'use clients'
import Link from "next/link"
import { useState } from "react"

const MobileNavbar = () => {
    const [hideMenu, setHideMenu] = useState(true)
    return (
        <nav className="flex flex-col flex-around lg:hidden my-2 font-second-color">
			<div className="flex flex-row justify-between p-1">
				<Link href="/">
					<strong className="text-4xl tracking-wide mx-10 py-1 px-2 second-color font-fourth-color">
						{" "}
						p.b{" "}
					</strong>
				</Link>
                <div className="font-second-color third-color mx-10 rounded-lg">
            <button className="text-4xl p-1"> {"<>"} </button>
            </div>

			</div>

			{hideMenu ? null : <div className="w-full flex flex-col justify-around m-auto text-xl">
				<Link href="/" className="nav-btn">
					Home
				</Link>

				<Link href="/about" className="nav-btn">
					About
				</Link>
				<Link href="/projects" className="nav-btn">
					Projects
				</Link>
				<Link href="/services" className="nav-btn">
					Services
				</Link>
				<Link href="/contact" className="mr-3 nav-btn">
					Contact
				</Link>
			</div>}
		</nav>
    )
}

export default MobileNavbar