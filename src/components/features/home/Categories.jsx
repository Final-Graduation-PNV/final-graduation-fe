import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { categories } from "../../../api/Categories";
const Categories = ({ handleResult }) => {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState("plant");
  const token = localStorage.getItem("token");
  const productName = localStorage.getItem("selectedProduct");
  useEffect(() => {
    const getCate = async () => {
      try {
        const res = await categories();
        setCategory(res.data.categories);
        console.log("res categories: ", res);
      } catch (error) {
        console.log("Err categoris: ", error);
      }
    };
    getCate();
  }, []);

  const handleProductChange = (e) => {
    const selectedProduct = e.target.value;
    setProduct(selectedProduct);
    localStorage.setItem("selectedProduct", selectedProduct);
  };

  const handleSearch = () => {
    axios
      .get(
        `https://codenguoi.site/api/user/products/search/city-cate?category=${productName}&city=`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        handleResult(res.data.products);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <select
        className="selectToday_name"
        defaultValue={category[0]?.id}
        onChange={handleProductChange}
        onClick={() => handleSearch()}
      >
        {category.map((cate) => (
          <option key={cate.id} value={cate.name}>
            {cate.name}
          </option>
        ))}
      </select>
      <FontAwesomeIcon className="selet__faChevronDown" icon={faChevronDown} />
    </>
  );
};
export default Categories;
