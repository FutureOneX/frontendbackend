import { useEffect, useState } from "react"
import FahrzeugItem from "./FahrzeugItems"
import FahrzeugForm from "./FahrzeugForm"

export default function FahrzeugListe() {
    const [fahrzeuge, setFahrzeuge] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        fetch('http://localhost:9999/api/fahrzeuge')
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
            })
            .then(data => setFahrzeuge(data))
            .catch(err => console.log(err))
    }, [refresh])
    return (
        <>
            <h1>Unsere Fahrzeuge</h1>
            <FahrzeugForm refresh={setRefresh} />
            {fahrzeuge.map((item, key) => <FahrzeugItem truck={item} key={key} />)}
        </>


    )
} 