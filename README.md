
# BlueCoding Test

Provide a form for the user to perform a keyword search against the GIF database via the API.

## How to Run

`npm start`

## How to explore each React component 

`npm run storybook`


In this project I show the difference between the real application the client receives, and the components that make the final application.

I want to show how we can treat these components in isolation, and write them without thinking about how the rest of the system actually operates.

When working with components, we can forget about how the data is retrieved from the actual API, and just declare that we expect them in order to render them.

I want to show the difference between the first commit and the second commit:

How we can evolve from a React application that is made using the old-React components that are not only stateful but also effectful, as they can perform API calls from inside their lifecycles. This commit shows how we can instead use React Redux to separate entirely this effects from the rest of the application, and how with React Hooks we can then write the final feature, which is the combination of the component, which does not know how to retrieve the data, and the actual mechanism of retrieval thanks to Redux.


Thanks to Bluecoding for the oportunity, I hope I managed to show the difference between the old React and the new.

Best regards.

