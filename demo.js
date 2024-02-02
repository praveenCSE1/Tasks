function add(a, b, cb) {
    const c = a + b;
    return cb(c); 
}

console.log(add(1, 2, function cb(dd) {
    console.log(dd);
}));
