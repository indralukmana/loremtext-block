/**
 * Attribute data for the block. The dummy text will be stored in the loremText attribute
 */
const attributes = {
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
};

export default attributes;
