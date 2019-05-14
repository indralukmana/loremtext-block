/**
 * BLOCK: loremtext-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

import Controls from './controls';
import Inspector from './inspector';
import attributes from './attributes';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText } = wp.editor;

import { loremIpsum } from 'lorem-ipsum';
import ReactHtmlParser from 'react-html-parser';

function getLoremIpsumText(texts) {
	let loremIpsumText = [];

	for (let text in texts) {
	}
}

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('cgb/block-loremtext-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('Lorem Text'), // Block title.
	icon: 'text', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [__('Lorem Ipsum Text'), __('Dummy Text'), __('Example')],

	/**
	 * Attribute data for the block. The dummy text will be stored in the loremText attribute
	 */
	attributes,

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: props => {
		const {
			attributes: { loremIpsumText, textAlignment, paragraphRange },
			className,
			setAttributes
		} = props;

		return [
			<Inspector {...{ setAttributes, ...props }} />,
			<Controls {...{ setAttributes, ...props }} />,

			<div
				className={`${className}`}
				style={{ textAlign: textAlignment }}>
				{ReactHtmlParser(loremIpsumText)}
			</div>
		];
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: props => {
		const { textAlignment, loremIpsumText } = props.attributes;
		return (
			<div
				className={`loremtext-body`}
				style={{ textAlign: textAlignment }}>
				{ReactHtmlParser(loremIpsumText)}
			</div>
		);
	}
});
