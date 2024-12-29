test:
	bun jest

deploy:
	bun run build
	firebase deploy