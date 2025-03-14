export const GithubIcon = ({
  variant = 'default',
}: {
  variant?: 'default' | 'secondary'
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="21"
    fill="none"
    viewBox="0 0 20 21"
  >
    <g clipPath="url(#a)">
      <g clipPath="url(#b)">
        <mask
          id="c"
          width="20"
          height="21"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
          style={{ maskType: 'luminance' }}
        >
          <path fill="#fff" d="M20 .5H0v20h20z"></path>
        </mask>
        <g mask="url(#c)">
          <path
            fill={variant === 'default' ? '#000' : '#fff'}
            d="M10 .5C4.478.5 0 4.978 0 10.5c0 4.418 2.865 8.167 6.84 9.49.498.092.66-.218.66-.482v-1.861c-2.782.605-3.36-1.18-3.36-1.18-.456-1.156-1.112-1.464-1.112-1.464-.907-.62.07-.607.07-.607 1.004.07 1.532 1.03 1.532 1.03.892 1.529 2.34 1.087 2.91.832.09-.646.348-1.088.635-1.337-2.22-.254-4.556-1.112-4.556-4.943a3.87 3.87 0 0 1 1.03-2.684c-.103-.252-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.6 9.6 0 0 1 10 5.336a9.6 9.6 0 0 1 2.505.337c1.91-1.294 2.747-1.025 2.747-1.025.545 1.377.202 2.395.099 2.646.641.7 1.029 1.593 1.029 2.684 0 3.841-2.34 4.687-4.566 4.935.358.31.686.918.686 1.851v2.744c0 .266.16.579.668.48A10 10 0 0 0 20 10.5c0-5.522-4.477-10-10-10"
          ></path>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .5h20v20H0z"></path>
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M0 .5h20v20H0z"></path>
      </clipPath>
    </defs>
  </svg>
)

export const ArrowLongRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
    />
  </svg>
)
