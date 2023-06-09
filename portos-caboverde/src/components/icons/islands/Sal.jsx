import React from 'react'
import './Island.css'
function Sal({onSelect}) {
    return (
        <svg onClick={() => onSelect() } className='island' viewBox="0 80 150.000000 160.000000">
            <g transform="translate(0.000000,260.000000) scale(0.0800000,-0.0800000)"
                fill="#000000" stroke="none">
                <path d="M850 2036 c0 -7 -12 -18 -27 -24 -55 -20 -96 -32 -115 -32 -17 0 -61
-30 -126 -86 -55 -49 -62 -54 -72 -54 -6 0 -10 -72 -10 -195 0 -149 3 -195 13
-195 6 0 22 -15 33 -33 l21 -33 -21 -27 c-12 -15 -27 -27 -34 -27 -8 0 -12
-17 -12 -49 0 -44 3 -49 25 -55 36 -9 35 -46 -1 -46 -24 0 -26 -3 -20 -31 3
-17 6 -53 6 -80 l0 -48 132 -3 132 -3 8 -35 c11 -51 0 -90 -27 -100 -27 -10
-38 -51 -33 -115 2 -32 7 -41 25 -43 12 -2 25 -12 28 -23 4 -11 17 -24 30 -29
25 -9 33 -37 42 -134 3 -35 1 -62 -6 -69 -6 -6 -11 -35 -11 -64 l0 -53 70 0
c46 0 70 4 70 11 0 19 50 59 73 59 12 0 39 -4 60 -9 25 -6 50 -6 68 1 26 9 29
14 29 57 0 65 -26 148 -50 161 -29 16 -24 40 15 76 20 18 35 41 35 54 0 30 18
60 35 60 13 0 15 24 15 140 0 105 -3 140 -12 140 -23 1 -50 50 -57 105 -4 30
-12 60 -18 67 -17 20 -35 97 -28 119 4 11 18 24 32 30 24 9 25 11 22 92 -3 66
-10 93 -33 139 -24 48 -28 65 -24 109 4 33 11 55 22 61 11 6 16 23 16 51 0 36
-5 46 -34 69 -18 14 -49 33 -69 42 -24 10 -38 23 -43 40 -6 25 -8 26 -90 26
-65 0 -84 -3 -84 -14z"/>
            </g>
        </svg>
    )
}

export default Sal