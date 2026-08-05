import React, { useState, useEffect, useRef } from 'react'
import './index.css'


export interface ReadMoreTextProps {
    text: string
    type?: 'plainText' | 'html'
    readMoreText?: string
    readLessText?: string
    onAction?: () => void
    lines?: number
}


const ReadMoreText: React.FC<ReadMoreTextProps> = (props) => {
    const {
        type = 'plainText',
        text = '',
        readMoreText = 'More',
        readLessText = 'Less',
        lines = 3,
        onAction
    } = props

    const [isOverflowing, setIsOverflowing] = useState(false)
    const [expanded, setExpanded] = useState(false)

    // Measure the clamped <p> itself: once overflow:hidden applies, the
    // wrapper reports scrollHeight == clientHeight and never detects overflow.
    const textRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        if (expanded) return
        const el = textRef.current
        if (!el) return
        setIsOverflowing(el.scrollHeight > el.clientHeight)
    }, [text, lines, type, expanded])

    const handleMore = () => {
        setExpanded(true)
        if (onAction) onAction()
    }

    const classNames = 'rm-typography' + (expanded ? '' : ' rm-text-container')
    const clampStyle = { lineClamp: lines, WebkitLineClamp: lines }

    return (
        <div className="rm-container">
            <div className="rm-text-wrapper">
                {
                    type === 'html' ?
                        <p ref={textRef} className={classNames} style={clampStyle}
                            dangerouslySetInnerHTML={{ __html: text.replace(/(?:\r\n|\r|\n)/g, '<br />') }} />
                        :
                        <p ref={textRef} className={classNames} style={clampStyle}>{text}</p>
                }
            </div>
            {
                isOverflowing ?
                    (
                        <div className="rm-action-button-container">
                            {
                                !expanded ?
                                    <button type="button" className="rm-more-button" aria-expanded={false} onClick={handleMore}>{readMoreText}</button> :
                                    <button type="button" className="rm-less-button" aria-expanded={true} onClick={() => setExpanded(false)}>{readLessText}</button>
                            }
                        </div>
                    )
                    : null
            }
        </div>
    )

}


export default ReadMoreText
