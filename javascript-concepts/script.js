async function getJoke() {
  // Obtain the response from API
  const response = await fetch(
    "https://official-joke-api.appspot.com/random_joke"
  );

  // Parse the response
  const data = await response.json();

  return data;

  return {
    setup: data.setup,
    punchline: data.punchline,
  };
}

// getJoke();

// // Sample Test
// const joke = getJoke();
//getJoke().then((res) => console.log(res));
console.log(getJoke().then((res) => console.log(res)));
