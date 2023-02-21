import { useState } from "react";
type User = {
    fullname: string
}
const AppFooter = () => {
    // let company = 'TypeScript';
    const [company, setCompany] = useState("TypeScript");
    // const [user, setUser] = useState<User>({ fullname: 'John Doe' });
    const [user, setUser] = useState<User | null>(null);
    const isShow = false;

    const showMsg = () => {
        // alert('Hello TypeScript');
        setCompany("React");
        setUser({ fullname: 'John Doe' })

    }

    return (
        <>
            <hr />
            {user && <p>User: {user?.fullname}</p>}
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