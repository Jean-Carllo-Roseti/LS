// eslint-disable-next-line no-undef
module.exports = {
  testEnvironment: 'jest-environment-jsdom', // Ambiente de teste
  setupFilesAfterEnv: ['<rootDir>/.jest/setupTests.js'], // Arquivo de setup após o ambiente
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mapear arquivos de estilo
    '\\.(git|ttf|eot|svg|png)$': '<rootDir>/.jest/mocks/mocksFiles.js' // Mapear arquivos de imagem e fontes
  }
}
