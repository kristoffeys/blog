import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import { Link } from 'gatsby'
import { colors } from '../../tailwind.js'

const NavigationBar = styled.nav`
 ${tw`font-sans flex items-center justify-between flex-wrap p-6 max-w-container mx-auto`};
`

const NavLink = styled(Link)`
 ${tw`block mt-4 lg:inline-block lg:mt-0 mr-4 text-black`}
 .active { ${tw`text-primary`} }
`

const Header = ({ siteTitle }) => (
	<header css={`
		border-top: 6px solid ${colors.primary};
		border-bottom: 1px solid ${colors['grey-light']};
		`}>
		<NavigationBar>
			<div css={tw`flex items-center flex-no-shrink mr-6`}>
				<h1>
					<Link to="/" css={tw`font-semibold text-xl tracking-wide text-black uppercase`}>
					<svg version="1" xmlns="http://www.w3.org/2000/svg" height="50" viewBox="283 196 264 210"><path d="M421 221c3 0 6-2 7-5s-1-5-4-5-5 2-6 5 1 5 3 5zM543 212c-9-1-29 21-44 43-2 3-6 7-10 7l-1-1c2-2 12-16 12-30 0-4-1-7-5-7-5 0-8 1-11 3h-2c-6 0-19 14-26 28-3 3-10 12-13 12-1 0-2-1-2-4 1-10 14-29 26-43l24 3c2 0 4-3 1-6-2-2-10-3-19-3l8-7 1-3c0-1-1-3-3-3-5 0-12 6-19 14-9 1-18 3-20 5-1 0-2 1-1 2l3 1 13-2c-9 11-18 25-23 34-3 7-5 14-5 19 0 6 3 8 7 8 5 0 13-8 19-16-2 8-1 16 7 16 11 0 19-10 23-14h4l6-1c-7 10-11 20-11 27 0 5 3 9 6 9 9 0 20-18 25-34l3 1c6 0 15-11 15-15l-1-1-2 1c-3 3-8 9-12 9l-1-1c2-6 2-11 2-14 13-13 29-26 29-33 1-2 0-4-3-4zm-78 59c-6 0 6-21 9-24-2 5-1 12 2 16-2 2-6 8-11 8zm17-15v-4c0-7 4-20 8-20 6 0-3 16-8 24zm12 31c-4 0 9-22 12-26l1-2 1 6c-3 11-11 22-14 22zm25-46c3-5 18-22 22-22 3 0-19 20-22 22z"/><path d="M386 342c3-1 3-5 3-7l-2-2c-1-2-9-3-18-3a247 247 0 0 1 26-29c8 0 22 1 28 5 1 1 3-1 3-1 2-2 2-5 0-7l-1-1c-2-3-14-6-27-6-16 0-34 6-40 9-7 3-7 1-9-1l-6-10c-4-10-6-24-7-36 10-10 22-21 34-30-2 2-2 9 1 11l-16 21-3 4c-1 3 2 4 3 2l19-26a22 22 0 0 0 12-1c-8 9-28 29-28 41 0 4 2 7 7 7s11-6 15-11v4c0 3 2 7 5 7 5 0 11-6 15-11 0 5 2 11 8 11 20 0 6-39 32-46 5-1 4-11 0-11-13 0-25 21-32 30-4 4-13 13-15 13-3 1 20-34 26-39-1-3-3-4-5-4l-3 1c-5 4-15 17-23 29-3 4-13 13-16 13-7 0 23-28 23-38 0-2-1-5-4-5-2 0-12 4-20-3l1-1a289 289 0 0 1 23-17c1-1-1-3-1-4-3-3-9-5-12-2-10 6-26 22-42 38 12-21 18-40 3-40-17 0-46 32-46 51 0 4 2 9 6 11 2 1 2-2 2-3 0-14 23-50 32-50 18 0-39 82-53 88-3 2 5 12 14 4 9-9 17-23 27-33 1 16 5 33 12 41l7 5c4 0 19-6 36-8l-26 29c-15 3-24 10-24 13l1 1c5 0 8-2 16-4-12 16-23 33-26 43-2 4-1 8 2 11 2 1 6 3 7 0l1-2 8-18c7-12 15-25 24-37 6 0 17 0 22 3l1 1zm21-74l-3-1a101 101 0 0 0 4-6l12-16c-4 12-6 23-13 23z"/><path d="M493 319c-13 0-25 22-32 31l-14 13 6-13c6-9 12-20 18-26 0-3-3-5-5-5l-3 2c-6 5-13 16-20 27v1l-1 1c-5 6-11 13-14 13s-1-6 3-13c6-10 15-23 19-26 0-3-3-5-5-5l-3 2c-5 4-16 17-23 29-2 2-14 15-25 15-2 0-4-4 0-11 20-4 32-24 32-31 0-2-1-4-4-4-12 0-29 16-37 31-3 5-5 12-5 17s3 10 9 10c10 0 19-7 24-13v6c-1 4 2 7 6 7 3 0 7-3 12-7l-4 6-2 1c-7 4-26 13-26 22 0 4 3 7 7 7 11 0 21-13 32-29l2-3 14-10c-1 6 1 13 8 13 20 0 5-39 31-46 5-1 4-12 0-12zm-76 11c3 0-13 15-18 15 5-8 15-15 18-15zm-8 66c-6 0 8-9 10-10-4 6-8 10-10 10zm51-33s-2 0-3-2a31 31 0 0 0 5-7l11-14c-4 12-6 23-13 23z"/></svg>
					</Link>
				</h1>
			</div>
			<div css={tw`block lg:hidden`}>
				<button css={tw`flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white`}>
					<svg css={tw`h-3 w-3`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
				</button>
			</div>

			<div css={tw`w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
				<ul css={tw`text-sm lg:flex-grow text-right`}>
					<li>
						<NavLink to="/">About</NavLink>
						<NavLink to="/blog">Blog</NavLink>
					</li>
				</ul>
			</div>
		</NavigationBar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
