import PropTypes from "prop-types"
import React from "react"
import SyntaxHighlighter from 'react-syntax-highlighter';

export const CodeBlock = ({value, language}) => (
	<SyntaxHighlighter language={language}>
		{value}
	</SyntaxHighlighter>
)

CodeBlock.propTypes = {
	value: PropTypes.string,
	language: PropTypes.string,
}
