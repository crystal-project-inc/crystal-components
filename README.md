# Crystal Components

A plug and play React Component Library to integrate with your software and use with our [Crystal Developer Profile API](https://developers.crystalknows.com/).

## Example Projects

To see similar components in action, download the
[Crystal chrome extension](https://chrome.google.com/webstore/detail/crystal/nmaonghoefpmlfgaknnboiekjhfpmajh)

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the dependencies

### `npm start`

Runs the example app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## How it works

All components accept `profile` as a prop. This is the profile you will have returned from the developer api.
The components available are:

### Profile Overview

A list of all the available components, including a sample of a few recommendations components.

### Profile Header

The profile name, photo, and type.

### Profile Bullet Points

The profile's disc type and 3 descriptors.

### SectionHeader

A styled version of the section header which also receives an icon prop and a text or tsx child.

### Recommendations

A display for the bulk of the profile data. Which also reveives a title, recommendationList, and optional icon prop.

### Do's and Dont's

A styled list of the dos and dont's

### Circumplex Graph

A Crystal styled circumplex graph with all of the disc types, with the current profile's disc section highlighted. It includes an optional size property which will reflect the height and width in pixels

### Color Icon

The SectionHeader and Recommendations components can receive any of the following strings for their headers:
`'speech_bubble', 'close-bubble', 'checkBubble', 'disc_wheel', 'people', 'award', 'working'`
