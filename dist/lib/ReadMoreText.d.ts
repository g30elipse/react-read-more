import React from 'react';
import './style.css';
interface IProps {
    text: string;
    type?: 'plainText' | 'html';
    readMoreText?: string;
    readLessText?: string;
    containerHeight?: string;
    onAction?: () => void;
    lines?: number;
}
declare const _default: React.FC<IProps>;
export default _default;
