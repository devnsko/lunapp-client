import Image from "next/image";
import Link from "next/link";
import './page.css';

export default function Page() {
  return (
        <main className="container position-absolute top-50 start-50 translate-middle">
          <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Beautiful Candles</title>
  <header>
    <video autoPlay={true} loop={true} muted={true}>
      <source
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
    <div className="overlay">
      <h1>Beautiful Candles</h1>
      <p>Illuminate Your World with Style</p>
    </div>
  </header>
  <nav>
    <a href="#about">About Us</a>
    <a href="#products">Products</a>
    <a href="#contact">Contact</a>
  </nav>
  <div className="section" id="about">
    <h2>About Us</h2>
    <p>
      Welcome to Beautiful Candles, where we craft artisanal candles with a
      focus on quality, sustainability, and luxury. Our mission is to create a
      serene atmosphere in every home through our expertly crafted scents and
      beautifully designed candles. We pride ourselves on using eco-friendly
      materials and supporting local artisans. Our candles are not just
      products; they are experiences that transform spaces.
    </p>
  </div>
  <div className="section" id="products">
    <h2>Our Products</h2>
    <div className="product">
        <Image 
        src="https://via.placeholder.com/800x400" 
        alt="Lavender Bliss"
        width={800}
        height={400}
      />
      <h3>Lavender Bliss</h3>
      <p>
        Relax with the soothing scent of lavender. Perfect for unwinding after a
        long day.
      </p>
      <p>Price: $25</p>
    </div>
    <div className="product">
        <Image 
        src="https://via.placeholder.com/800x400" 
        alt="Ocean Breeze" 
        width={800}
        height={400}
        />
      <h3>Ocean Breeze</h3>
      <p>Experience the fresh, invigorating aroma of the sea in your home.</p>
      <p>Price: $25</p>
    </div>
    <div className="product">
      <Image 
        src="https://via.placeholder.com/800x400" alt="Vanilla Dream" 
        width={800}
        height={400}
        />
      <h3>Vanilla Dream</h3>
      <p>
        A comforting, warm fragrance that fills your home with a sweet embrace.
      </p>
      <p>Price: $25</p>
    </div>
    <div className="product">
        <Image 
        src="https://via.placeholder.com/800x400" 
        alt="Citrus Sunshine" 
        width={800}
        height={400}
        />
      <h3>Citrus Sunshine</h3>
      <p>
        A bright, zesty scent to invigorate your senses and refresh your space.
      </p>
      <p>Price: $25</p>
    </div>
  </div>
  <div className="section" id="contact">
    <h2>Contact Us</h2>
    <p>
      If you have any questions or need assistance, please contact us at{" "}
      <a href="mailto:support@beautifulcandles.com">
        support@beautifulcandles.com
      </a>{" "}
      or use the form below.
    </p>
    <div className="contact-form">
      <form>
        <input type="text" name="name" placeholder="Your Name" required={true} />
        <input type="email" name="email" placeholder="Your Email" required={true} />
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required={true}
          defaultValue={""}
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  </div>
  <footer>
    <p>© 2024 Beautiful Candles. All rights reserved.</p>
  </footer>
</>

        </main>
  );
}
