"use client";

import { useState } from "react";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Phone,
  MessageCircle,
  MapPin,
} from "lucide-react";

type Vehicle = {
  id: number;
  make: string;
  model: string;
  stock: string;
  price: string;
  financing: string;
  mileage: string;
  transmission: string;
  fuel: string;
  exterior: string;
  body: string;
  condition: string;
  year: string;
  images: string[];
};

const vehicles: Vehicle[] = [
  {
    id: 1,
    make: "Range Rover",
    model: "Velar",
    stock: "#AOR-VLR19",
    price: "₦33,999,999",
    financing: "Financing available",
    mileage: "84,793 km",
    transmission: "Automatic",
    fuel: "Petrol",
    exterior: "Precious White",
    body: "SUV",
    condition: "Foreign Used",
    year: "2019",
    images: [
      "https://res.cloudinary.com/nlexjkqq/image/upload/v1795181725/aor-autos/vehicles/u7y6dyxybrmbzcl8dkls.jpg",
      "https://res.cloudinary.com/nlexjkqq/image/upload/v1795181725/aor-autos/vehicles/hxn5ksvrdloykns9tliy.jpg",
      "https://res.cloudinary.com/nlexjkqq/image/upload/v1795181729/aor-autos/vehicles/gp6i07bbnxvmjytkttad.jpg",
      "https://res.cloudinary.com/nlexjkqq/image/upload/v1795181727/aor-autos/vehicles/pe5235ypf10j7ifwspgl.jpg",
      "https://res.cloudinary.com/nlexjkqq/image/upload/v1795181730/aor-autos/vehicles/l6woorhbi5h9kyt29izb.jpg",
      "https://res.cloudinary.com/nlexjkqq/image/upload/v1795181743/aor-autos/vehicles/qkzdiw54e5iy1gvfoiag.jpg",
      "https://res.cloudinary.com/nlexjkqq/image/upload/v1795181736/aor-autos/vehicles/mqijpfrywgv8vjyvbj8h.jpg",
      "https://res.cloudinary.com/nlexjkqq/image/upload/v1795181750/aor-autos/vehicles/mg40u6dcxhytwqzlub8g.jpg",
      "https://res.cloudinary.com/nlexjkqq/image/upload/v1795181757/aor-autos/vehicles/y6akormtmmsenmocteyz.jpg",
    ],
  },
  {
    id: 2,
    make: "Mercedes-Benz",
    model: "G 63 AMG",
    stock: "#AOR-G63",
    price: "₦185,000,000",
    financing: "Financing available",
    mileage: "32,100 km",
    transmission: "Automatic",
    fuel: "Petrol",
    exterior: "Black",
    body: "SUV",
    condition: "Foreign Used",
    year: "2020",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=2200&q=90",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=2200&q=90",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=2200&q=90",
    ],
  },
  {
    id: 3,
    make: "Toyota",
    model: "Camry XSE",
    stock: "#AOR-CMY21",
    price: "₦48,500,000",
    financing: "Financing available",
    mileage: "46,200 km",
    transmission: "Automatic",
    fuel: "Petrol",
    exterior: "White",
    body: "Sedan",
    condition: "Foreign Used",
    year: "2021",
    images: [
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=2200&q=90",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=2200&q=90",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=2200&q=90",
    ],
  },
];

function VehicleListing({ vehicle }: { vehicle: Vehicle }) {
  const [activeImage, setActiveImage] = useState(0);

  const previousImage = () => {
    setActiveImage(
      (current) =>
        (current - 1 + vehicle.images.length) % vehicle.images.length
    );
  };

  const nextImage = () => {
    setActiveImage((current) => (current + 1) % vehicle.images.length);
  };

  return (
    <article className="vehicle-listing">
      <div className="vehicle-heading">
        <div>
          <div className="vehicle-make">{vehicle.make}</div>
          <h3>{vehicle.model}</h3>
        </div>

        <div className="vehicle-stock">
          <span>Stock</span>
          <strong>{vehicle.stock}</strong>
        </div>
      </div>

      <div className="vehicle-price-row">
        <div>
          <span className="price-label">PRICE</span>
          <div className="vehicle-price">{vehicle.price}</div>
        </div>

        <span className="financing">{vehicle.financing}</span>
      </div>

      <div className="vehicle-gallery">
        <div className="main-photo">
          <img
            src={vehicle.images[activeImage]}
            alt={`${vehicle.make} ${vehicle.model} front view`}
          />

          <button
            className="gallery-arrow gallery-prev"
            onClick={previousImage}
            aria-label="Previous vehicle image"
          >
            <ChevronLeft size={23} />
          </button>

          <button
            className="gallery-arrow gallery-next"
            onClick={nextImage}
            aria-label="Next vehicle image"
          >
            <ChevronRight size={23} />
          </button>

          <div className="image-counter">
            <span>{String(activeImage + 1).padStart(2, "0")}</span>
            <i />
            <span>{String(vehicle.images.length).padStart(2, "0")}</span>
          </div>
        </div>

        <div className="gallery-thumbnails">
          {vehicle.images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              className={`thumbnail ${
                activeImage === index ? "active" : ""
              }`}
              onClick={() => setActiveImage(index)}
              aria-label={`View image ${index + 1}`}
            >
              <img src={image} alt="" />
            </button>
          ))}
        </div>
      </div>

      <div className="vehicle-copy">
        <div className="built-line">
          <span>Built to make</span>
          <strong>every drive count.</strong>
        </div>

        <div className="vehicle-details">
          <div className="highlights">
            <div className="detail-heading">Vehicle highlights</div>

            <div className="highlight-grid">
              <div>
                <span>01</span>
                <strong>Premium condition</strong>
              </div>
              <div>
                <span>02</span>
                <strong>Carefully selected</strong>
              </div>
              <div>
                <span>03</span>
                <strong>Ready to drive</strong>
              </div>
            </div>
          </div>

          <div className="glance">
            <div className="detail-heading">At a glance</div>

            <div className="spec-grid">
              <div>
                <span>Mileage</span>
                <strong>{vehicle.mileage}</strong>
              </div>

              <div>
                <span>Transmission</span>
                <strong>{vehicle.transmission}</strong>
              </div>

              <div>
                <span>Fuel type</span>
                <strong>{vehicle.fuel}</strong>
              </div>

              <div>
                <span>Exterior</span>
                <strong>{vehicle.exterior}</strong>
              </div>

              <div>
                <span>Body type</span>
                <strong>{vehicle.body}</strong>
              </div>

              <div>
                <span>Car status type</span>
                <strong>{vehicle.condition}</strong>
              </div>

              <div>
                <span>Year</span>
                <strong>{vehicle.year}</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="vehicle-enquire">
          <div>
            <span>Interested in this vehicle?</span>
            <strong>Enquire about this car</strong>
          </div>

          <a
            href="https://wa.me/2349010365660"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-button"
          >
            <span>Call +2349010365660 on WhatsApp</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </article>
  );
}

type Car = {
  id: number;
  make: string;
  model: string;
  year: number;
  price: string;
  mileage: string;
  fuel: string;
  transmission: string;
  condition: string;
  stock: string;
  financing: boolean;
  images: string[];
};
const cars: Car[] = [
  {
    id: 1,
    make: "Mercedes-Benz",
    model: "Inventory 01",
    year: 2020,
    price: "₦64,000,000",
    mileage: "—",
    fuel: "Petrol",
    transmission: "Automatic",
    condition: "Foreign Used",
    stock: "AOB-MB01",
    financing: true,
    images: [
      "/inventory/Mercedes-Benz-front-view.jpg",
      "/inventory/Mercedes-Benz-interior.jpg",
      "/inventory/Mercedes-Benz-right-back-view.jpg",
    ],
  },
  {
    id: 2,
    make: "Mercedes-Benz",
    model: "Inventory 02",
    year: 2020,
    price: "₦64,000,000",
    mileage: "—",
    fuel: "Petrol",
    transmission: "Automatic",
    condition: "Foreign Used",
    stock: "AOB-MB02",
    financing: true,
    images: [
      "/inventory/Mercedes-Benz-2-front-view.jpg",
      "/inventory/Mercedes-Benz-2-engine.jpg",
      "/inventory/Mercedes-Benz-2-left-back-view.jpg",
      "/inventory/Mercedes-Benz-2-right-front-view.jpg",
    ],
  },
  {
    id: 3,
    make: "Range Rover",
    model: "Inventory 03",
    year: 2019,
    price: "₦33,999,999",
    mileage: "84,793 km",
    fuel: "Petrol",
    transmission: "Automatic",
    condition: "Foreign Used",
    stock: "AOB-RR01",
    financing: true,
    images: [
      "/inventory/Range-Rover-front-view.jpg",
      "/inventory/Range-Rover-left-front-view.jpg",
      "/inventory/Range-Rover-right-front-view.jpg",
      "/inventory/Range-Rover-right-back-view.jpg",
      "/inventory/Range-Rover-interior.jpg",
    ],
  },
];

function VehicleCard({ car }: { car: Car }) {
  const [active, setActive] = useState(0);

  const previousImage = () =>
    setActive((active - 1 + car.images.length) % car.images.length);

  const nextImage = () =>
    setActive((active + 1) % car.images.length);

  const message = encodeURIComponent(
    `Hello AOB Autos, I'm interested in the ${car.year} ${car.make} ${car.model} (${car.stock}). Please share more details.`
  );

  return (
    <article className="inventory-photo-card">
      <div className="inventory-photo-frame">
        <img
          src={car.images[active]}
          alt={`${car.make} ${car.model}`}
          className="inventory-photo"
        />

        <span className="inventory-featured-tag">FEATURED</span>

        <button
          type="button"
          className="inventory-nav inventory-nav-left"
          onClick={previousImage}
          aria-label="Previous photo"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          type="button"
          className="inventory-nav inventory-nav-right"
          onClick={nextImage}
          aria-label="Next photo"
        >
          <ChevronRight size={20} />
        </button>

        <div className="inventory-photo-counter">
          {active + 1} / {car.images.length}
        </div>
      </div>

      <div className="inventory-card-content">
        <div className="inventory-car-meta">
          <span>{car.year}</span>
          <span>{car.condition}</span>
          <span>{car.stock}</span>
        </div>

        <h3>{car.make} {car.model}</h3>

        <div className="inventory-specs">
          <span><strong>Mileage</strong>{car.mileage === "—" ? "On request" : car.mileage}</span>
          <span><strong>Fuel</strong>{car.fuel}</span>
          <span><strong>Transmission</strong>{car.transmission}</span>
        </div>

        <div className="inventory-card-bottom">
          <div>
            <small>Asking price</small>
            <strong className="inventory-price">{car.price}</strong>
          </div>

          <a
            href={`https://wa.me/2349010365660?text=${message}`}
            target="_blank"
            rel="noreferrer"
            className="inventory-enquire"
            aria-label={`Enquire about ${car.make} ${car.model}`}
          >
            <ArrowRight size={21} />
          </a>
        </div>
      </div>
    </article>
  );
}
export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [inventorySearch, setInventorySearch] = useState("");
  const [inventoryMake, setInventoryMake] = useState("All makes");

  const filteredCars = cars.filter((car) => {
    const search = inventorySearch.toLowerCase();
    const matchesSearch =
      `${car.make} ${car.model} ${car.year} ${car.condition}`.toLowerCase().includes(search);
    const matchesMake =
      inventoryMake === "All makes" || car.make === inventoryMake;
    return matchesSearch && matchesMake;
  });

  return (
    <main>
<header className="aob-header">
  <div className="aob-header-inner">
    <a href="#" className="aob-logo" aria-label="AOB Autos"><img src="/aob-logo.png" alt="AOB Autos" className="aob-logo-image" /><span className="aob-logo-name">AOB <strong>AUTOS</strong></span></a>

    <nav className="aob-nav">
      <a href="/inventory">Buy a Car</a>
      <a href="/sell-car">Sell Your Car</a>
      <a href="#why-us">Why AOB</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>

    <a href="https://wa.me/2349010365660" className="aob-nav-cta">
      Talk to AOB <ArrowRight size={15} />
    </a>

    <button
      className="aob-menu"
      onClick={() => setMobileOpen(!mobileOpen)}
      aria-label="Open navigation"
    >
      {mobileOpen ? <X size={22} /> : <Menu size={22} />}
    </button>
  </div>

  {mobileOpen && (
    <div className="aob-mobile-nav">
      <a href="/inventory" onClick={() => setMobileOpen(false)}>Buy a Car</a>
      <a href="/sell-car" onClick={() => setMobileOpen(false)}>Sell Your Car</a>
      <a href="#why-us" onClick={() => setMobileOpen(false)}>Why AOB</a>
      <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
      <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
    </div>
  )}
</header>

<section className="aob-hero">
  <div className="aob-hero-bg" />

  <div className="aob-hero-overlay" />

  <div className="aob-hero-content">
    <span className="aob-hero-kicker">AOB AUTOS · BUY &amp; SELL WITH CONFIDENCE</span>

    <h1>
      Find Your Next
      <span>Perfect Drive.</span>
    </h1>

    <p>
      Discover carefully selected vehicles or let AOB help you sell yours
      with confidence.
    </p>

    <div className="aob-hero-actions">
      <a href="/inventory" className="aob-btn aob-btn-primary">
        Explore Cars <ArrowRight size={17} />
      </a>

      <a href="/sell-car" className="aob-btn aob-btn-outline">
        Sell Your Car
      </a>
    </div>

    <div className="aob-hero-trust">
      <span>QUALITY VEHICLES</span>
      <i />
      <span>TRANSPARENT DEALS</span>
      <i />
      <span>PERSONAL SERVICE</span>
    </div>
  </div>
</section>

<section className="aob-action-panel">
  <a href="/inventory" className="aob-action-card aob-buy-card">
    <div className="aob-action-content">
      <span className="aob-action-kicker">BUY A CAR</span>
      <h2>Find Your Next Vehicle</h2>
      <p>Explore the full range, prices and offers</p>
      <span className="aob-action-link">Explore Inventory <ArrowRight size={16} /></span>
    </div>
    <div className="aob-car-glow" />
    <img src="/aob-buy-cutout.jpg" alt="Mercedes-Benz vehicle" className="aob-cutout-car aob-buy-car" />
  </a>

  <a href="/sell-car" className="aob-action-card aob-sell-card" id="sell">
    <div className="aob-action-content">
      <span className="aob-action-kicker">SELL YOUR CAR</span>
      <h2>Get Your Car Sold</h2>
      <p>Certified quality, ready to drive</p>
      <span className="aob-action-link">Start Selling <ArrowRight size={16} /></span>
    </div>
    <div className="aob-car-glow" />
    <img src="/aob-sell-cutout.png" alt="Range Rover vehicle" className="aob-cutout-car aob-sell-car" />
  </a>
</section>
<section className="inventory-section" id="inventory">
        <div className="inventory-inner">
          <div className="inventory-heading-simple">
            <div>
              <span className="section-eyebrow">AOB AUTOS INVENTORY</span>
              <h2>Featured <em>Arrivals.</em></h2>
            </div>
            <a href="#contact" className="inventory-view-all">Enquire about a vehicle <ArrowRight size={17} /></a>
          </div>

          <p className="inventory-intro">
            Explore our selection of premium vehicles. Browse the photos and find the right car for you.
          </p>

          <div className="inventory-filters">
            <input
              type="search"
              placeholder="Search by make, model or year..."
              value={inventorySearch}
              onChange={(e) => setInventorySearch(e.target.value)}
              aria-label="Search inventory"
            />
            <select
              value={inventoryMake}
              onChange={(e) => setInventoryMake(e.target.value)}
              aria-label="Filter by make"
            >
              <option>All makes</option>
              {[...new Set(cars.map((car) => car.make))].map((make) => (
                <option key={make} value={make}>{make}</option>
              ))}
            </select>
          </div>

          <div className="inventory-photo-grid">
            {filteredCars.length > 0 ? (
              filteredCars.map((car) => (
                <VehicleCard key={car.id} car={car} />
              ))
            ) : (
              <p className="inventory-empty">No vehicles match your search.</p>
            )}
          </div>
        </div>
      </section>
<section className="experience-section" id="why-us">
        <div className="experience-image">
          <img
            src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=2200&q=90"
            alt="Premium vehicle"
          />
        </div>

        <div className="experience-content">
          <span className="section-eyebrow">THE AOB EXPERIENCE</span>

          <h2>
            Buying a car
            <br />
            should feel <em>better.</em>
          </h2>

          <p>
            We believe finding the right vehicle should be clear, comfortable
            and straightforward. No unnecessary pressure. Just quality cars
            and a team ready to help.
          </p>

          <div className="experience-points">
            <div>
              <span>01</span>
              <div>
                <h3>Curated Vehicles</h3>
                <p>We focus on cars that deserve your attention.</p>
              </div>
            </div>

            <div>
              <span>02</span>
              <div>
                <h3>Transparent Deals</h3>
                <p>Clear pricing and useful vehicle information.</p>
              </div>
            </div>

            <div>
              <span>03</span>
              <div>
                <h3>Personal Support</h3>
                <p>Real assistance whenever you need it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="customer-stories-section" id="about">
  <div className="customer-stories-inner">
    <div className="customer-stories-heading">
      <div>
        <span className="section-eyebrow">CUSTOMER STORIES</span>
        <h2>What our customers<br /><em>say about us.</em></h2>
      </div>

      <div className="google-rating">
        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" />
        <div>
          <strong>4.6</strong>
          <span className="review-stars">★★★★★</span>
          <small>36 Google reviews</small>
        </div>
      </div>
    </div>

    <div className="customer-review-grid">
      <article className="customer-review-card">
        <div className="review-card-top">
          <div className="review-avatar">SA</div>
          <div>
            <strong>SA</strong>
            <span>Google review</span>
          </div>
          <span className="review-google">G</span>
        </div>

        <div className="review-stars">★★★★★</div>

        <p>
          “They have fair cars. Depending on your taste.”
        </p>
      </article>

      <article className="customer-review-card">
        <div className="review-card-top">
          <div className="review-avatar">BT</div>
          <div>
            <strong>BT</strong>
            <span>Google review</span>
          </div>
          <span className="review-google">G</span>
        </div>

        <div className="review-stars">★★★★★</div>

        <p>
          “Great place for foreign used and Nigerian used cars. Though a bit
          pricey than their contemporaries, you will see a great effort in
          fixing damaged parts and detailing.”
        </p>
      </article>

      <article className="customer-review-card">
        <div className="review-card-top">
          <div className="review-avatar">BA</div>
          <div>
            <strong>BA</strong>
            <span>Google review</span>
          </div>
          <span className="review-google">G</span>
        </div>

        <div className="review-stars">★★★★★</div>

        <p>
          “Trust worthy.”
        </p>
      </article>
    </div>
  </div>
</section>

      <section className="cta-section" id="contact">
  <div className="cta-inner">
    <span className="section-eyebrow">READY WHEN YOU ARE</span>

    <h2>
      Let's find your
      <br />
      <em>next vehicle.</em>
    </h2>

    <p>
      Tell us what you're looking for and we'll help you find something worth driving.
    </p>

    <div className="cta-actions">
      <a
        href="https://wa.me/2349010365660"
        className="primary-button"
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp AOB Autos <ArrowRight size={18} />
      </a>

      <a href="tel:+2349010365660" className="secondary-button dark">
        Call the dealership
      </a>
    </div>
  </div>
</section>

      <footer className="footer">
  <div className="footer-main">
    <div className="footer-brand">
      <a href="#" className="brand light footer-logo">
        <img src="/aob-logo.png" alt="AOB Autos" className="footer-logo-image" />
        <span className="footer-logo-name">AOB <strong>AUTOS</strong></span>
      </a>

      <p>Premium vehicles. Straightforward service.</p>

      <a href="https://wa.me/2349010365660" className="footer-whatsapp">
        WhatsApp AOB Autos <ArrowRight size={15} />
      </a>
    </div>

    <div className="footer-column">
      <span className="footer-heading">SHOP</span>
      <a href="/inventory">Browse Inventory</a>
      <a href="/inventory">Featured Vehicles</a>
      <a href="/sell-car">Sell Your Car</a>
    </div>

    <div className="footer-column">
      <span className="footer-heading">AOB AUTOS</span>
      <a href="#why-us">Why AOB</a>
      <a href="#about">About Us</a>
      <a href="#contact">Contact Us</a>
    </div>

    <div className="footer-column footer-contact">
      <span className="footer-heading">GET IN TOUCH</span>

      <a href="tel:+2349010365660">
        <Phone size={14} /> +234 901 036 5660
      </a>

      <a href="https://wa.me/2349010365660">
        <MessageCircle size={14} /> WhatsApp
      </a>

      <span className="footer-location">
        <MapPin size={14} /> Lagos, Nigeria
      </span>
    </div>
  </div>

  <div className="footer-bottom">
    <span>© 2026 AOB Autos. All rights reserved.</span>

    <div className="footer-bottom-links">
      <a href="/inventory">Inventory</a>
      <a href="#contact">Enquiries</a>
      <a href="/sell-car">Sell Your Car</a>
    </div>

    <span>BUY · SELL · DRIVE</span>
  </div>
</footer>
    </main>
  );
}
