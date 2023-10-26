import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { TabsList, TabContent, TabLoader } from './components';
import tabsData from './tabs.json';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <TabsList tabs={tabsData} />
                <hr />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <TabContent title={tabsData[0].title}>
                                <TabLoader path={tabsData[0].path} />
                            </TabContent>
                        }
                    />
                    {tabsData.map((tab) => (
                        <Route
                            key={tab.id}
                            path={`/${tab.id}`}
                            element={
                                <TabContent title={tab.title}>
                                    <TabLoader path={tab.path} />
                                </TabContent>
                            }
                        />
                    ))}
                </Routes>
            </div>
        </Router>
    );
};

export default App;