import { useState } from "react";

const AppFooter = () => {
    // let company = 'TypeScript';
    const [company, setCompany] = useState()
    const isShow = false;

    const showMsg = () => {
        // alert('Hello TypeScript');
        setCompany("React");

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