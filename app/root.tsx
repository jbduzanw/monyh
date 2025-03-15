import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import styles from "./tailwind.css?url";
import { Card, CardBody, NextUIProvider, Tab, Tabs } from "@nextui-org/react";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

const tabs = [
  { label: "Acceuil", href: "/" },
  { label: "Mes cours", href: "/cours" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Réservations", href: "/reservation" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const pathname = useLocation()?.pathname;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <NextUIProvider>
          <div className="flex flex-col h-screen gap-4 p-4">
            <Tabs aria-label="Dynamic tabs" items={tabs} selectedKey={pathname}>
              {(item) => (
                <Tab key={item.label} title={item.label} href={item.href}>
                  <Card>
                    <CardBody>{item.label}</CardBody>
                  </Card>
                </Tab>
              )}
            </Tabs>
            {children}
            <ScrollRestoration />
            <Scripts />
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
