import React from 'react'
import './Island.css'
const SaoVicente = ({onSelect}) => {
    return (
        <svg onClick={() => onSelect() } className='island' viewBox="0 0 195.000000 185.000000">
            <g transform="translate(0.000000,185.000000) scale(0.100000,-0.100000)"
                fill="#000000" stroke="none">
                <path d="M907 1430 c-5 -19 -49 -44 -98 -54 -16 -4 -29 -14 -33 -28 -9 -36 -7
-106 4 -113 16 -10 12 -42 -6 -49 -38 -14 -110 -6 -149 19 -24 14 -56 25 -78
25 -50 0 -115 -34 -123 -64 -3 -12 -22 -47 -43 -77 -29 -43 -44 -55 -68 -57
-17 -2 -41 -14 -54 -28 -12 -13 -31 -24 -41 -24 -16 0 -18 -10 -18 -117 0 -65
4 -123 8 -130 4 -6 32 -13 62 -15 52 -3 56 -5 65 -35 6 -18 24 -49 41 -69 28
-35 35 -38 98 -45 50 -5 72 -12 87 -28 11 -11 26 -21 34 -21 7 0 27 -11 43
-25 17 -14 35 -25 42 -25 19 0 70 -40 70 -56 0 -11 25 -14 140 -14 109 0 140
3 140 13 0 18 71 57 104 57 14 0 60 11 102 25 58 19 98 25 168 25 76 1 99 5
141 25 28 14 59 25 70 25 11 0 42 20 69 45 26 25 52 45 57 45 5 0 9 94 9 210
l0 210 -134 0 c-149 0 -140 -4 -146 70 -4 44 -3 69 6 148 4 40 2 79 -6 107
l-13 45 -126 0 -127 0 -11 -30 c-12 -32 -54 -54 -84 -45 -14 5 -19 16 -19 41
l0 34 -89 0 c-80 0 -89 -2 -94 -20z"/>
            </g>
        </svg>
    )
}
export default SaoVicente