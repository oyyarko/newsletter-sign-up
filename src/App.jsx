import "./App.css";
import React from "react";
import bgScreen from "./assets/illustration-sign-up-mobile.svg";
import iconList from "./assets/icon-list.svg";

const listData = [
  { id: 1, desc: "Product discovery and build what matters" },
  { id: 2, desc: "Measuring to ensure updates are a success" },
  { id: 3, desc: "And much more" },
];

function App() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-2 max-sm:p-0">
        <div className="gap-4 bg-white max-w-4xl text-black rounded-xl items-center justify-center px-20 py-24 grid lg:grid-cols-2 md:grid-cols-1">
          <div>
            <div className="pb-6">
              <h1 className="text-3xl font-bold">Stay Updated</h1>
              <p className="text-gray-600 text-xs">
                Join 60,000+ product managers receiving monthly updates on:
              </p>
            </div>
            {listData.map((list) => (
              <div key={list.id} className="flex gap-4 py-1">
                <img src={iconList} width={20} />
                <p>{list.desc}</p>
              </div>
            ))}
            <div className="py-6">
              <div className="flex mb-2 justify-between">
                <label className="text-xs font-bold">Email Address</label>
                <small className="text-rose-600 font-semibold">Valid email address</small>
              </div>
              <input type="text" className="p-3 rounded-md border w-full" placeholder="email@company.com"/>
            </div>
            <button className="bg-indigo-950 rounded-md px-4 w-full py-3 text-white">
              Subscribe to monthly newsletter
            </button>
          </div>
          <div>
            <img src={bgScreen} height={240} className="rounded-xl" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
