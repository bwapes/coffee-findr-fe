import React, { Component } from 'react'

export default class Coffee101 extends Component {
    render() {
        return (
            <div>
                <h1>Brew 101</h1>
                <div className='chemex'>
                    <h3>Chemex Brew Methods</h3>
                    <ul className='chemexItemsNeeded'>
                        <li>Kettle</li>
                        <li>Digital Scale</li>
                        <li>Grinder</li>
                        <li>Chemex</li>
                        <li>Chemex Filters</li>
                        <li>Coffee Beans</li>
                        <li>Filtered Water</li>
                    </ul>
                    <ul className='chemexRecipe'>
                        <li>Fill Kettle and heat to 200 degrees Farenheit</li>
                        <li>Weigh out 21 grams of coffee beans per mug on digital scale (21 grams per 350 grams of water)</li>
                        <li>Grind coffee until medium coarse consistency</li>
                        <li>Rinse Chemex with warm water (effectively warming cylinder)</li>
                        <li>Drain water from Chemex and then place filter into Chemex</li>
                        <li>Pour warm water into filter to wet filter and flush out residue</li>
                        <li>Then drain water once filter is flushed</li>
                        <li>Put coffee grounds into filter</li>
                        <li>Turn on Scale</li>
                        <li>Place Chemex on scale and zero out</li>
                        <li>Pour 100 grams of hot water in the center of the grounds, saturating all grounds</li>
                        <li>After 45 seconds, pour another 150 grams of hot water onto coffee grounds</li>
                        <li>After another 30 seconds, pour another 100 grams of hot water onto coffee grounds, for a total of 350 grams of hot water poured</li>
                        <li>Once all water if filtered through you can pour coffee directly into your cup</li>
                    </ul>
                </div>
                <div className='frenchPress'>
                    <h3>French Press Brew Method</h3>
                    <ul className='frenchPressItemsNeeded'>
                        <li>Kettle</li>
                        <li>Digital Scale</li>
                        <li>Grinder</li>
                        <li>French Press</li>
                        <li>Coffee Beans</li>
                        <li>Small Spoon</li>
                    </ul>
                    <ul className='frenchPressRecipe'>
                        <li>Fill Kettle and heat water until it reaches a temperature of 212 degrees Farenheit</li>
                        <li>Grind 21 grams of coffee beans per mug (21 grams per 350 grams of water)</li>
                        <li>Turn on Scale</li>
                        <li>Place Chemex on scale and zero out</li>
                        <li>Pour in 350 grams of water, ensuring that all the grounds are completely soaked</li>
                        <li>Let the coffee steep for 4 minutes</li>
                        <li>After the 4 minutes have passed gently stir the crust that has formed on the top of the french press.</li>
                        <li>Then with a spoon remove the foam and any floating sediment</li>
                        <li>Let the coffee steep for at least 5 more minutes (the longer you leave it, the better)</li>
                        <li>Place the lid back on the french press and plunge until the plunger just touches the top of coffee</li>
                        <li>Pour gently into your preheated cup</li>
                    </ul>
                </div>
            </div>
        )
    }
}
