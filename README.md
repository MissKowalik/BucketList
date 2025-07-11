# BucketList - A Typescript project

## Overview
BucketList is a planned front-end application built with TypeScript and DOM manipulation. The goal is to create a dynamic and interactive "Bucket List" where users can log in and manage their personal dreams — from everyday goals to once-in-a-lifetime adventures.

This project will be developed as part of a Frontend Intensive Training Program and will focus on DOM manipulation, TypeScript logic, and user interaction.

## 🚀 Features
### 🔐 Login
#### Core functionality:
- Users log in with their name and a password.
- No real backend — login data is stored in a global variable.
- Password field includes show/hide toggle.

#### Validation:
- Name must not be empty.
- Password must be at least 4 characters.

### 🏠 Dashboard – Manage Dreams
After logging in, users access the Dashboard to view and manage their dreams.

#### Core functionality:
- Render dream list dynamically from the dreams array.
- Add new dreams with name and theme (with confirmation).
- Remove dreams from the list.
- Mark dreams as fulfilled/unfulfilled using a checkbox.


#### Validation:
- Dream name must not be empty.
- A theme must be selected.

## 🌈 Bonus Features (Optional Level Ups)
### Settings View:
-  Edit username – updates globally across the app.
- Add new themes – updates the themes array and makes them selectable.
- Remove themes – if a dream uses a removed theme, it should default to "–" or similar.