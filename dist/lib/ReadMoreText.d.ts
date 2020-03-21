import React from 'react';
import './index.css';
export interface ReadMoreTextProps {
    text: string;
    type?: 'plainText' | 'html';
    readMoreText?: string;
    readLessText?: string;
    containerHeight?: string;
    onAction?: () => void;
    lines?: number;
}
declare const _default: React.FC<ReadMoreTextProps>;
export default _default;
