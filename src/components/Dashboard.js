import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../redux/actions/itemAction";
import Loader from "./Loader";
import ProductsChart from "./ProductsChart";

function Dashboard() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (loading || items.length === 0) {
    return (
      <>
        <Loader />
      </>
    );
  }

  const { products, total, limit } = items;
  const categories = [...new Set(products.map((e) => e.category))];

  const groupedProducts = categories.map((category) => {
    const items = products.filter((product) => product.category === category);
    return {
      category,
      products,
      length: items.length,
    };
  });

  // console.log(groupedProducts);

  return (
    <>
      <style jsx>{`
        .beauty {
          background: #ff6384;
        }
        .fragrances {
          background: #4bc0c0;
        }
        .furniture {
          background: #ffcd56;
        }
        .groceries {
          background: #c9cbcf;
        }
      `}</style>
      <section className="p-2">
        <div className="flex justify-between align-baseline my-4">
          <h2 className="text-2xl font-bold uppercase">dashboard</h2>
          <p className="text-lg font-mono">
            {limit}/{total}
          </p>
        </div>
        {/* vulnerabilities */}
        <div className="grid md:grid-cols-5 gap-2 capitalize grid-cols-2">
          <div className="text-center border rounded-md overflow-hidden grid-2 hover:translate-y-1">
            <figure className="h-20 text-white font-bold text-2xl bg-blue-500 flex items-center justify-center">
              {limit}
            </figure>
            <figcaption className="font-semibold p-2">
              Total products
            </figcaption>
          </div>
          {groupedProducts.map((item) => (
            <div className="text-center border rounded-md overflow-hidden hover:translate-y-1">
              <figure
                className={`${item.category} h-20 text-white font-bold text-2xl flex items-center justify-center`}
              >
                {item.length}
              </figure>
              <figcaption className="font-semibold p-1">
                {item.category}
              </figcaption>
            </div>
          ))}
        </div>
        <div className="sm:grid grid-cols-2 items-center">
            <figure>
              <ProductsChart
                groupedProducts={groupedProducts}
                type={"doughnut"}
                legendPosition={"right"}
                titlePostion={"left"}
              />
            </figure>
            <figure>
              <ProductsChart
                groupedProducts={groupedProducts}
                type={"bar"}
                legendPosition={"top"}
                titlePostion={"bottom"}
              />
            </figure>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
