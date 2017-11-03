
// Higher Order Component (HOC) - component (HOC) that renerds anther component
//Reuse code
// Render hijacking
// prop mainipulation
// abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>INFO</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>Thjis is private info. Plese dont share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? (<WrappedComponent {...props}/>) : <p>Please log in</p>}
            
        </div>
    );
};


const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="There are the datails"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the datails"/>, document.getElementById('app'));