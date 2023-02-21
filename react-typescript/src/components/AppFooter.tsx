const AppFooter = () => {
    const company = 'TypeScript'
    return (
        <>
            <p>created by {company}</p>
            <p>{new Date().getFullYear()}</p>
        </>
    );
}

export default AppFooter;