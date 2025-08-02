import React from 'react';
import {Link} from "react-router";

const Breadcrumb = ({items}) => {
    return (
        <nav className="text-gray-600 text-sm my-4">
            <ol className="flex space-x-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        {index > 0 && <span className="mx-1">/</span>}
                        {item.to ? (
                            <Link to={item.to} className="text-blue-600 hover:underline">{item.label}</Link>
                        ) : (
                            <span>{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;