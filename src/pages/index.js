import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { PostSummary } from '../components/blog'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<h1 css={tw`mt-10`}>Kristof Feys</h1>
		<p css={tw`max-w-sm`}>Driven back-end developer located in <a href="https://www.google.com/maps/place/Knesselare/">Knesselare (Belgium)</a> who is eager to constantly learn &amp; improve. Focussed on writing clear &amp; maintainable code. Has had the joy to work with several frameworks (Zend Framework, Symfony, Silex, ...) as well as different technologies (PHP, javascript, ElasticSearch, AWS, ...) . Prefers back-end development but has the knowledge necessary to be able to handle front-end development as well. </p>
		<ul>
			<li>Linkedin</li>
			<li>Mail</li>
			<li>Twitter</li>
		</ul>
	</Layout>
)

export default IndexPage

