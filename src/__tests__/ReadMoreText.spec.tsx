import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ReadMoreText, { ReadMoreTextProps } from '../lib/ReadMoreText';

// jsdom does no layout: scrollHeight/clientHeight are always 0.
// Stub the getters to simulate clamped (overflowing) or fitting text.
let spies: jest.SpyInstance[] = [];
const mockTextSize = (scrollHeight: number, clientHeight: number) => {
    spies.forEach(s => s.mockRestore());
    spies = [
        jest.spyOn(Element.prototype, 'scrollHeight', 'get').mockReturnValue(scrollHeight),
        jest.spyOn(Element.prototype, 'clientHeight', 'get').mockReturnValue(clientHeight),
    ];
};

let container: HTMLDivElement;

const renderComponent = (props: ReadMoreTextProps) => {
    act(() => {
        render(<ReadMoreText {...props} />, container);
    });
};

const click = (el: Element) => {
    act(() => {
        el.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
};

const moreButton = () => container.querySelector('.rm-more-button');
const lessButton = () => container.querySelector('.rm-less-button');
const paragraph = () => container.querySelector('p') as HTMLParagraphElement;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    spies.forEach(s => s.mockRestore());
    spies = [];
});

const LONG_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

describe('ReadMoreText', () => {
    it('renders the text clamped, with no toggle when it fits', () => {
        mockTextSize(50, 50);
        renderComponent({ text: LONG_TEXT });

        expect(paragraph().textContent).toBe(LONG_TEXT);
        expect(paragraph().className).toContain('rm-text-container');
        expect(moreButton()).toBeNull();
        expect(lessButton()).toBeNull();
    });

    it('shows the More button when the text overflows', () => {
        mockTextSize(216, 72);
        renderComponent({ text: LONG_TEXT });

        const more = moreButton() as HTMLButtonElement;
        expect(more).not.toBeNull();
        expect(more.textContent).toBe('More');
        expect(more.getAttribute('type')).toBe('button');
        expect(more.getAttribute('aria-expanded')).toBe('false');
        expect(lessButton()).toBeNull();
    });

    it('expands on More and collapses back on Less', () => {
        mockTextSize(216, 72);
        renderComponent({ text: LONG_TEXT });

        click(moreButton() as Element);
        expect(paragraph().className).not.toContain('rm-text-container');
        expect(moreButton()).toBeNull();
        const less = lessButton() as HTMLButtonElement;
        expect(less.textContent).toBe('Less');
        expect(less.getAttribute('aria-expanded')).toBe('true');

        click(less);
        expect(paragraph().className).toContain('rm-text-container');
        expect(moreButton()).not.toBeNull();
        expect(lessButton()).toBeNull();
    });

    it('calls onAction on More click and still expands', () => {
        mockTextSize(216, 72);
        const onAction = jest.fn();
        renderComponent({ text: LONG_TEXT, onAction });

        click(moreButton() as Element);
        expect(onAction).toHaveBeenCalledTimes(1);
        expect(lessButton()).not.toBeNull();
    });

    it('uses custom button labels', () => {
        mockTextSize(216, 72);
        renderComponent({ text: LONG_TEXT, readMoreText: 'Show more', readLessText: 'Show less' });

        expect((moreButton() as Element).textContent).toBe('Show more');
        click(moreButton() as Element);
        expect((lessButton() as Element).textContent).toBe('Show less');
    });

    it('removes the toggle when new text no longer overflows', () => {
        mockTextSize(216, 72);
        renderComponent({ text: LONG_TEXT });
        expect(moreButton()).not.toBeNull();

        mockTextSize(40, 40);
        renderComponent({ text: 'short' });
        expect(moreButton()).toBeNull();
    });

    it('renders html type via innerHTML, converting newlines to <br>', () => {
        mockTextSize(50, 50);
        renderComponent({ text: 'first\nsecond', type: 'html' });
        expect(paragraph().innerHTML).toBe('first<br>second');
    });

    it('renders plainText type as text, not markup', () => {
        mockTextSize(50, 50);
        renderComponent({ text: '<b>bold?</b>' });
        expect(paragraph().textContent).toBe('<b>bold?</b>');
        expect(paragraph().querySelector('b')).toBeNull();
    });
});
