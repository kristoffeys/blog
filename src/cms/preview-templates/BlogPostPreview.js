import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import 'typeface-open-sans';
import { StyleSheetManager } from 'styled-components';
import { CodeBlock } from '../../components/content/CodeBlock';

const BlogPostPreview = ({ entry, widgetFor }) => {
	const iframe = document.getElementsByTagName('iframe')[0]
	const iframeHeadElem = iframe.contentDocument.head

	return <StyleSheetManager target={iframeHeadElem}>
		<article css={tw`mt-10`}>
			<h1 css={tw`text-primary text-center text-4xl px-16 py-10`}>{entry.getIn(['data', 'title'])}</h1>
			<Markdown
				source={entry.getIn(['data', 'body'])}
				renderers={{code: CodeBlock}}
			></Markdown>
		</article>
	</StyleSheetManager>
}
;


BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
