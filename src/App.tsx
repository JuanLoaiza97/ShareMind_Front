import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrendingPosts from "./components/TrendingPosts";
import TopCommunities from "./components/TopCommunities";
import JoinNow from "./components/JoinNow";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#1E293B] flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TrendingPosts />
        <TopCommunities />
        <JoinNow />
      </main>
      <Footer />
    </div>
  );
}

export default App;
