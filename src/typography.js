import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Georgia', 'serif'],
  scaleRatio: 2.5,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    h1: {
      ...adjustFontSizeTo('2.25rem'),
      marginBottom: rhythm(1),
    },
    h2: {
      ...adjustFontSizeTo('1.75rem'),
      marginBottom: rhythm(0.5),
    },
    p: {
      marginBottom: rhythm(1),
    },
  }),
});

export default typography;