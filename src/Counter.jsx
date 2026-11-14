import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(33);
  const progress = Math.min((count / target) * 100, 100);
  return (
    <div className="counter-page">
      <section className="counter-card">
        <div className="counter-intro">
          <span className="pill">Daily practice</span>
          <h2>Take a quiet moment.</h2>
          <p>Count your remembrance at your own pace. There is no rush.</p>
          <div className="target-picker">
            <span>Target</span>
            {[33, 99, 100].map((value) => (
              <button
                key={value}
                className={target === value ? "selected" : ""}
                onClick={() => setTarget(value)}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
        <div
          className="counter-ring"
          style={{ "--progress": `${progress * 3.6}deg` }}
        >
          <div>
            <strong>{count}</strong>
            <span>of {target}</span>
          </div>
        </div>
      </section>
      <section className="counter-actions">
        <button className="count-button" onClick={() => setCount(count + 1)}>
          Tap to count <span>+</span>
        </button>
        <button className="reset-button" onClick={() => setCount(0)}>
          ↻ Reset
        </button>
      </section>
      <div className="counter-note">
        <span>✦</span>
        <p>
          <strong>Small steps matter.</strong>
          <br />
          Return here whenever you need a little calm in your day.
        </p>
      </div>
    </div>
  );
}

export default Counter;

// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   function addCount() {
//     setCount(count + 1);
//   }

//   function resetCount() {
//     setCount(0);
//   }

//   return (
//     <div>
//       <h1>Tasbiix Counter</h1>
//       <h2>{count}</h2>
//       <button onClick={addCount}>Add +</button>
//       <button onClick={resetCount}>Reset</button>
//     </div>
//   );
// }

// export default Counter;
