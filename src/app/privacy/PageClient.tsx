"use client";

import { InnerPageHero } from "@/components/sections/shared/InnerPageHero";
import { CTA } from "@/components/sections/CTA";

export default function PrivacyPageClient() {
  return (
    <main>
      <InnerPageHero
        image="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1920"
        imageAlt="Privacy and data protection"
        label="Legal"
        headline1="Privacy"
        headline2="Policy"
        description="How we collect, use, and protect your personal information."
        variant="primary"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />

      <section className="relative py-16 sm:py-24 bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-[0.03]"
            style={{
              background:
                "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="container-custom relative z-10 max-w-4xl">
          <div className="prose prose-lg max-w-none text-[var(--color-dark-700)]">
            <p className="text-sm text-[var(--color-dark-400)] mb-8">
              Last Updated: March 11, 2026
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-12 mb-4">
              1. Introduction
            </h2>
            <p>
              Pure Agua Enterprises (&quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;) is committed to protecting your personal
              information, including data collected through our website, forms,
              phone communications, and SMS/text messaging programs. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or use our
              services.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-12 mb-4">
              2. Information We Collect
            </h2>
            <p>
              We may collect personal information that you voluntarily provide
              to us through:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact forms and free water test request forms</li>
              <li>SMS/text message subscriptions</li>
              <li>Phone and email communications</li>
              <li>Service appointments and consultations</li>
              <li>Financing applications</li>
            </ul>
            <p className="mt-4">
              <strong>Types of information collected may include:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number (including mobile number)</li>
              <li>Mailing address</li>
              <li>Service address</li>
            </ul>

            <div className="bg-[var(--color-primary-50)] border-l-4 border-[var(--color-primary)] p-6 rounded-r-lg my-8">
              <p className="font-semibold text-[var(--color-dark)] mb-2">
                SMS/Text Messaging Data
              </p>
              <p className="text-sm">
                No mobile information will be shared with third parties or
                affiliates for marketing or promotional purposes. When you
                opt in to our SMS program, we collect your name, mobile
                number, consent date and time, and the method of opt-in (web
                form, keyword, etc.).
              </p>
            </div>

            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-12 mb-4">
              3. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and service requests</li>
              <li>Schedule and confirm appointments</li>
              <li>Provide customer service and support</li>
              <li>Send service reminders and follow-ups</li>
              <li>Process financing applications</li>
              <li>Improve our website and services</li>
              <li>Send promotional communications (with your consent)</li>
            </ul>
            <p className="mt-4">
              <strong>SMS-Specific Use:</strong> Your mobile number is used
              solely for sending service updates, appointment reminders,
              promotional offers, and service-related notifications as described
              in our{" "}
              <a
                href="/terms"
                className="text-[var(--color-primary)] hover:underline"
              >
                Terms of Service
              </a>
              .
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-12 mb-4">
              4. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational security
              measures to protect your personal information, including
              encryption and secure storage practices. However, no method of
              electronic transmission or storage is 100% secure, and we cannot
              guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-12 mb-4">
              5. Data Retention
            </h2>
            <p>
              We retain your personal information for as long as necessary to
              fulfill the purposes described in this Privacy Policy, unless a
              longer retention period is required by law. For SMS subscribers,
              your data is retained while you are subscribed to our messaging
              program. You may request deletion of your data at any time by
              contacting us.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-12 mb-4">
              6. Information Sharing and Disclosure
            </h2>
            <div className="bg-[var(--color-primary-50)] border-l-4 border-[var(--color-primary)] p-6 rounded-r-lg my-8">
              <p className="font-semibold text-[var(--color-dark)] mb-2">
                Mobile Number Protection
              </p>
              <p className="text-sm mb-3">
                Mobile numbers and opt-in consent data will NOT be shared with
                any third parties or affiliates for marketing purposes.
              </p>
              <p className="text-sm">
                All text-messaging originator opt-in records and associated
                consent are kept private and will never be transferred to
                third-party marketers.
              </p>
            </div>
            <p>We may share your information only in the following cases:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Service Providers:</strong> With trusted
                subcontractors or service providers who assist in our
                operations, under strict confidentiality agreements and only
                for operational support purposes.
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law,
                regulation, legal process, or governmental request.
              </li>
              <li>
                <strong>Business Protection:</strong> To protect the rights,
                property, or safety of Pure Agua Enterprises, our customers,
                or the public.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-12 mb-4">
              7. Your Rights and Choices
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Opt out of SMS:</strong> Reply <strong>STOP</strong>{" "}
                to any text message, or contact us via email or phone.
              </li>
              <li>
                <strong>Access your data:</strong> Request a copy of the
                personal information we hold about you.
              </li>
              <li>
                <strong>Correct your data:</strong> Request corrections to any
                inaccurate or incomplete information.
              </li>
              <li>
                <strong>Delete your data:</strong> Request deletion of your
                personal information, subject to legal retention requirements.
              </li>
              <li>
                <strong>Opt out of marketing:</strong> Unsubscribe from email
                marketing at any time using the link in our emails.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-12 mb-4">
              8. Florida Privacy Rights
            </h2>
            <p>
              Under the Florida Information Protection Act (FIPA) and applicable
              Florida law, Florida residents have the right to be notified in
              the event of a data breach involving their personal information.
              We comply with all applicable Florida data protection regulations
              and will notify affected individuals as required by law.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-12 mb-4">
              9. Children&apos;s Privacy
            </h2>
            <p>
              Our website and services are not directed to individuals under
              the age of 18. We do not knowingly collect personal information
              from children. If we become aware that we have inadvertently
              collected information from a child under 18, we will take steps
              to delete it promptly.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-12 mb-4">
              10. Cookies and Tracking Technologies
            </h2>
            <p>
              Our website may use cookies and similar tracking technologies to
              enhance your browsing experience. These include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Essential cookies:</strong> Required for basic website
                functionality.
              </li>
              <li>
                <strong>Analytics cookies:</strong> Help us understand how
                visitors use our website (e.g., Google Analytics).
              </li>
              <li>
                <strong>Functional cookies:</strong> Remember your preferences
                and settings.
              </li>
              <li>
                <strong>Marketing cookies:</strong> Used to deliver relevant
                advertisements (e.g., Google Ads).
              </li>
            </ul>
            <p className="mt-4">
              You can manage cookie preferences through your browser settings.
              Disabling certain cookies may affect website functionality.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-12 mb-4">
              11. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with a revised &quot;Last Updated&quot;
              date. We encourage you to review this policy periodically.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-dark)] mt-12 mb-4">
              12. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or wish to
              exercise your rights, please contact us:
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
