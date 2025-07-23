function f(arr) {
  const cached = new Map()
  const result = []
  for (const val of arr) {
    const count = cached.get(val) || 0
    cached.set(val, count + 1)
    result.push(val + cached.get(val))
  }
  return result
}


// f(['ab', 'c', 'd', 'ab', 'c']) => ['ab1', 'c1', 'd', 'ab2', 'c2']