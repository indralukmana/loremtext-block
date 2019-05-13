// Import Icon
import icon from './icon';

const { __ } = wp.i18n;
const { Component } = wp.element;
const { AlignmentToolbar, BlockControls } = wp.editor;

const { Toolbar, Button, Tooltip } = wp.components;

/**
 * Create a Block Controls wrapper Component
 */
class Controls extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		const {
			attributes: { textAlignment, buttonActive, highContrast },
			setAttributes
		} = this.props;

		const onChangeTextAlignment = newTextAlignment => {
			setAttributes({
				textAlignment:
					newTextAlignment === undefined ? 'none' : newTextAlignment
			});
		};

		const toggleHighContrast = () => {
			setAttributes({
				highContrast:
					'high-contrast' === highContrast ? '' : 'high-contrast'
			});
		};

		return (
			<BlockControls>
				<AlignmentToolbar
					value={textAlignment}
					onChange={onChangeTextAlignment}
				/>
				<Toolbar>
					<Tooltip text={__('High Contrast OYE', 'loremtext-block')}>
						<Button
							className={`components-icon-button components-toolbar__control ${buttonActive}`}
							onClick={toggleHighContrast}>
							{icon}
						</Button>
					</Tooltip>
				</Toolbar>
			</BlockControls>
		);
	}
}

export default Controls;
