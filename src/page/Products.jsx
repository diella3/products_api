import { useState } from "react";
import { getProducts, getProductsByCategory } from "../api/product";
import ProductFilter from "../components/Products/ProductFilter";
import ProductList from "../components/Products/ProductList";
import HandleError from "../components/shared/HnadleError";
import HandleLoading from "../components/shared/HandleLoading";
import useDebounce from "../lib/useDebounce";
import useFetch from "../lib/useFetch";
import AddForm from "./AddForm";

const Products = () => {
    const [search, setSearch] = useState("");
    const [activeCategoryFilter, setActiveCategoryFilter] = useState(undefined);
    const debouncedValue = useDebounce(search);
    const { data, loading, error, refetch, addProduct, editProduct, deleteProduct } = useFetch(getProducts, debouncedValue);
    const [show, setShow] = useState(false);
    const [product, setProduct] = useState(null)

    const handleShow = () => setShow(prevState => !prevState);

    const handleSearch = async (e) => {
        setSearch(e.target.value);
        setActiveCategoryFilter(undefined);
    };

    const handleCategoryFilter = (category) => {
        setActiveCategoryFilter(category);
        refetch(getProductsByCategory, category);
    };

    const handleEdit = (item) => {
        setProduct(item);
        setShow(true);
    }

    return (
        <HandleLoading loading={loading}>
            <HandleError error={error}>
                <AddForm 
                show={show} 
                setShow={(prevState) => {
                    setProduct(null)
                    setShow(prevState)
                }}
                add={addProduct}
                edit={editProduct}
                product={product}
                 />
                <div className="Products">
                    <ProductFilter active={activeCategoryFilter} onChange={handleCategoryFilter} />
                    <div className="Products__content">
                        <div className="w-100 d-flex mb-3">
                            <input type="text" className="form-control mr-3" placeholder="Search products" value={search} onChange={handleSearch} />
                            <button type="button" className="btn btn-primary btn-sm" onClick={handleShow}>
                                Add new Product
                            </button>
                        </div>
                        <ProductList products={data.products}  handleEdit={handleEdit} handleDelete={deleteProduct} />
                    </div>
                </div>
            </HandleError>
        </HandleLoading>
    );
};

export default Products