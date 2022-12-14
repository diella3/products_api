import  ProductCard  from "./ProductCard";

 const ProductList = ({ products , handleEdit, handleDelete}) => {
    return (
        <div className="ProductList">
            {products?.map((product) => {
                return <ProductCard 
                key={`product-card-${product.id}`} 
                product={product}  
                handleEdit={handleEdit} 
                onDelete={handleDelete}/>;
            })}
        </div>
    );
};

export default ProductList;