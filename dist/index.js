'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var ReadMoreText = function (props) {
    var _a = props.type, type = _a === void 0 ? 'plainText' : _a, _b = props.text, text = _b === void 0 ? '' : _b, _c = props.readMoreText, readMoreText = _c === void 0 ? 'More' : _c, _d = props.readLessText, readLessText = _d === void 0 ? 'Less' : _d, _e = props.lines, lines = _e === void 0 ? 3 : _e, onAction = props.onAction;
    var _f = React.useState(false), isOverflowing = _f[0], setIsOverflowing = _f[1];
    var _g = React.useState(false), expanded = _g[0], setExpanded = _g[1];
    // Measure the clamped <p> itself: once overflow:hidden applies, the
    // wrapper reports scrollHeight == clientHeight and never detects overflow.
    var textRef = React.useRef(null);
    React.useEffect(function () {
        if (expanded)
            return;
        var el = textRef.current;
        if (!el)
            return;
        setIsOverflowing(el.scrollHeight > el.clientHeight);
    }, [text, lines, type, expanded]);
    var handleMore = function () {
        setExpanded(true);
        if (onAction)
            onAction();
    };
    var classNames = 'rm-typography' + (expanded ? '' : ' rm-text-container');
    var clampStyle = { lineClamp: lines, WebkitLineClamp: lines };
    return (React__default.createElement("div", { className: "rm-container" },
        React__default.createElement("div", { className: "rm-text-wrapper" }, type === 'html' ?
            React__default.createElement("p", { ref: textRef, className: classNames, style: clampStyle, dangerouslySetInnerHTML: { __html: text.replace(/(?:\r\n|\r|\n)/g, '<br />') } })
            :
                React__default.createElement("p", { ref: textRef, className: classNames, style: clampStyle }, text)),
        isOverflowing ?
            (React__default.createElement("div", { className: "rm-action-button-container" }, !expanded ?
                React__default.createElement("button", { type: "button", className: "rm-more-button", "aria-expanded": false, onClick: handleMore }, readMoreText) :
                React__default.createElement("button", { type: "button", className: "rm-less-button", "aria-expanded": true, onClick: function () { return setExpanded(false); } }, readLessText)))
            : null));
};

exports.default = ReadMoreText;
//# sourceMappingURL=index.js.map
