import mongoose from "mongoose";
import Restaurant from "./restaurantSchema.js";
import Popular from "./popularSchema.js";
import Comment from "./commentsSchema.js";

const menu = [
    {
        name: "Royal Cheese Burger with extra Fries",
        description:
            "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: "120",
        img: "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732543216/order-uk/burger-fries_gvuinb.png",
        item_type: "Burger",
    },
    {
        name: "The classics for 3",
        description:
            "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: "120",
        img: "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732543216/order-uk/burger-fries_gvuinb.png",
        item_type: "Burger",
    },
    {
        name: "The classics for 3",
        description:
            "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: "120",
        img: "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732543216/order-uk/burger-fries_gvuinb.png",
        item_type: "Burger",
    },
    {
        name: "The classics for 3",
        description:
            "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: "120",
        img: "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732543216/order-uk/burger-fries_gvuinb.png",
        item_type: "Burger",
    },
    {
        name: "Royal Cheese Burger with extra Fries",
        description:
            "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
        price: "70",
        img: "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732987064/order-uk/fries_evkhs6.png",
        item_type: "Fries",
    },
    {
        name: "The classics for 3",
        description:
            "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: "70",
        img: "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732987064/order-uk/fries_evkhs6.png",
        item_type: "Fries",
    },
    {
        name: "Potato Veggies",
        description:
            "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: "70",
        img: "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732987064/order-uk/chips_yc9lon.png",
        item_type: "Fries",
    },
    {
        name: "The classics for 3",
        description:
            "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: "70",
        img: "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732987064/order-uk/fries_evkhs6.png",
        item_type: "Fries",
    },
    {
        name: "Sprite Combo",
        description:
            "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: "40",
        img: "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732987064/order-uk/sprite_nxcsi9.png",
        item_type: "Cold Drinks",
    },
    {
        name: "Leechi Sprite Combo",
        description:
            "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: "40",
        img: "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732987064/order-uk/leechi_zpp9yy.png",
        item_type: "Cold Drinks",
    },
    {
        name: "Sprite Combo",
        description:
            "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: "40",
        img: "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732987064/order-uk/leechi_zpp9yy.png",
        item_type: "Cold Drinks",
    },
];

const popular_restaurants = [
    {
        name: "McDonald’s London",
        img: "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732543217/order-uk/mcd_fidzxn.png",
    },
    {
        name: "Papa Johns",
        img: "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732543220/order-uk/papa_john_fdbc3s.png",
    },
    {
        name: "KFC West London",
        img: "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732543215/order-uk/kfc_xduhog.png",
    },
    {
        name: "Texas Chicken",
        img: "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732543220/order-uk/texas_usylwl.png",
    },
    {
        name: "Burger King",
        img: "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732543217/order-uk/burger_king_p62zvh.png",
    },
    {
        name: "Shaurma 1",
        img: "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732543220/order-uk/shaurma_ubdoas.png",
    },
];

const comments = [
    {
        name: "St Glx",
        text: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
        img: "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732985785/order-uk/customer-1_swtlut.png",
        date: "24th September, 2023",
    },
    {
        name: "St Glx2",
        text: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
        img: "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732985785/order-uk/customer-1_swtlut.png",
        date: "24th September, 2023",
    },
    {
        name: "St Glx3",
        text: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
        img: "https://res.cloudinary.com/dxcgng2n6/image/upload/v1732985785/order-uk/customer-1_swtlut.png",
        date: "24th September, 2023",
    },
];

async function seedData() {
    await mongoose.connect("mongodb://127.0.0.1:27017/", {
        dbName: "order-uk",
    });

    await Restaurant.deleteMany({});
    await Popular.deleteMany({});

    const restaurant = new Restaurant({ name: "Common" });
    const popularRestaurants = new Popular({ name: "Restaurants" });

    restaurant.menu = menu;
    popularRestaurants.data = popular_restaurants;
    await restaurant.save();
    await popularRestaurants.save();

    for (const comment of comments) {
        const review = new Comment(comment);
        await review.save();
    }
    await mongoose.connection.close();
}

await seedData();
