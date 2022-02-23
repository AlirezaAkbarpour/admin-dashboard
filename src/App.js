import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css';
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from "./pages/userList/UserList";
import UserPage from "./pages/userPage/UserPage";
import NewUserPage from "./pages/newUserPage/NewUserPage";
import ProductsList from "./pages/productList/ProductList"
import ProductPage from "./pages/productPage/ProductPage";
import NewProduct from "./pages/newProduct/NewProduct";

function App(){
		return(
		<Router>
			<Topbar/>
			<div className="container">
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route path="/home" component={Home}></Route>
				<Route path="/users" component={UserList}></Route>
				<Route path="/user/:userId" component={UserPage}></Route>
				<Route path="/newUser" component={NewUserPage}></Route>
				<Route path={'/products'} component={ProductsList}></Route>
				<Route path={'/product/:productId'} component={ProductPage}></Route>
				<Route path={'/new-product'} component={NewProduct}></Route>
			</Switch>
			<Sidebar/>
			</div>
		</Router>
	
		
		
	)
}

export default App;
