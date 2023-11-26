import React from 'react';
import { UserNameContext, PasswordContext } from '../App';

function CompC() {
    return (
        <>
            <UserNameContext.Consumer>
                {(userName) => (
                    <PasswordContext.Consumer>
                        {(password) => (
                            <>
                                <h3>Google employ username is: {userName}</h3>
                                <h3>Google employ password is: {password}</h3>
                                <h1>It's me from the component C... Rendered in App.jsx</h1>
                            </>
                        )}
                    </PasswordContext.Consumer>
                )}
            </UserNameContext.Consumer>
        </>
    );
}

export default CompC;
