import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../main';
import { FactStatus } from '../features/randomfact';

function RandomFact() {
    // const [randomFact, setRandomFact] = useState<string>('');

    const randomFact = useSelector((state: RootState) => state.RandomFact);

    let content: string | null = null;

    switch (randomFact.status) {
        case FactStatus.NORMAL:
            content = 'Ready for a fact';
            break;
        case FactStatus.FETCHING:
            content = 'Waiting for fact';
            break;
        case FactStatus.SUCCESS:
            content = randomFact.fact;
            break;
        default:
            content = 'No fact available.';
    }

    return (
        <section>
            {content}
        </section>
    )
}

export default RandomFact;