import { useEffect, useMemo, useRef, useState } from 'react';

import {
  Activity,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Award,
  BarChart3,
  Bell,
  CalendarDays,
  CheckSquare,
  ClipboardList,
  Dumbbell,
  Facebook,
  Home,
  Instagram,
  Linkedin,
  MapPin,
  Medal,
  Menu,
  MessageCircle,
  MoreHorizontal,
  Scale,
  Search,
  Shield,
  Star,
  Target,
  Trophy,
  User,
  UserCog,
  UserRoundCheck,
  Users,
  UsersRound,
  X,
  Youtube,
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
    text: 'Auto generate match schedules, manage venues, resolve conflicts, and send instant notifications to all participants.',
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
    text: 'Data driven insights for coaches and organizations to identify talent, spot weaknesses, and make smarter decisions.',
    icon: Activity,
    tone: 'coral',
  },
];

const roles = [
  {
    label: 'Athletes',
    title: 'Train Smarter',
    text: 'Track personal progress, view training plans, receive feedback, and compete with confidence every session.',
    icon: Dumbbell,
    tone: 'blue',
  },
  {
    label: 'Coaches',
    title: 'Lead With Data',
    text: 'Manage rosters, build programs, evaluate athletes, and communicate with your entire squad from one dashboard.',
    icon: Award,
    tone: 'purple',
  },
  {
    label: 'Parents',
    title: 'Stay Connected',
    text: "Follow your child's journey, receive schedule updates, and celebrate every milestone in real time.",
    icon: UsersRound,
    tone: 'green',
  },
  {
    label: 'Organizations',
    title: 'Scale Programs',
    text: 'Run tournaments, manage federations, and grow your sports community with enterprise grade tools built for scale.',
    icon: Shield,
    tone: 'orange',
  },
];

const scoutFeatures = [
  {
    title: 'Discover Talent',
    text: 'Search athletes by sport, position, age, and location.',
    icon: Search,
    tone: 'blue',
  },
  {
    title: 'Performance Profiles',
    text: 'Review comprehensive stats, achievements, progress history, and coach evaluations.',
    icon: BarChart3,
    tone: 'purple',
  },
  {
    title: 'Track Potential',
    text: 'Follow athlete growth over time and see development trajectories clearly.',
    icon: Target,
    tone: 'green',
  },
  {
    title: 'Connect Directly',
    text: 'Reach out to athletes, coaches, and teams directly through the platform.',
    icon: MessageCircle,
    tone: 'gold',
  },
];


const journeySteps = [
  ['01', 'JOIN', 'Profile, Goals, Sport', Users],
  ['02', 'DEVELOP', 'Training, Coach, Skills', Activity],
  ['03', 'COMPETE', 'Matches, Teams, Events', Trophy],
  ['04', 'PROGRESS', 'Performance, Analytics, Progress', BarChart3],
  ['05', 'ACHIEVE', 'Goals, Awards, Opportunities', Star],
];


function Logo({ light = false }) {
  return (
    <a className={`logo ${light ? 'logo--light' : ''}`} href="#home" aria-label="CHMPYN home">
      <span className="logo__mark"><Trophy size={17} strokeWidth={2.2} /></span>
      <span className="logo__word">CHMPYN</span>
    </a>
  );
}

function Eyebrow({ children, light = false, purple = false, icon = false }) {
  return (
    <div className={`eyebrow ${light ? 'eyebrow--light' : ''} ${purple ? 'eyebrow--purple' : ''}`}>
      {icon && <Trophy size={11} />}
      {children}
    </div>
  );
}

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#contact', label: 'Contact Us' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const onScroll = () => {
      // Pick the section whose top is closest to the viewport top
      let active = ids[0];
      let bestDist = Infinity;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        // Only consider sections that are on-screen or scrolled past
        if (rect.top <= window.innerHeight) {
          const dist = Math.abs(rect.top);
          if (dist < bestDist) {
            bestDist = dist;
            active = id;
          }
        }
      }
      setActiveHash(`#${active}`);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (menuOpen) {
      html.style.overflow = 'hidden';
      body.style.overflow = 'hidden';
    } else {
      html.style.overflow = '';
      body.style.overflow = '';
    }
    return () => { html.style.overflow = ''; body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="nav-shell">
      <div className="nav container">
        <Logo />
        <nav className="nav__links" aria-label="Primary navigation">
          {navLinks.map(({ href, label }) => (
            <a key={href} className={activeHash === href ? 'active' : ''} href={href}>{label}</a>
          ))}
        </nav>
        <div className="nav__right">
          <a className="button button--primary button--nav" href="#download">Download App</a>
          <button
            className="hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && <div className="mobile-overlay" onClick={closeMenu} />}
      <nav className={`mobile-nav ${menuOpen ? 'mobile-nav--open' : ''}`} aria-label="Mobile navigation">
        <button className="mobile-nav__close" onClick={closeMenu} aria-label="Close menu">
          <X size={20} />
        </button>
        {navLinks.map(({ href, label }) => (
          <a key={href} className={activeHash === href ? 'active' : ''} href={href} onClick={closeMenu}>{label}</a>
        ))}
        <a className="button button--primary mobile-nav__download" href="#download" onClick={closeMenu}>Download App</a>
      </nav>
    </header>
  );
}


function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <div className="hero__copy">
          <h1>
            Every Athlete<br />
            Every Team<br />
            <span>Every Journey</span>
          </h1>
          <p>
            CHMPYN connects athletes, coaches, teams, parents, organizations,
            and scouts through one intelligent sports platform designed to help
            everyone train, connect, manage, develop, and grow.
          </p>
        </div>

        <div className="hero__phones">
          <SplashScreen className="phone--hero phone--hero-left" />
          <DashboardScreen className="phone--hero phone--hero-center" variant="coach" />
          <PracticePlanScreen className="phone--hero phone--hero-right" />
        </div>
      </div>
    </section>
  );
}


function Overview() {
  return (
    <section className="overview" id="about">
      <div className="container">
        <div className="section-heading">
          <Eyebrow>PLATFORM OVERVIEW</Eyebrow>
          <h2>Everything You Need<br />to <span>Move Forward.</span></h2>
          <p>One connected sports ecosystem for athletes, coaches, teams, parents, scouts, and organizations at every level.</p>
        </div>

        <div className="feature-grid">
          {features.map(({ title, text, icon: Icon, tone }) => (
            <article className={`feature-card tone-${tone}`} key={title}>
              <div className="feature-icon"><Icon size={22} strokeWidth={2} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatusBar() {
  return (
    <div className="phone-status-bar">
      <span className="phone-status-bar__time">2:17</span>
      <div className="phone-status-bar__icons">
        <svg className="sb-signal" viewBox="0 0 11 10" fill="currentColor"><rect x="0" y="6" width="2" height="4" rx="0.5" opacity=".3"/><rect x="3" y="4" width="2" height="6" rx="0.5" opacity=".5"/><rect x="6" y="2" width="2" height="8" rx="0.5" opacity=".7"/><rect x="9" y="0" width="2" height="10" rx="0.5"/></svg>
        <svg className="sb-wifi" viewBox="0 0 10 8" fill="currentColor"><path d="M5 3a4 4 0 0 1 2.8 1.1.4.4 0 0 0 .6-.6A5 5 0 0 0 5 2a5 5 0 0 0-3.4 1.5.4.4 0 0 0 .6.6A4 4 0 0 1 5 3zm0 2a2.2 2.2 0 0 1 1.5.6.4.4 0 0 0 .6-.6A3 3 0 0 0 5 4a3 3 0 0 0-2.1.9.4.4 0 0 0 .6.6A2.2 2.2 0 0 1 5 5zm0 1.5a.6.6 0 1 0 0 1.2.6.6 0 0 0 0-1.2z"/></svg>
        <svg className="sb-battery" viewBox="0 0 16 9" fill="currentColor"><rect x="0" y="0" width="13" height="9" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1"/><rect x="1.5" y="1.5" width="8.5" height="6" rx="0.5"/><path d="M14 3v3a1.5 1.5 0 0 0 0-3z"/></svg>
        <span className="sb-battery-pct">80%</span>
      </div>
    </div>
  );
}


function PhoneShell({ className = '', children }) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone__btn phone__btn--power" />
      <div className="phone__btn phone__btn--vol-up" />
      <div className="phone__btn phone__btn--vol-down" />
      <div className="phone__btn phone__btn--mute" />
      <div className="phone__body">
        <div className="phone__dynamic-island" />
        <div className="phone__screen">
          <StatusBar />
          {children}
        </div>
      </div>
    </div>
  );
}

function SplashScreen({ className = '' }) {
  return (
    <PhoneShell className={className}>
      <div className="app-splash">
        <div className="app-splash__icon"><Trophy size={28} strokeWidth={2} /></div>
        <span className="app-splash__name">CHMPYN</span>
      </div>
    </PhoneShell>
  );
}

function DashboardScreen({ className = '', variant = 'player' }) {
  const isCoach = variant === 'coach';
  return (
    <PhoneShell className={className}>
      <div className="app-screen">
        <div className="app-header">
          <div className="app-user">
            {isCoach ? (
              <img className="app-avatar app-avatar--img" src={`${A}v5-proof-1.png`} alt="David Thompson" />
            ) : (
              <div className="app-avatar app-avatar--player"><User size={18} /></div>
            )}
            <div className="app-user-info">
              <b>{isCoach ? 'David Thompson' : 'Emma'}</b>
              <span>{isCoach ? 'Head Coach' : 'Player'}</span>
            </div>
          </div>
          <div className="app-bell">
            <Bell size={18} />
            <span className="app-bell__badge">3</span>
          </div>
        </div>

        <div className="app-section">
          <h4 className="app-section__title">Quick Actions</h4>
          <div className={`app-actions${isCoach ? ' app-actions--quad' : ''}`}>
            <div className="app-action-card">
              <div className="app-action-icon blue"><CalendarDays size={18} /></div>
              <div><b>Schedule</b><span>Events &amp; matches</span></div>
            </div>
            {isCoach && (
              <div className="app-action-card">
                <div className="app-action-icon purple"><Users size={18} /></div>
                <div><b>Team</b><span>Players &amp; roster</span></div>
              </div>
            )}
            <div className="app-action-card">
              <div className="app-action-icon green"><Target size={18} /></div>
              <div><b>Practice</b><span>Plans &amp; drills</span></div>
            </div>
            {isCoach && (
              <div className="app-action-card">
                <div className="app-action-icon orange"><UserCog size={18} /></div>
                <div><b>User Mgmt</b><span>Manage members</span></div>
              </div>
            )}
          </div>
        </div>

        <div className="app-section app-section--schedule">
          <div className="app-section__header">
            <h4 className="app-section__title">Recent Schedule</h4>
            <span className="app-view-all">View all</span>
          </div>
          <div className="app-matches">
            {isCoach ? (
              <>
                <div className="app-match app-match--border-purple">
                  <div className="app-match__top">
                    <span className="app-match__date">1 December · 10:00 AM</span>
                    <span className="app-match__tag purple">MEETING ›</span>
                  </div>
                  <div className="app-match__teams"><b>Empty Team Event Test</b></div>
                  <div className="app-match__loc"><MapPin size={10} /> Main Court</div>
                </div>
                <div className="app-match app-match--border-green">
                  <div className="app-match__top">
                    <span className="app-match__date">30 July 2026</span>
                    <span className="app-match__tag green">GAME ›</span>
                  </div>
                  <div className="app-match__body">
                    <div className="app-match__icon green"><Trophy size={8} /></div>
                    <div className="app-match__teams"><b>Test Trail</b></div>
                  </div>
                  <div className="app-match__loc"><MapPin size={10} /> gym 107</div>
                  <div className="app-match__times">
                    <span className="app-time-pill green">JV 3:07 PM</span>
                    <span className="app-time-pill gray">V 4:10 PM</span>
                    <span className="app-time-pill gray">ML 4:07 AM</span>
                  </div>
                </div>
                <div className="app-match app-match--border-green">
                  <div className="app-match__top">
                    <span className="app-match__date">30 July 2026</span>
                    <span className="app-match__tag green">GAME ›</span>
                  </div>
                  <div className="app-match__body">
                    <div className="app-match__icon green"><Trophy size={8} /></div>
                    <div className="app-match__teams"><b>Demo</b></div>
                  </div>
                  <div className="app-match__loc"><MapPin size={10} /> Aspect Test Venue Own</div>
                </div>
                <div className="app-match app-match--border-purple">
                  <div className="app-match__top">
                    <span className="app-match__date">1 December · 10:00 AM</span>
                    <span className="app-match__tag purple">MEETING ›</span>
                  </div>
                  <div className="app-match__teams"><b>Empty Team Event Test</b></div>
                  <div className="app-match__loc"><MapPin size={10} /> Main Court</div>
                </div>
              </>
            ) : (
              <>
                <div className="app-match app-match--border-orange">
                  <div className="app-match__top">
                    <span className="app-match__date">6 August 2026 · 10:30 PM</span>
                    <span className="app-match__tag orange">MATCH ›</span>
                  </div>
                  <div className="app-match__body">
                    <div className="app-match__icon gold"><UserRoundCheck size={10} /></div>
                    <div className="app-match__teams"><b>Junior Varsity</b><span>vs</span><b>Varsity</b></div>
                  </div>
                  <div className="app-match__loc"><MapPin size={10} /> main ground</div>
                </div>
                <div className="app-match app-match--border-orange">
                  <div className="app-match__top">
                    <span className="app-match__date">5 August 2026 · 4:00 PM</span>
                    <span className="app-match__tag orange">MATCH ›</span>
                  </div>
                  <div className="app-match__body">
                    <div className="app-match__icon gold"><UserRoundCheck size={10} /></div>
                    <div className="app-match__teams"><b>Varsity</b><span>vs</span><b>Junior Varsity</b></div>
                  </div>
                  <div className="app-match__loc"><MapPin size={10} /> main ground</div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="app-nav">
          <div className="app-nav__item active"><Home size={16} /><span>Home</span></div>
          <div className="app-nav__item"><CalendarDays size={16} /><span>Schedule</span></div>
          {isCoach && <div className="app-nav__item"><Users size={16} /><span>Team</span></div>}
          <div className="app-nav__item"><Target size={16} /><span>Practice</span></div>
          <div className="app-nav__item"><MoreHorizontal size={16} /><span>More</span></div>
        </div>
      </div>
    </PhoneShell>
  );
}

function PracticePlanScreen({ className = '' }) {
  const plans = [
    { name: 'Dribbling', date: '1 November 2026 – 2 Novemb.', drills: 2, duration: '40 min', color: 'purple', durColor: 'green' },
    { name: 'Shell Drill', date: '1 June 2026 – 2 June 2026', drills: 4, duration: '65 min', color: 'purple', durColor: 'purple' },
    { name: 'shell drill', date: '3 June 2026 – 3 June 2026', drills: 1, duration: '35 min', color: 'purple', durColor: 'orange' },
    { name: 'Defensive', date: '4 June 2026 – 5 June 2026', drills: 6, duration: '105 min', color: 'purple', durColor: 'gold' },
    { name: 'no plan', date: '1 June 2026 – 6 June 2026', drills: null, duration: '60 min', color: 'purple', durColor: 'gold' },
  ];
  return (
    <PhoneShell className={className}>
      <div className="app-screen app-screen--practice">
        <div className="app-header app-header--simple">
          <h3>Practice Plan</h3>
          <div className="app-header__actions">
            <Search size={18} />
          </div>
        </div>

        <div className="app-search-bar">
          <Search size={12} />
          <span>Search practice plans</span>
        </div>

        <div className="app-section app-section--schedule" style={{ padding: '0 16px' }}>
          <div className="app-matches">
            {plans.map((p) => (
              <div className={`app-match app-match--plan app-match--border-${p.color}`} key={p.name + p.duration}>
                <div className="app-match__plan-row">
                  <div className={`app-match__icon ${p.color}`}><Target size={10} /></div>
                  <div className="app-match__plan-content">
                    <div className="app-match__teams"><b>{p.name}</b></div>
                    <div className="app-match__loc"><CalendarDays size={8} /> {p.date}</div>
                    <div className="app-match__times">
                      {p.drills != null && <span className="app-time-pill gray">✎ {p.drills} drills</span>}
                      <span className={`app-time-pill ${p.durColor}`}>⏱ {p.duration}</span>
                    </div>
                  </div>
                  <span className="app-match__chevron">›</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="app-nav">
          <div className="app-nav__item"><Home size={16} /><span>Home</span></div>
          <div className="app-nav__item"><CalendarDays size={16} /><span>Schedule</span></div>
          <div className="app-nav__item"><Users size={16} /><span>Team</span></div>
          <div className="app-nav__item active"><ClipboardList size={16} /><span>Practice</span></div>
          <div className="app-nav__item"><MoreHorizontal size={16} /><span>More</span></div>
        </div>
      </div>
    </PhoneShell>
  );
}

function Growth() {
  const bullets = [
    [Activity, 'Real-time performance metrics updated after every session', 'blue'],
    [Star, 'Personalized coach feedback and improvement plans', 'green'],
    [Medal, 'Achievement badges and milestone tracking for motivation', 'purple'],
  ];

  return (
    <section className="growth section-gap-top">
      <div className="container growth__inner">
        <div className="growth__copy">
          <Eyebrow>ATHLETE GROWTH</Eyebrow>
          <h2>Every Athlete Has<br /><span>a Journey</span></h2>
          <p>Track progress, follow training, receive feedback, and understand your development at every stage.</p>

          <div className="bullet-list">
            {bullets.map(([Icon, text, tone]) => (
              <div className="bullet" key={text}>
                <span className={`bullet__icon ${tone}`}><Icon size={16} /></span>
                <b>{text}</b>
              </div>
            ))}
          </div>
        </div>

        <div className="growth__visual">
          <div className="phone-glow" />
          <DashboardScreen className="phone--growth" variant="player" />
        </div>
      </div>
    </section>
  );
}

function Collaboration() {
  const cards = [
    [MessageCircle, 'Team Announcements', 'Broadcast updates instantly to the whole team.'],
    [CalendarDays, 'Shared Schedules', 'Everyone sees the same match and training calendar.'],
    [CheckSquare, 'Attendance Tracking', "Monitor who confirmed, who's absent, and why."],
    [ClipboardList, 'Team Activity Feed', 'Live updates on training, results, and milestones.'],
  ];

  return (
    <section className="collaboration section-gap-small">
      <div className="container">
        <div className="collaboration__layout">
          <div className="collaboration__left">
            <Eyebrow>TEAM COLLABORATION</Eyebrow>
            <h2>One Team. One<br /><span>Conversation.</span></h2>
            <p>Keep everyone aligned with a dedicated communication hub for coaches, athletes, and staff.</p>
          </div>

          <div className="collaboration__right">
            {cards.map(([Icon, title, text]) => (
              <div className="collab-card" key={title}>
                <span className="collab-card__icon"><Icon size={18} /></span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Roles() {
  return (
    <section className="roles section-gap-medium">
      <div className="container">
        <div className="section-heading">
          <Eyebrow>BUILT FOR EVERYONE</Eyebrow>
          <h2>Every Role. One<br /><span>Platform.</span></h2>
          <p>CHMPYN connects every stakeholder in the sports ecosystem<br className="desktop-br" /> from grassroots to national level.</p>
        </div>

        <div className="role-grid">
          {roles.map((role) => (
            <article className="role-card" key={role.label}>
              <div className={`role-icon ${role.tone}`}><role.icon size={26} strokeWidth={1.8} /></div>
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

function Scouts() {
  return (
    <section className="scouts">
      <div className="container scouts__inner">
        <div className="section-heading scouts__heading">
          <Eyebrow purple>FOR SCOUTS</Eyebrow>
          <h2>Discover Talent. Discover Potential.</h2>
          <p>Talent exists at every level. CHMPYN helps scouts discover athletes, evaluate performance, follow development, and connect with emerging opportunities.</p>
        </div>

        <div className="scout-grid">
          {scoutFeatures.map(({ title, text, icon: Icon, tone }) => (
            <article className={`scout-card scout-${tone}`} key={title}>
              <div className="scout-icon"><Icon size={19} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


function JourneyPath() {
  return (
    <section className="journey-path section-gap-tiny">
      <div className="container">
        <div className="section-heading">
          <Eyebrow>YOUR PLAYER JOURNEY</Eyebrow>
          <h2>Your Journey. Your Goals. Your Progress.</h2>
          <p>From joining CHMPYN to reaching your full potential – every step of your sports journey in one place.</p>
        </div>

        <div className="journey-grid">
          {journeySteps.map(([num, title, subtitle, Icon]) => (
            <article className="journey-card" key={num}>
              <span className="journey-card__num">{num}</span>
              <div className="journey-card__icon"><Icon size={20} /></div>
              <h3>{title}</h3>
              <p>{subtitle}</p>
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
          <p>Available on Android. Manage teams, track performance, and stay connected from anywhere no laptop required.</p>
        </div>

        <div className="store-badges">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={`${A}google-play.png`} alt="Get it on Google Play" loading="lazy" />
            <span className="store-badges__subtext">Click here to download from Google Play</span>
          </a>
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
        <h2>Your Journey Starts Here.</h2>
        <p>Whether you're playing, coaching, managing, supporting, or discovering talent, CHMPYN gives you the tools to take the next step.</p>
        <div className="final-cta__actions">
          <a href="#download" className="button button--white">Download CHMPYN <ArrowRight size={16} /></a>
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
          <p>
            Empowering everyone in sports.<br />
            Connecting athletes, coaches, teams &amp; scouts.<br />
            Supporting every journey.
          </p>
          <div className="socials">
            <a href="#contact" aria-label="Instagram"><Instagram size={14} /></a>
            <a href="#contact" aria-label="Facebook"><Facebook size={14} /></a>
            <a href="#contact" aria-label="LinkedIn"><Linkedin size={14} /></a>
            <a href="#contact" aria-label="YouTube"><Youtube size={14} /></a>
          </div>
        </div>

        <div className="footer__column">
          <h3>NAVIGATION</h3>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
          <a href="#privacy-policy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
        </div>

        <div className="footer__column footer__download">
          <h3>DOWNLOAD APP</h3>
          <a href="#download">Google Play</a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} CHMPYN. All Rights Reserved.</span>
        <div><a href="#privacy-policy">Privacy Policy</a><a href="#terms">Terms & Conditions</a></div>
      </div>
    </footer>
  );
}

const DESIGN_WIDTH = 1442;
const DESKTOP_ARTBOARD_BREAKPOINT = 1100;

function ResponsiveArtboard({ children }) {
  const artboardRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(() =>
    typeof window === 'undefined' ? DESIGN_WIDTH : window.innerWidth,
  );
  const [contentHeight, setContentHeight] = useState('auto');

  // Immediately measure when children change to avoid stale height
  useEffect(() => {
    if (artboardRef.current) {
      setContentHeight(artboardRef.current.scrollHeight);
    }
  }, [children]);

  useEffect(() => {
    let frame = 0;

    const updateViewport = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setViewportWidth(window.innerWidth);
        if (artboardRef.current) {
          setContentHeight(artboardRef.current.scrollHeight);
        }
      });
    };

    updateViewport();
    window.addEventListener('resize', updateViewport, { passive: true });
    window.visualViewport?.addEventListener('resize', updateViewport, { passive: true });

    const observer = new ResizeObserver(() => {
      if (artboardRef.current) {
        setContentHeight(artboardRef.current.scrollHeight);
      }
    });
    if (artboardRef.current) observer.observe(artboardRef.current);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', updateViewport);
      window.visualViewport?.removeEventListener('resize', updateViewport);
      observer.disconnect();
    };
  }, []);

  const desktopArtboard = viewportWidth >= DESKTOP_ARTBOARD_BREAKPOINT;
  const scale = useMemo(
    () => (desktopArtboard ? viewportWidth / DESIGN_WIDTH : 1),
    [desktopArtboard, viewportWidth],
  );

  const stageStyle = desktopArtboard
    ? { height: contentHeight === 'auto' ? 'auto' : `${contentHeight * scale}px` }
    : undefined;

  const canvasStyle = desktopArtboard
    ? {
        width: `${DESIGN_WIDTH}px`,
        transform: `scale(${scale})`,
      }
    : undefined;

  return (
    <div
      className={`site-stage${desktopArtboard ? ' site-stage--scaled' : ''}`}
      style={stageStyle}
    >
      <div className="site-artboard" ref={artboardRef} style={canvasStyle}>
        {children}
      </div>
    </div>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      className={`scroll-top ${visible ? 'scroll-top--visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
}

function LegalPageHeader({ icon: Icon, title }) {
  return (
    <div className="legal-header">
      <div className="legal-header__icon"><Icon size={28} strokeWidth={1.8} /></div>
      <h1>{title}</h1>
    </div>
  );
}

function LegalSection({ title, children }) {
  return (
    <div className="legal-section">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function BackToHome() {
  return (
    <a href="#home" className="legal-back">
      <ArrowLeft size={16} />
      Back to Home
    </a>
  );
}

function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="container legal-container">
        <BackToHome />
        <LegalPageHeader icon={Shield} title="CHMPYN Privacy Policy" />

        <LegalSection title="Privacy Commitment">
          <p>Your privacy is important to CHMPYN, Inc. and its affiliated organizations ("CHMPYN", "we", "our", or "us"). CHMPYN is committed to protecting the privacy, security, and integrity of information entrusted to our platform by schools, authorized users, parents, guardians, coaches, administrators, and student-athletes.</p>
          <p>This Privacy Policy explains the principles, practices, and safeguards that guide how CHMPYN manages information throughout the platform. We believe privacy and security are fundamental responsibilities, particularly in environments where participants place trust in our services. Our goal is to provide a safe, secure, and transparent platform that supports athlete development, team management, organizational operations, communication, scheduling, attendance management, and participation management while maintaining strong privacy and responsible information management standards.</p>
        </LegalSection>

        <LegalSection title="Children's Privacy & Regulatory Compliance">
          <p>CHMPYN recognizes that basketball programs may involve athletes under the age of 13 and understands the importance of protecting children's privacy. We are committed to supporting compliance with the Children's Online Privacy Protection Act (COPPA) and other applicable privacy regulations relating to minors. We work with schools, organizations, parents, guardians, and authorized representatives to help ensure that participation within the platform occurs under appropriate supervision and with required permissions.</p>
          <p>In addition to COPPA, CHMPYN supports organizations in maintaining compliance with educational privacy requirements, including the Family Educational Rights and Privacy Act (FERPA), where applicable. Organizations remain responsible for determining their legal obligations and implementing appropriate policies regarding educational records and student information.</p>
        </LegalSection>

        <LegalSection title="Information Collection & Usage">
          <p>CHMPYN may process information necessary to provide, maintain, and improve the platform. This may include account information, organization information, participant information, operational records, attendance records, participation history, team-related information, and technical platform usage information.</p>
          <p>Information managed through CHMPYN is used solely to support legitimate basketball program operations. This includes managing organizations and teams, supporting scheduling and participation activities, maintaining operational records, facilitating communication between authorized users, supporting athlete development initiatives, generating organizational reports, improving platform functionality, and maintaining platform security and operational integrity.</p>
          <p>Information is processed only for legitimate operational, administrative, developmental, participation-related, communication, and compliance purposes.</p>
        </LegalSection>

        <LegalSection title="Privacy Principles & Data Governance">
          <p>CHMPYN follows privacy-by-design principles throughout the platform. Privacy considerations are integrated into platform architecture, operational processes, governance practices, and future enhancements.</p>
          <p>We are committed to responsible information management, maintaining confidentiality, limiting unnecessary access, and ensuring that information is used only for authorized purposes. Privacy remains a core component of our product strategy and organizational governance framework.</p>
        </LegalSection>

        <LegalSection title="Access Control & Organizational Hierarchy">
          <p>CHMPYN is designed around controlled access and role-based permissions. Different users have different responsibilities within an organization, and the platform provides structured access controls intended to ensure that individuals can access only the information necessary for their responsibilities.</p>
          <p>The platform follows a hierarchy-based model that reflects how basketball programs operate in real-world environments. Access to information is determined by organizational responsibilities, assigned roles, team membership, and operational requirements. This approach helps reduce unnecessary exposure of information while supporting confidentiality, accountability, and operational integrity.</p>
        </LegalSection>

        <LegalSection title="Information Sharing & Disclosure">
          <p>CHMPYN does not sell personal information. Information may only be shared as necessary to support authorized platform operations and organizational activities.</p>
          <p>Access to information is governed by organizational permissions, platform controls, contractual obligations, and applicable legal requirements. Information may be made available to authorized organizational representatives, coaches, administrators, parents or guardians where applicable, authorized service providers supporting platform operations, and regulatory or legal authorities when required by law.</p>
          <p>All information sharing activities are subject to appropriate privacy safeguards and access controls.</p>
        </LegalSection>

        <LegalSection title="Security & Platform Protection">
          <p>Protecting information is an ongoing commitment at CHMPYN. We maintain administrative, technical, and organizational safeguards designed to reduce the risk of unauthorized access, misuse, disclosure, alteration, or loss of information.</p>
          <p>Security practices are continuously reviewed and enhanced to address evolving threats, regulatory expectations, industry standards, and operational requirements. Our approach to security includes risk management, access controls, operational monitoring, system protection measures, and ongoing evaluation of security practices.</p>
          <p>We believe security is not a one-time implementation but a continuous process of improvement and vigilance.</p>
        </LegalSection>

        <LegalSection title="Parent, Guardian & User Rights">
          <p>CHMPYN recognizes the important role that parents and guardians play in youth athlete participation. We support organizational processes that encourage transparency, parental involvement, and responsible oversight of information associated with young athletes.</p>
          <p>Subject to applicable laws and organizational policies, users may request access to information associated with their account, request corrections or updates to information, seek assistance with account management, and request information regarding organizational privacy practices. Certain requests may be subject to verification requirements, organizational approvals, legal obligations, and recordkeeping requirements.</p>
          <p>Where applicable, CHMPYN supports organizational workflows that enable appropriate parental engagement and consent management.</p>
        </LegalSection>

        <LegalSection title="Organizational Responsibility & Compliance">
          <p>CHMPYN provides tools that support schools and basketball programs in managing operations, participants, and organizational activities. Organizations using CHMPYN remain responsible for ensuring that their use of the platform complies with applicable laws, organizational policies, participation requirements, consent obligations, and internal governance standards.</p>
          <p>CHMPYN provides governance controls intended to support responsible administration, accountability, and operational oversight while enabling organizations to manage participants efficiently and securely.</p>
        </LegalSection>

        <LegalSection title="Information Lifecycle, Analytics & Monitoring">
          <p>CHMPYN believes information should be managed responsibly throughout its lifecycle. Information is maintained only for legitimate operational, compliance, reporting, athlete development, historical recordkeeping, and organizational purposes.</p>
          <p>Information retention and management practices are periodically reviewed to ensure alignment with organizational requirements and regulatory obligations.</p>
          <p>CHMPYN may also use analytics, monitoring tools, diagnostic systems, and related technologies to support platform functionality, performance optimization, security monitoring, troubleshooting, service reliability, and continuous improvement initiatives. Such technologies are used solely for legitimate operational and platform management purposes.</p>
        </LegalSection>

        <LegalSection title="International Access">
          <p>CHMPYN primarily supports organizations operating within the United States. However, organizations or participants located in other jurisdictions may access the platform where permitted.</p>
          <p>Users remain responsible for ensuring that their use of CHMPYN complies with applicable laws and regulations within their respective jurisdictions.</p>
        </LegalSection>

        <LegalSection title="Policy Updates & Continuous Improvement">
          <p>Privacy, security, transparency, accountability, and trust are ongoing commitments at CHMPYN. We continuously review our governance practices, privacy controls, security measures, and operational processes to address evolving legal requirements, industry standards, and organizational expectations.</p>
          <p>CHMPYN may update this Privacy Policy from time to time to reflect changes in platform functionality, legal requirements, operational practices, or industry standards. Updated versions will be made available through appropriate channels, and continued use of the platform may constitute acceptance of the revised policy, subject to applicable legal requirements.</p>
        </LegalSection>

        <LegalSection title="Contact Information">
          <p>For questions regarding this Privacy Policy, privacy practices, or data protection matters, please contact CHMPYN through the designated privacy and compliance channels. Organizations may also contact their designated platform administrator or authorized organizational representative for assistance regarding organization-specific privacy matters.</p>
        </LegalSection>

        <LegalSection title="Our Commitment">
          <p>At CHMPYN, privacy is not simply a compliance requirement—it is a fundamental part of how we build, operate, and improve our platform. We remain committed to providing a secure and trusted environment that supports athlete development, organizational success, operational efficiency, and responsible information management.</p>
          <p>Privacy, security, transparency, accountability, and continuous improvement remain central to the design and operation of the CHMPYN platform.</p>
        </LegalSection>

        <BackToHome />
      </div>
    </div>
  );
}

function TermsConditions() {
  return (
    <div className="legal-page">
      <div className="container legal-container">
        <BackToHome />
        <LegalPageHeader icon={Scale} title="CHMPYN Terms & Conditions" />

        <LegalSection title="Acceptance of Terms">
          <p>Welcome to CHMPYN. These Terms and Conditions govern access to and use of the CHMPYN platform by schools, authorized personnel, student-athletes, parents or guardians, and other approved users. By accessing, using, or participating in CHMPYN, users acknowledge that they have read, understood, and agreed to comply with these Terms and Conditions.</p>
          <p>Continued use of the platform following any updates, modifications, or enhancements constitutes acceptance of the revised Terms and Conditions.</p>
        </LegalSection>

        <LegalSection title="Purpose of the Platform">
          <p>CHMPYN is a basketball management platform designed to support schools in the administration and operation of their basketball programs. The platform is intended to assist organizations with athlete development, participation management, scheduling, attendance tracking, team operations, game management, organizational oversight, and performance monitoring.</p>
          <p>CHMPYN is provided solely for educational, athletic, administrative, and operational purposes related to school basketball programs and is intended to support the effective management of basketball activities within participating organizations.</p>
        </LegalSection>

        <LegalSection title="Eligibility, Authorized Use & Participation">
          <p>Access to CHMPYN is limited to individuals who have been authorized by a participating school or organization. Users may only access and use the platform in connection with their assigned responsibilities and approved participation within the basketball program.</p>
          <p>CHMPYN supports youth athlete participation while recognizing the importance of parental involvement and school oversight. Organizations are responsible for ensuring that all required permissions, approvals, authorizations, and participation requirements have been satisfied before participants engage in activities managed through the platform. Where participants are minors, parental or guardian involvement may be required in accordance with applicable laws, school policies, and organizational procedures.</p>
          <p>Unauthorized access, use, distribution, or misuse of platform information may result in suspension or termination of access privileges.</p>
        </LegalSection>

        <LegalSection title="Organizational Responsibilities & Governance">
          <p>Schools utilizing CHMPYN remain responsible for the administration, governance, and oversight of their basketball programs. This includes maintaining accurate records, managing participant eligibility, obtaining necessary permissions and authorizations, assigning appropriate access rights, and ensuring compliance with applicable policies and regulations.</p>
          <p>CHMPYN provides operational tools intended to support these activities but does not replace organizational decision-making responsibilities. Organizations remain accountable for their own internal governance, participation requirements, and compliance obligations.</p>
        </LegalSection>

        <LegalSection title="Access Control, Hierarchy & Platform Usage">
          <p>CHMPYN operates using a structured hierarchy model designed to reflect the operational structure of school basketball programs. Access to information is determined by assigned responsibilities, organizational relationships, team affiliations, and operational requirements.</p>
          <p>Information is made available only to individuals who require access for legitimate operational purposes. The platform is designed to limit unnecessary visibility and maintain appropriate confidentiality between users and organizational groups.</p>
          <p>The platform may be used to support basketball program activities including scheduling, participation management, athlete development, attendance monitoring, team administration, practice planning, game management, organizational reporting, and other approved operational workflows. Users agree to utilize CHMPYN only for purposes consistent with the goals and responsibilities of their school basketball program.</p>
        </LegalSection>

        <LegalSection title="Acceptable Use Standards">
          <p>Users are expected to use CHMPYN responsibly, professionally, and in compliance with applicable laws, organizational policies, and platform requirements.</p>
          <p>Users may not attempt to gain unauthorized access to information, interfere with platform functionality, bypass security controls, misrepresent information, distribute harmful content, disrupt platform operations, or engage in activities that compromise the security, reliability, confidentiality, or integrity of the platform.</p>
          <p>CHMPYN reserves the right to investigate suspected violations and take appropriate corrective action where necessary.</p>
        </LegalSection>

        <LegalSection title="Privacy, Security & Data Protection">
          <p>CHMPYN is committed to protecting information entrusted to the platform. The collection, processing, storage, protection, and management of information are governed by the CHMPYN Privacy Policy.</p>
          <p>Users are expected to handle information responsibly and in accordance with organizational policies, privacy obligations, and applicable regulations. CHMPYN maintains security measures intended to protect information and support platform integrity.</p>
          <p>Users share responsibility for maintaining account security by safeguarding login credentials, preventing unauthorized access, and reporting suspected security incidents or account compromise. Security remains a shared responsibility between CHMPYN, participating organizations, and authorized users.</p>
        </LegalSection>

        <LegalSection title="Intellectual Property Rights">
          <p>CHMPYN and all associated software, technology, workflows, designs, branding, documentation, content, platform materials, and related intellectual property remain the exclusive property of CHMPYN or its licensors.</p>
          <p>Access to the platform grants users a limited, non-transferable, revocable right to use CHMPYN solely for authorized purposes. Nothing within these Terms grants ownership rights, licenses, or other intellectual property interests beyond the limited right to use the platform as intended.</p>
        </LegalSection>

        <LegalSection title="Service Availability & Platform Improvements">
          <p>CHMPYN continuously works to improve platform functionality, performance, security, reliability, and user experience. Updates, enhancements, maintenance activities, bug fixes, operational improvements, and new functionality may be introduced periodically.</p>
          <p>While reasonable efforts are made to maintain service availability, uninterrupted access cannot be guaranteed. CHMPYN reserves the right to modify, update, enhance, suspend, or discontinue platform features where necessary to support operational, technical, security, or compliance requirements.</p>
        </LegalSection>

        <LegalSection title="Suspension, Termination & Enforcement">
          <p>CHMPYN reserves the right to suspend, restrict, or terminate access where necessary to protect platform security, prevent misuse, address violations of these Terms and Conditions, comply with legal obligations, or safeguard organizational interests.</p>
          <p>Organizations and users who fail to comply with applicable requirements may have their access restricted or terminated without prior notice where circumstances warrant immediate action.</p>
        </LegalSection>

        <LegalSection title="Limitation of Liability & Legal Compliance">
          <p>CHMPYN provides technology solutions intended to support basketball program operations and organizational management. To the fullest extent permitted by applicable law, CHMPYN shall not be liable for indirect, incidental, consequential, special, exemplary, or punitive damages arising from the use of, inability to use, or reliance upon the platform.</p>
          <p>Organizations and users remain responsible for ensuring that their use of CHMPYN complies with applicable laws, regulations, school policies, youth participation requirements, privacy obligations, and organizational standards. CHMPYN is intended to support compliance efforts but does not replace the legal responsibilities of participating organizations.</p>
        </LegalSection>

        <LegalSection title="Policy Updates & Contact Information">
          <p>CHMPYN may update these Terms and Conditions periodically to reflect operational changes, legal requirements, security enhancements, platform improvements, or evolving industry standards. Updated versions will be made available through appropriate channels, and continued use of the platform following such updates constitutes acceptance of the revised Terms.</p>
          <p>Questions regarding these Terms and Conditions, platform governance, compliance matters, operational concerns, or legal inquiries should be directed to the designated CHMPYN support and compliance representatives.</p>
        </LegalSection>

        <LegalSection title="Our Commitment">
          <p>CHMPYN is committed to providing a secure, reliable, and professionally managed platform that supports school basketball programs. Through strong governance, responsible platform management, privacy-conscious practices, and ongoing improvements, we strive to create a trusted environment that supports organizations, participants, and long-term athlete development while maintaining the highest standards of accountability and operational integrity.</p>
        </LegalSection>

        <BackToHome />
      </div>
    </div>
  );
}

const LEGAL_HASHES = new Set(['#privacy-policy', '#terms']);

function useHashRoute() {
  const [hash, setHash] = useState(() =>
    typeof window !== 'undefined' ? window.location.hash || '#home' : '#home',
  );
  const prevRef = useRef(hash);

  useEffect(() => {
    const onHashChange = () => {
      const next = window.location.hash || '#home';
      const prev = prevRef.current;
      prevRef.current = next;

      const isPageSwitch =
        LEGAL_HASHES.has(next) !== LEGAL_HASHES.has(prev) ||
        (LEGAL_HASHES.has(next) && next !== prev);

      if (isPageSwitch) {
        window.scrollTo({ top: 0 });
      }

      setHash(next);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return hash;
}

export default function App() {
  const hash = useHashRoute();
  const isPrivacy = hash === '#privacy-policy';
  const isTerms = hash === '#terms';

  return (
    <>
      <Navbar />
      {isPrivacy ? (
        <ResponsiveArtboard>
          <main><PrivacyPolicy /></main>
          <Footer />
        </ResponsiveArtboard>
      ) : isTerms ? (
        <ResponsiveArtboard>
          <main><TermsConditions /></main>
          <Footer />
        </ResponsiveArtboard>
      ) : (
        <ResponsiveArtboard>
          <main>
            <Hero />
            <Overview />
            <Growth />
            <Collaboration />
            <Roles />
            <Scouts />
            <JourneyPath />
            <DownloadSection />
            <FinalCTA />
          </main>
          <Footer />
        </ResponsiveArtboard>
      )}
      <ScrollToTop />
    </>
  );
}
