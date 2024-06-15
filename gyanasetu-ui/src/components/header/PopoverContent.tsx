import React, { useState } from 'react';

const Popover = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopover = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="popover-container">
            <button onClick={togglePopover}>Menu</button>
            {isOpen && (
                <div className="popover-content">
                    <ul>
                        <li><a href="/page1">Page 1</a></li>
                        <li><a href="/page2">Page 2</a></li>
                        <li><a href="/page3">Page 3</a></li>
                        {/* Add more links as needed */}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Popover;
