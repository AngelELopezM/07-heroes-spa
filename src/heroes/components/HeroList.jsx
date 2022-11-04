import { useMemo } from 'react';
import { getHeroesByPublisher, HeroCard } from '../'

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className='row rows-cols-1 row-cols-3 g-3'>
            {
                heroes.map(x =>
                    <HeroCard
                        key={x.id}
                        {...x} />
                )
            }
        </div>
    )
}
