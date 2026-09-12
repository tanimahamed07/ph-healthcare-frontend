import Link from "next/link";

const routes = [
  { name: "Home", url: "/" },
  { name: "About us", url: "/about-us" },
];

export default function Header() {
  return (
    <header className="w-gull h-16 border border-b">
      {routes.map((route) => (
        <Link key={route.name} href={route.url}>
          {route.name}
        </Link>
      ))}
    </header>
  );
}
