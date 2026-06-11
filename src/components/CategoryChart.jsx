import {
  Pie
}
from "react-chartjs-2";

import {
  Chart,
  ArcElement,
  Tooltip,
  Legend
}
from "chart.js";

Chart.register(
  ArcElement,
  Tooltip,
  Legend
);

function CategoryChart({
  categories
}) {

  const data = {

    labels:
      Object.keys(categories),

    datasets: [
      {
        data:
          Object.values(categories),

        backgroundColor: [
          "#3B82F6",
          "#10B981",
          "#F59E0B",
          "#EF4444",
          "#8B5CF6",
          "#06B6D4",
          "#EC4899",
          "#84CC16"
        ]
      }
    ]
  };

  return (

    <div
      className="
      max-w-md
      mx-auto"
    >

      <Pie data={data} />

    </div>

  );
}

export default CategoryChart;