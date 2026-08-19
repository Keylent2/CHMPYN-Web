import { useEffect, useMemo, useState } from 'react';

import {
  Activity,
  ArrowRight,
  Award,
  BarChart3,
  Bell,
  CalendarDays,
  Check,
  CheckSquare,
  ClipboardList,
  Dumbbell,
  Facebook,
  Home,
  Instagram,
  Linkedin,
  MapPin,
  Medal,
  MessageCircle,
  MoreHorizontal,
  Play,
  Search,
  Send,
  Sparkles,
  Star,
  Target,
  Trophy,
  User,
  UserCog,
  UserRoundCheck,
  Users,
  UsersRound,
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
    image: 'v5-role-athlete.png',
    tone: 'blue',
  },
  {
    label: 'Coaches',
    title: 'Lead With Data',
    text: 'Manage rosters, build programs, evaluate athletes, and communicate with your entire squad from one dashboard.',
    image: 'v5-role-coach.png',
    tone: 'purple',
  },
  {
    label: 'Parents',
    title: 'Stay Connected',
    text: "Follow your child's journey, receive schedule updates, and celebrate every milestone in real time.",
    image: 'v5-role-parent.png',
    tone: 'green',
  },
  {
    label: 'Organizations',
    title: 'Scale Programs',
    text: 'Run tournaments, manage federations, and grow your sports community with enterprise grade tools built for scale.',
    image: 'v5-role-organization.png',
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

const ecosystemSteps = [
  ['Athlete', 'Train & Grow', UserRoundCheck, 'blue'],
  ['Coach', 'Guide & Develop', Award, 'purple'],
  ['Team', 'Compete Together', UsersRound, 'green'],
  ['Opportunity', 'Open Doors', Sparkles, 'purple'],
  ['Champion', 'Achieve Greatness', Trophy, 'orange'],
];

const journeySteps = [
  ['1', 'Start Your Journey', 'Create your athlete profile and set your goals.', 'blue'],
  ['2', 'Train & Develop', 'Follow training plans and improve every session.', 'purple'],
  ['3', 'Compete', 'Play matches and put your skills to the test.', 'pink'],
  ['4', 'Rise', 'Seize opportunities and level up your career.', 'green'],
  ['5', 'Become a Champion', 'Achieve your greatest goals and inspire others.', 'orange'],
];

const testimonials = [
  {
    quote: "CHMPYN completely changed how we manage our regional tournament. What used to take days of spreadsheet work now happens automatically. It's genuinely incredible technology.",
    name: 'Marcus Thompson',
    role: 'Tournament Director · Regional Football League',
    image: 'v5-testimonial-1.png',
  },
  {
    quote: 'The athlete tracking and feedback system is unmatched. My players can see exactly where they need to improve, and I can measure progress objectively. Performances improved 25% in one season.',
    name: 'Larry Joe Bird',
    role: 'Head Coach · National Athletics Academy',
    image: 'v5-testimonial-2.png',
  },
  {
    quote: 'From registration to the championship final, every step ran flawlessly. Parents, coaches, and athletes stayed informed and engaged throughout. CHMPYN is the future of sports management.',
    name: 'Coach Cooper, Charles',
    role: 'Sports Manager · Youth Cricket Board of India',
    image: 'v5-testimonial-3.png',
  },
];

function Logo({ light = false }) {
  return (
    <a className={`logo ${light ? 'logo--light' : ''}`} href="#home" aria-label="CHMPYN home">
      <span className="logo__mark"><Trophy size={17} strokeWidth={2.2} /></span>
      <span className="logo__word">CHMPYN</span>
    </a>
  );
}

function Eyebrow({ children, light = false, icon = false }) {
  return (
    <div className={`eyebrow ${light ? 'eyebrow--light' : ''}`}>
      {icon && <Trophy size={11} />}
      {children}
    </div>
  );
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

          <a className="button button--outline hero__watch" href="#about">
            <Play size={16} fill="currentColor" />
            Watch Demo
          </a>

          <div className="hero-proof">
            <div className="avatar-stack">
              {['v5-proof-1.png', 'v5-proof-2.png', 'v5-proof-3.png', 'v5-proof-4.png'].map((x) => (
                <img src={`${A}${x}`} alt="" key={x} />
              ))}
            </div>
            <div className="proof-count"><b>10,000+</b> <span>athletes worldwide</span></div>
            <div className="proof-divider" />
            <div className="proof-rating"><div>★★★★★</div><span>Rated by coaches</span></div>
          </div>
        </div>

        <div className="hero__phones">
          <DashboardScreen className="phone--hero phone--hero-left" variant="coach" />
          <SplashScreen className="phone--hero phone--hero-center" />
          <ScheduleScreen className="phone--hero phone--hero-right" />
        </div>
      </div>
    </section>
  );
}

function StatStrip() {
  const stats = [
    ['50K+', 'Active Athletes'],
    ['5K+', 'Sports Teams'],
    ['100K+', 'Matches Managed'],
    ['20+', 'Sports Categories'],
    ['95%', 'User Satisfaction'],
  ];

  return (
    <section className="stat-strip">
      <div className="container stat-strip__inner">
        {stats.map(([value, label]) => (
          <div className="big-stat" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
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

function PhoneFrame({ src, className = '' }) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone__notch" />
      <img src={`${A}${src}`} alt="CHMPYN mobile app screen" />
    </div>
  );
}

function PhoneShell({ className = '', children }) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone__notch" />
      <div className="phone__screen">{children}</div>
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
            <div className="app-avatar"><User size={18} /></div>
            <div className="app-user-info">
              <b>{isCoach ? 'Suchitha' : 'Emma'}</b>
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
                <div className="app-match">
                  <div className="app-match__top">
                    <span className="app-match__date">6 August 2026</span>
                    <span className="app-match__tag green">GAME ›</span>
                  </div>
                  <div className="app-match__body">
                    <div className="app-match__icon green"><Trophy size={16} /></div>
                    <div className="app-match__teams"><b>dribbling</b></div>
                  </div>
                  <div className="app-match__loc"><MapPin size={10} /> main ground</div>
                  <div className="app-match__times">
                    <span className="app-time-pill green">JV 5:45 PM</span>
                    <span className="app-time-pill gray">V 6:45 PM</span>
                  </div>
                </div>
                <div className="app-match">
                  <div className="app-match__top">
                    <span className="app-match__date">6 August 2026 · 10:30 PM</span>
                    <span className="app-match__tag orange">MATCH ›</span>
                  </div>
                  <div className="app-match__body">
                    <div className="app-match__icon orange"><UsersRound size={16} /></div>
                    <div className="app-match__teams"><b>Junior Varsity</b><span>vs</span><b>Varsity</b></div>
                  </div>
                  <div className="app-match__loc"><MapPin size={10} /> main ground</div>
                </div>
              </>
            ) : (
              <>
                <div className="app-match">
                  <div className="app-match__top">
                    <span className="app-match__date">6 August 2026 · 10:30 PM</span>
                    <span className="app-match__tag orange">MATCH ›</span>
                  </div>
                  <div className="app-match__body">
                    <div className="app-match__icon orange"><UsersRound size={16} /></div>
                    <div className="app-match__teams"><b>Junior Varsity</b><span>vs</span><b>Varsity</b></div>
                  </div>
                  <div className="app-match__loc"><MapPin size={10} /> main ground</div>
                </div>
                <div className="app-match">
                  <div className="app-match__top">
                    <span className="app-match__date">5 August 2026 · 4:00 PM</span>
                    <span className="app-match__tag orange">MATCH ›</span>
                  </div>
                  <div className="app-match__body">
                    <div className="app-match__icon orange"><UsersRound size={16} /></div>
                    <div className="app-match__teams"><b>Varsity</b><span>vs</span><b>Junior Varsity</b></div>
                  </div>
                  <div className="app-match__loc"><MapPin size={10} /> main ground</div>
                </div>
                <div className="app-match">
                  <div className="app-match__top">
                    <span className="app-match__date">5 August 2026 · 3:00 PM</span>
                    <span className="app-match__tag orange">MATCH ›</span>
                  </div>
                  <div className="app-match__body">
                    <div className="app-match__icon orange"><UsersRound size={16} /></div>
                    <div className="app-match__teams"><b>Junior Varsity</b><span>vs</span><b>Varsity</b></div>
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
          <div className="app-nav__item"><Target size={16} /><span>Practice</span></div>
          <div className="app-nav__item"><MoreHorizontal size={16} /><span>More</span></div>
        </div>
      </div>
    </PhoneShell>
  );
}

function ScheduleScreen({ className = '' }) {
  return (
    <PhoneShell className={className}>
      <div className="app-screen">
        <div className="app-header app-header--simple">
          <h3>Schedule</h3>
          <div className="app-header__actions">
            <CalendarDays size={18} />
            <Search size={18} />
          </div>
        </div>

        <div className="app-tabs">
          <span className="active">All</span>
          <span>Scrimmage Details</span>
          <span>Scrimmage</span>
          <span>Other</span>
        </div>

        <div className="app-section app-section--schedule" style={{ padding: '0 16px' }}>
          <div className="app-matches">
            <div className="app-match">
              <div className="app-match__top">
                <span className="app-match__date">6 August 2026</span>
                <span className="app-match__tag green">GAME ›</span>
              </div>
              <div className="app-match__body">
                <div className="app-match__icon green"><Trophy size={16} /></div>
                <div className="app-match__teams"><b>dribbling</b></div>
              </div>
              <div className="app-match__loc"><MapPin size={10} /> main ground</div>
            </div>

            <div className="app-match">
              <div className="app-match__top">
                <span className="app-match__date">6 August 2026 · 10:30 PM</span>
                <span className="app-match__tag orange">MATCH ›</span>
              </div>
              <div className="app-match__body">
                <div className="app-match__icon orange"><UsersRound size={16} /></div>
                <div className="app-match__teams"><b>Junior Varsity</b><span>vs</span><b>Varsity</b></div>
              </div>
              <div className="app-match__loc"><MapPin size={10} /> main ground</div>
            </div>

            <div className="app-match">
              <div className="app-match__top">
                <span className="app-match__date">5 August 2026 · 5:00 PM</span>
                <span className="app-match__tag purple">Photoshoot ›</span>
              </div>
              <div className="app-match__body">
                <div className="app-match__icon purple"><Star size={16} /></div>
                <div className="app-match__teams"><b>Team Varsity Photoshoot</b></div>
              </div>
              <div className="app-match__loc"><MapPin size={10} /> main ground</div>
            </div>

            <div className="app-match">
              <div className="app-match__top">
                <span className="app-match__date">5 August 2026 · 4:00 PM</span>
                <span className="app-match__tag orange">MATCH ›</span>
              </div>
              <div className="app-match__body">
                <div className="app-match__icon orange"><UsersRound size={16} /></div>
                <div className="app-match__teams"><b>Varsity</b><span>vs</span><b>Junior Varsity</b></div>
              </div>
              <div className="app-match__loc"><MapPin size={10} /> main ground</div>
            </div>

            <div className="app-match">
              <div className="app-match__top">
                <span className="app-match__date">5 August 2026 · 3:00 PM</span>
                <span className="app-match__tag orange">MATCH ›</span>
              </div>
              <div className="app-match__body">
                <div className="app-match__icon orange"><UsersRound size={16} /></div>
                <div className="app-match__teams"><b>Junior Varsity</b><span>vs</span><b>Varsity</b></div>
              </div>
              <div className="app-match__loc"><MapPin size={10} /> main ground</div>
            </div>
          </div>
        </div>

        <div className="app-nav">
          <div className="app-nav__item"><Home size={16} /><span>Home</span></div>
          <div className="app-nav__item active"><CalendarDays size={16} /><span>Schedule</span></div>
          <div className="app-nav__item"><Target size={16} /><span>Practice</span></div>
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
    [MessageCircle, 'Team Announcements', 'Broadcast updates instantly to the whole team.', 'blue'],
    [CalendarDays, 'Shared Schedules', 'Everyone sees the same match and training calendar.', 'purple'],
    [CheckSquare, 'Attendance Tracking', "Monitor who confirmed, who's absent, and why.", 'green'],
    [ClipboardList, 'Team Activity Feed', 'Live updates on training, results, and milestones.', 'orange'],
  ];

  return (
    <section className="collaboration section-gap-small">
      <div className="container">
        <div className="section-heading collaboration__heading">
          <Eyebrow>TEAM COLLABORATION</Eyebrow>
          <h2>One Team. One<br /><span>Conversation.</span></h2>
          <p>Keep everyone aligned with a dedicated communication hub for coaches, athletes, and staff.</p>
        </div>

        <div className="collaboration__grid">
          <div className="collab-phone">
            <PhoneShell className="phone--collab">
              <div className="activity-card activity-card--phone">
                <div className="channel-header">
                  <div><span className="channel-dot" />Wolf Team Channel</div>
                  <span>12 Members Online</span>
                </div>

                <div className="activity-card__body">
                  <div className="activity-title">📣 Match vs City Hawks rescheduled</div>

                  <div className="chat-line chat-line--left">
                    <div className="chat-avatar coach">CR</div>
                    <div>
                      <b>Coach Rivera</b>
                      <p>Match vs City Hawks has been rescheduled to Saturday 4:30 PM. Please confirm attendance by tonight. Training tomorrow is mandatory 7 AM sharp. 🏃</p>
                    </div>
                  </div>

                  <div className="chat-line chat-line--right">
                    <div>
                      <b>Marcus Williams</b>
                      <p>Got it, Coach! I'll be there early. 💪</p>
                    </div>
                  </div>

                  <div className="chat-line chat-line--right second">
                    <div>
                      <b>Sofia Reyes</b>
                      <p>Confirmed! See everyone Saturday 🏆</p>
                    </div>
                  </div>

                  <div className="attendance-confirmed"><Check size={14} /> 9/12 members confirmed attendance</div>

                  <div className="composer">
                    <span>Write a message...</span>
                    <button aria-label="Send message"><Send size={15} /></button>
                  </div>
                </div>
              </div>
            </PhoneShell>
          </div>

          <div className="collab-features">
            {cards.map(([Icon, title, text, tone]) => (
              <div className="collab-item" key={title}>
                <span className={`collab-item__icon ${tone}`}><Icon size={17} /></span>
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

function Scouts() {
  return (
    <section className="scouts">
      <div className="container scouts__inner">
        <div className="section-heading scouts__heading">
          <Eyebrow light>FOR SCOUTS</Eyebrow>
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

function Ecosystem() {
  return (
    <section className="ecosystem section-gap-large">
      <div className="container">
        <div className="section-heading">
          <Eyebrow>THE CHMPYN ECOSYSTEM</Eyebrow>
          <h2>One Ecosystem. Every Journey.</h2>
          <p>CHMPYN connects every part of the sports journey from participation and development to competition, connection, and opportunity.</p>
        </div>

        <div className="ecosystem-flow">
          {ecosystemSteps.map(([title, text, Icon, tone], index) => (
            <div className="ecosystem-node-wrap" key={title}>
              <article className={`ecosystem-node eco-${tone}`}>
                <span className="ecosystem-icon"><Icon size={20} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
              {index < ecosystemSteps.length - 1 && <div className="ecosystem-line" />}
            </div>
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
          <Eyebrow>YOUR PATH</Eyebrow>
          <h2>Your Journey. Your Goals. Your Progress.</h2>
        </div>

        <div className="journey-flow">
          {journeySteps.map(([num, title, text, tone], index) => (
            <div className="journey-step-wrap" key={num}>
              <article className={`journey-step step-${tone}`}>
                <span className="journey-number">{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
              {index < journeySteps.length - 1 && <div className="journey-line" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileShowcase() {
  return (
    <section className="mobile-showcase">
      <div className="container">
        <div className="section-heading">
          <Eyebrow>MOBILE APP</Eyebrow>
          <h2>CHMPYN In Your<br /><span>Pocket</span></h2>
          <p>Take your entire sports management experience everywhere<br className="desktop-br" /> available on iOS and Android.</p>
        </div>

        <div className="phone-trio">
          <DashboardScreen className="phone--side phone--left" variant="coach" />
          <SplashScreen className="phone--center" />
          <ScheduleScreen className="phone--side phone--right" />
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="testimonials section-gap-tiny">
      <div className="container">
        <div className="section-heading">
          <Eyebrow>TESTIMONIALS</Eyebrow>
          <h2>What the <span>CHMPYN Community</span> Says</h2>
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
          <p>Available on iOS and Android. Manage teams, track performance, and stay connected from anywhere no laptop required.</p>
        </div>

        <div className="store-badges">
          <img src={`${A}v5-store-badges.png`} alt="Download CHMPYN on the App Store or Google Play" />
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
          <h3>PLATFORM</h3>
          <a href="#about">Athletes</a>
          <a href="#about">Coaches</a>
          <a href="#about">Teams</a>
          <a href="#about">Scouts</a>
        </div>

        <div className="footer__column">
          <h3>NAVIGATION</h3>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#about">Features</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer__column footer__contact">
          <h3>CONTACT</h3>
          <a href="mailto:contact@chmpyn.com">contact@chmpyn.com</a>
          <a href="tel:+10000000000">+1 XXXXX XXXXX</a>
          <p><MapPin size={12} />1000 N West Street, Suite<br />1200, Wilmington, DE 19801</p>
        </div>

        <div className="footer__column footer__download">
          <h3>DOWNLOAD APP</h3>
          <a href="#download">App Store</a>
          <a href="#download">Google Play</a>
        </div>
      </div>

      <div className="container footer__bottom" id="privacy">
        <span>© 2026 CHMPYN. All Rights Reserved.</span>
        <div><a href="#privacy">Privacy Policy</a><a href="#privacy">Terms of Service</a></div>
      </div>
    </footer>
  );
}

const DESIGN_WIDTH = 1442;
const DESIGN_HEIGHT = 10703;
const DESKTOP_ARTBOARD_BREAKPOINT = 1100;

function ResponsiveArtboard({ children }) {
  const [viewportWidth, setViewportWidth] = useState(() =>
    typeof window === 'undefined' ? DESIGN_WIDTH : window.innerWidth,
  );

  useEffect(() => {
    let frame = 0;

    const updateViewport = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setViewportWidth(window.innerWidth);
      });
    };

    updateViewport();
    window.addEventListener('resize', updateViewport, { passive: true });
    window.visualViewport?.addEventListener('resize', updateViewport, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', updateViewport);
      window.visualViewport?.removeEventListener('resize', updateViewport);
    };
  }, []);

  const desktopArtboard = viewportWidth >= DESKTOP_ARTBOARD_BREAKPOINT;
  const scale = useMemo(
    () => (desktopArtboard ? viewportWidth / DESIGN_WIDTH : 1),
    [desktopArtboard, viewportWidth],
  );

  const stageStyle = desktopArtboard
    ? { height: `${DESIGN_HEIGHT * scale}px` }
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
      <div className="site-artboard" style={canvasStyle}>
        {children}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ResponsiveArtboard>
      <Navbar />
      <main>
        <Hero />
        <StatStrip />
        <Overview />
        <Growth />
        <Collaboration />
        <Roles />
        <Scouts />
        <Ecosystem />
        <JourneyPath />
        <MobileShowcase />
        <Testimonials />
        <DownloadSection />
        <FinalCTA />
      </main>
      <Footer />
    </ResponsiveArtboard>
  );
}
