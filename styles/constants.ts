const FONT = {
  XXXLARGE: 32,
  XXLARGE: 24,
  XLARGE: 18,
  LARGE: 16,
  MEDIUM: 14,
  BASE: 12,
  SMALL: 11,
  XSMALL: 10,
  TINY: 8,
} as const

const FONT_WEIGHT = {
  NORMAL: 400,
  BOLD: 600,
} as const

const COLOR = {
  DISABLED: '#E3E3E3',
  LINK: '#5F9EDD',
  PRIMARY: '#A2C1E0',
  ERROR: '#EE827C',
  BADGE: '#EE827C',
  BORDER_LOWLIGHT: '#E8E8E8',
  BORDER_DEFAULT: '#C9C9C9',
  BORDER_FORM: '#707070',
  BORDER_FORM_FOCUS: '',
} as const

const TEXT_COLOR = {
  DEFAULT: '#2F2F2F',
  LOWLIGHT: '#AAAAAA',
  PLACEHOLDER: '#C9C9C9',
}

const CORNER_RADIUS = {
  LARGE: 15,
  DEFAULT: 10,
  SMALL: 5,
}

const SHADOW = {
  DEFAULT: `0px 3px 6px rgba(0, 0, 0, 0.16)`,
}

const SIZE = {
  CONTENT_WIDTH: 414,
  HEADER_HEIGHT: 50,
}

export const StyleConst = {
  FONT,
  FONT_WEIGHT,
  COLOR,
  TEXT_COLOR,
  CORNER_RADIUS,
  SHADOW,
  SIZE,
}
