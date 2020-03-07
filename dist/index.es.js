import React, { useState, useRef, useEffect } from 'react';

var ReadMoreText = function (props) {
    var _a = useState(false), isOverflowing = _a[0], setIsOverflowing = _a[1];
    var _b = useState(false), expanded = _b[0], setExpanded = _b[1];
    var containerRef = useRef(null);
    useEffect(function () {
        var el = containerRef.current;
        if (!el)
            return;
        if (el.scrollHeight > el.clientHeight) {
            setIsOverflowing(true);
        }
    }, [props.lines]);
    var toggleExpand = function () {
        setExpanded(!expanded);
    };
    var formatText = function (text) { return text.replace(/(?:\r\n|\r|\n)/g, '<br />'); };
    var _c = props.type, type = _c === void 0 ? 'plainText' : _c, _d = props.text, text = _d === void 0 ? '' : _d, _e = props.readMoreText, readMoreText = _e === void 0 ? 'More' : _e, _f = props.readLessText, readLessText = _f === void 0 ? 'Less' : _f, _g = props.lines, lines = _g === void 0 ? 3 : _g, _h = props.onAction, onAction = _h === void 0 ? toggleExpand : _h;
    var _html = formatText(text);
    var classNames = ' rm-typography ' + (expanded ? '' : ' rm-text-container ') + (isOverflowing ? ' rm-overflow-hidden ' : '');
    return (React.createElement("div", { className: "rm-container" },
        React.createElement("div", { ref: containerRef, className: "rm-text-wrapper" }, type === 'html' ?
            React.createElement("p", { className: classNames, style: {
                    lineClamp: lines,
                    WebkitLineClamp: lines,
                }, dangerouslySetInnerHTML: { __html: _html } })
            :
                React.createElement("p", { className: classNames, style: {
                        lineClamp: lines,
                        WebkitLineClamp: lines,
                    } }, text)),
        isOverflowing ?
            (React.createElement("div", { className: "rm-action-button-container" }, !expanded ?
                React.createElement("button", { className: "rm-more-button", onClick: onAction }, readMoreText) :
                React.createElement("button", { className: "rm-less-button", onClick: toggleExpand }, readLessText)))
            : null));
};

export default ReadMoreText;
//# sourceMappingURL=index.es.js.map
