'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var ReadMoreText = function (props) {
    var _a = React.useState(false), isOverflowing = _a[0], setIsOverflowing = _a[1];
    var _b = React.useState(false), expanded = _b[0], setExpanded = _b[1];
    var containerRef = React.useRef(null);
    React.useEffect(function () {
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
    return (React__default.createElement("div", { className: "rm-container" },
        React__default.createElement("div", { ref: containerRef, className: "rm-text-wrapper" }, type === 'html' ?
            React__default.createElement("p", { className: classNames, style: {
                    lineClamp: lines,
                    WebkitLineClamp: lines,
                }, dangerouslySetInnerHTML: { __html: _html } })
            :
                React__default.createElement("p", { className: classNames, style: {
                        lineClamp: lines,
                        WebkitLineClamp: lines,
                    } }, text)),
        isOverflowing ?
            (React__default.createElement("div", { className: "rm-action-button-container" }, !expanded ?
                React__default.createElement("button", { className: "rm-more-button", onClick: onAction }, readMoreText) :
                React__default.createElement("button", { className: "rm-less-button", onClick: toggleExpand }, readLessText)))
            : null));
};

exports.default = ReadMoreText;
//# sourceMappingURL=index.js.map
