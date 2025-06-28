import { createHash } from 'crypto';

/**
 * A simple implementation of a Merkle tree. A Merkle tree is a binary tree
 * where each non-leaf node stores the cryptographic hash of its children. This
 * structure allows efficient verification of large datasets.
 */

// Helper function that computes SHA-256 for a given input string
function sha256(data) {
    return createHash('sha256').update(data).digest('hex');
}

// Tree node
class MerkleNode {
    constructor(left, right, hash) {
        this.left = left;
        this.right = right;
        this.hash = hash;
    }
}

export default class MerkleTree {
    constructor(leaves) {
        if (!Array.isArray(leaves) || leaves.length === 0) {
            throw new Error('Leaf data should be a non-empty array');
        }
        // create leaf nodes
        this.leaves = leaves.map(value => new MerkleNode(null, null, sha256(value)));
        this.root = this.buildTree(this.leaves);
    }

    buildTree(nodes) {
        if (nodes.length === 1) {
            return nodes[0];
        }
        const parents = [];
        for (let i = 0; i < nodes.length; i += 2) {
            const left = nodes[i];
            const right = i + 1 < nodes.length ? nodes[i + 1] : nodes[i];
            const hash = sha256(left.hash + right.hash);
            parents.push(new MerkleNode(left, right, hash));
        }
        return this.buildTree(parents);
    }

    getRoot() {
        return this.root.hash;
    }
}

// Example usage
const exampleData = ['a', 'b', 'c', 'd'];
const tree = new MerkleTree(exampleData);
console.log('Merkle Root:', tree.getRoot());

