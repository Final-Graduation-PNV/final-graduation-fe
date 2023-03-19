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
    handleSearch();
  };

  const handleSearch = () => {
    axios
      .get(
        `http://ec2-54-193-79-196.us-west-1.compute.amazonaws.com/api/user/products/search/city-cate?category=${productName}&city=Da Nang`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(productName);
        console.log("res search: ", res);
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
        // onClick={handleSearch}
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
