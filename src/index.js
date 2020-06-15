import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';


const StyledSwiper = styled.div`
	position: fixed;

    ${({ pos, trans }) =>
        pos === 'bottom' && css`
            bottom: 0px;
            width: 100vw;
            transform: translateY(${trans});
        `
        || pos === 'top' && css`
            top: 0px;
            width: 100vw;
            transform: translateY(${trans});
        `
        || pos === 'right' && css`
            right: 0px;
            height: 100vh;
            transform: translateX(${trans});
        `
        || pos === 'left' && css`
            left: 0px;
            height: 100vh;
            transform: translateX(${trans});
        `
    }

	&.noDragged {
		transition: all 0.3s;
	}

	z-index: 999;
`;


const SwipeMe = ({ children, hide, position = "bottom", handle = 20 }) => {

    const [startPosY, setStartPosY] = useState(0);
    const [diff, setDiff] = useState(0);
    const [isDragged, setIsDragged] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [swipeableDivSizeY, setSwipeableDivSizeY] = useState(0);
    const [swipeableDivSizeX, setSwipeableDivSizeX] = useState(0);

    const swipeableEl = useRef();

    const onTouchMove = (e) => {
        switch (position) {
            default:
            case 'bottom':
            case 'top':
                setDiff(-(startPosY - e.touches[0].screenY));
                setIsDragged(true);
                break;
            case 'right':
            case 'left':
                setDiff(-(startPosY - e.touches[0].screenX));
                setIsDragged(true);
                break;
        }
    };

    const getStartPos = (e) => {
        switch (position) {
            default:
            case 'bottom':
            case 'top':
                setStartPosY(e.touches[0].screenY);
                break;
            case 'right':
            case 'left':
                setStartPosY(e.touches[0].screenX);
                break;
        }
    };

    const onTouchEnd = () => {
        setIsDragged(false);
        switch (position) {
            default:
            case 'bottom':
                if (diff > swipeableDivSizeY / 2) {
                    setIsHidden(true);
                    setDiff(swipeableDivSizeY);
                } else {
                    setIsHidden(false);
                    setDiff(0);
                }
                break
            case 'top':
                if (diff < -swipeableDivSizeY / 2) {
                    setIsHidden(true);
                    setDiff(0);
                } else {
                    setIsHidden(false);
                    setDiff(swipeableDivSizeY);
                }
                break
            case 'right':
                if (diff > swipeableDivSizeX / 2) {
                    setIsHidden(true);
                    setDiff(swipeableDivSizeX);
                } else {
                    setIsHidden(false);
                    setDiff(0);
                }
                break
            case 'left':
                if (diff < -swipeableDivSizeX / 2) {
                    setIsHidden(true);
                    setDiff(0);
                } else {
                    setIsHidden(false);
                    setDiff(swipeableDivSizeX);
                }
                break
        }

    };

    useEffect(() => {
        switch (position) {
            default:
            case 'bottom':
            case 'top':
                if (swipeableEl.current) {
                    setSwipeableDivSizeY(swipeableEl.current.offsetHeight);
                }
                break;
            case 'right':
            case 'left':
                if (swipeableEl.current) {
                    setSwipeableDivSizeX(swipeableEl.current.offsetWidth);
                }
                break;
        }

    }, [isHidden]);

    useEffect(() => {
        setIsHidden(hide);
    }, [hide]);

    const swipeable = () => {
        switch (position) {
            default:
            case 'bottom':
                return isHidden
                    ? diff > 0
                        ? swipeableDivSizeY - handle
                        : Math.max(swipeableDivSizeY - handle + diff, 0)
                    : Math.max(diff, 0)
            case 'top':
                return isHidden ?
                    diff < 0 ?
                        -swipeableDivSizeY + handle
                        : Math.min(-swipeableDivSizeY + handle + diff, 0)
                    : Math.min(diff, 0);
            case 'right':
                return isHidden ?
                    diff > 0 ?
                        swipeableDivSizeX - handle
                        : Math.max(swipeableDivSizeX - handle + diff, 0)
                    : Math.max(diff, 0);
            case 'left':
                return isHidden ?
                    diff < 0 ?
                        -swipeableDivSizeX + handle
                        : Math.min(-swipeableDivSizeX + handle + diff, 0)
                    : Math.min(diff, 0);
        }
    }

    return (
        <StyledSwiper
            ref={swipeableEl}
            onTouchMove={onTouchMove}
            onTouchStart={getStartPos}
            onTouchEnd={onTouchEnd}
            onClick={isHidden ? () => setIsHidden(false) : () => setIsHidden(true)}
            trans={`${swipeable()}px`}
            className={isDragged ? '' : 'noDragged'}
            pos={position}
        >
            {children}
        </StyledSwiper>
    )
}

export default SwipeMe;