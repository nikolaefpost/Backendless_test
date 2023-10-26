import React from 'react';
import { Link } from 'react-router-dom';

interface Tab {
    id: string;
    title: string;
    path: string;
}

const TabsList: React.FC<{ tabs: Tab[] }> = ({ tabs }) => (
    <ul>
        {tabs.map((tab) => (
            <li key={tab.id}>
                <Link to={tab.id}>{tab.title}</Link>
            </li>
        ))}
    </ul>
);

export default TabsList;