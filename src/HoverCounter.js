export default function HoverCounter({ count, handleChange, theme }) {
    const style =
        theme === 'Dark'
            ? {
                  backgroundColor: '#000000',
                  color: '#fff',
                  padding: '10px 0px',
              }
            : null;
    return (
        <div>
            <h1 style={style} onMouseOver={handleChange}>
                Hovered {count} times
            </h1>
        </div>
    );
}
