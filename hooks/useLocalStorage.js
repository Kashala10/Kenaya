export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('kenaya-state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.log(err);
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('kenaya-state', serializedState);
    } catch (err) {
        // Ignore write errors.
        console.log(err);
    }
}

export const deleteState = () => {
    try {
        localStorage.removeItem('kenaya-state');
    } catch (err) {
        // Ignore write errors.
        console.log(err);
    }
}