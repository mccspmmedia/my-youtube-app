import React from 'react';

const PrivatePage: React.FC = () => {
    return (
        <div>
            <h1>Защищенная страница</h1>
            {/* Содержимое доступное только после аутентификации */}
        </div>
    );
};

export default PrivatePage;
