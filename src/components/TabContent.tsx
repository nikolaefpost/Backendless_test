import React, { ReactNode } from 'react';

const TabContent: React.FC<{ title: string; children: ReactNode }> = ({ title, children }) => (
    <div>
        <h2>{title}</h2>
        {children}
    </div>
);

export default TabContent;