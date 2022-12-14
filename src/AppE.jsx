
import './App.css'
import Products from './page/Products'
import Header from './components/shared/Header';
import AddForm from './page/AddForm'

const AppE = () => {
    return ( 
        <div className="App">
            <Header />
            {/* <AddForm /> */}
            <Products />
        </div>
     );
}
 
export default AppE;