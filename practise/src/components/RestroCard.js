import { CDN_url } from "../utils/constants";
const RestroCard = (props) => {
    const  { resObj } = props;
    const {cloudinaryImageId, name, cuisines, avgRating} = resObj?.info;
    const {deliveryTime} = resObj?.info.sla;
    return (
      <div className="RestroCard" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          src={
            CDN_url+cloudinaryImageId
          }
          alt="res-logo"
          className="reslogo"
        />
        <h3>{name}</h3>
              <h4>{cuisines.join(", ")}</h4>
              <h5>{avgRating} stars</h5>
              <h5>{deliveryTime} minutes</h5>
      </div>
    );
  };

  export default RestroCard;