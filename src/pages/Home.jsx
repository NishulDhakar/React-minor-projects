import React from "react";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col">
      
      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <Slider />
      </main>

      {/* Footer */}
      <Footer />
      
    </div>
  );
};

export default Index;
