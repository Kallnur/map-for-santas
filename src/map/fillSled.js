const MAX_WEIGHT = 200;
const MAX_VOLUME = 100;

export function loadBag(gifts ,bag) {
    let currentWeight = 0;
    let currentVolume = 0;

    gifts
        .forEach((gift) => {
            if (currentWeight + gift.weight < MAX_WEIGHT && currentVolume + gift.volume < MAX_VOLUME) {
                bag.push(gift.id);
                currentWeight += gift.weight;
                currentVolume += gift.volume;
            }
        });

    console.warn({
        unusedWeight: MAX_WEIGHT - currentWeight,
        unusedVolume: MAX_VOLUME - currentVolume,
    });
}
