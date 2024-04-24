// import { Outlet } from "react-bootstrap-icons";
import { Avatar, Tooltip } from "@nextui-org/react";
import {
  Calendar3,
  CashStack,
  GearFill,
  HouseFill,
  Icon,
  List,
  PeopleFill,
  PersonFill,
  XLg,
} from "react-bootstrap-icons";
import { Link, Outlet } from "react-router-dom";
import { twMerge as merge } from "tailwind-merge";
import { ButtonTheme } from "./components/ButtonTheme";
import { useNavBarStore } from "./store/useNavBarStore";
import { motion } from "framer-motion";
type MenuItem = {
  label: string;
  icon: Icon;
  to: string;
};

const menuItems: MenuItem[] = [
  { label: "Home", icon: HouseFill, to: "/" },
  { label: "Accounts", icon: PersonFill, to: "/accounts" },
  { label: "Prices", icon: CashStack, to: "/prices" },
  { label: "Leads", icon: PeopleFill, to: "/leads" },
  { label: "Activities", icon: Calendar3, to: "/activities" },
  { label: "Configuration", icon: GearFill, to: "/configuration" },
];

const NavBar = () => {
  const { toggle, isOpen } = useNavBarStore();
  return (
    <nav
      className={merge(
        "overflow-hidden flex gap-5 flex-col p-2 min-h-screen w-[250px] shadow-2xl dark:border-r-slate-400 dark:border-r navbar",
        `${isOpen ? "w-[250px]" : "w-[60px] items-center"}`,
      )}
    >
      <div
        className={merge(
          "flex items-center",
          isOpen ? "justify-between" : "justify-center",
        )}
      >
        {isOpen && <ButtonTheme />}

        <div className="flex gap-2 items-center">
          {isOpen && (
            <Avatar
              isBordered
              src="https://media-lim1-1.cdn.whatsapp.net/v/t61.24694-24/427515842_437656085304760_103696101187691664_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaICtepFiulaEJDc21wyqbe144iphXZfXioDP0xwfiEjXl&oe=66310BE1&_nc_sid=e6ed6c&_nc_cat=107"
              size="sm"
            />
          )}
          <Tooltip
            placement="right"
            content={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <XLg onClick={toggle} size={24} role="button" />
            ) : (
              <List onClick={toggle} size={24} role="button" />
            )}
          </Tooltip>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <Tooltip
            key={crypto.randomUUID()}
            placement="right"
            content={item.label}
            isDisabled={isOpen}
            className="dark:bg-slate-600 bg-slate-100"
          >
            <Link to={item.to}>
              <div
                className={merge(
                  "flex gap-2  dark:hover:bg-slate-600 hover:bg-slate-100 p-2 rounded-lg",
                  isOpen ? "justify-start" : "justify-center",
                )}
                role="button"
              >
                <item.icon size={24} />
                {isOpen && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 50,
                    }}
                  >
                    {item.label}
                  </motion.div>
                )}
              </div>
            </Link>
          </Tooltip>
        ))}
      </div>
      {!isOpen && (
        <Avatar
          isBordered
          src="https://media-lim1-1.cdn.whatsapp.net/v/t61.24694-24/427515842_437656085304760_103696101187691664_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaICtepFiulaEJDc21wyqbe144iphXZfXioDP0xwfiEjXl&oe=66310BE1&_nc_sid=e6ed6c&_nc_cat=107"
          size="sm"
        />
      )}
    </nav>
  );
};

export const MainLayout: React.FC = () => {
  return (
    <div className="flex">
      <NavBar />
      <div className="grow p-1">
        <Outlet />
      </div>
    </div>
  );
};
