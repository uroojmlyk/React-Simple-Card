import React from "react";
import SimpleCard from "./components/SimpleCard";
import SimpleButton from "./components/SimpleButton";
import SimpleAlert from "./components/SimpleAlert";
import SimpleProfile from "./components/SimpleProfile";
import SimpleInput from "./components/SimpleInput";

function App() {
  return (
    <div className="min-h-screen bg-gray-800  p-4">
      <SimpleCard title="Card Title" description="This is a simple Tailwind card." />

      <SimpleButton text="Click Me" />

      <SimpleAlert message="This is an alert!" />

      <SimpleProfile
        name="John Doe"
        role="Frontend Developer"
        avatar="https://via.placeholder.com/100"
      />

      <SimpleInput label="Username" id="username" placeholder="Enter your username" />
    </div>
  );
}

export default App;
