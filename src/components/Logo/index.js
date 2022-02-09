import * as React from "react"
import { Link } from '@reach/router'

const SvgComponent = (props) => (
  <Link to='/'>
    <svg
      width={305.506}
      height={99.2}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="97.247 25.4 305.506 99.2"
      style={{
        background: "0 0",
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <linearGradient id="b" x1={0} x2={1} y1={0.5} y2={0.5}>
          <stop offset={0} stopColor="#f52222" />
          <stop offset={1} stopColor="#0098f9" />
        </linearGradient>
        <filter id="a" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation={10} />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#a)">
        <path
          d="M20.4-33.35q12.25 0 12.25 8.65 0 4.75-3.05 7.6-3 2.85-8.25 2.85-2.45 0-4.35-1.4-.9-.6-1.5-1.4 3.65 0 5.58-2.23Q23-21.5 23-25.85t-4.3-4.35h-1.2q-.3 0-.55.05L11.2 0H.35L6.5-32.75q5.35-.5 8.45-.55 3.1-.05 5.45-.05Zm32.75 24.9q1.25.85 1.25 2.72 0 1.88-.95 3.08-.95 1.2-2.5 2Q47.75 1 44.3 1T38.83.25Q36.8-.5 35.45-1.9 32.8-4.55 32.8-9.4q0-7.55 4.1-12.15 4.4-4.95 12.05-4.95 4.75 0 7.1 2 1.75 1.5 1.75 3.95 0 8.8-15.2 8.8-.2 1.3-.2 2.4 0 2.3 1.03 3.17 1.02.88 2.92.88t3.93-.88q2.02-.87 2.87-2.27Zm-10.2-5.45q3.55 0 5.6-2.2 2.05-2.1 2.05-5.45 0-1.15-.42-1.78-.43-.62-1.28-.62-.85 0-1.57.32-.73.33-1.48 1.43-1.85 2.5-2.9 8.3ZM60.3-5q0-1.35.7-4.75l2.65-13.5H60.7l.2-1.5q6-1.8 11.8-6.2h2.4l-1.2 5.45h3.9l-.45 2.25H73.5l-2.55 13.5q-.65 3.1-.65 4.15 0 2.4 2.1 2.9Q71.9-1 70.1 0q-1.8 1-4.35 1t-4-1.6Q60.3-2.2 60.3-5Zm20.6-15.9q1.7-2.4 4.27-4 2.58-1.6 5.73-1.6 3.15 0 4.65 1l9.8-1-3.4 19.2Q100.2 2.5 96.5 6.35 92.95 10 86.05 10q-5.25 0-8.25-1.65t-3-4.4q0-2.05 1.55-3.22Q77.9-.45 80.3-.45q2.1 0 3.7.95.95.5 1.4 1.2-1.15 1-1.15 2.65 0 2.15 2 2.15 3.35 0 5.25-7.9.55-2.15 1-4.3-2.25 2.75-7.35 2.75-3.55 0-5.6-1.7t-2.05-5.7q0-2.5.85-5.33.85-2.82 2.55-5.22Zm6.5 10.7q0 3.4 1.75 3.4 1.2 0 2.35-1.3.9-1.05 1.25-2.6l2.55-12.85q-.25-.05-.5-.15-.5-.2-1.15-.2-3.05 0-4.85 5-1.4 3.9-1.4 8.7Zm35.55-3.85q1.8-3.2 1.8-6.45 0-2.15-1.55-2.15-1.2 0-2.45 2.05-1.3 2.05-1.7 4.7L116.45 0 106.1 1l5.1-26.5 8.25-1-.9 5.05q2.45-5.05 7.95-5.05 2.9 0 4.47 1.5 1.58 1.5 1.58 4.57 0 3.08-2.02 5.03-2.03 1.95-5.48 1.95-1.5 0-2.1-.6ZM135.53-1.5q-1.18-1.3-1.71-3.35-.52-2.05-.52-5.4 0-3.35 1.15-6.4 1.15-3.05 3.25-5.25 4.3-4.6 11.4-4.6 2.55 0 4.4.85l8.55-.85-3.7 19.5q-.15.6-.15 1.7t.68 1.8q.67.7 1.67.8-.5 1.7-2.33 2.7-1.82 1-3.87 1t-3.42-.77q-1.38-.78-1.78-2.08-.8 1.25-2.5 2.05-1.7.8-3.97.8-2.28 0-4.13-.6t-3.02-1.9Zm10.54-20.3q-.57.9-1.07 2.42-.5 1.53-1.32 5.6-.83 4.08-.83 6.98 0 2.9.45 3.75.45.85 1.25.85 1.6 0 2.77-1.53 1.18-1.52 1.63-4.22l2.65-14.65q-1.05-.9-2.28-.9-1.22 0-1.94.4-.73.4-1.31 1.3ZM200.75 1q-6.05 0-6.05-4.7 0-2.05.88-6.03.87-3.97 1.17-5.57.7-3.65.7-4.8 0-2.55-1.9-2.55-1.25 0-2.45 1.72-1.2 1.73-1.75 5.18L188.25 0l-9.75 1 2.7-13.6q.45-2.25.85-4.8.4-2.55.4-2.95 0-2.3-1.7-2.3-1.15 0-2.4 1.7t-1.95 5.2L173.35 0l-9.85 1 5.25-26.5 8.15-1-.85 5.05q1.3-2.7 3.7-3.88 2.4-1.17 6.15-1.17 2.15 0 3.55 1.05t1.85 2.75q.85-1.75 3.03-2.78 2.17-1.02 4.85-1.02 2.67 0 4 .57 1.32.58 2.12 1.53 1.35 1.75 1.35 4.95 0 3.15-1.35 9.7-.7 3.2-.7 4.37 0 1.18.68 1.88.67.7 1.67.8-.5 1.7-2.22 2.7-1.73 1-3.98 1Z"
          fill="url(#b)"
          transform="translate(146.35 96.675)"
        />
      </g>
    </svg>
  </Link>
)

export default SvgComponent
