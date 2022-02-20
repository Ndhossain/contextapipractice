import React from 'react';
import ClickCounter from './ClickCounter';
import ThemeContext from './context/themeContext';
import Counter from './Counter';
import Section from './Section';

export default class App extends React.Component {
    state = {
        theme: 'Dark',
    };

    render() {
        const { theme } = this.state;
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        const myTheme = {
            theme,
        };
        return (
            <div className="App">
                <div>
                    <Counter>
                        {(count, handleChange) => (
                            <ClickCounter count={count} handleChange={handleChange} />
                        )}
                    </Counter>
                </div>
                <br />
                <div>
                    <ThemeContext.Provider value={myTheme}>
                        <Section />
                    </ThemeContext.Provider>
                </div>
            </div>
        );
    }
}
