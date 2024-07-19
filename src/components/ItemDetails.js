import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ItemDetails = () => {
  const navigate = useNavigate();
  const { selectedItem } = useSelector((state) => state.items);

  useEffect(() => {
    if (!selectedItem) {
      navigate("/list");
    }
  }, [selectedItem, navigate]);

  if (!selectedItem) {
    return null;
  }

  const {
    id,
    availabilityStatus,
    brand,
    category,
    description,
    discountPercentage,
    price,
    rating,
    returnPolicy,
    reviews,
    sku,
    stock,
    thumbnail,
    title,
    warrantyInformation,
    weight,
    meta: { qrCode, barcode },
  } = selectedItem;


  return (
    <section id="product">
      <div className="container mx-auto p-4">
        <div className="row flex flex-wrap bg-white shadow-md rounded-lg">
          <div className="col-lg-4 w-full lg:w-1/3 p-0">
            <div className="flex flex-col justify-between gap-4 h-full bg-slate-600 p-4">
              <div className="rounded-lg overflow-hidden bg-white">
                <img src={thumbnail} alt={title} />
              </div>

              <div className="flex justify-between items-center text-center text-white">
                <img src={qrCode} alt="" className="w-24 h-24" />
                <div>
                  <h6>{barcode}</h6>
                  <h6>{sku}</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8 w-full lg:w-2/3">
            <article className="p-4">
              <h2 className="text-2xl font-bold">{title}</h2>
              <p>{description}</p>                 
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full bg-white capitalize text-left">
                  <tr>
                    <th className="p-2 border">id</th>
                    <td className="p-2 border">{id}</td>
                  </tr>
                  <tr>
                    <th className="p-2 border">price</th>
                    <td className="p-2 border">{price}</td>
                  </tr>
                  <tr>
                    <th className="p-2 border">discount</th>
                    <td className="p-2 border">{discountPercentage}%</td>
                  </tr>
                  <tr>
                    <th className="p-2 border">brand</th>
                    <td className="p-2 border">{brand}</td>
                  </tr>
                  <tr>
                    <th className="p-2 border">category</th>
                    <td className="p-2 border">{category}</td>
                  </tr>
                  <tr>
                    <th className="p-2 border">rating</th>
                    <td className="p-2 border">{rating}</td>
                  </tr>
                  <tr>
                    <th className="p-2 border">reviews</th>
                    <td className="p-2 border">{reviews.length}</td>
                  </tr>
                  <tr>
                    <th className="p-2 border">stock</th>
                    <td className="p-2 border">{stock}</td>
                  </tr>
                  <tr>
                    <th className="p-2 border">availabilityStatus</th>
                    <td className="p-2 border">{availabilityStatus}</td>
                  </tr>
                  <tr>
                    <th className="p-2 border">warrantyInformation</th>
                    <td className="p-2 border">{warrantyInformation}</td>
                  </tr>
                  <tr>
                    <th className="p-2 border">returnPolicy</th>
                    <td className="p-2 border">{returnPolicy}</td>
                  </tr>
                  <tr>
                    <th className="p-2 border">weight</th>
                    <td className="p-2 border">{weight}gm</td>
                  </tr>
                </table>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetails;
