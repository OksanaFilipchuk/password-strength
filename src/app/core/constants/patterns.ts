export const patterns = {
  digit: /^(?=.*\d).+$/,
  letter: /^(?=.*[a-zA-Z]).+$/,
  symbol: /^(?=.*[^a-zA-Z0-9 ]).+$/,

  letterSymbol: /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9 ]).+$/,
  letterDigit: /^(?=.*[a-zA-Z])(?=.*\d).+$/,
  symbolDigit: /^(?=.*[0-9])(?=.*[^a-zA-Z0-9 ]).+$/,

  letterSymbolDigit: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9 ]).+$/,
};
