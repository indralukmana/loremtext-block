// Import Icon
import icon from './icon';

const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls } = wp.editor;

const { PanelBody, PanelRow, RangeControl, TextControl } = wp.components;

import { loremIpsum } from 'lorem-ipsum';

/**
 * Create a Inspector wrapper Component
 */
class Inspector extends Component {
	render() {
		const {
			attributes: {
				paragraphRange,
				loremIpsumText,
				paragraphSentenceLowerBoundRange,
				paragraphSentenceUpperBoundRange,
				sentenceWordLowerBoundRange,
				sentenceWordUpperBoundRange
			},
			setAttributes
		} = this.props;

		// TODO: The function seems ugly. I'm still not sure how to improve this. The setAttributes doesn't
		// update the attributes for loremIpsum parameter in a timely fashion. I'm not sure if it is how React/Gutenberg
		// way of doing things. I was thinking it was the consecutive setAttributes, but setTimeout() or setInterval()
		// doesn't seems to work.
		const generateLoremIpsumText = (
			numberParagraph,
			numberParLow,
			numberParUpp,
			numberSenLow,
			numberSenUpp
		) => {
			return loremIpsum({
				count: numberParagraph
					? numberParagraph
					: Number(paragraphRange),
				format: 'html',
				units: 'paragraphs',
				paragraphLowerBound: numberParLow
					? numberParLow
					: Number(paragraphSentenceLowerBoundRange), // Min. number of sentences per paragraph.
				paragraphUpperBound: numberParUpp
					? numberParUpp
					: Number(paragraphSentenceUpperBoundRange), // Max. number of sentences per paragarph.
				// random: Math.random, // A PRNG function
				sentenceLowerBound: numberSenLow
					? numberSenLow
					: Number(sentenceWordLowerBoundRange), // Min. number of words per sentence.
				sentenceUpperBound: numberSenUpp
					? numberSenUpp
					: Number(sentenceWordUpperBoundRange) // Max. number of words per sentence.
			});
		};

		return (
			<InspectorControls>
				<PanelBody>
					<RangeControl
						beforeIcon='arrow-left-alt2'
						afterIcon='arrow-right-alt2'
						label={__('Number of Paragraphs', 'loremtext-block')}
						value={paragraphRange}
						onChange={paragraphRange => {
							setAttributes({
								paragraphRange,
								loremIpsumText: generateLoremIpsumText(
									paragraphRange
								)
							});
						}}
						min={1}
						max={10}
					/>
				</PanelBody>
				<PanelBody
					title={__('Words and sentences range', 'loremtext-block')}
					initialOpen={false}>
					<RangeControl
						beforeIcon='arrow-left-alt2'
						afterIcon='arrow-right-alt2'
						label={__(
							'Min. sentences per paragraph',
							'loremtext-block'
						)}
						value={paragraphSentenceLowerBoundRange}
						onChange={paragraphSentenceLowerBoundRange => {
							setAttributes({
								paragraphSentenceLowerBoundRange,
								loremIpsumText: generateLoremIpsumText(
									undefined,
									paragraphSentenceLowerBoundRange
								)
							});
						}}
						min={1}
						max={paragraphSentenceUpperBoundRange}
					/>{' '}
					<RangeControl
						beforeIcon='arrow-left-alt2'
						afterIcon='arrow-right-alt2'
						label={__(
							'Max. sentences per paragraph',
							'loremtext-block'
						)}
						value={paragraphSentenceUpperBoundRange}
						onChange={paragraphSentenceUpperBoundRange => {
							setAttributes({
								paragraphSentenceUpperBoundRange,
								loremIpsumText: generateLoremIpsumText(
									undefined,
									undefined,
									paragraphSentenceUpperBoundRange
								)
							});
						}}
						min={paragraphSentenceLowerBoundRange}
						max={10}
					/>{' '}
					<RangeControl
						beforeIcon='arrow-left-alt2'
						afterIcon='arrow-right-alt2'
						label={__('Min. words per sentence', 'loremtext-block')}
						value={sentenceWordLowerBoundRange}
						onChange={sentenceWordLowerBoundRange => {
							setAttributes({
								sentenceWordLowerBoundRange,
								loremIpsumText: generateLoremIpsumText(
									undefined,
									undefined,
									undefined,
									sentenceWordLowerBoundRange
								)
							});
						}}
						min={1}
						max={sentenceWordUpperBoundRange}
					/>{' '}
					<RangeControl
						beforeIcon='arrow-left-alt2'
						afterIcon='arrow-right-alt2'
						label={__('Max. words per sentence', 'loremtext-block')}
						value={sentenceWordUpperBoundRange}
						onChange={sentenceWordUpperBoundRange => {
							setAttributes({
								sentenceWordUpperBoundRange,
								loremIpsumText: generateLoremIpsumText(
									undefined,
									undefined,
									undefined,
									undefined,
									sentenceWordUpperBoundRange
								)
							});
						}}
						min={sentenceWordLowerBoundRange}
						max={10}
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}

export default Inspector;
