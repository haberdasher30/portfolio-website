import React from "react";

function App() {
  return (
    <React.Fragment>
      <div className="h-dvh w-screen flex flex-col items-center justify-center gap-10">
        <img src="/profile.png" alt="profile" className="w-96 h-auto" />

        <p className="text-2xl font-semibold">You have been hacked by</p>

        <h1 className="text-5xl md:text-8xl font-bold">NISHIT BATWAL</h1>
      </div>
    </React.Fragment>
  );
}

export default App;
