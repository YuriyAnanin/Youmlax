import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";
import { Sidebar } from "../sidebar/Sidebar";

export const BaseLayout = () => {
	return (
		<main className="flex pt-5 px-6">
			<Sidebar />
			<section className="w-full ml-8">
				<Header />
				<Outlet />
			</section>
		</main>
	);
};
