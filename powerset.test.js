const powerset = require('./powerset')

it('should contain all expected elements', () => {
    const result = powerset('a', 'b', 'c')

    expect(Array.isArray(result)).toBe(true)
    expect(result).toContainEqual([])
    expect(result).toContainEqual(['a'])
    expect(result).toContainEqual(['b'])
    expect(result).toContainEqual(['c'])
    expect(result).toContainEqual(['a', 'b'])
    expect(result).toContainEqual(['a', 'c'])
    expect(result).toContainEqual(['b', 'c'])
    expect(result).toContainEqual(['a', 'b', 'c'])
    expect(result.length).toEqual(8)
})

it('should accept string as input', () => {
    const result = powerset('abc')

    expect(result.length).toEqual(8)
})

it('should accept array as input', () => {
    const result = powerset(['a', 'b', 'c'])

    expect(result.length).toEqual(8)
})

it('should accept arguments as input', () => {
    const result = powerset('a', 'b', 'c')

    expect(result.length).toEqual(8)
})

test('should remove duplicates', () => {
    const result = powerset('a', 'a', 'b')

    expect(result.length).toEqual(4)
    expect(result).toContainEqual([])
    expect(result).toContainEqual(['a'])
    expect(result).toContainEqual(['b'])
    expect(result).toContainEqual(['a', 'b'])
})

test('should accept mixed input types', () => {
    const result = powerset('string', 1.2, { 'an': 'object' }, ['array', 'of', 'items'])
    expect(result.length).toEqual(16)
})
