import { useEffect } from "react";
import "./css/Hotel/hotel.css";

const Hotel = (state: any) => {

    let name: string[] = [];

    useEffect(() => {
        console.log(state.name)
    }, [])

    return (
        <>
            <h1>Hotel</h1>
        </>
    )
}
export default Hotel;