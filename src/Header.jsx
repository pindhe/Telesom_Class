function Header({ title, eyebrow, onMenu }) {
  return <header className="topbar"><button className="mobile-menu" onClick={onMenu} aria-label="Open menu">☰</button><div><span className="topbar-eyebrow">{eyebrow}</span><h1>{title}</h1></div><div className="topbar-actions"><button className="icon-button" aria-label="Notifications">♢<i /></button><div className="avatar">N</div></div></header>;
}

export default Header;
