export function assertIsDefined<T>(str: T): asserts str is NonNullable<T> {
  if (str == null) {
    throw new Error(`Expected 'str' to be defined, but received ${str}`);
  }
}

export function assertIsString(value: unknown): asserts value is string {
  if (typeof value !== "string") {
    throw new Error("Expected 'value' to be string");
  }
}

export function assertIsArrayOfString(
  value: unknown
): asserts value is string[] {
  if (!Array.isArray(value)) {
    throw new Error("Expected 'value' to be array");
  }

  if (!value.every((x) => typeof x === "string")) {
    throw new Error("Expected 'value' to be string array");
  }
}
