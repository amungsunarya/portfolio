import { useEffect, useState } from "react";

export default function Monitoring() {
  const [cpu, setCpu] = useState(40);
  const [ram, setRam] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpu(Math.floor(Math.random() * 100));
      setRam(Math.floor(Math.random() * 100));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl mb-6">Monitoring</h2>
      <div className="max-w-xl mx-auto">
        <p>CPU {cpu}%</p>
        <div className="bg-gray-700 h-3 rounded mb-4">
          <div style={{ width: `${cpu}%` }} className="bg-cyan-500 h-3 rounded"></div>
        </div>

        <p>RAM {ram}%</p>
        <div className="bg-gray-700 h-3 rounded">
          <div style={{ width: `${ram}%` }} className="bg-blue-500 h-3 rounded"></div>
        </div>
      </div>
    </section>
  );
}