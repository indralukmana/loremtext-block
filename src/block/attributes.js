/**
 * Attribute data for the block. The dummy text will be stored in the loremText attribute
 */
const attributes = {
	loremText: {
		type: 'array',
		source: 'children',
		selector: '.loremtext-body'
	},
	loremIpsumText: {
		type: 'string',
		default: ''
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
	},
	paragraphRange: {
		type: 'string',
		default: '1'
	}
};

export default attributes;
