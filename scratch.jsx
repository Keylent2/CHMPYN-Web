function SplashPhone({ className = '' }) {
  return (
    <div className={`phone ${className}`}>
      <div className="app-ui app-ui--splash" style={{background: '#087bd4', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '16px'}}>
        <div style={{width: '64px', height: '64px', background: 'rgba(255,255,255,0.2)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Star size={32} fill="#fff" color="#fff" />
        </div>
        <strong style={{fontSize: '20px', letterSpacing: '0.15em', fontWeight: 700}}>CHMPYN</strong>
      </div>
    </div>
  );
}

function SchedulePhone({ className = '' }) {
  return (
    <div className={`phone ${className}`}>
      <div className="app-ui">
        <div className="app-ui-header" style={{paddingBottom: '12px'}}>
          <h2 style={{margin:0, fontSize:'18px', color:'#0f1c2a'}}>Schedule</h2>
          <div className="app-ui-header-actions" style={{display:'flex', gap:'12px', alignItems:'center'}}>
            <CalendarDays size={18} color="#0f1c2a" />
            <Search size={18} color="#0f1c2a" />
            <div style={{background:'#087bd4', color:'#fff', borderRadius:'50%', width:'24px', height:'24px', display:'flex', alignItems:'center', justifyContent:'center'}}>
              <Plus size={14} />
            </div>
          </div>
        </div>
        
        <div style={{display:'flex', gap:'12px', fontSize:'11px', fontWeight:600, color:'#6a7c92', padding:'0 20px 16px', borderBottom:'1px solid #edf2f7', overflowX: 'auto'}}>
          <span style={{color:'#087bd4'}}>All</span>
          <span>Scrimmage Details</span>
          <span>Scrimmage</span>
          <span>Other</span>
        </div>
        
        <div className="app-ui-schedule" style={{padding:'16px 20px', flex:1}}>
          <div className="app-ui-match">
            <div className="app-ui-match-top">
              <span className="app-ui-date">6 August 2026</span>
              <span className="app-ui-tag" style={{color:'#4caf50', borderColor:'#4caf50'}}>GAME &rsaquo;</span>
            </div>
            <div className="app-ui-match-teams">
              <div className="app-ui-team-icon" style={{background:'#e8f5e9', color:'#4caf50'}}><Trophy size={18}/></div>
              <div className="app-ui-team-names">
                <b>dribbling</b>
              </div>
            </div>
            <div className="app-ui-match-bottom">
              <MapPin size={12}/> main ground
            </div>
            <div style={{display:'flex', gap:'6px', marginTop:'8px'}}>
              <span style={{fontSize:'10px', padding:'2px 6px', border:'1px solid #4caf50', color:'#4caf50', borderRadius:'10px', fontWeight:600}}>JV 5:45 PM</span>
              <span style={{fontSize:'10px', padding:'2px 6px', border:'1px solid #8a9bb0', color:'#8a9bb0', borderRadius:'10px', fontWeight:600}}>V 6:45 PM</span>
            </div>
          </div>
          
          <div className="app-ui-match">
            <div className="app-ui-match-top">
              <span className="app-ui-date">6 August 2026 &middot; 10:30 PM</span>
              <span className="app-ui-tag orange">MATCH &rsaquo;</span>
            </div>
            <div className="app-ui-match-teams">
              <div className="app-ui-team-icon bg-orange"><Users size={18}/></div>
              <div className="app-ui-team-names">
                <b>Junior Varsity</b>
                <span>vs</span>
                <b>Varsity</b>
              </div>
            </div>
            <div className="app-ui-match-bottom">
              <MapPin size={12}/> main ground
            </div>
          </div>
          
          <div className="app-ui-match">
            <div className="app-ui-match-top">
              <span className="app-ui-date">5 August 2026 &middot; 5:00 PM</span>
              <span className="app-ui-tag" style={{color:'#9c27b0', borderColor:'#9c27b0'}}>Photoshoot &rsaquo;</span>
            </div>
            <div className="app-ui-match-teams">
              <div className="app-ui-team-icon" style={{background:'#f3e5f5', color:'#9c27b0'}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
              </div>
              <div className="app-ui-team-names">
                <b>Team Varsity Photoshoot</b>
              </div>
            </div>
            <div className="app-ui-match-bottom">
              <MapPin size={12}/> main ground
            </div>
          </div>
        </div>
        
        <div className="app-ui-nav">
          <div className="app-ui-nav-item"><Home size={18} /><span>Home</span></div>
          <div className="app-ui-nav-item active"><CalendarDays size={18} /><span>Schedule</span></div>
          <div className="app-ui-nav-item"><Users size={18} /><span>Team</span></div>
          <div className="app-ui-nav-item"><Target size={18} /><span>Practice</span></div>
          <div className="app-ui-nav-item"><MoreHorizontal size={18} /><span>More</span></div>
        </div>
      </div>
    </div>
  );
}

function DashboardPhone({ className = '', variant = 'athlete' }) {
  const isCoach = variant === 'coach';
  
  return (
    <div className={`phone ${className}`}>
      <div className="app-ui">
        {/* Header */}
        <div className="app-ui-header">
          <div className="app-ui-user">
            <div className="app-ui-avatar"><User size={20} /></div>
            <div className="app-ui-user-info">
              <b>{isCoach ? 'Suchitha' : 'Emma'}</b>
              <span>{isCoach ? 'Head Coach' : 'Player'}</span>
            </div>
          </div>
          <div className="app-ui-bell">
            <Bell size={20} />
            <span className="app-ui-badge">3</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="app-ui-section">
          <h3>Quick Actions</h3>
          <div className="app-ui-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="app-ui-card">
              <div className="app-ui-icon bg-blue"><CalendarDays size={20}/></div>
              <div className="app-ui-card-text">
                <b>Schedule</b>
                <span>Events & matches</span>
              </div>
            </div>
            {isCoach && (
              <div className="app-ui-card">
                <div className="app-ui-icon bg-purple" style={{background:'#f3e5f5', color:'#9c27b0'}}><Users size={20}/></div>
                <div className="app-ui-card-text">
                  <b>Team</b>
                  <span>Players & roster</span>
                </div>
              </div>
            )}
            <div className="app-ui-card">
              <div className="app-ui-icon bg-green"><Target size={20}/></div>
              <div className="app-ui-card-text">
                <b>Practice</b>
                <span>Plans & drills</span>
              </div>
            </div>
            {isCoach && (
              <div className="app-ui-card">
                <div className="app-ui-icon" style={{background:'#fff3e0', color:'#ff9800'}}><UserCog size={20}/></div>
                <div className="app-ui-card-text">
                  <b>User Mgmt</b>
                  <span>Manage members</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Recent Schedule */}
        <div className="app-ui-section" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          <div className="app-ui-section-header">
            <h3>Recent Schedule</h3>
            <a href="#">View all</a>
          </div>
          <div className="app-ui-schedule">
            {isCoach && (
              <div className="app-ui-match">
                <div className="app-ui-match-top">
                  <span className="app-ui-date">6 August 2026</span>
                  <span className="app-ui-tag" style={{color:'#4caf50', borderColor:'#4caf50'}}>GAME &rsaquo;</span>
                </div>
                <div className="app-ui-match-teams">
                  <div className="app-ui-team-icon" style={{background:'#e8f5e9', color:'#4caf50'}}><Trophy size={18}/></div>
                  <div className="app-ui-team-names">
                    <b>dribbling</b>
                  </div>
                </div>
                <div className="app-ui-match-bottom">
                  <MapPin size={12}/> main ground
                </div>
                <div style={{display:'flex', gap:'6px', marginTop:'8px'}}>
                  <span style={{fontSize:'10px', padding:'2px 6px', border:'1px solid #4caf50', color:'#4caf50', borderRadius:'10px', fontWeight:600}}>JV 5:45 PM</span>
                  <span style={{fontSize:'10px', padding:'2px 6px', border:'1px solid #8a9bb0', color:'#8a9bb0', borderRadius:'10px', fontWeight:600}}>V 6:45 PM</span>
                </div>
              </div>
            )}
            <div className="app-ui-match">
              <div className="app-ui-match-top">
                <span className="app-ui-date">6 August 2026 &middot; 10:30 PM</span>
                <span className="app-ui-tag orange">MATCH &rsaquo;</span>
              </div>
              <div className="app-ui-match-teams">
                <div className="app-ui-team-icon bg-orange"><Users size={18}/></div>
                <div className="app-ui-team-names">
                  <b>Junior Varsity</b>
                  <span>vs</span>
                  <b>Varsity</b>
                </div>
              </div>
              <div className="app-ui-match-bottom">
                <MapPin size={12}/> main ground
              </div>
            </div>
          </div>
        </div>

        <div className="app-ui-nav">
          <div className="app-ui-nav-item active"><Home size={18} /><span>Home</span></div>
          <div className="app-ui-nav-item"><CalendarDays size={18} /><span>Schedule</span></div>
          <div className="app-ui-nav-item"><Users size={18} /><span>Team</span></div>
          <div className="app-ui-nav-item"><Target size={18} /><span>Practice</span></div>
          <div className="app-ui-nav-item"><MoreHorizontal size={18} /><span>More</span></div>
        </div>
      </div>
    </div>
  );
}
