import NileLeagueLanding from "@/components/NileLeagueLanding/NileLeagueLanding";

export default function StandingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
        <NileLeagueLanding title="standings" />
      <div className="">{children}</div>
    </section>
  );
}
