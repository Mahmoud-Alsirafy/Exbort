import { useEffect, useState } from 'react'
import { FaAccessibleIcon } from "react-icons/fa";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import Navbar from './componantes/Navbar';
import Home from './componantes/Home';
import "./index.css"
import Footer from './componantes/Footer';
import About from "./componantes/About";
import Shop from "./componantes/Shop";
import Fake from "./componantes/Fake";
import Dummy from "./componantes/Dummy";
import axios from "axios"
import FakeDetalis from './componantes/FakeDetalis';
import Cart from './componantes/Cart';
import Swal from 'sweetalert2';
import Favourite from './componantes/Favourite';
import FackDummy from './componantes/FackDummy';

function App() {

  const FakeApi = "https://fakestoreapi.com/products";

  const DummyApi = "https://dummyjson.com/products";


  const [FakeProducts, setFakeProducts] = useState([])


  const [DummyProducts, setDummyJsonProducts] = useState([]);


  const [Loder, setLoder] = useState(false)



  async function grtFakeProducts() {
    setLoder(true)
    let { data } = await axios.get(FakeApi)
    setFakeProducts(data)
    setLoder(false)
  };


  async function getDummyJsonProducts() {
    setLoder(true)
    let { data } = await axios.get(DummyApi)
    setDummyJsonProducts(data.products)
    setLoder(false)
  }

  useEffect(() => {
    getDummyJsonProducts()
    grtFakeProducts()
  }, [])


  let [cartItem, setCartItem] = useState([])

  let chekPro = JSON.parse(localStorage.getItem("product"))
  useEffect(() => {
    if (chekPro) {
      setCartItem(chekPro)
    } else {
      setCartItem([])
    }

  }, [])


  async function addToCart(pro) {

    let selectedProduct = cartItem.find(item => item.title === pro.title)
    if (selectedProduct) {
      Swal.fire({
        title: "This Product Is Already Add !",
        text: "That thing is still around?",
        icon: "info"
      });
    } else {

      Swal.fire({
        title: `Your Product (<span class="text-primary">${pro.title ? pro.title : pro.name}</span>) Add Succesfully!`,
        icon: "success",
        showConfirmButton: false,
        timer: 1500
      });
      setCartItem([...cartItem, { ...pro, amount: 1 }])
    }

  }

  let [favourite, setFavourite] = useState([])

  let chekFav = JSON.parse(localStorage.getItem("product"))
  useEffect(() => {
    if (chekFav) {
      setFavourite(chekFav)
    } else {
      setFavourite([])
    }

  }, [])

  function AddFavourite(pro) {

    let selectedProduct = favourite.find(item => item.title === pro.title)
    if (selectedProduct) {
      Swal.fire({
        title: "This Product Is Already Add To Favourite!",
        text: "That thing is still around?",
        icon: "info"
      });
    } else {
      Swal.fire({
        title: `Your Product (<span class="text-primary">${pro.title ? pro.title : pro.name}</span>) Add To Favourite Succesfully!`,
        icon: "success",
        showConfirmButton: false,
        timer: 1500
      });
      setFavourite([...favourite, { ...pro }])
      localStorage.setItem("favourite", JSON.stringify([...favourite, { ...pro }]))
    }
  }



  function increment(pro) {
    ++pro.amount
    setCartItem([...cartItem])
  }

  function decrement(pro) {
    if (pro.amount > 1) {
      --pro.amount
    } else {
      removeFromCart()
    }
    setCartItem([...cartItem])
  }


  function removeFromCart(index) {
    Swal.fire({
      title: "Are you sure To Delete This Product?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
        cartItem.splice(index, 1)
        setCartItem([...cartItem])
      }
    });
  }

  function removeFromFav(index) {
    Swal.fire({
      title: "Are you sure To Delete This Product?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
        favourite.splice(index, 1)
        setFavourite([...favourite])
      }
    });
  }

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(cartItem))
  }, [cartItem])

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(favourite))
  }, [favourite])



  let [dark, setDark] = useState(false)
  function isDark() {
    setDark(!dark)
  }

  return (
    <div className={dark ? "dark BODY" : "BODY"}>
      <BrowserRouter>

        <Navbar cartItem={cartItem} dark={dark} isDark={isDark} favourite={favourite} />

        <Routes>

          <Route path='/' element={<Home addToCart={addToCart} AddFavourite={AddFavourite} />} />


          <Route path='/about' element={<Outlet />} >

            <Route path='' element={<About />} />
            <Route path='shop' element={<Shop />} />


          </Route>
          <Route path='/shop' element={<Shop addToCart={addToCart} AddFavourite={AddFavourite} />} />

          <Route path='/fake' element={<Fake AddFavourite={AddFavourite} Loder={Loder} FakeProducts={FakeProducts} grtFakeProducts={grtFakeProducts} addToCart={addToCart} />} />

          <Route path='/products/:productId' element={<FakeDetalis />} />
          <Route path='/product/:DummyId' element={<FackDummy />} />



          <Route path='/dummy' element={<Dummy AddFavourite={AddFavourite} Loder={Loder} DummyProducts={DummyProducts} getDummyJsonProducts={getDummyJsonProducts} addToCart={addToCart} />} />

          <Route path='/cart' element={<Cart cartItem={cartItem} removeFromCart={removeFromCart} increment={increment} decrement={decrement} />} />
          <Route path='/favourite' element={<Favourite favourite={favourite} removeFromFav={removeFromFav} />} />




        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
