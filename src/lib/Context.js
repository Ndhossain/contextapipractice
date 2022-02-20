class Context {
    constructor(value = null) {
        this.value = value;
    }

    // provider
    Provider = ({ children, value }) => {
        this.value = value;
        return children;
    };

    // consumer

    Consumer = ({ children }) => children(this.value);
}

export default function createContext(value = null) {
    const context = new Context(value);
    return {
        Provider: context.Provider,
        Consumer: context.Consumer,
    };
}
