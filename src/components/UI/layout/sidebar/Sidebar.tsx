import { ReactComponent as Logo } from "../../../../media/icons/logo-main.svg";
import { ReactComponent as Profile } from "../../../../media/icons/profile.svg";
import { ReactComponent as Settings } from "../../../../media/icons/settings.svg";
import { MenuLink } from "./menu-link/MenuLink";

export const Sidebar = () => {
	return (
		<div className="space-y-7 max-w-[212px]">
			<div className="bg-white rounded-md py-2 px-3">
				<Logo />
			</div>
			<nav className="bg-white rounded-lg">
				<ul className="pt-4 pl-5 pr-8 pb-24 space-y-8">
					<li>
						<h4 className="text-text text-xs font-bold">Меню</h4>
						<ul className="mt-2 space-y-6">
							<li>
								<MenuLink href="/statistic">Статистика</MenuLink>
							</li>
							<li>
								<MenuLink href="/education">Мое обучение</MenuLink>
							</li>
							<li>
								<MenuLink href="/library">Библиотека</MenuLink>
							</li>
							<li>
								<MenuLink href="/my-courses">Мои курсы</MenuLink>
							</li>
						</ul>
					</li>
					<li>
						<h4 className="text-text text-xs font-bold">Аккаунт</h4>
						<ul className="mt-2 space-y-6">
							<li>
								<MenuLink href="/profile">
									<span className="flex">
										<Profile className="mr-2" />
										Профиль
									</span>
								</MenuLink>
							</li>
							<li>
								<MenuLink href="/settings">
									<span className="flex">
										<Settings className="mr-2" />
										Настройки
									</span>
								</MenuLink>
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
				<MenuLink href="/tariffs" active className="hover:bg-opacity-90">
					Посмотреть планы
				</MenuLink>
			</div>
		</div>
	);
};
