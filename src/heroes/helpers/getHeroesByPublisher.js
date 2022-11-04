import { heroes } from '../'

export const getHeroesByPublisher = (publisher) => {
    
    const validPublishers = ['DC Comics', 'Marvel Comics'];
    if (!validPublishers.includes(publisher)) {
        throw new Error(`${publisher} is not valid`);
    }

    return heroes.filter(x => x.publisher === publisher);
}