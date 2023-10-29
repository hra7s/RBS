const RestaurantCard=(props)=>{
    // const {name,rating}= props
    const {name,cloudinaryImageId,cuisines,costForTwo,deliveryTime,avgRating}=props.resData.info
   const CDN_URL="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
    return (
        <div className="res-container">
        <img className="res-logo" src={CDN_URL+cloudinaryImageId}/>
        <h1>{name}</h1>
        <h2>{avgRating} Rating</h2>
        <h3>{cuisines.join(",")}</h3>
        <h4>{deliveryTime} minutes</h4>
    </div>
    )
}

export default RestaurantCard