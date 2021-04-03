// Common utilities for server- or client-side

export function onServer () {
    return (typeof window === 'undefined');
}

export function onClient () {
    return (typeof window !== 'undefined');
}

export function whereAmI () {
    if ( onServer() ) {
        return 'server';
    } else {
        return 'client';
    }
}

export async function sleep (seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(true), Math.round(1000 * seconds));
    });
}

// end of utils.mjs
