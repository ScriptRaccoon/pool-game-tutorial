// addition of two vectors
export function add(v, w) {
    return { x: v.x + w.x, y: v.y + w.y };
}

// subtraction of two vectors
export function sub(v, w) {
    return { x: v.x - w.x, y: v.y - w.y };
}

// scale a vector
export function scale(r, v) {
    return { x: r * v.x, y: r * v.y };
}

// norm of a vector
export function norm(v) {
    return Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2));
}

// distance between two points
export function distance(p, q) {
    return Math.sqrt(Math.pow(p.x - q.x, 2) + Math.pow(p.y - q.y, 2));
}

// normalization of a vector
export function normalize(v) {
    if (v.x == 0 && v.y == 0) return v;
    return scale(1 / norm(v), v);
}

// limit the norm of a vector
export function limit(s, v) {
    const n = norm(v);
    if (n <= s) return v;
    return scale(s / n, v);
}

// dot product of two vectors
export function dotProduct(v, w) {
    return v.x * w.x + v.y * w.y;
}
