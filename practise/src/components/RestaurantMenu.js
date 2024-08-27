import {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  
    //const [resMenu, setresMenu] = useState(null);
    const{resId} = useParams()
    const resMenu = useRestaurantMenu(resId)
    // useEffect(() => {
    //     fetchMenu();
    // },[]);
    // const fetchMenu = async () => {

    //     const data = await fetch(
    //         "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5138569&lng=73.7788578&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER"
    //     );
    //     const json = await data.json();
    //     // console.log(json);
    //     setresMenu(json.data)

    // };

    if (resMenu===null){
      return(<Shimmer/>)  
    }
  
    const {name, cuisines, costForTwoMessage}= resMenu?.cards[2]?.card?.card?.info;
    const {itemCards}= resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(resMenu )
  return (resMenu===null)? (<Shimmer/>): (
    <div>
      <h1>{name}</h1>
      <p>{cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((i)=>(<li key={i.card.info.id}>{i.card.info.name} == Rs.{i.card.info.finalPrice/100||i.card.info.defaultPrice/100||i.card.info.price/100}</li>))} 
      </ul>
    </div>
  )
}

export default RestaurantMenu;
