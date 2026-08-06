import {
  ArrowRight,
  BarChart3,
  Bell,
  CalendarDays,
  Check,
  ClipboardList,
  Dumbbell,
  Instagram,
  Linkedin,
  Medal,
  MessageCircle,
  Play,
  Send,
  Star,
  Trophy,
  UserRoundCheck,
  UsersRound,
  Youtube,
  Facebook,
  TrendingUp,
  Megaphone,
} from 'lucide-react';

const A = '/assets/';

const features = [
  {
    title: 'Athlete Performance Tracking',
    text: 'Monitor stats, progress, attendance, and growth with detailed analytics and coach evaluations across every training cycle.',
    icon: BarChart3,
    tone: 'blue',
  },
  {
    title: 'Team Management',
    text: 'Organize rosters, manage coaching staff, assign roles, and keep every team member connected and informed in real time.',
    icon: UsersRound,
    tone: 'purple',
  },
  {
    title: 'Match Scheduling',
    text: 'Auto-generate match schedules, manage venues, resolve conflicts, and send instant notifications to all participants.',
    icon: CalendarDays,
    tone: 'green',
  },
  {
    title: 'Training Programs',
    text: 'Build structured training plans, assign drills, track completion rates, and monitor improvement across sessions.',
    icon: Dumbbell,
    tone: 'orange',
  },
  {
    title: 'Achievements & Rankings',
    text: 'Celebrate milestones with achievement badges, leaderboards, and live tournament standings that motivate athletes to excel.',
    icon: Trophy,
    tone: 'blue2',
  },
  {
    title: 'Progress Analytics',
    text: 'Data-driven insights for coaches and organizations to identify talent, spot weaknesses, and make smarter decisions.',
    icon: MessageCircle,
    tone: 'coral',
  },
];

const roles = [
  {
    label: 'Athletes',
    title: 'Train Smarter',
    text: 'Track personal progress, view training plans, receive feedback, and compete with confidence every session.',
    image: 'asset-15.png',
    tone: 'blue',
  },
  {
    label: 'Coaches',
    title: 'Lead With Data',
    text: 'Manage rosters, build programs, evaluate athletes, and communicate with your entire squad from one dashboard.',
    image: 'asset-16.png',
    tone: 'blue',
  },
  {
    label: 'Parents',
    title: 'Stay Connected',
    text: "Follow your child's journey, receive schedule updates, and celebrate every milestone in real time.",
    image: 'asset-17.png',
    tone: 'green',
  },
  {
    label: 'Organizations',
    title: 'Scale Programs',
    text: 'Run tournaments, manage federations, and grow your sports community with enterprise-grade tools built for scale.',
    image: 'asset-18.png',
    tone: 'orange',
  },
];

const testimonials = [
  {
    quote: 'CHMPYN completely changed how we manage our regional tournament. What used to take days of spreadsheet work now happens automatically. It\'s genuinely incredible technology.',
    name: 'Marcus Thompson',
    role: 'Tournament Director · Regional Football League',
    image: 'asset-23.png',
  },
  {
    quote: 'The athlete tracking and feedback system is unmatched. My players can see exactly where they need to improve, and I can measure progress objectively. Performances improved 25% in one season.',
    name: 'Larry Joe Bird',
    role: 'Head Coach · National Athletics Academy',
    image: 'asset-24.png',
  },
  {
    quote: 'From registration to the championship final, every step ran flawlessly. Parents, coaches, and athletes stayed informed and engaged throughout. CHMPYN is the future of sports management.',
    name: 'Coach Cooper, Charles',
    role: 'Sports Manager · Youth Cricket Board of India',
    image: 'asset-25.png',
  },
];

function Logo({ light = false }) {
  return (
    <a className={`logo ${light ? 'logo--light' : ''}`} href="#home" aria-label="CHMPYN home">
      <span className="logo__mark"><Trophy size={20} strokeWidth={2.2} /></span>
      <span className="logo__word">CHMPYN</span>
    </a>
  );
}

function Eyebrow({ children, light = false, icon = false }) {
  return <div className={`eyebrow ${light ? 'eyebrow--light' : ''}`}>{icon && <Trophy size={12} />}{children}</div>;
}

function Navbar() {
  return (
    <header className="nav-shell">
      <div className="nav container">
        <Logo />
        <nav className="nav__links" aria-label="Primary navigation">
          <a className="active" href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#contact">Contact Us</a>
        </nav>
        <a className="button button--primary button--nav" href="#download">Download App</a>
      </div>
    </header>
  );
}

function DashboardCard() {
  const ranking = [
    ['asset-00.png', 'Blue Stars FC', '38 pts'],
    ['asset-02.png', 'City Hawks', '35 pts'],
    ['asset-01.png', 'Phoenix United', '33 pts'],
  ];
  return (
    <div className="hero-dashboard" aria-label="CHMPYN athlete dashboard preview">
      <div className="window-bar">
        <div className="window-dots"><i /><i /><i /></div>
        <span>CHMPYN — Athlete Dashboard</span>
      </div>
      <div className="dashboard-body">
        <div className="dashboard-title-row">
          <div>
            <h3>Spring Championship 2026</h3>
            <p>Active Season · 24 Teams Competing</p>
          </div>
          <span className="live-dot">●&nbsp; Live</span>
        </div>
        <div className="mini-stats">
          <div><strong>87</strong><span>Matches Played</span></div>
          <div><strong>348</strong><span>Athletes</span></div>
          <div><strong className="green">24</strong><span>Teams</span></div>
        </div>
        <div className="ranking-card">
          <h4>Top Rankings</h4>
          {ranking.map((row, index) => (
            <div className="rank-row" key={row[1]}>
              <span className={`rank-index rank-${index + 1}`}>{index + 1}</span>
              <img src={`${A}${row[0]}`} alt="" />
              <b>{row[1]}</b>
              <strong>{row[2]}</strong>
            </div>
          ))}
        </div>
        <div className="next-match">
          <span className="next-match__icon"><CalendarDays size={18} /></span>
          <span><b>Next: Blue Stars vs City Hawks</b><small>Tomorrow · Stadium A · 4:00 PM</small></span>
          <em>QF</em>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <div className="hero__copy">
          <h1>The Future<br />Of Sports<br /><span>Starts Here</span></h1>
          <p>CHMPYN brings athletes, teams, coaches, and sports communities together through one intelligent platform built for champions.</p>
          <a className="button button--outline hero__watch" href="#about"><Play size={17} fill="currentColor" />Watch Demo</a>
          <div className="hero-proof">
            <div className="avatar-stack">
              {['asset-00.png', 'asset-01.png', 'asset-02.png', 'asset-03.png'].map((x) => <img src={`${A}${x}`} alt="" key={x} />)}
            </div>
            <div className="proof-count"><b>10,000+</b> <span>athletes worldwide</span></div>
            <div className="proof-divider" />
            <div className="proof-rating"><div>★★★★★</div><span>Rated by coaches</span></div>
          </div>
        </div>
        <DashboardCard />
      </div>
    </section>
  );
}

function StatStrip() {
  const stats = [['50K+', 'Active Athletes'], ['5K+', 'Sports Teams'], ['100K+', 'Matches Managed'], ['20+', 'Sports Categories'], ['95%', 'User Satisfaction']];
  return (
    <section className="stat-strip">
      <div className="container stat-strip__inner">
        {stats.map(([value, label]) => <div className="big-stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </div>
    </section>
  );
}

function Overview() {
  return (
    <section className="section overview" id="about">
      <div className="container">
        <div className="section-heading">
          <Eyebrow>PLATFORM OVERVIEW</Eyebrow>
          <h2>Everything Athletes<br />Need to <span>Succeed</span></h2>
          <p>A complete sports ecosystem purpose-built for athletes, coaches,<br className="desktop-br" /> teams, and organizations at every level.</p>
        </div>
        <div className="feature-grid">
          {features.map(({ title, text, icon: Icon, tone }) => (
            <article className={`feature-card tone-${tone}`} key={title}>
              <div className="feature-icon"><Icon size={24} strokeWidth={2} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhoneFrame({ src, className = '' }) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone__notch" />
      <img src={`${A}${src}`} alt="CHMPYN mobile app screen" />
    </div>
  );
}

function Growth() {
  const bullets = [
    [TrendingUp, 'Real-time performance metrics updated after every session', 'blue'],
    [Star, 'Personalized coach feedback and improvement plans', 'green'],
    [Medal, 'Achievement badges and milestone tracking for motivation', 'purple'],
  ];
  return (
    <section className="section growth">
      <div className="container growth__inner">
        <div className="growth__copy">
          <Eyebrow>ATHLETE GROWTH</Eyebrow>
          <h2>Watch Every Athlete<br /><span>Rise to the Top</span></h2>
          <p>Track individual progress with detailed analytics, personalized feedback from coaches, and performance benchmarks across every competition cycle.</p>
          <div className="bullet-list">
            {bullets.map(([Icon, text, tone]) => <div className="bullet" key={text}><span className={`bullet__icon ${tone}`}><Icon size={20} /></span><b>{text}</b></div>)}
          </div>
        </div>
        <div className="growth__visual">
          <div className="phone-glow" />
          <PhoneFrame src="asset-10.png" className="phone--growth" />
        </div>
      </div>
    </section>
  );
}

function Collaboration() {
  const cards = [
    [MessageCircle, 'Team Announcements', 'Broadcast updates to the full squad, specific groups, or individual athletes instantly.', 'blue'],
    [CalendarDays, 'Shared Schedules', 'Unified training and match calendars visible to all team members across devices.', 'purple'],
    [UserRoundCheck, 'Attendance Tracking', 'Automatically record and report attendance for every training session and match.', 'green'],
    [ClipboardList, 'Coach Notes & Feedback', "Deliver private evaluations and growth insights directly to each athlete's profile.", 'orange'],
  ];
  return (
    <section className="section collaboration">
      <div className="container">
        <div className="section-heading collaboration__heading">
          <Eyebrow>TEAM COLLABORATION</Eyebrow>
          <h2>Built for Teams That<br /><span>Win Together</span></h2>
          <p>Keep every coach and athlete aligned with real-time communication, shared schedules, and collaboration tools.</p>
        </div>
        <div className="collaboration__grid">
          <div className="collab-features">
            {cards.map(([Icon, title, text, tone]) => (
              <div className="collab-item" key={title}>
                <span className={`collab-item__icon ${tone}`}><Icon size={21} /></span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </div>
            ))}
          </div>
          <div className="activity-card">
            <h3>Team Activity Feed</h3>
            <div className="coach-message message-row">
              <img src={`${A}asset-12.png`} alt="Coach Ramsey" />
              <div className="message-bubble"><b>Coach Ramsey</b><p>Great session today! Focus on defensive positioning before Saturday's match. Watch the drill video I shared.</p></div>
            </div>
            <div className="athlete-reply">
              <p>Understood, Coach! Already reviewed the video. Ready for Saturday. 🏆</p>
              <img src={`${A}asset-00.png`} alt="Athlete" />
            </div>
            <div className="announcement-message">
              <span><Megaphone size={18} /></span>
              <div><b>Team Announcement</b><p>Match vs City Hawks rescheduled to 4:30 PM. Venue confirmed: Stadium A. Transport leaves at 3:00 PM.</p></div>
            </div>
            <div className="composer"><span>Write a message...</span><button aria-label="Send message"><Send size={18} /></button></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Roles() {
  return (
    <section className="section roles">
      <div className="container">
        <div className="section-heading">
          <Eyebrow>BUILT FOR EVERYONE</Eyebrow>
          <h2>Every Role. One<br /><span>Platform.</span></h2>
          <p>CHMPYN connects every stakeholder in the sports ecosystem —<br className="desktop-br" /> from grassroots to national level.</p>
        </div>
        <div className="role-grid">
          {roles.map((role) => (
            <article className="role-card" key={role.label}>
              <img src={`${A}${role.image}`} alt={`${role.label} portrait`} />
              <span className={`role-pill ${role.tone}`}>{role.label}</span>
              <h3>{role.title}</h3>
              <p>{role.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileShowcase() {
  return (
    <section className="section mobile-showcase">
      <div className="container">
        <div className="section-heading">
          <Eyebrow>MOBILE APP</Eyebrow>
          <h2>CHMPYN In Your<br /><span>Pocket</span></h2>
          <p>Take your entire sports management experience everywhere —<br className="desktop-br" /> available on iOS and Android.</p>
        </div>
        <div className="phone-trio">
          <PhoneFrame src="asset-19.png" className="phone--side phone--left" />
          <PhoneFrame src="asset-20.png" className="phone--center" />
          <PhoneFrame src="asset-21.png" className="phone--side phone--right" />
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-heading">
          <Eyebrow>TESTIMONIALS</Eyebrow>
          <h2>What <span>Champions</span> Say</h2>
          <p>Real experiences from athletes, coaches, and organizations<br className="desktop-br" /> that transformed with CHMPYN.</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <div className="stars">★★★★★</div>
              <blockquote>“{item.quote}”</blockquote>
              <div className="testimonial-author">
                <img src={`${A}${item.image}`} alt={item.name} />
                <div><h3>{item.name}</h3><p>{item.role}</p></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DownloadSection() {
  return (
    <section className="download-section" id="download">
      <div className="container download-section__inner">
        <div>
          <Eyebrow>DOWNLOAD APP</Eyebrow>
          <h2>Take CHMPYN<br /><span>Everywhere</span></h2>
          <p>Available on iOS and Android. Manage teams, track performance, and stay connected from anywhere — no laptop required.</p>
        </div>
        <div className="store-badges">
          <a href="#download" aria-label="Download on the App Store"><img src={`${A}app-store.png`} alt="Download on the App Store" /></a>
          <a href="#download" aria-label="Get it on Google Play"><img src={`${A}google-play.png`} alt="Get it on Google Play" /></a>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta__rings" />
      <div className="container final-cta__content">
        <Eyebrow light icon>CHAMPIONSHIP JOURNEY</Eyebrow>
        <h2>Become The<br />Next Champion</h2>
        <p>Join 50,000+ athletes and 5,000+ teams using CHMPYN to compete harder, grow faster, and win more.</p>
        <div className="final-cta__actions">
          <a href="#download" className="button button--white">Download CHMPYN <ArrowRight size={18} /></a>
          <a href="#about" className="button button--ghost">Learn More</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light />
          <p>Empowering coaches. Inspiring athletes.<br />Building the next generation of champions —<br />one team at a time.</p>
          <div className="socials">
            <a href="#contact" aria-label="Instagram"><Instagram size={17} /></a>
            <a href="#contact" aria-label="Facebook"><Facebook size={17} /></a>
            <a href="#contact" aria-label="LinkedIn"><Linkedin size={17} /></a>
            <a href="#contact" aria-label="YouTube"><Youtube size={17} /></a>
          </div>
        </div>
        <div className="footer__column"><h3>NAVIGATION</h3><a href="#home">Home</a><a href="#about">About Us</a><a href="#about">Features</a><a href="#contact">Contact Us</a></div>
        <div className="footer__column" id="privacy"><h3>LEGAL</h3><a href="#privacy">Privacy Policy</a><a href="#privacy">Terms of Service</a><a href="#privacy">Cookie Policy</a></div>
        <div className="footer__column footer__contact"><h3>CONTACT</h3><a href="mailto:contact@chmpyn.com">contact@chmpyn.com</a><a href="tel:+10000000000">+1 XXXXX XXXXX</a><p>1000 N West Street, Suite<br />1200, Wilmington, DE 19801</p></div>
      </div>
      <div className="container footer__bottom"><span>© 2026 CHMPYN. All Rights Reserved.</span><span>Built for champion.</span></div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatStrip />
        <Overview />
        <Growth />
        <Collaboration />
        <Roles />
        <MobileShowcase />
        <Testimonials />
        <DownloadSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
