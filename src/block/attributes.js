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
		default:
			'Click on the gear icon to generate the dummy text. Fine tune the number of paragraphs, sentences, and words on the block settings'
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
		type: 'number',
		default: '3'
	},
	paragraphSentenceLowerBoundRange: {
		type: 'number',
		default: '3'
	},
	paragraphSentenceUpperBoundRange: {
		type: 'number',
		default: '5'
	},
	sentenceWordLowerBoundRange: {
		type: 'number',
		default: '5'
	},
	sentenceWordUpperBoundRange: {
		type: 'number',
		default: '7'
	}
};

export default attributes;
