import Home from './Pages/Home/Home'
import UsersList from './Pages/Users/UsersList'
import Newuser from './Pages/Newuser/Newuser'
import Products from './Pages/Products/Products'
import Product from './Pages/Product/product'
const routes=[
    {path:'/', element:<Home/>},
    {path:'/users', element:<UsersList/>},
    {path:'/newuser', element:<Newuser/>},
    {path:'/products',element:<Products/>},
    {path:'/Product/:id',element:<Product/>}
]


export default routes