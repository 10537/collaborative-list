import React from 'react';

export const MainLayout = ({content, navbar, footer}) => (
        <div className="main-layout">
            { navbar }
        <main>
            { content }
        </main>
            { footer }
      </div>
)
