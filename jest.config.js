module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/Perguidex/components/**/*.vue',
    '<rootDir>/Perguidex/pages/**/*.vue',
    '<rootDir>/Perguidex-App/components/**/*.vue',
    '<rootDir>/Perguidex-App/pages/**/*.vue'
  ]
}
