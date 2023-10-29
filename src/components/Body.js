import { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"
const Body=()=>{


    //useState

   const [listOfRestaurant,setListOfRestaurant]= useState([])

   //here the initial value of count is 5 , when ever we call the setCount  the value of count can be updated 

   //setCount(10) , now the value of count is 10

// let listOfRestaurant=[
//     {
//         info: {    
//             id : "334475",
//             name: "paradise",
//             cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//             cuisines : ["Burgers","Biryani", "American", "Snacks"],
//             costForTwo: 40000,
//             deliveryTime : 36,
//             avgRating : "3.8"
//         }
//     }, 
//     {
//         info: {    
//             id : "334476",
//             name: "Eat panchavat",
//             cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
//             cuisines : ["Burgers","Biryani", "American", "Snacks"],
//             costForTwo: 40000,
//             deliveryTime : 20,
//             avgRating : "4.3"
//         }
//     },
//     {
//         info: {    
//             id : "334477",
//             name: "Dominos",
//             cloudinaryImageId: "uughlfbnykdtvefbmhdm",
//             cuisines : ["Burgers","Biryani", "American", "Snacks"],
//             costForTwo: 40000,
//             deliveryTime : 40,
//             avgRating : "4.4"
//         }
//     },
//     {
//         info: {    
//             id : "334478",
//             name: "kritunga",
//             cloudinaryImageId: "uughlfbnykdtvefbmhdm",
//             cuisines : ["Burgers","Biryani", "American", "Snacks"],
//             costForTwo: 40000,
//             deliveryTime : 40,
//             avgRating : "3.9"
//         }
//     },
//     {
//         info: {    
//             id : "334479",
//             name: "Train Restaurant",
//             cloudinaryImageId: "uughlfbnykdtvefbmhdm",
//             cuisines : ["Burgers","Biryani", "American", "Snacks"],
//             costForTwo: 40000,
//             deliveryTime : 40,
//             avgRating : "3.5"
//         }
//     }
// ]


useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data_one = await data.json();

    console.log(data_one.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants)
    //console.log(data_one?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // setListOfRestaurant(
    //   data_one.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );
  
    setListOfRestaurant(data_one.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
   
  };
    return (
        <div className="card-container">
         {
            listOfRestaurant.map((each)=> <RestaurantCard resData={each} />)
         }
        </div>
      

    )
}

export default Body