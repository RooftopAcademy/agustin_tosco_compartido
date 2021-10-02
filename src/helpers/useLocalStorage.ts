const useLocalStorage = {
    get (key: string) {
        const value = window.localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    },

    getAll () : object {
        return { ...localStorage };
    },

    set(key: string, value: object) {
        window.localStorage.setItem(key, JSON.stringify(value));
    },

    delete(key : string) {
        window.localStorage.removeItem(key);
    },
}

export default useLocalStorage