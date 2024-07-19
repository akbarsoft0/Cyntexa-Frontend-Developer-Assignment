import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchItems, selectItem } from "../redux/actions/itemAction";
import Loader from "./Loader";

const List = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, loading } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleItemClick = (item) => {
    dispatch(selectItem(item));
    navigate("/list/details");
  };

  if (loading || items.length === 0) {
    return (
      <>
        <Loader />
      </>
    );
  }

  const { products, total, limit } = items;
  // console.log(products);

  return (
    <section className="p-4">
      <div className="flex justify-between align-baseline my-4">
        <h2 className="text-2xl font-bold uppercase">Product List</h2>
        <p className="text-lg font-mono">
          {limit}/{total}
        </p>
      </div>
      <div className="overflow-auto">
        <table className="w-full border text-left capitalize">
          <thead className="uppercase sticky top-0 bg-slate-600 text-white">
            <tr>
              <th className="p-4">Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Category</th>
              <th>rating</th>
              <th>Qty.</th>
              <th>Availability</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr
                key={item.id}
                onClick={() => handleItemClick(item)}
                className="border-b broder-gray-300 hover:bg-slate-400 hover:text-white duration-300 cursor-pointer"
              >
                <td className="p-4">{item.id}</td>
                <td>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    width={50}
                    height={50}
                    loading="lazy"
                  />
                </td>
                <td className="font-semibold">{item.title}</td>
                <td>{item.brand}</td>
                <td>{item.category}</td>
                <td
                  className={
                    item.rating > 4
                      ? "text-green-400"
                      : item.rating > 3
                      ? "text-yellow-400"
                      : "text-red-400"
                  }
                >
                  {item.rating}
                </td>
                <td
                  className={
                    item.stock > 50
                      ? "text-green-400"
                      : item.stock > 30
                      ? "text-yellow-400"
                      : "text-red-400"
                  }
                >
                  {item.stock}
                </td>
                <td
                  className={
                    item.availabilityStatus !== "In Stock"
                      ? "text-red-400"
                      : "text-black"
                  }
                >
                  {item.availabilityStatus}
                </td>
                <td>&#36; {item.price}/-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default List;
