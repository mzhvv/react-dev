<!-- package.json.md -->

# macOS 12+
```json
  "scripts": {
    "storybook:build": "storybook build",
    "storybook:serve": "serve -s storybook-static -l 6007",
    "stories-test:webkit": "concurrently \"npm run storybook:serve\" \"sleep 2 && test-storybook --url http://localhost:6007 --browsers webkit\"",
    "stories-test:chromium": "concurrently \"npm run storybook:serve\" \"sleep 2 && test-storybook --url http://localhost:6007 --browsers chromium\"",
    "storybook:test": "npm run storybook:build && npm run stories-test:webkit"
  },

```