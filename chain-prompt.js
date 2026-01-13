function toKebabCase(input) {
  // Validate input
  if (input === null || input === undefined || typeof input !== "string") {
    throw new Error("Invalid input: input must be a non-null string");
  }

  if (input.trim() === "") {
    throw new Error("Invalid input: string cannot be empty");
  }

  return input
    // Replace underscores and spaces with hyphens
    .replace(/[_\s]+/g, "-")
    // Insert hyphen before capital letters (camelCase / PascalCase)
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    // Convert to lowercase
    .toLowerCase();
}
