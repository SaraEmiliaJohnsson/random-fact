import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { FactStatus, fatchActions } from "../features/randomfact";


function GetFact() {

    const dispatch = useDispatch();

    async function fetchFact() {
        dispatch(fatchActions.isfetching());

        const URL = 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en';


        try {
            const response = await fetch(URL);
            const json = await response.json();

            const randomFact = json.text as string;
            console.log(randomFact);

            dispatch(fatchActions.success(randomFact));
        } catch {
            console.log('error');
            dispatch(fatchActions.failure());
        }

    }

    return (
        <section>
            <button onClick={() => fetchFact()}>Get Fact</button>
        </section>
    )
}




export default GetFact;