import React, { useState } from "react";
import axios from 'axios';
import spoonacularData from '../../data/spoonacularRes.json'

// https://api.spoonacular.com/recipes/findByIngredients

function ApiCall() {

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.spoonacular.com/recipes/random?apiKey=056260ea1ea6431d9482489045ae8ce3&ingredients=apples,flour,sugar&number=3',
    headers: {}
  };

  axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

  // console.log(spoonacularData);

}

export default ApiCall;