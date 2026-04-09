import Tokens from "csrf";

const tokens = new Tokens();

export function csrfVerify(secret: string, csrfToken: string) {
  return tokens.verify(secret, csrfToken);
}

export function csrfCreate(secret: string) {
  return tokens.create(secret);
}
