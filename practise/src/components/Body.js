import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import {useState, useEffect} from "react";
const Body = () => {
    
    const [resListing, setList] = useState([]);
    const [filterresListing, setfilterList] = useState([]);
    const [searchText,setsearchText] = useState('');
    useEffect(()=>{
        fetchData(); 
    }, []);
    const fetchData = async () => {
        const  data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5138569&lng=73.7788578&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //optional chaining
        console.log(json?.data?.cards[1]?.card.card?.
            gridElements?.infoWithStyle?.restaurants

            );
        setList(json.data.cards[1].card.card.
            gridElements.infoWithStyle.restaurants)
        setfilterList(json.data.cards[1].card.card.
                gridElements.infoWithStyle.restaurants)

    }; 

    // //conditional rendering
    // if(resListing.length === 0){
    //     return <Shimmer/>
    // };
    const onlineStatus = useOnlineStatus()
    if (onlineStatus=== false) return <h1>Looks like you are Offline......</h1> 

    return resListing.length === 0 ? (
        <Shimmer/> ) : ( 
      <div className="body">
        <div className="filter">
            <div className="searchbox">
                <input type="text" className="inputbox" value={searchText} onChange={(e)=>{
                    setsearchText(e.target.value )
                    console.log(e.target.value)
                }}/>
                <button onClick={()=>{
                    const filteredList = resListing.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setfilterList(filteredList)
                }}>Search</button>
            </div>
            <button onClick = {()=> {
                const filterList = filterresListing.filter(
                    (res)=>res.info.avgRating > 4.5
                );
                setfilterList(filterList);
                console.log(resListing)
            }}
             className="trr">Top Rated Restaurants!</button>
        </div>
        <div className="restro">
          {filterresListing.map((r)=>(
              <Link style={{textDecoration: "none", color: "black"}} key={r.info.id} to={"restaurants/"+r.info.id}><RestroCard  resObj={r}/></Link>
          )
  
          )}
       
        </div>
      </div>
    );
  };

export default Body;