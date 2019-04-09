install:
	npm install

start-calc:
	npx babel-node src/bin/brain-calc.js

start-even:
	npx babel-node src/bin/brain-even.js

publish:
	npm publish

lint:
	npx eslint .