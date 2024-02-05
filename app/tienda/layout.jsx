import NavTienda from "@/components/NvTienda";

export const metadata = {
  title: "tienda",
};

export default function TiendaLayout({ children }) {
  return (
    <>
      <NavTienda />
      {children}
    </>
  );
}
