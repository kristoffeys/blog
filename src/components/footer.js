import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import { Link } from 'gatsby'
import { colors } from '../../tailwind.js'

const Footer = () => (
	<footer css={tw`border-grey-light border-solid border-b-0 border-l-0 border-r-0 border-t mb-8 mt-10 pt-5 text-sm`}>
		<div css={tw`md:flex md:justify-between`}>
			<div>© Kristof Feys</div>
			<div>Built with <a href="https://www.gatsbyjs.org">Gatsby</a>, <a href="https://strapi.io/">Strapi</a> and <a href="https://tailwindcss.com/">Tailwind</a></div>
		</div>

	</footer>
)

export default Footer
