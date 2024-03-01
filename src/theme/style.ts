interface Font {
  title1: number;
  body: number;
}

interface Color {
  background: {
    primary: string;
  };
}

export interface Style {
  font: Font;
  color: {
    [Key in 'dark' | 'light']: Color;
  };
}

const styleSystem: Style = {
  font: {
    body: 14,
    title1: 16,
  },
  color: {
    dark: {
      background: {
        primary: '#003399',
      },
    },
    light: {
      background: {
        primary: 'powderblue',
      },
    },
  },
};

export default styleSystem;
