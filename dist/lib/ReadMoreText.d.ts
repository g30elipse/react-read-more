import React from 'react';
export interface ReadMoreTextProps {
    text: string;
    type?: 'plainText' | 'html';
    readMoreText?: string;
    readLessText?: string;
    onAction?: () => void;
    lines?: number;
}
declare const ReadMoreText: React.FC<ReadMoreTextProps>;
export default ReadMoreText;
