import { Switch } from "@nextui-org/react";
import { useThemeStore } from "../../store/useThemeStore";
import { MoonFill, SunFill } from "react-bootstrap-icons";
const ButtonTheme: React.FC = () => {
  const toggleTheme = useThemeStore((s) => s.toggleTheme);

  const onClick = () => {
    toggleTheme();
    document.getElementsByTagName("html")[0].classList.toggle("dark");
  };

  return (
    <Switch
      onClick={onClick}
      defaultSelected
      color="success"
      size="sm"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunFill className={className} />
        ) : (
          <MoonFill className={className} />
        )
      }
    ></Switch>
  );
};

export default ButtonTheme;
