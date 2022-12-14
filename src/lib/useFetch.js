import { useEffect, useState } from "react";
import { addProduct as addProductApi, deleteProduct as deleteProductApi, editProduct as editProductApi } from '../api/product';



const useFetch = (apiFunction, search) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData(apiFunction, search);
    }, [search]);

    const fetchData = async (apiFunction, search) => {
        try {
            const res = await apiFunction(search);
            setData(res.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const deleteProduct = async id => {
        try {
          const res = await deleteProductApi(id);
          setData(prevState => {
            return {
              ...prevState,
              products: [...prevState.products.filter(prod => prod.id !== id)],
            };
          });
        } catch (error) {
          setError(error.message);
        }
      };

      const addProduct = async product => {
        try {
          const res = await addProductApi(product);
          setData(prevState => {
            return {
              ...prevState,
              products: [res.data,...prevState.products]
            }
          })
        }catch(err) {
          console.log(err)
        }
      }

      const editProduct = async (product) => {
        try {
         await editProductApi(product);
    
          setData(prevState => {
            console.log(prevState.products)
            console.log(product)
            const editedProducts = prevState.products.map(item => {
              if(item.id !== product.id){
                return item;
              }
              return product;
            })
    
            
            return {
              ...prevState,
              products: [...editedProducts]
            }
          })
        }catch(err) {
          console.log(err)
        }
      }

    const refetch = (apiFunction, search) => {
        fetchData(apiFunction, search);
    };


    return {
        data,
        error,
        loading,
        refetch,
        deleteProduct,
        addProduct,
        editProduct
    };
};
export default useFetch;