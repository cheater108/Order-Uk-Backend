import Popular from "../database/popularSchema.js";
import Restaurant from "../database/restaurantSchema.js";

async function getMenu(req, res) {
    const { name } = req.body;

    const restaurant = await Restaurant.findOne({});

    const burger = [];
    const fries = [];
    const cold_drinks = [];

    for (const item of restaurant.menu) {
        switch (item.item_type) {
            case "Burger":
                burger.push(item);
                break;
            case "Fries":
                fries.push(item);
                break;
            case "Cold Drinks":
                cold_drinks.push(item);
                break;
            default:
                break;
        }
    }

    res.json({ burger, fries, cold_drinks });
}

async function getPopularRestaurants(req, res) {
    const popular_restaurants = await Popular.findOne({ name: "Restaurants" });

    res.json({ popular_restaurants: popular_restaurants.data });
}

export { getMenu, getPopularRestaurants };
