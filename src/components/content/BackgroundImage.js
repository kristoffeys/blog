import Img from 'gatsby-image'
import styled from 'styled-components'

export const BackgroundImage = styled(Img)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	z-index: -1;
	height: ${props => props.height || 'auto'};

	& > img {
		object-fit: ${props => props.fit || 'cover'} !important;
		object-position: ${props => props.position || '50% 50%'} !important;
		font-family: 'object-fit: ${props => props.fit || 'cover'} !important; object-position: ${props => props.position || '50% 50%'} !important;'
	}
`

