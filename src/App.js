import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h3>I love {name}</h3>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  )
}

const foodLike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://i.namu.wiki/i/oqkbH6Ff5ehja1bgs6sQt8Hw7Sdt8SjjEm7vhwVoWbQt0NrTldI7UhPYXN8NCT1ZPX465nyzp_PYTwgSm6JdZMNMMzIV7qH28V596wW7hJfnzo9HSsyD9GPuIdYjPu9V4oMYCIxOTX6mtsPd6cOaFQ.webp",
    rating: 5
  }, {
    id: 2,
    name: "Samgyeopsal",
    image: "https://i.namu.wiki/i/uY5SWPUv5Se3MUeHaTnPkWeAwyDghIV6uZLPAsEcbLTMeDQVlESfHUqqrkYxYAen7uR9DdzzfcZxs_P9PJBGFMaXI8ex5IgR5DBp8CETnqQoA6oLRLDIByRgaNrDxzoBFmZ8MiKGIJxWkEBpqhsvpQ.webp",
    rating: 4.9
  }, {
    id: 3,
    name: "Bibimbop",
    image: "https://i.namu.wiki/i/C5_9p3_Wyn9JPs2VkQtZJpqJRhkiuuRXKL8HAwjrYw_vEd3_JG5YKyDA5v_YHn1A8yFGt2pK3F22SJuMF4CzoxtL_neeIRoRyglrRWwxKwp7W2J5hUiBy74SuRvwIj2s9I1db___fVKdxtcQfgj-8Q.jpg",
    rating: 4
  }, {
    id: 4,
    name: "Doncasu",
    image: "https://i.namu.wiki/i/H26VUpYzDOjiqPfTOGCFW3yHKoBlGGDvMM9elVNv-4_PcmibamMFT6eiiCrxeFYtHRqJ_nNEnmv8T25a7l2udZkjGGGhgEqIalXCG6n_puVZ-nAIVazDK_WNKYYUajDTMSBbg1cYNJXbo-AVUljmYA.webp",
    rating: 3.9
  }, {
    id: 5,
    name: "Pizza",
    image: "https://i.namu.wiki/i/Gn1_TNQlH64QAACvctivPiZCM-31Xw_4Ldi2C7rILfqAcbdC4nNvKNTWwlI5L2xlN9rRy68KZpOpnCaiUFrHcHVEjSNx0sNFIPvV3x2Q6JaLKnvdZ4rHmIRcY95TJKDbM2UOYOAVmIXPte_ohH3-rQ.webp",
    rating: 5
  }
];

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodLike.map(renderFood)}
    </div>
  );
}

Food.propTypes = {
  name:PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired,
}

export default App;