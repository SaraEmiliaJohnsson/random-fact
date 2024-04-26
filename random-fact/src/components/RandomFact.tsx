import { useState } from 'react';

function RandomFact() {
    const [randomFact, setRandomFact] = useState<string>('');

    return (
        <section>
            {randomFact}
        </section>
    )
}

export default RandomFact;