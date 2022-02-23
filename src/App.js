/* eslint-disable object-shorthand */
import React from 'react';
import ClickCounter from './ClickCounter';
import ThemeContext from './context/themeContext';
import Counter from './Counter';
import Section from './Section';

export default class App extends React.Component {
    state = {
        // eslint-disable-next-line react/no-unused-state
        theme: 'Dark',
        // eslint-disable-next-line react/no-unused-state
        switchTheme: () => {
            this.setState(({ theme }) => {
                if (theme === 'Dark') {
                    return {
                        theme: 'light',
                    };
                }
                return {
                    theme: 'Dark',
                };
            });
        },
    };

    render() {
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
                    <ThemeContext.Provider value={this.state}>
                        <Section />
                    </ThemeContext.Provider>
                </div>
            </div>
        );
    }
}
