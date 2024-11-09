install: # Эта команда полезна при первом клонировании репозитория (или после удаления node_modules)
    npm ci

brain-games: # Запуск приложения
    node bin/brain-games.js

lint: # Проверка Eslint
	npx eslint .