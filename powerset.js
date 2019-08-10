module.exports = (...args) => [...new Set(Array.from(args.length === 1 ? args[0] : args))]
    .reduceRight((a, b) => [...a, ...a.map(c => [b, ...c])], [[]])
