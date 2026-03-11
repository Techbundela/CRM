import Link from 'next/link';

const MENU = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Leads", path: "/leads" },
  { name: "Candidates", path: "/candidates" },
  { name: "Calls", path: "/calls" },
  { name: "Tasks", path: "/tasks" },
  { name: "Reports", path: "/reports" },
  { name: "Settings", path: "/settings" }
];

export default function Sidebar() {
  return (
    <aside className="bg-gray-900 text-white w-60 h-screen fixed left-0 top-0 flex flex-col">
      <div className="font-bold text-xl p-6">RecruitCRM</div>
      <nav className="flex-1">
        {MENU.map((item) => (
          <Link key={item.path} href={item.path} className="block py-3 px-6 hover:bg-gray-800">
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}