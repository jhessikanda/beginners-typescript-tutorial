interface User {
  id: number;
  firstName: string;
  lastName: string;
  /**
   * How do we ensure that role is only one of:
   * - 'admin'
   * - 'user'
   * - 'super-admin'
   */
  role: userRole;
}

type userRole = 'admin' | 'user' | 'super-admin';

// const userRole = {
//   ADMIN: 'admin',
//   USER: 'user',
//   SUPER_ADMIN: 'super-admin',
// } as const;

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  // @ts-expect-error
  role: "I_SHOULD_NOT_BE_ALLOWED",
};
