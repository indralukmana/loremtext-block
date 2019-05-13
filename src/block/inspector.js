// Import Icon
import icon from './icon';

const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls } = wp.editor;

const { PanelBody, PanelRow, FormToggle } = wp.components;

/**
 * Create a Inspector wrapper Component
 */
class Inspector extends Component {
	render() {
		const {
			attributes: { highContrast },
			setAttributes
		} = this.props;

		const toggleHighContrast = () => {
			setAttributes({
				highContrast:
					'high-contrast' === highContrast ? '' : 'high-contrast'
			});
		};

		return (
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
			</InspectorControls>
		);
	}
}

export default Inspector;
