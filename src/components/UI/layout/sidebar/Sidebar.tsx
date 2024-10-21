import { ReactComponent as Logo } from "../../../../media/icons/logo-main.svg";
import { MenuLink } from "./menu-link/MenuLink";

export const Sidebar = () => {
	return (
		<div className="space-y-7 max-w-[250px]">
			<div className="bg-white rounded-md py-2 px-3 mt-5 shadow-sm">
				<Logo />
			</div>
			<nav className="bg-white rounded-lg">
				<ul className="pt-4 pl-5 pr-8 pb-24 space-y-8">
					<li>
						<h4 className="text-text text-xs font-bold">Меню</h4>
						<ul className="mt-2 space-y-6">
							<li>
								<MenuLink href="/employees">Сотрудники</MenuLink>
							</li>
							<li>
								<MenuLink href="/chat">Ожидает проверки</MenuLink>
							</li>
							<li>
								<MenuLink href="/courses">Курсы</MenuLink>
							</li>
						</ul>
					</li>
					<li>
						<h4 className="text-text text-xs font-bold">Аккаунт</h4>
						<ul className="mt-2 space-y-6">
							<li>
								<MenuLink href="/profile">Профиль</MenuLink>
							</li>
							<li>
								<MenuLink href="/settings">Настройки</MenuLink>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
			<div className="pt-6 pl-3 pr-3 pb-11 space-y-3 bg-white">
				<h3 className="font-bold text-base">Обновите свой план</h3>
				<p className="text-xs text-text">
					Обновите свой план сегодня, чтобы открыть мир расширенных функций
				</p>
				<MenuLink href="/tariffs" active disabled>
					Посмотреть планы
				</MenuLink>
			</div>
		</div>
	);
};
