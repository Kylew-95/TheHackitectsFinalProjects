import React from 'react'

import DogCard from '../DogCard/DogCard.js'
export default function HomePage({dogData}) {
  return (
    <div>
    <DogCard dogData={dogData}/>
    </div>

import homePage from "../../Media/PFAHomePage.jpg"
import "./HomePage.css"
export default function HomePage() {
  return (
    <>
    <section className="section1">
    <div className="homePage">
      <h2 className="homePageTitle">Paws For Affection, Your Companion in Adoptiong a Fur-ever friend.</h2>
    </div>
    </section>
    </>

  )
}
