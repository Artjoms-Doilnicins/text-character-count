# Text Character Count

[https://artjoms-doilnicins.github.io/text-character-count/](https://artjoms-doilnicins.github.io/text-character-count/)

A web app that tracks the number of characters typed in a textarea and displays both the total count of characters and the remaining characters allowed. It provides real-time feedback to the user as they type, making it useful for character-limited text fields.

## Features

### HTML

The interface includes:
- **Textarea**: A textarea where users can type their text. It has a character limit of 100 characters.
- **Total Characters**: Displays the total number of characters typed.
- **Remaining Characters**: Displays how many characters are remaining until the maximum limit of 100 is reached.

### CSS
  - The page has a dark background with light gray text to reduce eye strain and provide a clean, minimalistic look.
  - The counters and textarea are displayed in a centered container with a subtle shadow for a modern, polished appearance.
  - The textarea is styled with a light border and shadow, along with padding to ensure a comfortable typing experience.

### JavaScript
  - As the user types in the textarea, the `keyup` event listener triggers the `calculateCharacters()` function to update the total character count and remaining characters.
  - The `maxlength` attribute of the textarea ensures that the user cannot type more than 100 characters.

## How It Works 

1. Type into the textarea and watch the total character count and remaining character count update in real-time.
 
