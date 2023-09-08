export default function FahrzeugItem({ truck }) {
  return (
      <div style={{ backgroundColor: truck.farbe }}>
          <p>Hersteller: {truck.hersteller}</p>
          <p>Typ: {truck.typ}</p>
          <p>Laufleistung: {truck.laufleistung} km</p>
      </div>
  )
}