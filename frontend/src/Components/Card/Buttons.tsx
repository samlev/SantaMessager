import React from "react";
import "../../Styles/buttons.css";


interface ButtonProps {
    label: React.ReactNode;
    ariaLabel: string;
    onClick: () => void;
    style?: React.CSSProperties;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({ label, ariaLabel, onClick, style, className }) => {
    return (
        <button
            className={`custom-button ${className}`}
            style={style}
            onClick={onClick}
            aria-label={ariaLabel}
        >
            {label}
        </button>
    );
}