import React from 'react';
import ItemsCard from './ItemsCard'; // Make sure to adjust the import path based on your project structure

const ItemsData = () => {
    // Dummy data for testing
    const dummyItems = [
        {
            id: 1,
            image: 'https://static.vecteezy.com/system/resources/thumbnails/025/282/026/small/stock-of-mix-a-cup-coffee-latte-more-motive-top-view-foodgraphy-generative-ai-photo.jpg', // Replace with your actual image URL
            Category: 'Coffee',
            Name: 'Latte',
            description: 'made from the roasted and ground seeds of the coffee plant',
            price: 600,
        },

        {
            id: 2,
            image: 'https://t3.ftcdn.net/jpg/03/15/40/34/360_F_315403482_MVo1gSOOfvwCwhLZ9hfVSB4MZuQilNrx.jpg', // Replace with your actual image URL
            Category: 'Coffee',
            Name: 'Chocolate',
            description: ' made from the ground seeds of the coffee plant',
            price: 300,
        },

       
       
        {
            id: 3,
            image: 'https://gatherforbread.com/wp-content/uploads/2014/10/Dark-Chocolate-Mocha-Square.jpg', // Replace with your actual image URL
            Category: 'Americano',
            Name: 'Amino',
            description: 'a beverage brewed from roasted coffee beans',
            price: 500,
        },

        {
            id: 4,
            image: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg', // Replace with your actual image URL
            Category: 'Pizza',
            Name: 'Farmhouse',
            description: 'toppings are cheese, sausages, pepperoni, vegetables, tomatoes, spices and herbs and basil',
            price: 500,
        },

        
        // Add more dummy items as needed
        {
            id: 5,
            image: 'https://img.freepik.com/free-photo/grilled-sandwich-with-bacon-fried-egg-tomato-lettuce-served-wooden-cutting-board_1150-42571.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704067200&semt=ais', // Replace with your actual image URL
            Category: 'Sandwich',
            Name: 'Veg Sandwich',
            description: ' consisting of vegetables, sliced cheese, placed between slices of bread',
            price: 600,
        },

        {
            id: 6,
            image: 'https://img.freepik.com/free-photo/high-angle-shot-coffee-beans-jars-breakfast-table-with-some-pastry_181624-5864.jpg', // Replace with your actual image URL
            Category: 'Coffee',
            Name: 'Chocolate',
            description: 'made from the ground seeds of the coffee plant',
            price: 300,
        },

       
       
        {
            id: 7,
            image: 'https://img.freepik.com/free-photo/meat-burger-with-fries-glass-ayran_140725-6711.jpg', // Replace with your actual image URL
            Category: 'Burger',
            Name: 'veg burger',
            description: 'Juicy, big, loaded with toppings of your choice',
            price: 500,
        },

        {
            id: 8,
            image: 'https://static.vecteezy.com/system/resources/thumbnails/025/282/026/small/stock-of-mix-a-cup-coffee-latte-more-motive-top-view-foodgraphy-generative-ai-photo.jpg', // Replace with your actual image URL
            Category: 'Coffee',
            Name: 'Espresso',
            description: 'a concentrated form of coffee, served in shots',
            price: 500,
        },

        
        // Add more dummy items as needed
    ];

    return (
        <div className="items-container d-flex mt-5 gap-5 justify-content-center">
            {dummyItems.map((item) => (
                <ItemsCard key={item.id} {...item} />
            ))}
        </div>
    );
};

export default ItemsData;