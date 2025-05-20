import React from 'react';

const Header: React.FC = () => {
    return (
        <>
            <header>
                <nav>
                    <button className='fixed text-white-800 text-2xl px-3 py-2 ' onClick={() => { if (typeof window !== 'undefined') { window.history.back() } }}>↩</button>
                </nav>
            </header>
        </>
    );
};

export default Header;