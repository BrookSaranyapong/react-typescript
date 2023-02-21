const AppFooter = () => {
    const company = 'TypeScript';
    const isShow = false;

    const showMsg = () => {
        alert('Hello TypeScript');
    }

    return (
        <>
            <hr />
            <button onClick={showMsg}>Click Me!</button>
            <p>created by {company}</p>
            <p>{new Date().getFullYear()}</p>
            {
                isShow && <p>Hello React 18</p>
            }
        </>
    );
}

export default AppFooter;