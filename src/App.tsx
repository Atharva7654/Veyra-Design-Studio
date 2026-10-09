import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";

const BRAND = "Veyra";
const assets = {
  // Hero slides (custom AI-generated & high-resolution studio visuals)
  heroSlide1: "/media/hero-slide-1.jpg",
  heroSlide1Thumb: "/media/hero-slide-1.jpg",
  heroSlide2: "/media/hero-slide-2.jpg",
  heroSlide3: "/media/hero-slide-3.jpg",
  heroSlide4: "/media/hero-slide-4.jpg",

  // Brand logos & badges
  logo: "/media/icons/logo-halo.svg",
  logoWhite: "/media/icons/logo-halo.svg",
  starGold: "/media/icons/star-gold.svg",
  henrik: "/media/avatar-henrik.jpg",

  // General imagery
  hero: "/media/hero-slide-1.jpg",
  bottle: "/media/hero-slide-2.jpg",
  motionPortrait: "/media/hero-slide-4.jpg",
  ice: "/media/ice.jpg",
  tablet: "/media/hero-slide-1.jpg",
  basketball: "/media/blog-1.jpg",
  featureDesert: "/media/feature-desert.jpg",
  water: "/media/water-texture.jpg",
  portrait: "/media/avatar-henrik.jpg",
  portraitSquare: "/media/avatar-henrik.jpg",
  leatherTote: "/media/work-kolch.jpg",
  elegant: "/media/author-woman1.jpg",
  winter: "/media/winter.jpg",
  purse: "/media/purse.jpg",
  walkie: "/media/walkie.jpg",
  abstract: "/media/abstract.jpg",

  // People
  person1: "/media/person-1.jpg",
  person2: "/media/person-2.jpg",
  person3: "/media/person-3.jpg",
  member1: "/media/member-1.jpg",
  member2: "/media/member-2.jpg",
  member3: "/media/member-3.jpg",
  man1: "/media/author-man1.jpg",
  woman1: "/media/author-woman1.jpg",
  man2: "/media/author-man2.jpg",

  // CMS Projects (Works)
  workKolch: "/media/work-kolch.jpg",
  workKolchIcon: "/media/work-kolch.jpg",
  workVictoria: "/media/work-victoria.jpg",
  workVictoriaIcon: "/media/work-victoria.jpg",
  workNuvik: "/media/work-nuvik.jpg",
  workNuvikIcon: "/media/work-nuvik.jpg",
  workAuria: "/media/work-auria.jpg",
  workAuriaIcon: "/media/work-auria.jpg",

  // Blog posts
  blog1: "/media/blog-1.jpg",
  blog2: "/media/blog-2.jpg",
  blog3: "/media/blog-3.jpg",

  // Services
  servicesContent: "/media/service-content.jpg",
  servicesDesign: "/media/service-design.jpg",
  servicesStrategy: "/media/service-strategy.jpg",
  servicesWeb: "/media/service-web.jpg",
  servicesBranding: "/media/service-branding.jpg",

  // Media & Videos
  showreelVideo: "/media/showreel-loop.mp4",
  orbVideo: "/media/orb-loop.mp4",
  waterVideo: "/media/water-loop.mp4",
  menuContact: "/media/menu-contact.jpg",

  // UI Icons & Elements
  calendarSvg: "/media/icons/calendar.svg",
  calendarPerson1: "/media/person-1.jpg",
  calendarPerson2: "/media/person-2.jpg",
  calendarPerson3: "/media/person-3.jpg",
  calendarWhiteSvg: "/media/icons/calendar-white.svg",
  checkboxSvg: "/media/icons/checkbox.svg",
  checkboxGreySvg: "/media/icons/checkbox-grey.svg",
  lightningSvg: "/media/icons/lightning.svg",
  starBlackSvg: "/media/icons/star-black.svg",
  starGoldSvg: "/media/icons/star-gold.svg",
  socialInsta: "/media/icons/social-insta.svg",
  socialX: "/media/icons/social-x.svg",
  socialDribble: "/media/icons/social-dribble.svg",
};

const logos = [
  { number: "01", name: "Halo", note: "Lighting timeless products", src: "/media/icons/logo-halo.svg" },
  { number: "02", name: "Mikado", note: "Modern essentials for pets", src: "/media/icons/logo-mikado.svg" },
  { number: "03", name: "Engage", note: "Enhance teams communication", src: "/media/icons/logo-engage.svg" },
  { number: "04", name: "Convert", note: "Smart marketing for brands", src: "/media/icons/logo-convert.svg" },
  { number: "05", name: "Brasa", note: "Food made with fiery passion", src: "/media/icons/logo-brasa.svg" },
  { number: "06", name: "Logoipsum", note: "Retro-inspired visual brands", src: "/media/icons/logo-logoipsum.svg" },
  { number: "07", name: "Koboto", note: "Playful tech from East to West", src: "/media/icons/logo-koboto.svg" },
];

const serviceItems = [
  {
    name: "Content",
    image: assets.servicesContent,
    text: "We create the words and visuals that speak your brand's message with clarity and style.",
  },
  {
    name: "Design",
    image: assets.servicesDesign,
    text: "We bring ideas to life through clean, intentional, and conversion-driven visual design.",
  },
  {
    name: "Strategy",
    image: assets.servicesStrategy,
    text: "We define your goals, map your audience, and build a creative foundation that guides every decision.",
  },
  {
    name: "Websites",
    image: assets.servicesWeb,
    text: "We develop scalable, responsive, and easy-to-manage sites built with high-performance modern web technologies.",
  },
  {
    name: "Branding",
    image: assets.servicesBranding,
    text: "From logo to tone of voice, we craft bold and cohesive identities that stand out and resonate.",
  },
];

const avatars = [assets.person1, assets.person2, assets.person3];
const experts = [assets.member1, assets.member2, assets.member3];

function BrandMark({ className = "", supClassName = "" }: { className?: string; supClassName?: string }) {
  return (
    <span className={className}>
      {BRAND}
      <sup className={supClassName || "ml-0.5 align-super text-[0.42em] leading-none tracking-[-0.04em]"}>TM</sup>
    </span>
  );
}

function SocialIcons({ className = "" }: { className?: string }) {
  const icons = [
    { label: "Instagram", src: assets.socialInsta },
    { label: "X", src: assets.socialX },
    { label: "Dribbble", src: assets.socialDribble },
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {icons.map((icon) => (
        <a key={icon.label} href="#" aria-label={icon.label} className="transition-opacity hover:opacity-45">
          <img src={icon.src} alt={icon.label} className="h-4.5 w-4.5" />
        </a>
      ))}
    </div>
  );
}

function SectionLabel({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`section-label ${light ? "text-white/55" : "text-black/60"}`}>{children}</p>;
}

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function MagneticButton({ children, light = false, href = "#contact" }: { children: ReactNode; light?: boolean; href?: string }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      className={`group inline-flex h-12 items-center gap-8 rounded-[10px] px-7 text-sm font-semibold transition-colors ${
        light ? "bg-white text-black hover:bg-zinc-200" : "bg-[#111315] text-white hover:bg-[#2a2c2e]"
      }`}
    >
      <span>{children}</span>
      <span className={`text-[9px] leading-none transition-transform group-hover:translate-x-1 ${light ? "text-black/45" : "text-white/45"}`}>●</span>
    </motion.a>
  );
}

function AvatarStack({ images, extra = "34+", compact = false }: { images: string[]; extra?: string; compact?: boolean }) {
  return (
    <div className="flex items-center">
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt="Team member portrait"
          loading="lazy"
          decoding="async"
          className={`${compact ? "h-7 w-7" : "h-9 w-9"} rounded-full border-2 border-white object-cover ${index > 0 ? "-ml-2" : ""}`}
        />
      ))}
      {extra ? (
        <span className={`${compact ? "h-7 px-2 text-[10px]" : "h-9 px-3 text-xs"} -ml-2 inline-flex items-center rounded-full bg-[#5a5c5d] font-bold text-white`}>
          {extra}
        </span>
      ) : null}
    </div>
  );
}

function LazyVideo({
  src,
  poster,
  className = "",
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "300px 0px" }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={inView ? src : undefined}
      poster={poster}
      loop
      muted
      playsInline
      preload="none"
      className={className}
    />
  );
}

function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"loading" | "exit" | "done">("loading");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("exit"), 1400);
    const t2 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 2000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <motion.div
      className="loader-screen"
      animate={phase === "exit" ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.p
        className="loader-brand"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <BrandMark supClassName="ml-1 align-super text-[0.34em] tracking-[-0.03em]" />
      </motion.p>
      <motion.p
        className="loader-sub"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.55 }}
      >
        studio
      </motion.p>
      <div className="loader-bar-track">
        <motion.div
          className="loader-bar-fill"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

function MenuOverlay({ onClose }: { onClose: () => void }) {
  const menuLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Works", href: "#works" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];
  const cases = [
    { name: "Victoria", description: "Digital art studio creating compositions", image: assets.workVictoria },
    { name: "Auria", description: "Where ideas meet the spotlight", image: assets.workAuria },
    { name: "Nuvik", description: "Essential tech, refined.", image: assets.workNuvik },
  ];

  const navigate = (href: string) => {
    onClose();
    window.setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[70] bg-black/35 p-3"
    >
    <motion.div
      initial={{ scale: 0.985, y: 8 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.985, y: 8 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="menu-overlay relative grid h-full w-full grid-rows-[auto_auto_1fr] overflow-hidden rounded-[8px] bg-white shadow-2xl lg:grid-cols-[1.05fr_1.1fr_1.15fr] lg:grid-rows-1"
    >
      <div className="flex h-full min-h-0 flex-col overflow-y-auto border-b border-black/10 p-7 md:p-10 lg:border-b-0 lg:border-r">
        <BrandMark className="text-[26px] font-bold tracking-[-0.055em]" />
        <nav className="mt-auto flex flex-col items-start">
          {menuLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => navigate(link.href)}
              className="block text-left text-[clamp(2.1rem,3.1vw,3.05rem)] font-medium leading-[1.18] tracking-[-0.045em] transition-opacity hover:opacity-45"
            >
              {link.label}
            </button>
          ))}
        </nav>
        <div className="mt-9 flex flex-col gap-5">
          <SocialIcons />
          <div className="flex gap-5 text-[12px] text-black/55">
            <a href="#" className="hover:underline">Terms of use</a>
            <a href="#" className="hover:underline">Privacy policy</a>
          </div>
        </div>
      </div>

      <div className="flex h-full min-h-0 flex-col justify-center overflow-y-auto border-b border-black/10 p-7 md:p-10 lg:border-b-0 lg:border-r">
        <p className="text-[13px] text-black/70">Cases</p>
        <div className="mt-4 space-y-3">
          {cases.map((item) => (
            <a key={item.name} href="#works" onClick={onClose} className="group flex items-center gap-4">
              <img src={item.image} alt="" loading="lazy" decoding="async" className="h-[68px] w-[74px] shrink-0 rounded-[6px] object-cover transition-transform duration-300 group-hover:scale-105" />
              <span>
                <span className="block text-[15px] font-semibold leading-tight">{item.name}</span>
                <span className="mt-1.5 block max-w-[260px] text-[15px] leading-tight text-black/55">{item.description}</span>
              </span>
            </a>
          ))}
        </div>

        <p className="mt-11 text-[13px] text-black/70">Content</p>
        <a href="#blog" onClick={onClose} className="group mt-4 block max-w-[330px]">
          <div className="flex items-start gap-4">
            <img src={assets.blog2} alt="Beyond Reality article" loading="lazy" decoding="async" className="h-[68px] w-[108px] shrink-0 rounded-[5px] object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
            <span className="text-[15px] font-medium leading-[1.3]">Beyond Reality: Designing with digital light and texture</span>
          </div>
          <span className="mt-2 block pl-[124px] text-xl font-light text-black/60">↗</span>
        </a>
        <div className="mt-4 flex justify-center gap-1.5">
          <span className="h-1 w-1 rounded-full bg-black/30" />
          <span className="h-1 w-1 rounded-full bg-black/65" />
          <span className="h-1 w-1 rounded-full bg-black/30" />
        </div>
      </div>

      <div className="relative h-full min-h-[240px] overflow-hidden bg-[#c9c9c9]">
        <img src={assets.menuContact} alt="Person holding a smartphone" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/10" />
        <a href="#contact" onClick={onClose} className="absolute bottom-7 left-7 inline-flex items-center gap-3 rounded-[6px] bg-[#575757]/90 px-4 py-2.5 text-[14px] font-semibold text-white backdrop-blur transition-colors hover:bg-black md:bottom-10 md:left-10">
          Contact <span className="text-white/70">.</span>
        </a>
      </div>

      <button onClick={onClose} aria-label="Close menu" className="absolute right-5 top-5 z-10 grid h-[46px] w-[46px] place-items-center rounded-full bg-white text-[22px] font-light leading-none shadow-md transition-transform hover:rotate-90">
        ×
      </button>
    </motion.div>
    </motion.div>
  );
}

function Nav({ loaded }: { loaded: boolean }) {
  const nav = ["Home", "About", "Works (4)", "Blog", "Contact"];
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const lastY = useRef(0);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastY.current ? "down" : "up";
    lastY.current = latest;
    if (latest < 100) { setHidden(false); return; }
    setHidden(direction === "down");
  });

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={loaded ? { y: hidden || menuOpen ? -120 : 0, opacity: 1 } : { y: -24, opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 right-0 top-3 z-50 mx-auto flex h-[72px] w-full max-w-[calc(100vw-24px)] items-center justify-between rounded-[10px] bg-white/95 px-4 shadow-sm backdrop-blur md:top-4 md:h-[76px] md:px-7"
      >
      <div className="flex items-center gap-7">
        <button onClick={() => setMenuOpen(true)} className="flex h-10 w-10 flex-col justify-center gap-2" aria-label="Open menu">
          <span className="h-px w-9 bg-black" />
          <span className="h-px w-9 bg-black" />
        </button>
        <div className="hidden items-center gap-7 text-[15px] font-semibold md:flex">
          {nav.map((item) => (
            <a key={item} href={`#${item.split(" ")[0].toLowerCase()}`} className="transition-opacity hover:opacity-55">
              {item}
            </a>
          ))}
        </div>
      </div>

      <a href="#home" className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold tracking-[-0.055em] md:text-3xl">
        <BrandMark />
      </a>

      <div className="hidden items-center gap-5 md:flex">
        <img src={assets.henrik} alt="Founder portrait" className="h-11 w-11 rounded-[8px] object-cover" />
        <div className="leading-tight">
          <p className="font-semibold">Talk to Henrik</p>
          <p className="text-sm text-black/55">Founder at <BrandMark /></p>
        </div>
        <MagneticButton>Get in touch</MagneticButton>
      </div>
      </motion.nav>
      <AnimatePresence>{menuOpen ? <MenuOverlay onClose={() => setMenuOpen(false)} /> : null}</AnimatePresence>
    </>
  );
}

function Hero({ loaded }: { loaded: boolean }) {
  const slides = [
    {
      number: "01",
      subtitle: "Our studio",
      heading: <><BrandMark /> studio</>,
      title: "Our studio",
      image: assets.heroSlide1,
      thumb: assets.heroSlide1Thumb,
    },
    {
      number: "02",
      subtitle: "We create",
      heading: "World-class products",
      title: "World-class products",
      image: assets.heroSlide2,
      thumb: assets.heroSlide2,
    },
    {
      number: "03",
      subtitle: "We are an",
      heading: "Award-winning studio",
      title: "Award-winning studio",
      image: assets.heroSlide3,
      thumb: assets.heroSlide3,
    },
    {
      number: "04",
      subtitle: "We are",
      heading: "Driven by creativity",
      title: "Driven by creativity",
      image: assets.heroSlide4,
      thumb: assets.heroSlide4,
    },
  ];
  const [active, setActive] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const [heroInView, setHeroInView] = useState(true);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      setHeroInView(entry.isIntersecting);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!loaded || !heroInView) return;
    const interval = setInterval(() => {
      if (document.visibilityState === "visible") {
        setActive((prev) => (prev + 1) % slides.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [loaded, heroInView, slides.length]);

  return (
    <header id="home" ref={heroRef} className="relative min-h-screen bg-[#f3f3f2] p-3 pt-[96px] md:p-4 md:pt-[106px]">
      <Nav loaded={loaded} />

      <div className="mx-auto max-w-[1880px]">
        <div className="flex items-end justify-between gap-4 px-1 pb-4 md:px-4">
          <motion.h1
            initial={{ x: -120, opacity: 0 }}
            animate={loaded ? { x: 0, opacity: 1 } : { x: -120, opacity: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="hero-word"
          >
            <BrandMark supClassName="ml-1 align-super text-[0.28em] tracking-[-0.03em]" />
          </motion.h1>
          <motion.p
            initial={{ x: 120, opacity: 0 }}
            animate={loaded ? { x: 0, opacity: 1 } : { x: 120, opacity: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="hero-word hidden text-right md:block"
          >
            studio
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={loaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
          className="relative mt-5 h-[70vh] min-h-[560px] overflow-hidden rounded-[20px] bg-black md:h-[72vh]"
        >
          <motion.img
            key={slides[active].image}
            src={slides[active].image}
            alt={`${slides[active].title} hero visual`}
            fetchPriority={active === 0 ? "high" : "auto"}
            decoding="async"
            initial={{ opacity: 0.25 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

          <div className="absolute bottom-36 left-7 max-w-xl text-white md:bottom-40 md:left-10">
            <motion.p
              key={`sub-${slides[active].subtitle}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-white/50"
            >
              {slides[active].subtitle}
            </motion.p>
            <motion.h2
              key={`head-${active}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[580px] text-4xl font-semibold leading-[0.98] tracking-[-0.06em] md:text-6xl"
            >
              {slides[active].heading}
            </motion.h2>
            <div className="mt-7 flex gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.number}
                  onClick={() => setActive(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-1.5 transition-all duration-300 rounded-full ${active === index ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"}`}
                />
              ))}
            </div>
          </div>

          <div className="absolute bottom-7 left-6 right-6 grid grid-cols-2 gap-3 md:bottom-8 md:left-8 md:right-8 md:grid-cols-4 md:gap-6">
            {slides.map((slide, index) => (
              <motion.button
                key={slide.number}
                initial={{ opacity: 0, y: 30 }}
                animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.5 + index * 0.12 }}
                onClick={() => setActive(index)}
                className={`group flex min-w-0 items-center gap-3.5 rounded-[10px] p-2 text-left transition-all md:p-3 ${
                  active === index ? "bg-white/16 backdrop-blur-xl border border-white/20" : "bg-white/6 hover:bg-white/12 border border-white/5"
                }`}
              >
                <img src={slide.thumb} alt="" loading="lazy" decoding="async" className="h-12 w-16 shrink-0 rounded-[6px] object-cover md:h-[60px] md:w-[84px]" />
                <span className="min-w-0 flex-1 text-white">
                  <span className="block font-mono text-[11px] font-bold tracking-wider text-white/75">{slide.number}</span>
                  <span className="block truncate text-sm font-semibold md:text-[15px]">{slide.title}</span>
                  <span className="mt-2.5 block h-[2px] rounded-full bg-white/20 overflow-hidden">
                    <span className={`block h-full bg-white transition-all duration-500 ${active === index ? "w-full" : "w-0 group-hover:w-full"}`} />
                  </span>
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  );
}

function Clients() {
  const loop = [...logos, ...logos, ...logos];

  return (
    <section id="clients" className="section-pad section-deferred overflow-hidden bg-[#f3f3f2]">
      <div className="site-container grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <Reveal>
          <SectionLabel>Clients</SectionLabel>
          <h2 className="mt-8 max-w-[620px] text-5xl font-semibold leading-[0.98] tracking-[-0.065em] md:text-7xl">
            Enterprise partnerships, built on clarity and craft.
          </h2>
          <p className="mt-10 max-w-[430px] text-lg leading-snug text-black/70">
            <BrandMark /> is trusted by leading companies to translate strategy into design that delivers real results.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="rounded-[14px] bg-[#111214] p-7 text-white md:p-12">
          <div className="rounded-[10px] bg-[#2a2a2b] p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-7">
              <SectionLabel light>Authenticity</SectionLabel>
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <img key={i} src={assets.starGoldSvg} alt="star" loading="lazy" decoding="async" className="h-4 w-4" />
                ))}
              </div>
              <img src={assets.logoWhite} alt={`${BRAND} logo`} loading="lazy" decoding="async" className="h-4.5 w-auto opacity-95" />
            </div>
            <div className="flex flex-col gap-5 pt-7 md:flex-row md:items-center">
              <AvatarStack images={avatars} />
              <div>
                <p className="text-lg font-semibold">Trusted by directors of influence companies</p>
                <p className="mt-1 text-base text-white/62">World-class companies trust us</p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-5 text-white/55">
            <span className="h-px w-28 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.35))]" />
            <p className="font-mono text-xs uppercase tracking-[0.16em]">Based on reviews</p>
            <span className="h-px w-28 bg-[linear-gradient(90deg,rgba(255,255,255,.35),transparent)]" />
          </div>
        </Reveal>
      </div>

      <div className="relative mt-24">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#f3f3f2] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#f3f3f2] to-transparent" />
        <div className="marquee-track flex w-max gap-4">
          {loop.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="w-[242px] shrink-0 text-center md:w-[262px]">
              <div className="relative flex h-[245px] items-center justify-center rounded-[8px] bg-white shadow-[0_18px_50px_rgba(0,0,0,0.03)]">
                <p className="absolute top-8 text-xs font-bold text-black/25">({logo.number})</p>
                <img src={logo.src} alt={`${logo.name} logo`} loading="lazy" decoding="async" className="max-h-14 max-w-36 opacity-80" />
              </div>
              <h3 className="mt-7 text-xl font-medium tracking-[-0.04em] text-black/70">{logo.name}</h3>
              <p className="mt-2 text-base text-black/35">{logo.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCard({
  project,
  index,
}: {
  project: { name: string; niche: string; year: string; image: string; icon: string; color: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-2%", "2%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.02, 1, 1.02]);

  return (
    <div
      ref={ref}
      className="sticky bg-[#f3f3f2] pb-6 md:pb-8"
      style={{ top: `${110 + index * 30}px`, zIndex: index }}
    >
      <div className="mx-auto w-full max-w-[1640px] px-6 md:px-10">
        <div className="grid items-end gap-4 md:grid-cols-[80px_minmax(0,1fr)_80px]">
          <Reveal className="hidden self-end text-left md:block">
            <p className="section-label text-black/45">Year</p>
            <p className="mt-1 text-base font-semibold text-black/60">{project.year}</p>
          </Reveal>

          <motion.a
            href="#"
            className="group relative mx-auto block h-[450px] w-full max-w-[1520px] overflow-hidden rounded-none bg-zinc-200 md:h-[640px] lg:h-[780px]"
          >
          <motion.img
            src={project.image}
            alt={`${project.name} work cover`}
            loading="lazy"
            decoding="async"
            style={{ y: imgY, scale: imgScale }}
            className="absolute inset-0 h-[105%] w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/5 transition-colors group-hover:bg-black/0" />
          <div
            className="absolute left-1/2 top-12 flex -translate-x-1/2 items-center gap-5 rounded-[10px] px-3 py-2 text-white shadow-2xl backdrop-blur-md"
            style={{ background: project.color }}
          >
            <img src={project.icon} alt={`${project.name} icon`} loading="lazy" decoding="async" className="h-9 w-9 rounded-[7px] object-cover" />
            <span className="text-lg font-bold">{project.name}</span>
            <span className="font-mono text-xs uppercase tracking-[0.09em] text-white/72">See work</span>
          </div>
          </motion.a>

          <Reveal delay={0.1} className="hidden self-end text-right md:block">
            <p className="section-label text-black/45">Niche</p>
            <p className="mt-1 text-base font-semibold text-black/60">{project.niche}</p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

function Works() {
  const projects = [
    {
      name: "Kolch",
      niche: "Fashion",
      year: "2026",
      image: assets.workKolch,
      icon: assets.workKolchIcon,
      color: "rgba(122,84,51,0.72)",
    },
    {
      name: "Victoria",
      niche: "Art",
      year: "2025",
      image: assets.workVictoria,
      icon: assets.workVictoriaIcon,
      color: "rgba(42,52,38,0.72)",
    },
    {
      name: "Nuvik",
      niche: "Tech",
      year: "2024",
      image: assets.workNuvik,
      icon: assets.workNuvikIcon,
      color: "rgba(55,55,60,0.72)",
    },
    {
      name: "Auria",
      niche: "Events",
      year: "2024",
      image: assets.workAuria,
      icon: assets.workAuriaIcon,
      color: "rgba(40,40,48,0.72)",
    },
  ];

  return (
    <section id="works" className="section-deferred bg-[#f3f3f2] pb-12 pt-8">
      <div className="section-pad pb-0">
        <div className="site-container text-center">
          <Reveal>
            <SectionLabel>Works</SectionLabel>
            <h2 className="mx-auto mt-9 max-w-[760px] text-[clamp(3.5rem,6.5vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.08em]">
              Selected works (2023-2026)
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="mt-28 space-y-8">
        {projects.map((project, index) => (
          <WorkCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function Process() {
  const timeline = [
    { label: "Discovery", code: "01", left: "1%", top: "6%", width: "26%" },
    { label: "Research", code: "02", left: "20%", top: "22%", width: "22%" },
    { label: "Design", code: "03", left: "36%", top: "38%", width: "38%" },
    { label: "Development", code: "04", left: "62%", top: "54%", width: "28%" },
    { label: "Publishing", code: "05", left: "80%", top: "70%", width: "20%" },
    { label: "Content creation", code: "2.1", left: "28%", top: "82%", width: "46%" },
  ];

  const [resultIdx, setResultIdx] = useState(0);
  const results = [
    { brand: "Skurl", stat: "4× return on social media ad spend", image: assets.ice },
    { brand: "Kolch", stat: "78% increase in product sign-ups", image: assets.purse },
    { brand: "kobalt", stat: "22% drop in bounce rate", image: assets.motionPortrait },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (document.visibilityState === "visible") {
        setResultIdx((prev) => (prev + 1) % results.length);
      }
    }, 3200);
    return () => clearInterval(timer);
  }, [results.length]);

  return (
    <section id="about" className="section-pad section-deferred bg-[#101112] text-white">
      <div className="site-container">
        <Reveal className="mx-auto max-w-4xl text-center">
          <SectionLabel light>Why choose us</SectionLabel>
          <h2 className="mt-8 text-4xl font-semibold leading-[0.98] tracking-[-0.065em] md:text-6xl">
            We bring process, precision, and creative thinking to every partnership.
          </h2>
          <p className="mt-7 text-lg text-white/50">Transparent pricing, senior talent, and strategy-focused meetings.</p>
          <div className="mt-9">
            <MagneticButton href="#pricing" light>
              Learn more
            </MagneticButton>
          </div>
        </Reveal>

        <div className="mt-24 grid gap-5 lg:grid-cols-[0.95fr_1.45fr]">
          <Reveal className="relative min-h-[520px] overflow-hidden rounded-[14px] bg-[#202123]">
            <img
              src={assets.featureDesert}
              alt="Desert landscape"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10" />
            <div className="absolute left-1/2 top-10 w-[78%] -translate-x-1/2 rounded-[12px] bg-black/60 p-6 text-white shadow-2xl backdrop-blur-md md:top-12 md:p-7">
              <div className="flex items-center justify-between border-b border-white/12 pb-4">
                <div className="flex items-center gap-2">
                  <img src={assets.calendarSvg} alt="calendar" loading="lazy" decoding="async" className="h-4 w-4 opacity-75" />
                  <span className="font-mono text-xs uppercase tracking-[0.08em] text-white/60">Next calls</span>
                </div>
                <div className="flex -space-x-2">
                  <img src={assets.calendarPerson1} alt="Participant" loading="lazy" decoding="async" className="h-6 w-6 rounded-full border border-black/40 object-cover" />
                  <img src={assets.calendarPerson2} alt="Participant" loading="lazy" decoding="async" className="h-6 w-6 rounded-full border border-black/40 object-cover" />
                  <img src={assets.calendarPerson3} alt="Participant" loading="lazy" decoding="async" className="h-6 w-6 rounded-full border border-black/40 object-cover" />
                </div>
              </div>
              <div className="mt-5 grid grid-cols-7 gap-2 text-center text-xs">
                {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
                  <span key={day} className="font-medium text-white/75">
                    {day}
                  </span>
                ))}
                {Array.from({ length: 31 }, (_, index) => index + 1).map((day) => (
                  <span key={day} className={`rounded py-0.5 text-white/35 ${day === 14 ? "bg-white font-bold text-black" : ""}`}>
                    {day}
                  </span>
                ))}
              </div>
              <div className="mt-5 space-y-3 border-t border-white/10 pt-4 text-xs">
                <div>
                  <span className="font-bold text-white/90">8:30 AM</span>
                  <p className="text-white/70">Kickoff call with @Jaeho Park</p>
                </div>
                <div>
                  <span className="font-bold text-white/90">10:30 AM</span>
                  <p className="text-white/70">Updates and track with @Elise M.</p>
                </div>
                <div>
                  <span className="font-bold text-white/90">2 PM</span>
                  <p className="text-white/70">Wireframes presentation</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-9 left-8 max-w-[320px]">
              <h3 className="text-2xl font-semibold tracking-[-0.05em]">Weekly syncs</h3>
              <p className="mt-2 text-base leading-snug text-white/78">Every week, we align on priorities, review progress, and keep strategy sharp.</p>
            </div>
          </Reveal>

          <div className="grid gap-5">
            <Reveal delay={0.1} className="rounded-[14px] bg-[#1d1e20] p-7 md:p-8">
              {/* Header row */}
              <div className="flex flex-col gap-4 border-b border-white/8 pb-5 md:flex-row md:items-center md:justify-between">
                <h3 className="font-mono text-[12px] uppercase tracking-[0.18em] text-white/82">Timeline &amp; Process</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-3 text-[13px] text-white/82">
                    <span>+8 experts</span>
                    <AvatarStack images={experts} compact extra="" />
                  </div>
                  <div className="flex items-center gap-2 rounded-[7px] bg-white/6 px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-white/82">
                    <img src={assets.calendarWhiteSvg} alt="" loading="lazy" decoding="async" className="h-3 w-3 opacity-80" />
                    Project time: 8 weeks
                  </div>
                </div>
              </div>

              {/* Gantt timeline */}
              <div className="timeline-grid relative mt-6 h-[340px] overflow-hidden rounded-[8px]">
                {/* Column guide numbers */}
                {Array.from({ length: 7 }, (_, i) => (
                  <span
                    key={i}
                    className="absolute top-0 h-full w-px bg-white/4"
                    style={{ left: `${(i / 6) * 100}%` }}
                  />
                ))}

                {timeline.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.85, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute flex h-9 origin-left items-center gap-3 rounded-md border border-white/10 bg-[#1d1e20] px-3.5 text-[13px] font-medium text-white/90"
                    style={{ left: item.left, top: item.top, width: item.width }}
                  >
                    <span className="font-mono text-[10px] font-normal tracking-wider text-white/35">
                      {item.code}
                    </span>
                    <span className="truncate">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.18} className="relative min-h-[320px] overflow-hidden rounded-[14px] bg-[#12365a] p-8">
              <LazyVideo
                src={assets.waterVideo}
                poster={assets.water}
                className="absolute inset-0 h-full w-full object-cover opacity-95"
              />
              <div className="absolute inset-0 bg-black/25" />
              <div className="relative z-10 pt-10 text-center">
                <h3 className="text-xl font-semibold">Business results</h3>
                <p className="text-white/72">Generated by our team</p>
              </div>

              <div className="relative z-10 mt-6 flex justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={resultIdx}
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -12, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex w-[400px] max-w-[90%] items-center gap-4 rounded-[10px] bg-white/15 p-3.5 text-white shadow-2xl backdrop-blur-md"
                  >
                    <img src={results[resultIdx].image} alt={results[resultIdx].brand} loading="lazy" decoding="async" className="h-16 w-16 rounded-[8px] object-cover" />
                    <div className="flex-1 text-left">
                      <p className="font-mono text-xs uppercase tracking-[0.1em] text-white/50">{results[resultIdx].brand}</p>
                      <p className="text-[15px] font-semibold leading-tight">{results[resultIdx].stat}</p>
                    </div>
                    <img src={assets.checkboxSvg} alt="verified" loading="lazy" decoding="async" className="h-5 w-5 shrink-0 opacity-90" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dots */}
              <div className="relative z-10 mt-5 flex justify-center gap-1.5">
                {results.map((r, i) => (
                  <button
                    key={r.brand}
                    onClick={() => setResultIdx(i)}
                    aria-label={`View ${r.brand} result`}
                    className={`h-1.5 rounded-full transition-all ${resultIdx === i ? "w-5 bg-white" : "w-1.5 bg-white/40"}`}
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section-pad section-deferred bg-[#f3f3f2]">
      <div className="site-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <Reveal className="relative h-[620px] overflow-hidden rounded-[14px] bg-zinc-200">
          <motion.img
            src={assets.portrait}
            alt="Designer seated in studio"
            loading="lazy"
            decoding="async"
            whileInView={{ scale: 1.04 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-7 left-7 rounded-[10px] bg-white/90 p-4 backdrop-blur">
            <div className="flex items-center gap-3">
              <img src={assets.portraitSquare} alt="Carolina portrait" loading="lazy" decoding="async" className="h-12 w-12 rounded-[8px] object-cover" />
              <div>
                <p className="font-semibold">Carolina K.</p>
                <p className="text-sm text-black/50">Designer</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="lg:pl-16">
          <SectionLabel>About us</SectionLabel>
          <h2 className="mt-8 max-w-[780px] text-5xl font-semibold leading-[0.98] tracking-[-0.065em] md:text-7xl">
            A small design team that turns ideas into powerful digital experiences
          </h2>
          <p className="mt-8 max-w-[620px] text-lg leading-snug text-black/62">
            We are a small design team focused on clarity and craft. From branding to digital products, we help startups and growing teams turn ideas into thoughtful, functional experiences. Always hands-on.
          </p>
          <div className="mt-10">
            <MagneticButton href="#services">More about us</MagneticButton>
          </div>
          <div className="mt-16 grid gap-8 border-t border-black/12 pt-10 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.05em]">Canada based</h3>
              <p className="mt-2 text-black/55">Remote-friendly team growing fast</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.05em]">Small team, big results</h3>
              <p className="mt-2 text-black/55">We focus on quality over quantity</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  const N = serviceItems.length;
  const COPIES = 12;
  const loopItems = Array.from({ length: COPIES }, () => serviceItems).flat();

  const [pos, setPos] = useState(2);
  const [instant, setInstant] = useState(false);
  const [rowHeight, setRowHeight] = useState(80);
  const rowRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef(false);

  useLayoutEffect(() => {
    const measure = () => {
      if (rowRef.current) setRowHeight(rowRef.current.getBoundingClientRect().height);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (hoverRef.current || document.visibilityState !== "visible") return;
      setPos((prev) => prev + 1);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (pos >= loopItems.length - 3) {
      const timeout = setTimeout(() => {
        setInstant(true);
        setPos((prev) => prev % N);
        requestAnimationFrame(() => requestAnimationFrame(() => setInstant(false)));
      }, 900);
      return () => clearTimeout(timeout);
    }
  }, [pos, loopItems.length, N]);

  const activeIdx = ((pos % N) + N) % N;
  const current = serviceItems[activeIdx];

  return (
    <section
      id="services"
      className="section-deferred relative min-h-screen overflow-hidden bg-[#0f1011]"
      onMouseEnter={() => { hoverRef.current = true; }}
      onMouseLeave={() => { hoverRef.current = false; }}
    >
      {/* Background Images Crossfade Stack */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {serviceItems.map((item, index) => (
          <img
            key={item.name}
            src={item.image}
            alt={`${item.name} service visual`}
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
              index === activeIdx ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"
            }`}
            style={{ transitionProperty: "opacity, transform" }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 flex min-h-screen items-center justify-start p-4 md:p-8">
        <Reveal className="service-panel flex w-full max-w-[640px] lg:w-[48%] lg:max-w-[680px] flex-col justify-between rounded-[14px] bg-white px-8 py-12 shadow-2xl backdrop-blur-md md:px-12 md:py-16">
          <div className="mx-auto max-w-[480px] text-center">
            <SectionLabel>Our services</SectionLabel>
            <h2 className="mt-7 text-3xl font-semibold leading-[1.04] tracking-[-0.055em] md:text-5xl">
              Tailored digital services for your business
            </h2>
          </div>

          <div className="mt-14 flex flex-col items-center gap-8 text-center">
            <div className="flex items-center justify-center gap-5 md:gap-7">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-black/45">We do</p>
              <div
                className="relative overflow-hidden"
                style={{
                  height: rowHeight ? rowHeight * 3 : 240,
                  maskImage: "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
                }}
              >
                <motion.div
                  animate={{ y: -(pos - 1) * rowHeight }}
                  transition={instant ? { duration: 0 } : { duration: 0.85, ease: [0.65, 0, 0.35, 1] }}
                >
                  {loopItems.map((item, index) => {
                    const distance = Math.abs(index - pos);
                    const isActive = index === pos;
                    return (
                      <div
                        key={index}
                        ref={index === 0 ? rowRef : undefined}
                        className={`flex items-center justify-center py-1 text-[clamp(2.5rem,3.8vw,4.2rem)] tracking-[-0.035em] transition-all duration-500 ${
                          isActive
                            ? "font-semibold text-black not-italic"
                            : "font-normal italic text-black/25"
                        }`}
                        style={{ opacity: distance > 1 ? 0 : undefined, lineHeight: 1.25 }}
                      >
                        {item.name}
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </div>

            <div className="relative flex min-h-[4.2rem] w-full max-w-[420px] items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={current.text}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center text-[15px] font-medium leading-relaxed text-black/55"
                >
                  {current.text}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Reel() {
  return (
    <section className="section-deferred bg-[#f3f3f2] px-4 py-24 md:px-8 md:py-36">
      <motion.a
        href="#contact"
        whileHover={{ scale: 0.995 }}
        className="site-container relative block min-h-[560px] overflow-hidden rounded-[16px] bg-[#111214] p-6 text-white md:p-10"
      >
        <LazyVideo
          src={assets.showreelVideo}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 grid grid-cols-2 gap-4 font-mono text-xs uppercase tracking-[0.1em] text-white/62 md:grid-cols-5">
          {["Showreel 2025", "Hit the play", "Work in motion", "2025", "Our work"].map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div className="relative z-10 mt-28 flex flex-col items-center text-center">
          <p className="text-[clamp(5rem,15vw,16rem)] font-semibold leading-[0.76] tracking-[-0.09em]">Play</p>
          <p className="text-[clamp(5rem,15vw,16rem)] font-semibold leading-[0.76] tracking-[-0.09em]">Reel</p>
          <div className="mt-8 grid h-20 w-20 place-items-center rounded-full bg-white text-black transition-transform duration-300 hover:scale-110">
            <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-black" />
          </div>
          <p className="mt-8 max-w-[460px] text-lg text-white/72">What we make moves — visually and emotionally. Watch with sound for full effect.</p>
        </div>
      </motion.a>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote: "The redesign led by the team boosted our conversion rate by 32% in just two months. Beyond the numbers, they delivered a brand experience that finally feels aligned with who we are. Smart, intuitive, and incredibly collaborative.",
      name: "John Kobe",
      role: "Creative Director at Antra ®",
      avatar: assets.man1,
      image: assets.purse,
    },
    {
      quote: `${BRAND} brought clarity and elegance to every detail of our brand. The new visual identity elevated perception instantly and gave our team a system we can actually use.`,
      name: "Camille D.",
      role: "Founder of Liora Jewelry",
      avatar: assets.woman1,
      image: assets.abstract,
    },
    {
      quote: "Their strategy made every launch decision simpler. We shipped faster, improved our campaign story, and finally had a visual language built for growth.",
      name: "Jonas R.",
      role: "Co-founder of Vantar Snow",
      avatar: assets.man2,
      image: assets.winter,
    },
  ];
  const [active, setActive] = useState(0);
  const item = testimonials[active];

  return (
    <section className="section-pad section-deferred bg-[#f3f3f2]">
      <div className="site-container">
        <Reveal className="text-center">
          <div className="mb-3 flex items-center justify-center gap-1.5">
            <img src={assets.starBlackSvg} alt="star" loading="lazy" decoding="async" className="h-3.5 w-3.5" />
            <img src={assets.starBlackSvg} alt="star" loading="lazy" decoding="async" className="h-3.5 w-3.5" />
            <img src={assets.starBlackSvg} alt="star" loading="lazy" decoding="async" className="h-3.5 w-3.5" />
          </div>
          <h2 className="mx-auto mt-7 max-w-[760px] text-4xl font-semibold leading-[0.98] tracking-[-0.065em] md:text-6xl">
            World-class brands <img src={assets.bottle} alt="Product thumbnail" loading="lazy" decoding="async" className="mx-2 inline h-12 w-16 rounded-[8px] object-cover align-middle" /> trust and recommend us
          </h2>
          <div className="mt-6 flex justify-center">
            <SectionLabel>Testimonials</SectionLabel>
          </div>
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-[1120px]">
          {/* Stationary Navigation Arrows */}
          <button
            onClick={() => setActive((active + testimonials.length - 1) % testimonials.length)}
            aria-label="Previous testimonial"
            className="absolute -left-5 top-1/2 z-20 hidden -translate-x-full -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white p-3 text-black shadow-md transition-all hover:bg-black hover:text-white md:flex"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setActive((active + 1) % testimonials.length)}
            aria-label="Next testimonial"
            className="absolute -right-5 top-1/2 z-20 hidden translate-x-full -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white p-3 text-black shadow-md transition-all hover:bg-black hover:text-white md:flex"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Fixed-Height Testimonial Card */}
          <div className="grid overflow-hidden rounded-[14px] bg-white shadow-sm md:h-[500px] lg:h-[520px] md:grid-cols-2">
            {/* Left Content Column */}
            <div className="flex min-h-[380px] flex-col justify-between p-8 md:min-h-0 md:p-12 lg:p-14">
              <div className="flex shrink-0 items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <img key={i} src={assets.starGoldSvg} alt="star" loading="lazy" decoding="async" className="h-4 w-4" />
                ))}
              </div>

              {/* Quote Container with Stable Min-Height */}
              <div className="relative my-auto flex min-h-[170px] items-center py-4 md:min-h-[190px]">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={item.quote}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="text-xl font-medium leading-[1.38] tracking-[-0.03em] text-[#0f1011] md:text-2xl lg:text-[25px]"
                  >
                    "{item.quote}"
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Author Info */}
              <div className="flex shrink-0 items-center gap-4 border-t border-black/5 pt-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center gap-4"
                  >
                    <img
                      src={item.avatar}
                      alt={`${item.name} portrait`}
                      loading="lazy"
                      decoding="async"
                      className="h-12 w-12 shrink-0 rounded-[8px] object-cover"
                    />
                    <div>
                      <p className="font-semibold text-black">{item.name}</p>
                      <p className="text-sm text-black/55">{item.role}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Image Column: Pre-rendered Crossfade Stack */}
            <div className="relative h-[320px] w-full overflow-hidden bg-zinc-100 md:h-full">
              {testimonials.map((testimonial, index) => (
                <img
                  key={testimonial.name}
                  src={testimonial.image}
                  alt="Testimonial work visual"
                  loading="lazy"
                  decoding="async"
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                    index === active
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105 pointer-events-none"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                onClick={() => setActive(index)}
                aria-label={`Show testimonial ${index + 1}`}
                className={`h-2 w-2 rounded-full transition-all ${
                  active === index ? "w-6 bg-black" : "bg-black/25 hover:bg-black/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-24 grid gap-8 text-center md:grid-cols-3">
          <Reveal>
            <div className="stat-number"><span className="text-[0.28em] align-top">$</span>43M</div>
            <p className="mt-4 text-lg font-semibold text-black/35">Revenue influenced by our work</p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="stat-number">87<span className="text-[0.32em]">K</span></div>
            <p className="mt-4 text-lg font-semibold text-black/35">Leads generated for our clients</p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="stat-number">268</div>
            <p className="mt-4 text-lg font-semibold text-black/35">Brands we've partnered with</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SpinningSphere() {
  return (
    <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full shadow-[0_0_80px_rgba(80,110,220,0.35)]">
      <LazyVideo
        src={assets.orbVideo}
        className="h-full w-full rounded-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 rounded-full border border-white/20" />
    </div>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Starter",
      tag: "Premium plan",
      price: "2850",
      text: "The Starter Plan is built for early-stage businesses looking to craft a refined and consistent visual presence.",
      features: ["Fast design & dev, built for scale", "Dedicated creative team", "Average 2–3 day turnaround", "Ongoing design-to-build support"],
      dark: true,
    },
    {
      name: "Growth",
      tag: "Exclusive",
      price: "4850",
      text: "The Growth Plan gives you access to strategic, conversion-focused design support to scale your brand.",
      features: ["Unlimited tasks, one at time", "Dedicated support and creative team", "Average 24h turnaround", "Branding and dev sprints"],
      dark: false,
    },
  ];

  return (
    <section id="pricing" className="section-deferred relative overflow-hidden bg-[#101112] px-4 py-24 text-white md:px-8 md:py-32">
      <div className="site-container relative z-10">

        {/* Header row: label top-left, huge Pricing top-right */}
        <div className="mb-12 flex items-start justify-between gap-8">
          <Reveal className="pt-3">
            <SectionLabel light>Transparent Pricing</SectionLabel>
          </Reveal>
          <Reveal>
            <h2 className="text-[clamp(5rem,11vw,12rem)] font-semibold leading-[0.82] tracking-[-0.07em]">Pricing</h2>
          </Reveal>
        </div>

        {/* 3-column card grid */}
        <div className="grid gap-3 lg:grid-cols-3">

          {/* Left card — sphere + trust */}
          <Reveal className="flex flex-col justify-between rounded-[14px] bg-[#1c1d1f] p-8">
            {/* Sphere area */}
            <div className="flex flex-1 items-center justify-center py-8">
              <SpinningSphere />
            </div>

            {/* Created by humans */}
            <div className="mt-4 text-center">
              <p className="flex items-center justify-center gap-2 text-[15px] font-semibold">
                <img src={assets.lightningSvg} alt="lightning" loading="lazy" decoding="async" className="h-4 w-4" /> Created by humans
              </p>
              <p className="mt-1 text-sm text-white/50">Powered by AI</p>
            </div>

            {/* Divider + trust */}
            <div className="mt-8 border-t border-dashed border-white/15 pt-6">
              <AvatarStack images={avatars} />
              <p className="mt-4 text-[15px] font-semibold leading-snug">Trusted by directors of influence companies</p>
              <p className="mt-1 text-sm text-white/50">World-class companies trust us</p>
            </div>
          </Reveal>

          {/* Starter plan */}
          {plans.map((plan, idx) => (
            <Reveal key={plan.name} delay={0.08 + idx * 0.1} className="flex flex-col rounded-[14px] bg-[#1c1d1f] p-8 md:p-10">
              <div className="flex-1">
                {/* Plan name row */}
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-semibold tracking-[-0.04em]">{plan.name}</h3>
                  <span className="h-px flex-1 bg-white/15" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">• {plan.tag}</span>
                </div>

                {/* Plan description */}
                <p className="mt-5 text-[14px] leading-relaxed text-white/58">{plan.text}</p>

                {/* Price */}
                <div className="mt-7 flex items-end gap-1">
                  <span className="mb-1 self-start text-xl font-semibold text-white/90">$</span>
                  <span className="text-[clamp(3.2rem,5vw,4rem)] font-semibold leading-none tracking-[-0.06em]">{plan.price}</span>
                  <span className="mb-1 ml-1 text-sm text-white/50">/monthly</span>
                </div>

                {/* Features */}
                <ul className="mt-8 space-y-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-[14px] text-white/72">
                      <img src={assets.checkboxGreySvg} alt="check" loading="lazy" decoding="async" className="h-4 w-4 shrink-0 opacity-80" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-10">
                <div className="mb-4 flex items-center gap-3 text-[11px] text-white/40">
                  <span className="h-px flex-1 border-t border-dashed border-white/20" />
                  Your plan
                  <span className="h-px flex-1 border-t border-dashed border-white/20" />
                </div>
                <a
                  href="#contact"
                  className={`flex w-full items-center justify-between rounded-[10px] px-6 py-4 text-[15px] font-semibold transition-all hover:opacity-90 ${
                    plan.dark
                      ? "bg-[#2d2f32] text-white hover:bg-[#383b3f]"
                      : "bg-white text-black hover:bg-zinc-100"
                  }`}
                >
                  Get {plan.name}
                  <span className="ml-2 opacity-60">→</span>
                </a>
                <p className="mt-4 text-center text-[12px] text-white/40">✓ 7-day money-back guarantee</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Abstract holographic shape at bottom */}
      <div className="pointer-events-none relative mt-0 flex justify-center overflow-hidden">
        <img
          src={assets.abstract}
          alt="Abstract holographic shape"
          loading="lazy"
          decoding="async"
          className="w-[700px] max-w-[90vw] translate-y-[38%] opacity-95"
        />
      </div>
    </section>
  );
}

function FAQBlog() {
  const faqs = [
    ["What type of clients do you usually work with?", "We typically work with startups, scale-ups, and modern brands across tech, fashion, lifestyle, and wellness."],
    ["How long does a typical project take?", "Most projects take between 3 to 6 weeks, depending on scope and complexity."],
    ["Do you offer ongoing support after a project ends?", "Yes. We offer retainer options and flexible support plans for continued updates, design needs, or new campaigns."],
    ["How do I get started or request a proposal?", "Reach out through the contact form or email us directly. After an intro call, we send a tailored proposal."],
  ];
  const [open, setOpen] = useState(0);

  return (
    <section id="blog" className="section-pad section-deferred bg-[#f3f3f2]">
      <div className="site-container">
        <Reveal>
          <h2 className="border-b border-dotted border-black/35 pb-4 text-3xl font-semibold tracking-[-0.055em]">(Still got questions?)</h2>
        </Reveal>

        <div className="mt-8 grid gap-2 lg:grid-cols-2">
          <Reveal className="grid gap-2">
            <div className="flex flex-wrap items-center gap-7 rounded-[8px] bg-white p-6">
              <div className="flex items-center gap-4">
                <img src={assets.member2} alt="Support contact" loading="lazy" decoding="async" className="h-12 w-12 rounded-[8px] object-cover" />
                <div>
                  <p className="font-semibold">Talk to Chris</p>
                  <p className="text-sm text-black/55">Support at <BrandMark /></p>
                </div>
              </div>
              <div className="h-10 w-px bg-black/12" />
              <div>
                <p className="section-label text-black/45">Email</p>
                <p className="font-semibold">hello@veyra.design</p>
              </div>
              <div>
                <p className="section-label text-black/45">Instagram</p>
                <p className="font-semibold">@weareveyra</p>
              </div>
              <div>
                <p className="section-label text-black/45">Phone</p>
                <p className="font-semibold">+1 369 53546</p>
              </div>
            </div>
            <div className="h-[240px] overflow-hidden rounded-[8px] bg-white md:h-[290px]">
              <img src={assets.walkie} alt="Hand holding a retro radio" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-2">
            {faqs.map(([question, answer], index) => (
              <div key={question} className="overflow-hidden rounded-[8px] bg-white">
                <button onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center gap-5 p-6 text-left">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-black text-xs font-bold text-white">{index + 1}</span>
                  <span className="flex-1 text-lg font-semibold tracking-[-0.03em]">{question}</span>
                  <span className="text-3xl font-light">+</span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: open === index ? "auto" : 0, opacity: open === index ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="px-16 pb-6 text-black/58">{answer}</p>
                </motion.div>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="mt-28 grid gap-8 lg:grid-cols-[0.72fr_1fr_1fr]">
          <Reveal>
            <SectionLabel>Blog posts</SectionLabel>
            <h2 className="mt-4 text-4xl font-semibold leading-[0.98] tracking-[-0.065em] md:text-5xl">
              Latest content from <BrandMark />
            </h2>
            <div className="mt-8">
              <MagneticButton href="#">View all</MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="overflow-hidden rounded-[8px] bg-white">
            <div className="relative h-[320px] overflow-hidden">
              <img src={assets.blog1} alt="Winter campaign article" loading="lazy" decoding="async" className="h-full w-full object-cover" />
              <span className="absolute left-4 top-4 rounded-[4px] bg-white px-3 py-2 font-mono text-xs font-bold uppercase">News</span>
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-semibold leading-[0.98] tracking-[-0.055em]">Resilience in Focus: Capturing grit for a winter brand</h3>
              <div className="mt-6 grid gap-4 border-t border-dotted border-black/35 pt-5 md:grid-cols-2">
                <p className="font-mono text-xs uppercase tracking-[0.08em] text-black/55">December 22, 2025</p>
                <p className="text-sm text-black/55">Learn how raw weather and dramatic natural settings can intensify visual storytelling.</p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {[
              { tag: "Insight", date: "December 20, 2025", title: "Beyond Reality: Designing with digital light and texture", image: assets.blog2 },
              { tag: "Content", date: "December 18, 2025", title: "Breaking Perspective: The power of fashion photography", image: assets.blog3 },
            ].map((post, index) => (
              <Reveal key={post.title} delay={0.12 + index * 0.06} className="rounded-[8px] bg-white p-5">
                <div className="grid gap-5 md:grid-cols-[160px_1fr]">
                  <div className="relative h-24 overflow-hidden rounded-[5px]">
                    <img src={post.image} alt="Blog post visual" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                    <span className="absolute left-2 top-2 rounded-[3px] bg-white px-2 py-1 font-mono text-[10px] font-bold uppercase">{post.tag}</span>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.08em] text-black/45">{post.date}</p>
                    <h3 className="mt-3 text-xl font-semibold leading-tight tracking-[-0.04em]">{post.title}</h3>
                  </div>
                </div>
                <p className="mt-5 border-t border-dotted border-black/35 pt-5 text-sm leading-snug text-black/55">
                  Explore how unconventional visual systems elevate brand personality and make subjects larger than life.
                </p>
                <a href="#" className="mt-8 inline-block font-mono text-xs font-bold uppercase underline underline-offset-2">Read now</a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [trail, setTrail] = useState<{ id: number; x: number; y: number; src: string; rotation: number }[]>([]);
  const lastTrailPos = useRef({ x: 0, y: 0 });
  const trailIndex = useRef(0);

  const trailImages = [
    assets.motionPortrait,
    assets.basketball,
    assets.hero,
    assets.ice,
    assets.tablet,
    assets.winter,
  ];

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (sectionRef.current) {
      sectionRef.current.style.setProperty("--spot-x", `${(x / rect.width) * 100}%`);
      sectionRef.current.style.setProperty("--spot-y", `${(y / rect.height) * 100}%`);
    }

    const dist = Math.hypot(x - lastTrailPos.current.x, y - lastTrailPos.current.y);
    if (dist > 95) {
      lastTrailPos.current = { x, y };
      const newImg = trailImages[trailIndex.current % trailImages.length];
      trailIndex.current += 1;
      const id = Date.now() + Math.random();
      const rotation = (Math.random() - 0.5) * 20;
      setTrail((prev) => [...prev.slice(-4), { id, x, y, src: newImg, rotation }]);
      setTimeout(() => {
        setTrail((prev) => prev.filter((item) => item.id !== id));
      }, 950);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="contact-spot dot-grid section-deferred relative min-h-screen overflow-hidden bg-[#101112] px-4 py-24 text-white md:px-8"
      onMouseMove={handleMouseMove}
    >
      {/* Floating image trail */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {trail.map((item) => (
          <motion.img
            key={item.id}
            src={item.src}
            alt=""
            loading="lazy"
            decoding="async"
            initial={{ opacity: 0.8, scale: 0.65, rotate: item.rotation }}
            animate={{ opacity: 0, scale: 1.05, y: -24 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            style={{ left: item.x - 70, top: item.y - 85 }}
            className="absolute h-44 w-36 rounded-[10px] object-cover shadow-2xl"
          />
        ))}
      </div>
      <div className="pointer-events-none absolute left-0 right-0 top-4 overflow-hidden">
        <div className="marquee-track flex w-max gap-10 font-mono text-[10px] uppercase tracking-[0.18em] text-white/20">
          {Array.from({ length: 18 }, (_, i) => (
            <span key={i}>Move your mouse —</span>
          ))}
        </div>
      </div>
      <div className="site-container relative z-10 grid min-h-[calc(100vh-12rem)] items-center gap-16 lg:grid-cols-[0.75fr_1fr]">
        <Reveal>
          <SectionLabel light>Let's talk</SectionLabel>
          <h2 className="mt-8 max-w-[520px] text-5xl font-semibold leading-[0.98] tracking-[-0.065em] md:text-7xl">
            Start your project with <BrandMark />
          </h2>
          <div className="mt-9">
            <MagneticButton light href="mailto:hello@veyra.design">More info</MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <form onSubmit={(event) => event.preventDefault()} className="overflow-hidden rounded-[12px] bg-white text-black shadow-2xl" aria-label="Contact form">
            <div className="grid md:grid-cols-2">
              <label htmlFor="contact-name" className="border-b border-black/20 p-6 md:border-r">
                <span className="block text-sm font-semibold">Name</span>
                <input id="contact-name" name="name" autoComplete="name" className="mt-7 w-full bg-transparent text-sm outline-none placeholder:text-black/45" placeholder="Type here" />
              </label>
              <label htmlFor="contact-email" className="border-b border-black/20 p-6">
                <span className="block text-sm font-semibold">Email Address</span>
                <input id="contact-email" name="email" autoComplete="email" className="mt-7 w-full bg-transparent text-sm outline-none placeholder:text-black/45" placeholder="Type here" type="email" />
              </label>
            </div>
            <label htmlFor="contact-message" className="block border-b border-black/20 p-6">
              <span className="block text-sm font-semibold">About your project</span>
              <textarea id="contact-message" name="message" className="mt-7 h-28 w-full resize-none bg-transparent text-sm outline-none placeholder:text-black/45" placeholder="Type here" />
            </label>
            <div className="p-6">
              <label htmlFor="contact-newsletter" className="flex items-center gap-3 text-sm text-black/65">
                <input id="contact-newsletter" name="newsletter" type="checkbox" className="h-4 w-4 accent-black" />
                I also want to receive product and services offerings
              </label>
              <button type="submit" className="mt-7 rounded-[8px] bg-[#101112] px-8 py-4 text-sm font-bold text-white shadow-[0_22px_40px_rgba(0,0,0,0.24)]">
                Send message
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const columns = [
    { title: "Pages", links: ["Home", "About", "Work"] },
    { title: "Works", links: ["Works (1)", "Works (2)", "Works (3)"] },
    { title: "Blog", links: ["Blog (1)", "Blog (2)", "Blog (3)"] },
    { title: "Contact", links: ["Contact (1)", "Contact (2)", "Contact (3)"] },
  ];

  return (
    <footer className="section-deferred bg-white px-4 py-24 text-black md:px-8 md:py-32">
      <div className="site-container">
        <div className="grid gap-20 lg:grid-cols-[0.85fr_1fr]">
          <div>
            <SectionLabel>Footer</SectionLabel>
            <h2 className="mt-5 max-w-[440px] text-4xl font-semibold leading-[1] tracking-[-0.06em] md:text-5xl">
              Not just a <BrandMark /> studio, we are creators.
            </h2>
            <div className="mt-20 max-w-[360px]">
              <p className="section-label text-black/55">Newsletter</p>
              <form onSubmit={(event) => event.preventDefault()} className="mt-5 flex rounded-[8px] bg-[#e8e8e8] p-1.5" aria-label="Newsletter signup">
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input id="newsletter-email" name="email" type="email" autoComplete="email" className="min-w-0 flex-1 bg-transparent px-5 text-sm outline-none placeholder:text-black/45" placeholder="Email address" />
                <button type="submit" className="rounded-[7px] bg-[#777] px-7 text-sm font-bold text-white">Submit</button>
              </form>
            </div>
            <div className="mt-12 flex items-center gap-5">
              <p className="section-label text-black/55">Social</p>
              <SocialIcons />
            </div>
            <p className="mt-7 text-xs text-black/65">(c) 2026 <BrandMark /> - All rights reserved.</p>
          </div>

          <div className="self-center">
            <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
              {columns.map((column) => (
                <div key={column.title}>
                  <p className="section-label text-black/55">{column.title}</p>
                  <div className="mt-7 space-y-2">
                    {column.links.map((link) => (
                      <a key={link} href="#" className="block text-3xl font-medium leading-none tracking-[-0.06em] hover:opacity-55">
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-14 flex flex-wrap gap-7 text-xs text-black/65">
              {["Instructions", "Style guide", "Licenses", "Changelog"].map((item) => (
                <a key={item} href="#" className="hover:underline">{item}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-28 overflow-x-hidden pb-2">
          <p className="footer-word">
            <BrandMark supClassName="ml-2 align-super text-[0.24em] tracking-[-0.03em]" />
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const handleLoaded = useRef(() => setLoaded(true)).current;

  return (
    <>
      <LoadingScreen onComplete={handleLoaded} />
      <main>
        <Hero loaded={loaded} />
        <Clients />
        <Works />
        <Process />
        <About />
        <Services />
        <Reel />
        <Testimonials />
        <Pricing />
        <FAQBlog />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
