module.exports = {
  content: ["./src/**/*.{html,ts}"],
  // we added this safelist coz of tailwind issue not angular 
  // and should only be used in situations where it's impossible to scan certain content for class names.
  //  you can also add Regular expression to this if you wanna select much wider range of colors
  safelist: ['bg-blue-400', 'bg-red-400', 'bg-green-400'],
  theme: {
    extend: {},
  },
  plugins: [],
};
