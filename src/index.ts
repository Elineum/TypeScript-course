// Написати декоратор методу @Catch, який має перехоплювати помилки та виводити повідомлення:
// "Oops, there is an error in ${METHOD_NAME}: ${ERROR}".

class UsersService {
  @Catch
  getUsers() {
    throw new Error("No users");
  }
}

function Catch<T, A extends any[], R>(
  originalMethod: (...args: any[]) => R,
  context: ClassMethodDecoratorContext<T, (...args: A) => R>
) {
  if (context.kind !== "method") throw new Error("Method decorator only!");

  return function (this: T, ...args: A): R | void {
    try {
      return originalMethod.apply(this, args);
    } catch (error) {
      if (error instanceof Error) {
        console.warn(
          `Oops, there is an error in ${String(context.name)}: ${error.message}`
        );
      }
    }
  };
}

const userService = new UsersService();
userService.getUsers();
