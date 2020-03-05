import React, { useState, useEffect, useRef } from 'react'
import './style.css'


interface IProps {
    text: string
    type?: 'plainText' | 'html'
    readMoreText?: string
    readLessText?: string
    containerHeight?: string
    onAction?: () => void
    lines?: number
}


const ReadMoreText: React.FC<IProps> = (props) => {
    const [isOverflowing, setIsOverflowing] = useState(false)
    const [expanded, setExpanded] = useState(false)


    const containerRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        if (el.scrollHeight > el.clientHeight) {
            setIsOverflowing(true);
        }

    }, [])


    const toggleExpand = () => {
        setExpanded(!expanded)
    }

    const formatText = (text: string) => text.replace(/(?:\r\n|\r|\n)/g, '<br />');

    const {
        type = 'plainText',
        text = '',
        readMoreText = 'More',
        readLessText = 'Less',
        lines = 3,
        onAction = toggleExpand
    } = props

    const _html = formatText(text);

    const classNames = ' rm-typography ' + (expanded ? '' : ' rm-textContainer ') + (isOverflowing ? ' rm-overflow-hidden ' : '')

    return (
        <div>
            <div ref={containerRef}>
                {
                    type === 'html' ?
                        <p className={classNames} style={{
                            lineClamp: lines,
                            WebkitLineClamp: lines,
                        }} dangerouslySetInnerHTML={{ __html: _html }} />
                        :
                        <p className={classNames} style={{
                            lineClamp: lines,
                            WebkitLineClamp: lines,
                        }}>
                            {text}
                        </p>
                }

            </div>
            {
                isOverflowing ?
                    (
                        !expanded ?
                            <button onClick={onAction} >{readMoreText}</button> :
                            <button onClick={toggleExpand}>{readLessText}</button>
                    )
                    : null
            }
        </div>
    )

}



export default (ReadMoreText)