import "./home.css";
export function home() {
  const homeDiv = document.getElementById("content");
  homeDiv.innerHTML = ""; 

  homeDiv.innerHTML = `
    <div class="center">
    <h1>Welcome to <strong>The Global Spice Fusion</strong></h1>
    <h2>Ambiance</h2>
      <p>The restaurant combines a cozy, rustic vibe with modern decor.<br> 
        Warm wooden accents, colorful artwork, and soft lighting set <br>
        the mood for a laid-back yet sophisticated dining experience. <br>
        The open kitchen allows guests to watch the chefs expertly <br>
        prepare their fusion dishes. There's a mix of communal tables <br>
        and intimate seating for different dining preferences.
      </p>

      <h3>Specials</h3>
      <p><h4>Sunday Brunch:</h4> Featuring a Senegalese-inspired spread with Italian flair.</p>
      <p><h4>Wine Pairings:</h4> A curated selection of wines from Italy and West Africa, <br>
      available for pairing with both the jollof rice and tiramisu.</p>
      <p><h4>Monthly Cooking Classes:</h4> Focus on learning how to create authentic Senegalese <br>
      and Italian dishes at home.</p>
      
      <div>
        <h4>Location</h4>
        <h4><strong>Address: 87 Spice Alley, The Vibrant District, New Orleans, LA, USA</strong></h4>
        <h5>Nestled in the heart of the city's cultural melting pot, The Global Spice Fusion <br>
        offers a unique blend of flavors, combining the rich, aromatic spices of <br>
        West Africa with the elegance of Italian cuisine, all within a cozy yet chic setting.</h5>
      </div>
    </div>

    <footer>
      <div>
        <p>&copy; 2024 The Global Spice Fusion. All rights reserved.</p>
      </div>
    </footer>
  `;
}