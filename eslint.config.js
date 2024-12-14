// eslint-disable-next-line import/no-extraneous-dependencies
import globals from 'globals';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'url';
import path from 'path';

// Получение текущего пути
// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(__filename);

// Совместимость с традиционной системой конфигурации
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  {
    // Настройки языка
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022, // Поддержка современных возможностей JS
        sourceType: 'module', // Используем ES-модули
      },
      globals: {
        ...globals.browser, // Глобальные переменные для браузера
        ...globals.node, // Глобальные переменные для Node.js
      },
    },
  },
  ...compat.extends('airbnb'), // Подключение Airbnb-конфигурации
];
