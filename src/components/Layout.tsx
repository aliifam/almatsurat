export default function Layout({ children: ReactNode }) {
  return (
    <div>
      <header>
        <h1>My Site</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
