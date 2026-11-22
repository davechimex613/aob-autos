"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ImagePlus,
  MapPin,
  MessageCircle,
  Phone,
  Upload,
  X,
} from "lucide-react";

export default function SellCarPage() {
  const [photos, setPhotos] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);

  function addPhotos(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(e.target.files || []);
    setPhotos((current) => [...current, ...selected].slice(0, 8));
    e.target.value = "";
  }

  function removePhoto(index: number) {
    setPhotos((current) => current.filter((_, i) => i !== index));
  }

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (photos.length < 4) {
      alert("Please upload at least 4 photos of your car.");
      return;
    }

    const form = new FormData(e.currentTarget);

    const name = String(form.get("name") || "");
    const phone = String(form.get("phone") || "");
    const email = String(form.get("email") || "");
    const location = String(form.get("location") || "");
    const make = String(form.get("make") || "");
    const model = String(form.get("model") || "");
    const year = String(form.get("year") || "");
    const mileage = String(form.get("mileage") || "");
    const transmission = String(form.get("transmission") || "");
    const fuel = String(form.get("fuel") || "");
    const condition = String(form.get("condition") || "");
    const price = String(form.get("price") || "");
    const accident = String(form.get("accident") || "");
    const history = String(form.get("history") || "");
    const reason = String(form.get("reason") || "");
    const notes = String(form.get("notes") || "");

    const message = `Hello AOB Autos, I would like to sell my car.

CUSTOMER DETAILS
Name: ${name}
Phone: ${phone}
Email: ${email}
Location: ${location}

VEHICLE DETAILS
Make: ${make}
Model: ${model}
Year: ${year}
Mileage: ${mileage}
Transmission: ${transmission}
Fuel: ${fuel}
Condition: ${condition}
Asking Price: ${price}

VEHICLE INFORMATION
Accident History: ${accident}
Ownership / History: ${history}
Reason for Selling: ${reason}

Additional Details:
${notes}

I have uploaded ${photos.length} photos of the vehicle and will attach them in this WhatsApp chat.`;

    setSubmitted(true);

    const whatsappUrl =
      "https://wa.me/2349010365660?text=" + encodeURIComponent(message);

    window.open(whatsappUrl, "_blank");
  }

  return (
    <main className="sell-page">
      <header className="aob-header sell-header">
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
            <a href="/#inventory">Buy a Car</a>
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

      <section className="sell-hero">
        <div className="sell-hero-inner">
          <div className="sell-hero-copy">
            <span className="sell-eyebrow">SELL YOUR CAR · AOB AUTOS</span>
            <h1>
              Ready to sell?
              <br />
              <em>Let&apos;s talk numbers.</em>
            </h1>
            <p>
              Tell us about your vehicle, upload clear photos and send the
              details directly to AOB Autos on WhatsApp.
            </p>

            <div className="sell-hero-points">
              <span>
                <CheckCircle2 size={15} />
                Straightforward process
              </span>
              <span>
                <CheckCircle2 size={15} />
                Direct WhatsApp contact
              </span>
            </div>
          </div>

          <div className="sell-hero-card">
            <span>SELL WITH AOB</span>
            <strong>Tell us what you&apos;ve got.</strong>
            <p>
              The more accurate your details and photos, the better we can
              understand your vehicle.
            </p>
            <div className="sell-hero-card-line" />
            <small>PHOTO UPLOAD REQUIRED</small>
          </div>
        </div>
      </section>

      <section className="sell-form-wrap">
        <div className="sell-form-intro">
          <div>
            <span className="section-eyebrow">VEHICLE SUBMISSION</span>
            <h2>Tell us about your car.</h2>
          </div>
          <p>
            Complete the form below. Your details will be prepared for a
            WhatsApp conversation with AOB Autos.
          </p>
        </div>

        <form className="sell-form" onSubmit={submitForm}>
          <section className="sell-form-section">
            <div className="sell-section-heading">
              <span>01</span>
              <div>
                <h3>Your Details</h3>
                <p>How can AOB Autos reach you?</p>
              </div>
            </div>

            <div className="sell-grid">
              <label>
                <span>Full Name *</span>
                <input name="name" required placeholder="e.g. Chiemerie Iwuchukwu" />
              </label>

              <label>
                <span>Phone Number *</span>
                <input name="phone" required type="tel" placeholder="+234 801 234 5678" />
              </label>

              <label>
                <span>Email Address</span>
                <input name="email" type="email" placeholder="you@example.com" />
              </label>

              <label>
                <span>Location *</span>
                <div className="sell-input-icon">
                  <MapPin size={15} />
                  <input name="location" required placeholder="City / State" />
                </div>
              </label>
            </div>
          </section>

          <section className="sell-form-section">
            <div className="sell-section-heading">
              <span>02</span>
              <div>
                <h3>Vehicle Details</h3>
                <p>Give us the important specifications.</p>
              </div>
            </div>

            <div className="sell-grid sell-grid-three">
              <label>
                <span>Make *</span>
                <input name="make" required placeholder="e.g. Toyota" />
              </label>

              <label>
                <span>Model *</span>
                <input name="model" required placeholder="e.g. Camry XSE" />
              </label>

              <label>
                <span>Year *</span>
                <input name="year" required type="number" min="1900" max="2030" placeholder="2020" />
              </label>

              <label>
                <span>Mileage *</span>
                <input name="mileage" required placeholder="e.g. 84,793 km" />
              </label>

              <label>
                <span>Transmission *</span>
                <select name="transmission" required defaultValue="">
                  <option value="" disabled>Select transmission</option>
                  <option>Automatic</option>
                  <option>Manual</option>
                  <option>CVT</option>
                  <option>Other</option>
                </select>
              </label>

              <label>
                <span>Fuel Type *</span>
                <select name="fuel" required defaultValue="">
                  <option value="" disabled>Select fuel type</option>
                  <option>Petrol</option>
                  <option>Diesel</option>
                  <option>Hybrid</option>
                  <option>Electric</option>
                  <option>Other</option>
                </select>
              </label>

              <label>
                <span>Vehicle Condition *</span>
                <select name="condition" required defaultValue="">
                  <option value="" disabled>Select condition</option>
                  <option>Excellent</option>
                  <option>Very good</option>
                  <option>Good</option>
                  <option>Fair</option>
                  <option>Needs repairs</option>
                </select>
              </label>

              <label>
                <span>Asking Price *</span>
                <input name="price" required placeholder="e.g. ₦35,000,000" />
              </label>
            </div>
          </section>

          <section className="sell-form-section">
            <div className="sell-section-heading">
              <span>03</span>
              <div>
                <h3>Vehicle Information</h3>
                <p>A little more context helps us assess the car properly.</p>
              </div>
            </div>

            <div className="sell-grid">
              <label>
                <span>Accident History *</span>
                <select name="accident" required defaultValue="">
                  <option value="" disabled>Select an option</option>
                  <option>No known accident</option>
                  <option>Minor accident</option>
                  <option>Major accident</option>
                  <option>Not sure</option>
                </select>
              </label>

              <label>
                <span>Ownership / History *</span>
                <input
                  name="history"
                  required
                  placeholder="e.g. First owner, foreign used, Nigerian used"
                />
              </label>

              <label className="sell-full">
                <span>Reason for Selling *</span>
                <input
                  name="reason"
                  required
                  placeholder="Why are you looking to sell?"
                />
              </label>

              <label className="sell-full">
                <span>Additional Details</span>
                <textarea
                  name="notes"
                  rows={5}
                  placeholder="Anything else AOB Autos should know about the vehicle..."
                />
              </label>
            </div>
          </section>

          <section className="sell-form-section sell-photo-section">
            <div className="sell-section-heading">
              <span>04</span>
              <div>
                <h3>Vehicle Photos</h3>
                <p>
                  Upload at least 4 clear photos. Maximum 8 photos.
                </p>
              </div>
            </div>

            <div className="photo-upload-box">
              <input
                id="carPhotos"
                type="file"
                accept="image/jpeg,image/png,image/webp"
                multiple
                required={photos.length === 0}
                onChange={addPhotos}
              />

              <label htmlFor="carPhotos" className="photo-upload-label">
                <span className="photo-upload-icon">
                  <ImagePlus size={25} />
                </span>
                <strong>Add photos of your car</strong>
                <span>
                  Front · Rear · Both sides · Interior
                </span>
                <small>JPG, PNG or WEBP · Up to 8 photos</small>
                <b>
                  <Upload size={14} /> Choose Images
                </b>
              </label>
            </div>

            {photos.length > 0 && (
              <div className="photo-preview-grid">
                {photos.map((photo, index) => (
                  <div className="photo-preview" key={`${photo.name}-${index}`}>
                    <img
                      src={URL.createObjectURL(photo)}
                      alt={`Vehicle photo ${index + 1}`}
                    />
                    <button
                      type="button"
                      onClick={() => removePhoto(index)}
                      aria-label={`Remove photo ${index + 1}`}
                    >
                      <X size={15} />
                    </button>
                    <span>{index + 1}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="photo-requirement">
              <ImagePlus size={15} />
              <span>
                {photos.length < 4
                  ? `Please upload ${4 - photos.length} more photo${
                      4 - photos.length === 1 ? "" : "s"
                    }`
                  : `${photos.length} photos ready to send`}
              </span>
            </div>
          </section>

          <div className="sell-submit-area">
            <div>
              <strong>Ready to send your vehicle details?</strong>
              <p>
                We&apos;ll open WhatsApp with your information already prepared.
              </p>
            </div>

            <button type="submit" className="sell-submit">
              <MessageCircle size={18} />
              Send to AOB on WhatsApp
              <ArrowRight size={17} />
            </button>
          </div>

          {submitted && (
            <div className="sell-success">
              <CheckCircle2 size={18} />
              WhatsApp has been opened with your vehicle details.
            </div>
          )}
        </form>
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

            <a href="https://wa.me/2349010365660" className="footer-whatsapp">
              WhatsApp AOB Autos <ArrowRight size={15} />
            </a>
          </div>

          <div className="footer-column">
            <span className="footer-heading">SHOP</span>
            <a href="/#inventory">Browse Inventory</a>
            <a href="/#inventory">Featured Vehicles</a>
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
            <a href="/#inventory">Inventory</a>
            <a href="/#contact">Enquiries</a>
            <a href="/sell-car">Sell Your Car</a>
          </div>

          <span>BUY · SELL · DRIVE</span>
        </div>
      </footer>
    </main>
  );
}
