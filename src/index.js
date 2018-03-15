const createEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, {
        configurable: true,
        writable: true
    });
    return propertyName;
};

const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, {
        get: () => {
            return Object.prototype.propertyName;
        },

        set: (value) => {
            Object.prototype.propertyName = value;
        }
    });
    return propertyName;
};

const createProtoMagicObject = () => {
    function magicObj() {};
    magicObj.__proto__ = magicObj.prototype;
    return magicObj;
};

let currentSum = 0;
const incrementor = () => {
    currentSum++;

    function f() {
        currentSum++;
        return f;
    }
    f.toString = function() {
        return currentSum;
    };
    return f;
};

let currentSum2 = 1;
const asyncIncrementor = () => {
    return new Promise(resolve => {
        resolve(currentSum2++);
    });

};
const createIncrementer = () => {
    function* generator() {
        let index = 1;
        while (true)
            yield index++;
    }
    return generator()
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (value) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value)
        }, 1300);
    });
};

let deepCount = 1;
const getDeepPropertiesCount = (obj) => {
    deepCount += Object.keys(obj[0]).length;
    return deepCount * 100;
};

const createSerializedObject = () => {
    return null;
};
const toBuffer = () => {};
const sortByProto = (array) => {
    return array;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;