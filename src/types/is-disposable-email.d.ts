// src/types/is-disposable-email.d.ts
declare module "is-disposable-email" {
  /**
   * Check if an email address is from a known disposable domain.
   * @param email – the email address to test
   * @returns true if disposable, false otherwise
   */
  export default function isDisposable(email: string): boolean;
}
