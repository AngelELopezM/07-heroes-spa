import { heroes } from '../'

export const getHeroById = (id) => {

    return heroes.find(x => x.id === id);
}