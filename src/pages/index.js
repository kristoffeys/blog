import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { PostSummary } from '../components/blog'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<h1 css={tw`mt-10`}>Kristof Feys</h1>
		<p css={tw`max-w-sm`}>Driven back-end developer located in <a href="https://www.google.com/maps/place/Knesselare/">Knesselare (Belgium)</a>, eager to constantly learn &amp; improve. Focussed on writing clear &amp; maintainable code. Has had the joy to work with several frameworks (Zend Framework, Symfony, Silex, ...) as well as different technologies (PHP, javascript, ElasticSearch, AWS, ...) . Prefers back-end development but has the knowledge necessary to be able to handle front-end development as well. </p>
		<ul>
			<li css={tw`inline-block mr-2`}>
				<a title="LinkedIn" href="https://www.linkedin.com/in/kristof-feys-46a90141/">
					<svg css={tw`w-6 h-auto`} xmlns="http://www.w3.org/2000/svg" aria-label="LinkedIn" role="img" viewBox="0 0 512 512" fill="#fff"><rect width="512" height="512" rx="15%" fill="#0077b5"/><circle cx="142" cy="138" r="37"/><path stroke="#fff" stroke-width="66" d="M244 194v198M142 194v198"/><path d="M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32"/></svg>
				</a>
			</li>
			<li css={tw`inline-block mr-2`}>
				<a title="Mail" href="mailto:kristof@ctibvba.be">
				<svg css={tw`w-6 h-auto`} xmlns="http://www.w3.org/2000/svg" aria-label="Mail" role="img" viewBox="0 0 512 512"><rect width="512" height="512" rx="15%" fill="#328cff"/><path d="m250 186c-46 0-69 35-69 74 0 44 29 72 68 72 43 0 73-32 73-75 0-44-34-71-72-71zm-1-37c30 0 57 13 77 33 0-22 35-22 35 1v150c-1 10 10 16 16 9 25-25 54-128-14-187-64-56-149-47-195-15-48 33-79 107-49 175 33 76 126 99 182 76 28-12 41 26 12 39-45 19-168 17-225-82-38-68-36-185 67-248 78-46 182-33 244 32 66 69 62 197-2 246-28 23-71 1-71-32v-11c-20 20-47 32-77 32-57 0-108-51-108-108 0-58 51-110 108-110" fill="#fff"/></svg>
				</a>
			</li>
			<li css={tw`inline-block mr-2`}>
				<a title="Twitter" href="https://twitter.com/kristoffeys">
				<svg css={tw`w-6 h-auto`} xmlns="http://www.w3.org/2000/svg" aria-label="Twitter" role="img" viewBox="0 0 512 512"><rect width="512" height="512" rx="15%" fill="#1da1f3"/><path fill="#fff" d="M437 152a72 72 0 0 1-40 12 72 72 0 0 0 32-40 72 72 0 0 1-45 17 72 72 0 0 0-122 65 200 200 0 0 1-145-74 72 72 0 0 0 22 94 72 72 0 0 1-32-7 72 72 0 0 0 56 69 72 72 0 0 1-32 1 72 72 0 0 0 67 50 200 200 0 0 1-105 29 200 200 0 0 0 309-179 200 200 0 0 0 35-37"/></svg>
				</a>
			</li>
		</ul>
	</Layout>
)

export default IndexPage

