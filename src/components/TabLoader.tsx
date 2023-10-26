import React, { lazy, Suspense } from 'react';

const TabLoader: React.FC<{ path: string }> = ({ path }) => {

    const TabContent = lazy(() => import(`../${path}`));

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <TabContent />
        </Suspense>
    );
};

export default TabLoader;