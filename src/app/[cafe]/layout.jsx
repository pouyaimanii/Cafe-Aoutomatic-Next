import cafes from "@/data/cafes.json";

export default function Layout({ params, children }) {
  const cafe = cafes[params.cafe];

  return (
    <html>
      <body >
        {children}
      </body>
    </html>
  );
}
