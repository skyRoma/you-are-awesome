const createEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, {
        configurable: true,
        writable: true
    });
    return propertyName;
};

const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, {
        get: function() {
            return Object.prototype.propertyName;
        },

        set: function(value) {
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
const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
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