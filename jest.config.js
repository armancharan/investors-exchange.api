// Config.
const config = {
  testURL: 'http://localhost',
  verbose: true,
  roots: ['./source'],
  transform: {'^.+\\.tsx?$': 'ts-jest'},
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'node', 'json']
}

// Export.
module.exports = config