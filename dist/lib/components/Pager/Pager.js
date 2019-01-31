import * as tslib_1 from "tslib";
import './pager.scss';
import React, { Component } from 'react';
import classnames from 'classnames';
import { PagerLink } from './';
import { getPositionStyle, getSizeStyle } from '../../props';
var Pager = /** @class */ (function (_super) {
    tslib_1.__extends(Pager, _super);
    function Pager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { current: 1 };
        _this.getPagerStyle = function (_a) {
            var rounded = _a.rounded, position = _a.position, size = _a.size;
            return classnames('pagination', { 'is-rounded': rounded }, getPositionStyle(position), getSizeStyle(size));
        };
        _this.incrementPage = function () { return _this.state.current < _this.props.pages ? _this.setPage(_this.state.current + 1) : null; };
        _this.decrementPage = function () { return _this.state.current > 1 ? _this.setPage(_this.state.current - 1) : null; };
        _this.setPage = function (page) { return _this.setState({ current: page }); };
        _this.renderElipsis = function () { return React.createElement("span", { className: "pagination-ellipsis" }, "\u2026"); };
        _this.renderPageLink = function (page) { return React.createElement(PagerLink, { key: page, page: page, current: _this.state.current, onClick: _this.setPage }); };
        _this.renderIncrementalLink = function (direction) {
            var text = direction === 'next' ? _this.props.textNext || 'Next' : _this.props.textPrevious || 'Previous';
            var disabled = { disabled: direction === 'next' ? _this.props.pages === _this.state.current : _this.state.current === 1 };
            var action = direction === 'next' ? function () { return _this.incrementPage(); } : function () { return _this.decrementPage(); };
            return React.createElement("a", tslib_1.__assign({}, disabled, { className: "pagination-" + direction, onClick: action }), text);
        };
        return _this;
    }
    Pager.prototype.render = function () {
        var _this = this;
        var pages = this.props.pages;
        var width = this.props.width || 3;
        var links = Array.from(Array(pages), function (v, i) { return v = _this.renderPageLink(i + 1); });
        var _a = this.getIndexFor(this.state.current, width, pages), start = _a.start, end = _a.end;
        return (React.createElement("nav", { className: this.getPagerStyle(this.props), role: "navigation", "aria-label": "navigation" },
            this.props.showIncrementalButtons && this.renderIncrementalLink('previous'),
            this.props.showIncrementalButtons && this.renderIncrementalLink('next'),
            React.createElement("ul", { className: "pagination-list" },
                links[0],
                pages > width + 2 && this.state.current > width && this.renderElipsis(),
                links.slice(start, end),
                pages > width + 2 && this.state.current < pages - 1 && this.renderElipsis(),
                pages > 1 && links[this.props.pages - 1])));
    };
    Pager.prototype.getIndexFor = function (page, width, max) {
        var midpoint = Math.floor(width / 2);
        var start = width >= max || page < midpoint + width ? 2 : page - midpoint;
        var end = width >= max ? max : start + width;
        if (end > max) {
            start = start - (end - max);
            end = max;
            if (start < 2)
                start = 2;
        }
        return { start: start - 1, end: end - 1 };
    };
    return Pager;
}(Component));
export { Pager };
