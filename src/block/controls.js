// Import Icon
import icon from './icon';

const { __ } = wp.i18n;
const { Component } = wp.element;
const { AlignmentToolbar, BlockControls } = wp.editor;

const { Toolbar, Button, Tooltip } = wp.components;

import { loremIpsum } from 'lorem-ipsum';
/**
 * Create a Block Controls wrapper Component
 */
class Controls extends Component {
	render() {
		const {
			attributes: {
				textAlignment,
				loremIpsumText,
				paragraphRange,
				paragraphSentenceLowerBoundRange,
				paragraphSentenceUpperBoundRange,
				sentenceWordLowerBoundRange,
				sentenceWordUpperBoundRange
			},
			setAttributes
		} = this.props;

		const onChangeTextAlignment = newTextAlignment => {
			setAttributes({
				textAlignment:
					newTextAlignment === undefined ? 'none' : newTextAlignment
			});
		};

		const generateLoremIpsumText = () => {
			setAttributes({
				loremIpsumText: loremIpsum({
					count: Number(paragraphRange),
					format: 'html',
					units: 'paragraphs',
					paragraphLowerBound: Number(
						paragraphSentenceLowerBoundRange
					), // Min. number of sentences per paragraph.
					paragraphUpperBound: Number(
						paragraphSentenceUpperBoundRange
					), // Max. number of sentences per paragarph.
					// random: Math.random, // A PRNG function
					sentenceLowerBound: Number(sentenceWordLowerBoundRange), // Min. number of words per sentence.
					sentenceUpperBound: Number(sentenceWordUpperBoundRange) // Max. number of words per sentence.
				})
			});
		};

		return (
			<BlockControls>
				<AlignmentToolbar
					value={textAlignment}
					onChange={onChangeTextAlignment}
				/>
				<Toolbar>
					<Tooltip text={__('Generate', 'loremtext-block')}>
						<Button
							className={`components-icon-button components-toolbar__control`}
							onClick={generateLoremIpsumText}>
							{icon}
						</Button>
					</Tooltip>
				</Toolbar>
			</BlockControls>
		);
	}
}

export default Controls;
