export default function ClickCounter({ count, handleChange }) {
    return (
        <div>
            <button type="button" onClick={handleChange}>
                Clicked {count} times
            </button>
        </div>
    );
}
