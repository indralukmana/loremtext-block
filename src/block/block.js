/**
 * BLOCK: loremtext-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

// Import Icon
import icon from './icon';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType, createBlock } = wp.blocks; // Import registerBlockType() from wp.blocks
const {
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls
} = wp.editor;
const {
	Toolbar,
	Button,
	Tooltip,
	PanelBody,
	PanelRow,
	FormToggle
} = wp.components;

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
	attributes: {
		loremText: {
			type: 'array',
			source: 'children',
			selector: '.loremtext-body'
		},
		textAlignment: {
			type: 'string'
		},
		highContrast: {
			type: 'string',
			default: ''
		},
		buttonActive: {
			type: 'string',
			default: ''
		}
	},

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
			attributes: {
				loremText,
				textAlignment,
				highContrast,
				buttonActive
			},
			className,
			setAttributes
		} = props;

		const onChangeText = loremText => {
			props.setAttributes({ loremText });
		};

		const onChangeTextAlignment = newTextAlignment => {
			props.setAttributes({
				textAlignment:
					newTextAlignment === undefined ? 'none' : newTextAlignment
			});
		};

		const toggleHighContrast = () => {
			props.setAttributes({
				highContrast:
					'high-contrast' === highContrast ? '' : 'high-contrast'
			});
		};

		return [
			<InspectorControls>
				<PanelBody title={__('High Contrast', 'loremtext-block')}>
					<PanelRow>
						<label htmlFor='high-contrast-form-toggle'>
							{__('High Contrast', 'loremtext-block')}
						</label>
						<FormToggle
							id='high-contrast-form-toggle'
							label={__('High Contrast', 'loremtext-block')}
							checked={
								highContrast === 'high-contrast' ? true : false
							}
							onChange={toggleHighContrast}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>,

			<BlockControls>
				<AlignmentToolbar
					value={textAlignment}
					onChange={onChangeTextAlignment}
				/>
				<Toolbar>
					<Tooltip text={__('High Contrast', 'loremtext-block')}>
						<Button
							className={`components-icon-button components-toolbar__control ${buttonActive}`}
							onClick={toggleHighContrast}>
							{icon}
						</Button>
					</Tooltip>
				</Toolbar>
			</BlockControls>,

			<div className={`${className} ${highContrast}`}>
				<RichText
					multiline='p'
					placeholder={__('Dummy texts here', 'loremtext-block')}
					onChange={loremText => {
						props.setAttributes({ loremText });
					}}
					style={{ textAlign: textAlignment }}
					className={`loremtext-body sss ${highContrast}`}
					value={loremText}
				/>
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
		const { highContrast, textAlignment, loremText } = props.attributes;
		return (
			<div
				className={`loremtext-body ${highContrast}`}
				style={{ textAlign: textAlignment }}>
				{loremText}
			</div>
		);
	},

	supports: {
		align: true
	}
});
