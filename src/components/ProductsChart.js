import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ProductsChart = ({ groupedProducts,type,titlePostion,legendPosition }) => {
  const category = groupedProducts.map((e) => e.category);
  const length = groupedProducts.map((e) => e.length);
  console.log(category, length);

  const canvasRef = useRef(null);
  
  useEffect(() => {
    let chartInstance = null;
    const ctx = canvasRef.current.getContext("2d");
    console.log(groupedProducts);

    const data = {
      labels: category,
      datasets: [
        {
          label: `avlailbe products in this catagory`,
          data: length,
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(75, 192, 192)",
            "rgb(255, 205, 86)",
            "rgb(201, 203, 207)",
            "rgb(54, 162, 235)",
          ],
        },
      ],
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: legendPosition,
        },
        title: {
          display: true,
          text: "Product Category",
          position: titlePostion,

        },
      },
    };

    const config = {
      type: type,
      data: data,
      options: options,
    };

    if (chartInstance) {
      chartInstance.destroy();
    }
    chartInstance = new Chart(ctx, config);

    return () => {
      chartInstance.destroy();
    };
  }, [category,groupedProducts,type,titlePostion,legendPosition,length]);

  return <canvas ref={canvasRef}></canvas>;
};

export default ProductsChart;
