
import React from 'react';

type Props = {
    children: React.ReactNode | React.ReactNode[];
}


const AdminPage = ({ children}: Props) => {
    return (
        <div>
            <h1> This is Admin Page layout</h1>
            {children}
        </div>
    )
} 

export default AdminPage;