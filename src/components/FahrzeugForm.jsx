import { useRef } from "react"

export default function FahrzeugForm(props) {

    const herstellerRef = useRef()
    const typRef = useRef()
    const laufleistungsRef = useRef()
    const zuladungsRef = useRef()
    const verbrauchsRef = useRef()
    const standortRef = useRef()
    const farbeRef = useRef()

    function senden() {
        const lkw = {
            hersteller: herstellerRef.current.value,
            typ: typRef.current.value,
            laufleistung: laufleistungsRef.current.value,
            zuladung: zuladungsRef.current.value,
            verbrauch: verbrauchsRef.current.value,
            standort: standortRef.current.value,
            farbe: farbeRef.current.value
        }

        fetch('http://localhost:9999/api/fahrzeuge', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(lkw)
        }).then(() => {
            props.refresh(prev => !prev)
            herstellerRef.current.value = ''
            typRef.current.value = ''
            laufleistungsRef.current.value = ''
            zuladungsRef.current.value = ''
            standortRef.current.value = ''
            verbrauchsRef.current.value = ''
            farbeRef.current.value = '#abcdef'
        })

    }
    return (
        <div>
            <input ref={herstellerRef} type="text" placeholder="Hersteller" />
            <input ref={typRef} type="text" placeholder="Typ" />
            <input ref={laufleistungsRef} type="number" placeholder="Laufleistung in km" />
            <input ref={zuladungsRef} type="number" placeholder="Zuladung in t" />
            <input ref={verbrauchsRef} type="number" placeholder="Verbrauch pro 100km" />
            <input ref={standortRef} type="text" placeholder="Standort" />
            <input ref={farbeRef} type="color" />
            <button onClick={senden}>Senden</button>
        </div>
    )
}