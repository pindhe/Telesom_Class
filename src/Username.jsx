import { useState } from "react";

function Username() {
  const [name, setName] = useState("Nuur");
  const [saved, setSaved] = useState(false);
  return (
    <div className="profile-page">
      <section className="profile-card">
        <div className="profile-cover">
          <div className="profile-avatar">
            {name.charAt(0).toUpperCase() || "N"}
          </div>
        </div>
        <div className="profile-body">
          <span className="section-kicker">Personal account</span>
          <h2>Make it feel like yours.</h2>
          <p>Choose the name you would like to see around your Haji space.</p>
          <label htmlFor="username">Your name</label>
          <div className="input-wrap">
            <span>✎</span>
            <input
              id="username"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                setSaved(false);
              }}
              placeholder="Enter your name"
              maxLength="24"
            />
          </div>
          <button className="primary-button" onClick={() => setSaved(true)}>
            {saved ? "Saved ✓" : "Save changes"}
          </button>
          {saved && (
            <span className="saved-message">
              Your profile has been updated.
            </span>
          )}
        </div>
      </section>
      <aside className="profile-tip">
        <span>✧</span>
        <div>
          <strong>Welcome, {name || "friend"}</strong>
          <p>Your details stay right here in this browser.</p>
        </div>
      </aside>
    </div>
  );
}

export default Username;

// function Username() {
//   const name = "Nuur";

//   return (
//     <div>
//       <h1>Welcome {name}</h1>
//     </div>
//   );
// }

// export default Username;
