import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import Shimmer from "./components/Shimmer";
//import Grocery from "./components/Grocery";

const  Grocery = lazy(()=>{
return import("./components/Grocery")
}); 

// //actual react through cdn import
// const header = React.createElement(
//   "div",
//   { id: "anish" },
//   React.createElement("div", { className: "krutarth" }, [
//     React.createElement("h1", {}, "Hello in React from Scratch"),
//     React.createElement("h2", {}, "Hello through  CDN"),
//   ])
// );

// //React Element
// const heading=<h1 id="anish" className="krutarth" tabIndex="5" >Hello Jacob</h1>

// //React Functional Component (component composition)
// const Head1 = () => {
//     return (
//     <div>
//     <h1 id="anish"> Hello Krutarth </h1>
//     </div>);
// }
// const num =100
// const HeadC = () => {
//     return (
//     <div>
//         {header}
//         {heading}
//         <Head1/>
//         <Head1></Head1>
//         {Head1()}
//         <h1>{num+9}</h1>
//         <h1 className="krutarth"> Hello Anish </h1>
//     </div>);
// }



// const styleCard = {
//     backgroundColor: "#f0f0f0",
// };

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter ([
  {
    path: "/",
    element: <AppLayout/>,
    children: [{
      path: "/",
      element: <Body/>
    },{
      path: "/about",
      element: <About/>
    },{
      path: "/contact",
      element: <Body/>
    },{
      path: "/grocery",
      element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
    },{
      path: "/cart",
      element: <Body/>
    },{
      path: "/restaurants/:resId",
      element: <RestaurantMenu/>
    }
  ], 
    errorElement: <Error/>
  } 
])

const root = ReactDOM.createRoot(document.getElementById("root"));

//Element
//root.render(heading);

//Functional Component
root.render(<RouterProvider router={appRouter}/>);
