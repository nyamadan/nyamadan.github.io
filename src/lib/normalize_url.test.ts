import normalizeUrl from "./normalize_url";

describe("normalize url", () => {
  test("remove .html", () => {
    expect(normalizeUrl("http://www.example.com/test.html")).toBe(
      "http://www.example.com/test"
    );

    expect(normalizeUrl("http://www.example.com/test.htm")).toBe(
      "http://www.example.com/test"
    );
  });

  test("remove query", () => {
    expect(normalizeUrl("http://www.example.com/test.html?query")).toBe(
      "http://www.example.com/test"
    );
    expect(normalizeUrl("http://www.example.com/test.html?query#hash")).toBe(
      "http://www.example.com/test"
    );
  });

  test("remove hash", () => {
    expect(normalizeUrl("http://www.example.com/test.html#hash")).toBe(
      "http://www.example.com/test"
    );
    expect(normalizeUrl("http://www.example.com/test.html#hash?query")).toBe(
      "http://www.example.com/test"
    );
    expect(normalizeUrl("http://www.example.com/sub/test.html#hash")).toBe(
      "http://www.example.com/sub/test"
    );
  });

  test("remove index", () => {
    expect(normalizeUrl("http://www.example.com/index.html")).toBe(
      "http://www.example.com"
    );

    expect(normalizeUrl("http://www.example.com/test/index.html")).toBe(
      "http://www.example.com/test"
    );

    expect(normalizeUrl("http://www.example.com/index/test/index.html")).toBe(
      "http://www.example.com/index/test"
    );
  });

  test("remove slash", () => {
    expect(normalizeUrl("http://www.example.com/")).toBe(
      "http://www.example.com"
    );

    expect(normalizeUrl("http://www.example.com/test/")).toBe(
      "http://www.example.com/test"
    );
  });
});
