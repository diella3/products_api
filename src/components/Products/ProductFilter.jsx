import  {getProductsCategories}  from "../../api/product";
import useFetch from "../../lib/useFetch";
import  HandleError  from "../shared/HnadleError";
import  HandleLoading  from "../shared/HandleLoading";

 const ProductFilter = ({ onChange, active }) => {
    const { data, loading, error } = useFetch(getProductsCategories);

    return (
        <div className="ProductFilter">
            <HandleLoading loading={loading}>
                <HandleError error={error}>
                    <ul className="list-group">
                        {data?.map((category) => {
                            return (
                                <li key={`cat-${category}`} className={`list-group-item  ${active == category && "active"}`} onClick={() => onChange(category)} role="button">
                                    {category}
                                </li>
                            );
                        })}
                    </ul>
                </HandleError>
            </HandleLoading>
        </div>
    );
};

export default ProductFilter