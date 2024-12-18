import "./about.css";

export function about() {
  const aboutDiv = document.getElementById("content");
  aboutDiv.innerHTML = "";
  aboutDiv.innerHTML = `
    <div class="about-container">
      <h1>About Us</h1>
      <p>Welcome to <strong>The Global Spice Fusion</strong>, where we take you on a culinary journey around 
        the world with bold, vibrant flavors and authentic recipes. Our philosophy is simple: 
        to fuse the best of global cuisines and create a dining experience that excites the senses.</p>
      <p>At <strong>The Global Spice Fusion</strong>, we believe in the power of spices to transform
        every dish. From the rich, savory tastes of Senegalese Jollof Rice to the indulgent sweetness of
        Italian Tiramisu, our menu is a celebration of diverse cultures and culinary traditions. Each dish is
        crafted with the freshest ingredients and the finest spices, offering a true fusion of flavors that
        will transport you to far-off lands.</p>

      <section class="contact-us">
        <h2>Contact Us</h2>
        <p>If you have any questions or would like to make a reservation, feel free to reach out:</p>
        <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>

        <p>Follow us on social media:</p>
        <ul class="social-links">
          <li><a href="https://www.example.com/facebook" target="_blank">Facebook</a></li>
          <li><a href="https://www.example.com/instagram" target="_blank">Instagram</a></li>
          <li><a href="https://www.example.com/twitter" target="_blank">Twitter</a></li>
        </ul>
      </section>
    </div>
  `;
}
