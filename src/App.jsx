import { useState } from "react";
import Header from "./Header";
import Slide from "./Slide";
import Shop from "./Shop";
import Counter from "./Counter";
import Username from "./Username";
import "./App.css";

const views = {
  overview: { title: "Overview", eyebrow: "Saturday, November 14, 2026" },
  shop: { title: "Shopping", eyebrow: "Your everyday essentials" },
  tasbiix: { title: "Tasbiix", eyebrow: "A calm moment for remembrance" },
  username: { title: "Profile", eyebrow: "Make this space yours" },
};

function Overview({ onNavigate }) {
  return <div className="overview-page">
    <section className="welcome-card"><div><span className="pill pill-light">Your personal space</span><h2>As-salaamu alaykum, Nuur</h2><p>A simple place to shop, reflect, and keep your daily rhythm in balance.</p><button className="primary-button" onClick={() => onNavigate("tasbiix")}>Start tasbiix <span>→</span></button></div><div className="welcome-orb"><span>☾</span></div></section>
    <section className="stats-grid"><button className="stat-card" onClick={() => onNavigate("tasbiix")}><span className="stat-icon gold">✦</span><span className="stat-label">Tasbiix today</span><strong>0</strong><small>Begin your count <span>→</span></small></button><button className="stat-card" onClick={() => onNavigate("shop")}><span className="stat-icon blue">⌁</span><span className="stat-label">Shopping list</span><strong>4</strong><small>Items to explore <span>→</span></small></button><button className="stat-card" onClick={() => onNavigate("username")}><span className="stat-icon green">◉</span><span className="stat-label">Your profile</span><strong>Ready</strong><small>Personalize it <span>→</span></small></button></section>
    <section className="section-heading"><div><span className="section-kicker">Quick actions</span><h3>What would you like to do?</h3></div></section>
    <div className="quick-grid"><button className="quick-card" onClick={() => onNavigate("shop")}><span className="quick-illustration shopping">🛍</span><span><strong>Browse the shop</strong><small>Find useful products for your day</small></span><b>↗</b></button><button className="quick-card" onClick={() => onNavigate("username")}><span className="quick-illustration profile">✎</span><span><strong>Update your profile</strong><small>Set your name and preferences</small></span><b>↗</b></button></div>
  </div>;
}

function App() {
  const [activeView, setActiveView] = useState("overview");
  const [menuOpen, setMenuOpen] = useState(false);
  const view = views[activeView];
  const navigate = (next) => { setActiveView(next); setMenuOpen(false); };
  return <div className="app-shell"><Slide activeView={activeView} onNavigate={navigate} open={menuOpen} onClose={() => setMenuOpen(false)} /><main className="main-area"><Header title={view.title} eyebrow={view.eyebrow} onMenu={() => setMenuOpen(true)} /><div className="page-content">{activeView === "overview" && <Overview onNavigate={navigate} />}{activeView === "shop" && <Shop />}{activeView === "tasbiix" && <Counter />}{activeView === "username" && <Username />}</div></main></div>;
}

export default App;
