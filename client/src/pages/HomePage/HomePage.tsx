import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Filler,
} from "chart.js";
import { useThemeStore } from "../../store/useThemeStore";
import { color } from "chart.js/helpers";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const HomePage: React.FC = () => {
  const theme = useThemeStore((s) => s.theme);

  return (
    <div className="">
      <div className="flex flex-row gap-2 flex-wrap">
        <div className="shinrk">
          <Doughnut
            data={{
              labels: ["Red", "Blue", "Yellow"],
              datasets: [
                {
                  label: "# of Votes",
                  data: [12, 19, 3],
                  backgroundColor: ["#845EC2", "#D65DB1", "#FFC75F"],
                  borderColor: ["#845EC2", "#D65DB1", "#FFC75F"],
                  borderWidth: 1,
                },
              ],
            }}
            // height={10}
            // width={10}
            options={{
              plugins: {
                legend: {
                  display: true,
                  position: "right",
                },
              },
              color: theme === "light" ? "black" : "white",
            }}
          />
        </div>
        <div className="grow">
          <Line
            options={{
              color: theme === "light" ? "black" : "white",
              responsive: true,
              plugins: {
                legend: {
                  position: "top" as const,
                },
                title: {
                  display: true,
                  text: "Chart.js Line Chart",
                },
              },
            }}
            data={{
              labels,
              datasets: [
                {
                  fill: true,
                  label: "Dataset 2",
                  data: [25, 20, 30, 22, 17, 29, 24],
                  borderColor: "rgb(53, 162, 235)",
                  backgroundColor: "rgba(53, 162, 235, 0.5)",
                  pointStyle: "point",
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
