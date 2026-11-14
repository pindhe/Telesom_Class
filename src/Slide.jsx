const navItems = [["overview", "⌂", "Overview"], ["shop", "▣", "Shopping"], ["tasbiix", "✦", "Tasbiix"], ["username", "◉", "Profile"]];

function Slide({ activeView, onNavigate, open, onClose }) {
  return <aside className={`sidebar ${open ? "is-open" : ""}`}><div className="brand"><span className="brand-mark">✦</span><span>Haji<span className="brand-dot">.</span></span><button className="close-menu" onClick={onClose}>×</button></div><div className="nav-label">Workspace</div><nav>{navItems.map(([id, icon, label]) => <button key={id} className={activeView === id ? "active" : ""} onClick={() => onNavigate(id)}><span className="nav-icon">{icon}</span>{label}{id === "shop" && <span className="nav-count">4</span>}</button>)}</nav><div className="sidebar-bottom"><div className="help-card"><span>✧</span><strong>Need a moment?</strong><small>Take a breath and reset.</small><button onClick={() => onNavigate("tasbiix")}>Open tasbiix →</button></div><div className="sidebar-user"><div className="avatar">N</div><div><strong>Nuur</strong><small>Personal account</small></div><span>⋮</span></div></div></aside>;
}

export default Slide;
