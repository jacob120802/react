import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const useRestaurantMenu = () => {
    const [useResMenu, setResMenu]= useState(null )
    const {resId} = useParams()
    useEffect(()=>{
        fetchData()
    }
        ,[])
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5138569&lng=73.7788578&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json)
        setResMenu(json.data)
    }

  return useResMenu
}

export default useRestaurantMenu
