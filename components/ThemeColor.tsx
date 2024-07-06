const White = '#fff'
const secondaryLight = '#e5e7eb'
const Black = '#000000'
const secondaryDark = '#1f2937'
const Primary = '#2e78b7'
const notification = "#dc2626"

const MyLightTheme = {
  dark: false,
  colors: {
    primary: Primary,
    background: White,
    card: White,
    text: Black,
    border: secondaryLight,
    notification: notification,
  },
}

const MyDarkTheme = {
  dark: true,
  colors: {
    primary: Primary,
    background: Black,
    card: White,
    text: White,
    border: secondaryDark,
    notification: notification,
  },
}

export {
  MyLightTheme,
  MyDarkTheme
}