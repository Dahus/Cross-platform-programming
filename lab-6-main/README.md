# Lab 6 Poll App

Assignment Due Dec 9 by 11:30 PM.

This is your final-boss React assignment.

Using the scaffold in this repo and [Figma materials](https://www.figma.com/file/EOboZve1GjcyTjsPGFEPmk/Lab6-Poll-App), create a full-featured React application that allows you to create, manage, participate, and watch the results for the online polls. The application should use REST api for storing the data. You should use React with styled-components. Redux is optional. Any additional libs are ok.

By the deadline, you should have your code in the repo and demo video on how the app works.

You will be graded based on the following criterias:

Implement a full-featured "My polls" screen with whole data (e.g. created at and votes) and an ability to copy the link and remove a poll. (+2 point)
Implement "Create a new" poll form with server integration and handling error and progress states correctly. (+3 point)
Implement a poll screen with an ability to vote and handling all states. (+3 point)
Empty state for "My polls" screen. (+1 point)
Storybook with all main components (Button, Input, PollListItem, Poll, PollOption) in different states. (+2 points)
Validation for the new poll and Keystore forms. (+2 points)
Visited polls screen with an empty state. (+1 points)
Global state management with Redux. (+2 points)

# Development

```
cd mmcs-cross-lab-6
npm install
npm start
```

Storybook:

```
npm run storybook
```