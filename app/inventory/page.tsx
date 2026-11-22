"use client";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Phone,
  MapPin,
} from "lucide-react";
import { useState } from "react";

type Vehicle = {
  id: number;
  name: string;
  year: string;
  price: string;
  mileage: string;
  transmission: string;
  fuel: string;
  condition: string;
  stock: string;
  images: string[];
};

const vehicles: Vehicle[] = [
  {
    id: 1,
    name: "Mercedes-Benz Inventory 01",
    year: "2020",
    price: "₦64,000,000",
    mileage: "—",
    transmission: "Automatic",
    fuel: "Petrol",
    condition: "Foreign Used",
    stock: "AOB-MB01",
    images: [
      "/inventory/Mercedes-Benz-front-view.jpg",
      "/inventory/Mercedes-Benz-interior.jpg",
      "/inventory/Mercedes-Benz-right-back-view.jpg",
    ],
  },
  {
    id: 2,
    name: "Mercedes-Benz Inventory 02",
    year: "2020",
    price: "₦64,000,000",
    mileage: "—",
    transmission: "Automatic",
    fuel: "Petrol",
    condition: "Foreign Used",
    stock: "AOB-MB02",
    images: [
      "/inventory/Mercedes-Benz-2-front-view.jpg",
      "/inventory/Mercedes-Benz-2-engine.jpg",
      "/inventory/Mercedes-Benz-2-left-back-view.jpg",
      "/inventory/Mercedes-Benz-2-right-front-view.jpg",
    ],
  },
  {
    id: 3,
    name: "Range Rover Inventory 03",
    year: "2019",
    price: "₦33,999,999",
    mileage: "84,793 km",
    transmission: "Automatic",
    fuel: "Petrol",
    condition: "Foreign Used",
    stock: "AOB-RR01",
    images: [
      "/inventory/Range-Rover-front-view.jpg",
      "/inventory/Range-Rover-left-front-view.jpg",
      "/inventory/Range-Rover-right-front-view.jpg",
      "/inventory/Range-Rover-right-back-view.jpg",
      "/inventory/Range-Rover-interior.jpg",
    ],
  },
];

function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
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

  const whatsappMessage = encodeURIComponent(
    `Hello AOB Autos, I'm interested in the ${vehicle.name} (${vehicle.year}), stock ${vehicle.stock}. Please send me more details.`
  );

  return (
    <article className="inventory-page-card">
      <div className="inventory-page-image-wrap">
        <img
          src={vehicle.images[activeImage]}
          alt={vehicle.name}
          className="inventory-page-image"
        />

        <span className="inventory-page-stock">{vehicle.stock}</span>

        {vehicle.images.length > 1 && (
          <>
            <button
              type="button"
              className="inventory-image-arrow inventory-image-prev"
              onClick={previousImage}
              aria-label="Previous vehicle image"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              className="inventory-image-arrow inventory-image-next"
              onClick={nextImage}
              aria-label="Next vehicle image"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}

        <div className="inventory-image-count">
          {activeImage + 1} / {vehicle.images.length}
        </div>
      </div>

      <div className="inventory-page-info">
        <div className="inventory-page-title-row">
          <div>
            <span className="inventory-page-condition">
              {vehicle.condition}
            </span>
            <h2>{vehicle.name}</h2>
          </div>

          <strong>{vehicle.price}</strong>
        </div>

        <div className="inventory-specs">
          <div>
            <span>YEAR</span>
            <strong>{vehicle.year}</strong>
          </div>

          <div>
            <span>MILEAGE</span>
            <strong>{vehicle.mileage}</strong>
          </div>

          <div>
            <span>TRANSMISSION</span>
            <strong>{vehicle.transmission}</strong>
          </div>

          <div>
            <span>FUEL</span>
            <strong>{vehicle.fuel}</strong>
          </div>
        </div>

        <div className="inventory-page-actions">
          <a
            href={`https://wa.me/2349010365660?text=${whatsappMessage}`}
            className="inventory-whatsapp"
          >
            <MessageCircle size={16} />
            Enquire on WhatsApp
          </a>

          <a href="tel:+2349010365660" className="inventory-call">
            <Phone size={15} />
            Call AOB
          </a>
        </div>
      </div>
    </article>
  );
}

export default function InventoryPage() {
  return (
    <main className="inventory-page">
      <header className="aob-header inventory-header">
        <div className="aob-header-inner">
          <a href="/" className="aob-logo" aria-label="AOB Autos">
            <img
              src="/aob-logo.png"
              alt="AOB Autos"
              className="aob-logo-image"
            />
            <span className="aob-logo-name">
              AOB <strong>AUTOS</strong>
            </span>
          </a>

          <nav className="aob-nav">
            <a href="/inventory">Buy a Car</a>
            <a href="/sell-car">Sell Your Car</a>
            <a href="/#why-us">Why AOB</a>
            <a href="/#about">About</a>
            <a href="/#contact">Contact</a>
          </nav>

          <a href="https://wa.me/2349010365660" className="aob-nav-cta">
            Talk to AOB <ArrowRight size={15} />
          </a>
        </div>
      </header>

      <section className="inventory-page-hero">
        <div className="inventory-page-hero-inner">
          <span> AOB AUTOS · CURRENT INVENTORY</span>

          <h1>
            Find your next
            <br />
            <em>perfect drive.</em>
          </h1>

          <p>
            Explore the vehicles currently available from AOB Autos. Every
            vehicle comes with detailed specifications and direct access to our
            team.
          </p>
        </div>
      </section>

      <section className="inventory-page-list">
        <div className="inventory-page-heading">
          <div>
            <span className="section-eyebrow">AVAILABLE VEHICLES</span>
            <h2>Current inventory.</h2>
          </div>

          <span className="inventory-total">
            {vehicles.length} VEHICLES AVAILABLE
          </span>
        </div>

        <div className="inventory-page-grid">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </section>

      <section className="inventory-page-contact">
        <div>
          <span>CAN&apos;T FIND WHAT YOU&apos;RE LOOKING FOR?</span>
          <h2>Talk to AOB Autos.</h2>
          <p>
            Tell us what you&apos;re looking for and we can help you find the
            right vehicle.
          </p>
        </div>

        <a href="https://wa.me/2349010365660" className="inventory-contact-btn">
          WhatsApp AOB <ArrowRight size={16} />
        </a>
      </section>

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="/" className="brand light footer-logo">
              <img
                src="/aob-logo.png"
                alt="AOB Autos"
                className="footer-logo-image"
              />
              <span className="footer-logo-name">
                AOB <strong>AUTOS</strong>
              </span>
            </a>

            <p>Premium vehicles. Straightforward service.</p>

            <a
              href="https://wa.me/2349010365660"
              className="footer-whatsapp"
            >
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
            <a href="/#why-us">Why AOB</a>
            <a href="/#about">About Us</a>
            <a href="/#contact">Contact Us</a>
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
            <a href="/#contact">Enquiries</a>
            <a href="/sell-car">Sell Your Car</a>
          </div>

          <span>BUY · SELL · DRIVE</span>
        </div>
      </footer>
    </main>
  );
}
