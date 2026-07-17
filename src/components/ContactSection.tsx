"use client";

import { useState } from "react";

interface AvatarItem {
  id: number;
  src: string;
  top: string;
  left: string;
}

const AVATARS: AvatarItem[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80", top: "53%", left: "9.5%" },
  { id: 2, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80", top: "20%", left: "21.5%" },
  { id: 3, src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80", top: "80%", left: "29.5%" },
  { id: 4, src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80", top: "44%", left: "37.5%" },
  { id: 5, src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80", top: "70%", left: "53.5%" },
  { id: 6, src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80", top: "34%", left: "60.5%" },
  { id: 7, src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80", top: "10%", left: "71%" },
  { id: 8, src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80", top: "45%", left: "87.5%" },
  { id: 9, src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80", top: "89%", left: "94.8%" },
];

const TAGS = [
  "WEBSITE",
  "WEB APP",
  "MOBILE APP",
  "CRM",
  "FULL-STACK DEVELOPMENT",
  "DESIGN & BANNERS",
  "OTHER",
];

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [brief, setBrief] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enquiry Submitted:", {
      name,
      email,
      budget,
      timeline,
      brief,
      tags: selectedTags,
    });
    alert("Thank you for your enquiry! (Check console for mock submission details)");
  };

  return (
    <section className="relative flex flex-col items-center justify-start min-h-screen pt-20 md:pt-28 pb-20 bg-white overflow-hidden w-full select-none">
      <div className="w-full max-w-6xl px-6 md:px-8 text-center flex flex-col items-center">

        {/* Contact Badge */}
        <div className="mt-8 md:mt-14 mb-2 flex items-center justify-center gap-2">
          {/* Maple Leaf SVG with Linear Gradient */}
          <svg
            viewBox="0 0 109.35 122.88"
            className="h-[15.7px] w-[14px] shrink-0"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="contact-maple-gradient"
                x1="0%"
                y1="100%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#FF9F43" />
                <stop offset="50%" stopColor="#FF3366" />
                <stop offset="100%" stopColor="#DF1D24" />
              </linearGradient>
            </defs>
            <path
              fill="url(#contact-maple-gradient)"
              d="M55.15,85.62c1.73,11.9-0.93,21.51-8.05,31.37c-1.6,2.21-3.29,3.99-5.25,5.89c-0.01-2.63-1.69-3.76-4.22-4.34 C48.04,108.25,52.33,96.9,53.7,85.62h-2.36c-7.79-0.77-16.33,12.35-26.35,15.92c4.77-9.16-0.56-10.4-12.66-6.33 c9.05-10.8,9.93-14.79,0-13.35c5.13-3.88,9.9-6.11,14.38-7.02c-9.33-2.97-17.63-7.97-24.64-15.57c13.16-0.48,9.93-9.37-2.05-22.76 c15.93,8.01,24.33,9.02,21.73-0.17c4.71,3.18,10.75,9.27,17.11,16.09c-2.45-12.5-4.29-24.34-3.42-33.2 C41.63,28.56,48.3,19.12,54.84,0c5.51,17.44,11.43,27.12,18.92,20.08c0.97,7.76-0.07,16.06-2.74,24.81l-0.17,6.67 c6.21-6.7,12.31-13.03,17.22-15.44c-3.05,10.09,7.63,6.57,21.28,0.38c-12.92,14.44-13.94,22.06-2.57,22.59 c-4.73,7.36-13.07,11.84-22.76,15.23c4.22,1.21,8.44,3.49,12.66,7.02c-8.73-0.72-6.9,5,0.25,14.2c-10.92-3.2-16.49-2.33-13.04,6 C70.98,90.74,61.77,85.51,56.13,85.62H55.15L55.15,85.62z"
            />
          </svg>
          <span
            className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#5C5C5C]"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            CONTACT
          </span>
        </div>

        {/* Heading */}
        <h1
          className="mx-auto mt-0 mb-10 md:mb-16 w-full max-w-6xl select-none px-6 text-center leading-[1.1] tracking-[-0.04em] text-[#5C5C5C] md:px-8"
          style={{
            fontFamily: '"Stack Sans Notch", system-ui, sans-serif',
            fontSize: "clamp(34px, 5.5vw, 48px)",
            fontWeight: 400,
          }}
        >
          let&apos;s make <span className="text-black font-semibold">wonders</span>
        </h1>

        {/* Map Container */}
        <div className="relative w-full max-w-[760px] mx-auto mb-8 overflow-visible z-0">
          {/* World Map Image */}
          <img
            src="/images/world-map.jpg"
            alt="World Map"
            className="w-full h-auto opacity-[0.85] object-contain pointer-events-none select-none z-0"
            draggable={false}
          />

          {/* Interactive Avatars */}
          {AVATARS.map((avatar) => (
            <div
              key={avatar.id}
              className="absolute z-10"
              style={{
                top: avatar.top,
                left: avatar.left,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="relative">
                {/* Red Square Backdrop Wrapper */}
                <div className="relative p-[1.5px] sm:p-[2px] rounded-[4px] sm:rounded-[7px] bg-gradient-to-tr from-[#FF9F43] via-[#FF3366] to-[#DF1D24] shadow-sm">

                  {/* Square Photo Container */}
                  <div className="w-[16px] h-[16px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] rounded-[3px] sm:rounded-[5px] overflow-hidden border border-white bg-white">
                    <img
                      src={avatar.src}
                      alt="Profile Avatar"
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enquiry Form Container */}
        <div className="w-full text-left max-w-6xl mx-auto mb-8">
          <p
            className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.08em] text-[#A4A4A4] mb-2"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            TELL ME A LITTLE
          </p>
          <h2
            className="text-[28px] sm:text-[34px] md:text-[38px] font-normal tracking-[-0.035em] leading-[1.1] text-[#5C5C5C] mb-10"
            style={{ fontFamily: '"Stack Sans Notch", system-ui, sans-serif' }}
          >
            Start an <span className="text-black font-semibold">enquiry.</span>
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {/* Field 1: Your Name */}
              <div className="flex flex-col items-start w-full">
                <label className="text-[10px] md:text-[11px] font-normal uppercase text-[#171717] tracking-[0.08em] mb-2">
                  YOUR NAME <span className="text-[#DF1D24]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Huges Wattson"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-[50px] px-4 rounded-[12px] border border-[#E5E5E2] bg-white text-[14px] text-[#111111] placeholder-[#C0C0C0] focus:outline-none focus:border-[#111111] transition-colors"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                />
              </div>

              {/* Field 2: Email */}
              <div className="flex flex-col items-start w-full">
                <label className="text-[10px] md:text-[11px] font-normal uppercase tracking-[0.08em] text-[#171717] mb-2">
                  EMAIL <span className="text-[#DF1D24]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-[50px] px-4 rounded-[12px] border border-[#E5E5E2] bg-white text-[14px] text-[#111111] placeholder-[#C0C0C0] focus:outline-none focus:border-[#111111] transition-colors"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                />
              </div>

              {/* Field 3: Budget */}
              <div className="flex flex-col items-start w-full">
                <label className="text-[10px] md:text-[11px] font-normal uppercase tracking-[0.08em] text-[#171717] mb-2">
                  BUDGET <span className="text-[#DF1D24]">*</span>
                </label>
                <div className="relative w-full">
                  <select
                    required
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full h-[50px] pl-4 pr-10 rounded-[12px] border border-[#E5E5E2] bg-white text-[14px] text-[#111111] appearance-none focus:outline-none focus:border-[#111111] transition-colors cursor-pointer"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    <option value="" disabled hidden>
                      Select Budget
                    </option>

                    <option value="under-5k">Under ₹5,000</option>
                    <option value="5k-10k">₹5,000 – ₹10,000</option>
                    <option value="10k-20k">₹10,000 – ₹20,000</option>
                    <option value="20k-30k">₹20,000 – ₹30,000</option>
                    <option value="30k-50k">₹30,000 – ₹50,000</option>
                    <option value="50k-plus">₹50,000+</option>
                  </select>
                  {/* Caret icon */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#767676]">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Field 4: Timeline */}
              <div className="flex flex-col items-start w-full">
                <label className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.08em] text-[#5C5C5C] mb-2">
                  WHEN?
                </label>
                <div className="relative w-full">
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full h-[50px] pl-4 pr-10 rounded-[12px] border border-[#E5E5E2] bg-white text-[14px] text-[#111111] appearance-none focus:outline-none focus:border-[#111111] transition-colors cursor-pointer"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    <option value="" disabled hidden>
                      Select Timeline
                    </option>
                    <option value="1-month">1 - 2 Weeks</option>
                    <option value="1-3-months">1 - 2 Months</option>
                    <option value="3-6-months">3 - 6 Months</option>
                    <option value="flexible">Planning ahead</option>
                  </select>
                  {/* Caret icon */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#767676]">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Field 5: A Little Brief */}
            <div className="flex flex-col items-start w-full">
              <label className="text-[10px] md:text-[11px] font-normal uppercase tracking-[0.08em] text-[#171717] mb-2">
                A LITTLE BRIEF
              </label>
              <textarea
                placeholder="What are you building? Who is it for? What's keeping you up at night about it?"
                value={brief}
                onChange={(e) => setBrief(e.target.value)}
                className="w-full h-[120px] p-4 rounded-[12px] border border-[#E5E5E2] bg-white text-[14px] text-[#111111] placeholder-[#C0C0C0] focus:outline-none focus:border-[#111111] transition-colors resize-none"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              />
            </div>

            {/* Field 6: What are you here for tags */}
            <div className="flex flex-col items-start w-full">
              <label className="text-[10px] md:text-[11px] font-normal uppercase tracking-[0.08em] text-[#171717] mb-2">
                WHAT ARE YOU HERE FOR?
              </label>
              <div className="flex flex-wrap gap-2 w-full">
                {TAGS.map((tag) => {
                  const isSelected = selectedTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => handleTagToggle(tag)}
                      className={`px-5 py-2.5 border rounded-full text-[11px] font-semibold tracking-[0.06em] uppercase transition-all cursor-pointer select-none ${isSelected
                        ? "bg-[#111111] border-[#111111] text-white"
                        : "bg-white border-[#E5E5E2] text-[#767676] hover:border-[#111111] hover:text-[#111111]"
                        }`}
                      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit Button Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4 w-full">
              <button
                type="submit"
                className="h-[50px] px-8 rounded-[12px] bg-[#9A9A9A] hover:bg-[#111111] text-white text-[14px] font-bold transition-colors cursor-pointer select-none active:scale-[0.98] flex items-center justify-center"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Send it
              </button>
              <p
                className="text-[13px] text-[#A4A4A4] font-medium"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Reply in &lt; 24h on weekdays · I read everything
              </p>
            </div>
          </form>
        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-[#E5E5E2] my-16 md:my-20" />

        {/* Social Links Section */}
        <div className="w-full text-left max-w-6xl mx-auto mb-8">
          <p 
            className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.08em] text-[#A4A4A4] mb-2"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            STALK ME? NAH
          </p>
          <h2
            className="text-[28px] sm:text-[34px] md:text-[38px] font-normal tracking-[-0.035em] leading-[1.1] text-[#5C5C5C] mb-10"
            style={{ fontFamily: '"Stack Sans Notch", system-ui, sans-serif' }}
          >
            Find me on the <span className="text-black font-semibold">internet.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {/* LinkedIn */}
            <a
              href="http://linkedin.com/in/om-gadhave-996138335"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4.5 p-4.5 bg-white border border-[#E5E5E2] rounded-[16px] transition-all hover:border-[#111111] hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] cursor-pointer group"
            >
              <div className="shrink-0">
                <img
                  src="/images/linkedin.webp"
                  alt="LinkedIn"
                  className="w-[44px] h-[44px] rounded-[9px] object-cover shadow-[0_2px_8px_rgba(0,0,0,0.06)] pointer-events-none select-none"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-[#111111] leading-none mb-1.5 transition-colors group-hover:text-black" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  LinkedIn
                </span>
                <span className="text-[13px] text-[#A4A4A4] font-medium leading-none" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  om-gadhave
                </span>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/omi_gadhave_?igsh=ZnRkejkxNGZ2YXNw&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4.5 p-4.5 bg-white border border-[#E5E5E2] rounded-[16px] transition-all hover:border-[#111111] hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] cursor-pointer group"
            >
              <div className="shrink-0">
                <img
                  src="/images/instagram.webp"
                  alt="Instagram"
                  className="w-[44px] h-[44px] rounded-[9px] object-cover shadow-[0_2px_8px_rgba(0,0,0,0.06)] pointer-events-none select-none"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-[#111111] leading-none mb-1.5 transition-colors group-hover:text-black" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  Instagram
                </span>
                <span className="text-[13px] text-[#A4A4A4] font-medium leading-none" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  omgadhave
                </span>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/9322532936"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4.5 p-4.5 bg-white border border-[#E5E5E2] rounded-[16px] transition-all hover:border-[#111111] hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] cursor-pointer group"
            >
              <div className="shrink-0">
                <img
                  src="/images/whatsapp.jpg"
                  alt="WhatsApp"
                  className="w-[44px] h-[44px] rounded-[9px] object-cover shadow-[0_2px_8px_rgba(0,0,0,0.06)] pointer-events-none select-none"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-[#111111] leading-none mb-1.5 transition-colors group-hover:text-black" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  WhatsApp
                </span>
                <span className="text-[13px] text-[#A4A4A4] font-medium leading-none" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  +91 93225 32936
                </span>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
