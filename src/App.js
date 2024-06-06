import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import './App.css';
import { selectLoggedInUser } from "./features/auth/authSlice";
import Protected from "./features/auth/components/Protected";
import { fetchItemsByUserIdAsync } from "./features/cart/cartSlice";
import PageNotFound from "./pages/404";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import OrderSuccessPage from "./pages/OrderSuccessPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import SignupPage from './pages/SignupPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Protected>
      <Home></Home>
    </Protected>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: <Protected>
       <CartPage></CartPage>
    </Protected>,
  },
  {
    path: "/checkout",
    element: <Protected>
       <Checkout></Checkout>
    </Protected>,
  },
  {
    path: "/product-detail/:id",
    element: <Protected>
      <ProductDetailPage></ProductDetailPage>
    </Protected>,
  },
  {
    path: "/order-success/:id",
    element: <Protected>
      <OrderSuccessPage></OrderSuccessPage>
    </Protected>,
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>
  },
  
]);

function App() {
 const dispatch = useDispatch();
 const user = useSelector(selectLoggedInUser)
  useEffect(()=>{
    if(user){
    dispatch(fetchItemsByUserIdAsync(user.id))
    }
  },[dispatch,user])
  return (
    <div className="App">
       <RouterProvider router={router} />
      {/* <SignupPage></SignupPage> */}
    </div>
  );
}

export default App;
