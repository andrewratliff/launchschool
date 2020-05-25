function _(element) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function matchedProperties(obj1, obj2) {
    const obj1Props = Object.getOwnPropertyNames(obj1);
    const obj2Props = Object.getOwnPropertyNames(obj2);

    for (let i = 0; i < obj2Props.length; i += 1) {
      let propToCheck = obj2Props[i];

      if (!obj1Props.includes(propToCheck) ||
        obj1[propToCheck] !== obj2[propToCheck]) {
        return false;
      }
    };

    return true;
  }

  return {
    first() {
      return element[0];
    },
    last() {
      return element[element.length - 1];
    },
    without(...args) {
      return element.filter(element => !args.includes(element));
    },
    lastIndexOf(arg) {
      for (let i = element.length - 1; i >= 0; i -= 1) {
        if (element[i] === arg) {
          return i;
        }
      };

      return -1;
    },
    sample(arg) {
      if (arg) {
        const copy = element.slice();
        const result = [];

        for (let i = 1; i <= arg; i += 1) {
          let el = copy.splice(copy[getRandomInt(0, copy.length - 1)]);
          result.push(el);
        };

        return result;
      } else {
        return element[getRandomInt(0, element.length - 1)];
      }
    },
    findWhere(arg) {
      for (let i = 0; i < element.length; i += 1) {
        if (matchedProperties(element[i], arg)) {
          return element[i];
        }
      };
    },
    where(arg) {
      return element.filter(obj => matchedProperties(obj, arg));
    },
    pluck(arg) {
      return element.reduce((result, obj) => {
        if (obj[arg]) {
          result.push(obj[arg]);
        }

        return result;
      }, []);
    },
    keys() {
      return Object.getOwnPropertyNames(element);
    },
    values() {
      return Object.values(element);
    },
    pick(...args) {
      const result = {};

      args.forEach(arg => {
        result[arg] = element[arg];
      });

      return result;
    },
    omit(...args) {
      const result = Object.assign(element);

      args.forEach(arg => {
        delete result[arg];
      });

      return result;
    },
    has(arg) {
      return Object.getOwnPropertyNames(element).includes(arg);
    },
    isArray(arg) {
    }
  };
};

_.range = function(...args) {
  const result = [];

  if (args.length === 1) {
    for (let i = 0; i < args[0]; i += 1) {
      result.push(i);
    };
  } else {
    for (let i = args[0]; i < args[1]; i += 1) {
      result.push(i);
    }
  }

  return result;
};

_.extend = function(obj, ...args) {
  return Object.assign(obj, ...args);
};

_.isElement = function(arg) {

};

_.isArray = function(arg) {
  return Array.isArray(arg);
};
