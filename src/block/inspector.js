// Import Icon
import icon from './icon';

const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls } = wp.editor;

const { PanelBody, PanelRow, RangeControl, TextControl } = wp.components;

/**
 * Create a Inspector wrapper Component
 */
class Inspector extends Component {
	render() {
		const {
			attributes: { paragraphRange },
			setAttributes
		} = this.props;

		return (
			<InspectorControls>
				<PanelBody>
					<RangeControl
						beforeIcon='arrow-left-alt2'
						afterIcon='arrow-right-alt2'
						label={__('Paragraph Count', 'loremtext-block')}
						value={paragraphRange}
						onChange={paragraphRange =>
							setAttributes({ paragraphRange })
						}
						min={1}
						max={10}
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}

export default Inspector;
