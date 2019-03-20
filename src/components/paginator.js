import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import { Link } from 'gatsby'

const Paginator = ({ basePath, totalPages, currentPage }) => (
	<div css={tw`text-center`}>
		<ul css={tw`inline-flex list-reset border border-grey-light w-auto`}>
		{Array.from({ length: totalPages }, (_, i) => (
			<li key={`pagination-number${i + 1}`}><Link
				to={`/${basePath}/${i === 0 ? "" : i + 1}`}
				css={tw`block hover:text-white hover:bg-primary text-primary border-r border-grey-light px-3 py-2`}
			>
			{i + 1}
			</Link></li>
		))}
		</ul>
	</div>
)

export default Paginator
