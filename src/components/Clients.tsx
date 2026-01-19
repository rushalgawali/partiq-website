const clients = [
  "OEM / Tier Supplier",
  "Aftermarket Distributor",
  "Industrial Buyer",
  "Fleet / Service Network",
];

export default function Clients() {
  return (
    <div className="rounded-3xl border p-8">
      <div className="text-sm font-medium text-gray-700">Our Clients</div>
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {clients.map((c) => (
          <div key={c} className="rounded-2xl bg-gray-50 p-6 text-sm text-gray-700">
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}
