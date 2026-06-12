import { Mail, MapPin, Phone } from "lucide-react";
import { contactDetails, faqs } from "../data/siteContent";
import CTASection from "../components/ui/CTASection";
import FadeIn from "../components/ui/FadeIn";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";

export default function Contact() {
  return (
    <main>
      <PageHero
        // eyebrow="Contact"
        title="Let’s discuss your next learning or transformation initiative"
        description="Reach out for workshops, leadership programs, student development engagements, or institutional growth support."
        secondaryCta={{ label: "Explore services", to: "/services" }}
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <SectionHeader
              // eyebrow="Contact Form"
              title="Tell us about your goals"
              // description="A clean placeholder form ready for backend wiring or form-service integration."
            />
            <FadeIn className="mt-8 rounded-[32px] border border-[#B9DDED] bg-white p-8 shadow-sm">
              <div className="grid gap-4 md:grid-cols-2">
                <input className="rounded-2xl border border-[#D4E7F2] px-4 py-3" placeholder="Your name" />
                <input className="rounded-2xl border border-[#D4E7F2] px-4 py-3" placeholder="Organization" />
                <input className="rounded-2xl border border-[#D4E7F2] px-4 py-3" placeholder="Email address" />
                <input className="rounded-2xl border border-[#D4E7F2] px-4 py-3" placeholder="Phone number" />
              </div>
              <textarea
                className="mt-4 min-h-80 w-full rounded-2xl border border-[#D4E7F2] px-4 py-3"
                placeholder="How can we help?"
              />
              <button
                type="button"
                className="mt-5 rounded-full bg-[#1594C9] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#117ba7]"
              >
                Send Inquiry
              </button>
            </FadeIn>
          </div>

          <div className="space-y-6">
            <FadeIn className="rounded-[28px] border border-[#B9DDED] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1594C9]">
                Contact Details
              </p>
              <div className="mt-6 space-y-4 text-sm text-slate-600">
                <p className="flex items-center gap-3">
                  <Phone size={18} className="text-[#1594C9]" />
                  {contactDetails.phone}
                </p>
                <p className="flex items-center gap-3">
                  <Mail size={18} className="text-[#1594C9]" />
                  {contactDetails.email}
                </p>
                <p className="flex items-center gap-3">
                  <MapPin size={18} className="text-[#1594C9]" />
                  {contactDetails.address}
                </p>
              </div>
            </FadeIn>

            <FadeIn
  delay={0.08}
  className="rounded-[28px] border border-[#B9DDED] bg-white p-6 shadow-sm"
>
  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1594C9]">
    Our Location
  </p>

  <div className="mt-5 overflow-hidden rounded-[24px]">
    <iframe
      title="Empowering Minds Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.2242173303214!2d88.39632030576469!3d22.59452716264225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277672d0e7edb%3A0x5cd9b07e9cf3c5fb!2sJamuna%20Aparment!5e0!3m2!1sen!2sin!4v1781260866590!5m2!1sen!2sin"
      width="100%"
      height="350"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full"
    />
  </div>
</FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="FAQ" title="Common questions" />
          <div className="mt-10 grid gap-4">
            {faqs.map((faq, index) => (
              <FadeIn
                key={faq.question}
                delay={index * 0.05}
                className="rounded-[24px] border border-[#B9DDED] bg-white p-6 shadow-sm"
              >
                <p className="text-lg font-bold text-[#082C5C]">{faq.question}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Prefer a quick conversation first?"
        description="Reach out and we can discuss your audience, format, timelines, and desired outcomes."
      />
    </main>
  );
}



<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.2242173303214!2d88.39632030576469!3d22.59452716264225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277672d0e7edb%3A0x5cd9b07e9cf3c5fb!2sJamuna%20Aparment!5e0!3m2!1sen!2sin!4v1781260866590!5m2!1sen!2sin" ></iframe>