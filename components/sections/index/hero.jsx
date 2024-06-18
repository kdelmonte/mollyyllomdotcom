import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import Section from '../../structure/section';
import Container from '../../structure/container';

import space from '../../utils/spacing.util';

import Icon from '../../utils/icon.util';

import HeroBg from '../../blocks/hero.bg/bg-color-1';

import hero from '../../../styles/sections/index/hero.module.scss';
import button from '../../../styles/blocks/button.module.scss';

import content from '../../../content/index/hero.json';

/**
 * TO DO LIST
 *
 * - Create a typog.modules.scss
 *   Load this module onto every component, and use predefined typography classes to keep typography consistent
 *
 * - space.modules.scss
 *   Load this module onto every component, and use predefined spacial classes to keep geometry consistent
 */

export default function Hero() {
	const [typingStatus, setTypingStatus] = useState('Initializing');

	return (
		<Section classProp={`${hero.section}`}>
			<Container spacing={'VerticalXXXL'}>
				<section className={hero.textContainer}>
					<TypeAnimation
						className={`${hero.preHeader}`}
						sequence={[
							content.intro.startDelay,
							() => {
								setTypingStatus('typing');
							},
							content.intro.start,
							() => {
								setTypingStatus('typed');
							},
							content.intro.deleteDelay,
							() => {
								setTypingStatus('deleting');
							},
							content.intro.end,
							() => {
								setTypingStatus('deleted');
							},
							content.intro.restartDelay,
						]}
						speed={content.intro.speed}
						deletionSpeed={content.intro.deletionSpeed}
						wrapper={content.intro.wrapper}
						repeat={Infinity}
					/>
					<h1 className={`${hero.header} ${hero.name}`}>{content.header.name}</h1>
					<h1 className={`${hero.header} ${hero.primaryDim} ${hero.usp}`}>{content.header.usp}</h1>
				</section>
				<section>
					<p className={`${hero.primaryBright} subtitle ${space(['verticalLrg'])}`}>
						{content.paragraph}
					</p>
				</section>
				<section>
				<button
    className={`button ${button.primary} ${hero.ctaButton}`}
    onClick={() => window.open('https://forms.gle/grLPXZzQ5qo3mSvs6', '_blank')}
>
    {content.buttons.primary.title}
</button>
				</section>
			</Container>
			<HeroBg theme="bg-color-1" />
		</Section>
	);
}