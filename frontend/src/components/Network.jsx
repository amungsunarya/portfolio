export default function Network() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl mb-6">Network Topology</h2>
      <div className="flex justify-center gap-10">
        <div className="bg-cyan-500 p-4 rounded-xl">Router</div>
        <div className="bg-blue-500 p-4 rounded-xl">Switch</div>
        <div className="bg-green-500 p-4 rounded-xl">Server</div>
      </div>
    </section>
  );
}