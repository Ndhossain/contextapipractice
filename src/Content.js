import ThemeContext from './context/themeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

export default function Content() {
    return (
        <>
            <h1>This is a Content</h1>
            <Counter>
                {(count, handleChange) => (
                    <ThemeContext.Consumer>
                        {({ theme, switchTheme }) => (
                            <HoverCounter
                                switchTheme={switchTheme}
                                theme={theme}
                                count={count}
                                handleChange={handleChange}
                            />
                        )}
                    </ThemeContext.Consumer>
                )}
            </Counter>
        </>
    );
}
