"use client";

import { InnerPageHero } from "@/components/sections/shared/InnerPageHero";
import { CTA } from "@/components/sections/CTA";

export default function TermsPageClient() {
  return (
    <main>
      <InnerPageHero
        image="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1920"
        imageAlt="Legal document and agreement"
        label="Legal"
        headline1="Terms of"
        headline2="Service"
        description="Please read these terms carefully before using our website or services."
        variant="primary"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms of Service" },
        ]}
      />

      <section className="relative py-16 sm:py-24 bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.03]"
            style={{
              background:
                "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="container-custom relative z-10 max-w-4xl">
          <div className="prose prose-lg max-w-none text-[var(--color-dark-700)]">
            <p className="text-sm text-[var(--color-dark-400)] mb-8">
              Last Updated: March 11, 2026
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-12 mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the Pure Agua Enterprises website and
              services, you agree to be bound by these Terms of Service. If you
              do not agree with any part of these terms, please do not use our
              website or services.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-12 mb-4">
              2. Eligibility
            </h2>
            <p>
              You must be at least 18 years of age and have the legal capacity
              to enter into binding agreements to use our services. By using our
              website, you represent and warrant that you meet these
              requirements.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-12 mb-4">
              3. Services
            </h2>
            <p>
              Pure Agua Enterprises provides water filtration, water
              purification, reverse osmosis, water softening, and well water
              treatment services to residential and commercial customers in the
              Kissimmee, Orlando, and greater Central Florida area. Our services
              include free water testing, system installation, maintenance, and
              repair.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-12 mb-4">
              4. SMS/Text Messaging Terms
            </h2>
            <p>
              By providing your phone number and opting in to receive text
              messages from Pure Agua Enterprises, you agree to the following
              terms:
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-dark)] mt-8 mb-3">
              4.1 Program Description
            </h3>
            <p>
              Pure Agua Enterprises may send you text messages related to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Appointment confirmations and reminders</li>
              <li>Service updates and follow-ups</li>
              <li>Promotional offers and discounts</li>
              <li>Water quality tips and seasonal reminders</li>
            </ul>

            <h3 className="text-xl font-semibold text-[var(--color-dark)] mt-8 mb-3">
              4.2 Message Frequency
            </h3>
            <p>
              Message frequency varies. You may receive approximately 4-8
              messages per month depending on your service schedule and
              preferences.
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-dark)] mt-8 mb-3">
              4.3 Opt-Out
            </h3>
            <p>
              You may opt out of receiving text messages at any time by replying{" "}
              <strong>STOP</strong> to any message you receive from us. You may
              also text <strong>STOPALL</strong>, <strong>UNSUBSCRIBE</strong>,{" "}
              <strong>CANCEL</strong>, <strong>END</strong>, or{" "}
              <strong>QUIT</strong> to opt out. After opting out, you will
              receive a one-time confirmation message. You will no longer receive
              text messages from us unless you re-subscribe.
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-dark)] mt-8 mb-3">
              4.4 Help
            </h3>
            <p>
              For assistance, reply <strong>HELP</strong> to any of our text
              messages, or contact us directly at{" "}
              <a
                href="mailto:info@pureaguaenterprise.com"
                className="text-[var(--color-primary)] hover:underline"
              >
                info@pureaguaenterprise.com
              </a>{" "}
              or{" "}
              <a
                href="tel:+14075128342"
                className="text-[var(--color-primary)] hover:underline"
              >
                (407) 512-8342
              </a>
              .
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-dark)] mt-8 mb-3">
              4.5 Message and Data Rates
            </h3>
            <p>
              Message and data rates may apply. Please contact your wireless
              carrier for details about your text messaging plan and any
              applicable charges.
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-dark)] mt-8 mb-3">
              4.6 Carrier Liability
            </h3>
            <p>
              Carriers (including but not limited to AT&T, Verizon, T-Mobile,
              Sprint, and U.S. Cellular) are not liable for delayed or
              undelivered messages.
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-dark)] mt-8 mb-3">
              4.7 Supported Carriers
            </h3>
            <p>
              Our SMS service is supported on major U.S. carriers including
              AT&T, Verizon, T-Mobile, Sprint, U.S. Cellular, and most other
              domestic wireless carriers.
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-dark)] mt-8 mb-3">
              4.8 Privacy
            </h3>
            <p>
              Your mobile number will not be shared with third parties or
              affiliates for marketing or promotional purposes. Please see our{" "}
              <a
                href="/privacy"
                className="text-[var(--color-primary)] hover:underline"
              >
                Privacy Policy
              </a>{" "}
              for more details on how we handle your information.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-12 mb-4">
              5. User Responsibilities
            </h2>
            <p>When using our website and services, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Use our services for lawful purposes only</li>
              <li>
                Not interfere with or disrupt the operation of our website
              </li>
              <li>
                Not attempt to gain unauthorized access to our systems or data
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-12 mb-4">
              6. Intellectual Property
            </h2>
            <p>
              All content on this website, including text, images, logos,
              graphics, and software, is the property of Pure Agua Enterprises
              or its licensors and is protected by applicable intellectual
              property laws. You may not reproduce, distribute, or create
              derivative works without our prior written consent.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-12 mb-4">
              7. Free Water Testing
            </h2>
            <p>
              Pure Agua Enterprises offers complimentary water testing for
              residential and commercial properties within our service area.
              This service is provided at no cost and with no purchase
              obligation. The results of water testing are for informational
              purposes and may be used to recommend appropriate water treatment
              solutions.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-12 mb-4">
              8. Product and Service Warranties
            </h2>
            <p>
              Product warranties are provided by the respective manufacturers
              and vary by product. Installation warranties are provided by Pure
              Agua Enterprises and will be outlined in your service agreement.
              Please refer to your specific product documentation and service
              agreement for warranty details.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-12 mb-4">
              9. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Pure Agua Enterprises
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising out of or related to
              your use of our website or services. Our total liability shall not
              exceed the amount you have paid to us for the services giving rise
              to the claim.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-12 mb-4">
              10. Indemnification
            </h2>
            <p>
              You agree to indemnify, defend, and hold harmless Pure Agua
              Enterprises, its officers, directors, employees, and agents from
              and against any claims, liabilities, damages, losses, or expenses
              arising from your use of our website or services or your violation
              of these Terms.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-12 mb-4">
              11. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. These links
              are provided for your convenience only. Pure Agua Enterprises does
              not endorse or assume responsibility for the content, privacy
              policies, or practices of any third-party websites.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-12 mb-4">
              12. Governing Law
            </h2>
            <p>
              These Terms of Service shall be governed by and construed in
              accordance with the laws of the State of Florida, without regard
              to its conflict of law provisions. Any disputes arising under or
              in connection with these terms shall be subject to the exclusive
              jurisdiction of the courts located in Osceola County, Florida.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-12 mb-4">
              13. Changes to Terms
            </h2>
            <p>
              Pure Agua Enterprises reserves the right to modify these Terms of
              Service at any time. Changes will be posted on this page with an
              updated &quot;Last Updated&quot; date. Your continued use of our
              website and services after any changes constitutes your acceptance
              of the revised terms.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-12 mb-4">
              14. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us:
            </p>
            <ul className="list-none pl-0 space-y-2 mt-4">
              <li>
                <strong>Pure Agua Enterprises</strong>
              </li>
              <li>3705 Eagle Isle Circle, Kissimmee, FL 34746</li>
              <li>
                Email:{" "}
                <a
                  href="mailto:info@pureaguaenterprise.com"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  info@pureaguaenterprise.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href="tel:+14075128342"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  (407) 512-8342
                </a>
              </li>
              <li>
                Serving Kissimmee, Orlando, and Central Florida
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
