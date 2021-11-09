export type DataCheck = {
  noQuery: boolean;
  found: boolean;
};

export const noQuery: DataCheck = {
  noQuery: true,
  found: false,
};

export const dataFound: DataCheck = {
  noQuery: false,
  found: true,
};

export const noData: DataCheck = {
  noQuery: false,
  found: false,
};
