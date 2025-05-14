import React from 'react';
import Transition from '../components/Transition.js';


function Terms() {
  return (
    <main className="Terms">

        <section className="Terms">

            <h1>Terms of Service</h1>
            <p><strong>Effective Date:</strong> 14 May 2025</p>
            <p><strong>Company:</strong> Duiker Travel</p>
            <p><strong>Location:</strong> Lusaka, Zambia</p>
            <p><strong>Website:</strong> <a href="http://duikertravel.com">duikertravel.com</a></p>
            <p><strong>Contact:</strong> <a href="mailto:info@duikertravel.com">info@duikertravel.com</a></p>

            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using duikertravel.com or our services, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our website or services.</p>

            <h2>2. Services Provided</h2>
            <p>Duiker Travel offers travel booking and safari services in Zambia. We reserve the right to modify or discontinue services at our discretion without notice.</p>

            <h2>3. User Responsibilities</h2>
            <p>You are responsible for:  </p>
            <ul>
            <li>Providing accurate booking information.</li>
            <li>Complying with Zambian laws and travel regulations.</li>
            <li>Ensuring payment for services as agreed.</li>
            </ul>
            <p>Misuse of our services, including fraudulent bookings, may result in account suspension.</p>

            <h2>4. Payment and Fees</h2>
            <p>All bookings require full payment at the time of reservation unless otherwise agreed. Prices are in US dollars and subject to change. Refunds are subject to our cancellation policy.</p>

            <h2>5. Cancellation Policy</h2>
            <p>Cancellations made 30+ days prior receive a 75% refund. Within 30 days, refunds are at our discretion, typically 25% or less. No refunds for no-shows.</p>

            <h2>6. Intellectual Property</h2>
            <p>All content on duikertravel.com, including text, images, and logos, is owned by Duiker Travel and protected by copyright law. Unauthorized use is prohibited.</p>

            <h2>7. Limitation of Liability</h2>
            <p>Duiker Travel is not liable for delays, cancellations, or incidents beyond our control (e.g., weather, political unrest). Our liability is limited to the cost of services paid.</p>

            <h2>8. Governing Law</h2>
            <p>These terms are governed by the laws of Zambia. Disputes will be resolved in Lusaka courts.</p>

            <h2>9. Changes to Terms</h2>
            <p>We may update these terms. Changes will be posted on duikertravel.com with the effective date. Continued use after changes constitutes acceptance.</p>

            <h2>10. Contact Us</h2>
            <p>For questions, email <a href="mailto:info@duikertravel.com">info@duikertravel.com</a> or write to:  
            Duiker Travel, Lusaka, Zambia.</p>

        </section>

    </main>
  );
}

export default Transition(Terms);