function createList() {
  let listHead;
  let listTail;
  let listSize = 0;

  const append = (value) => {
    const node = createNode(value);
    if (listSize === 0) {
      listHead = node;
      listTail = node;
      listSize++;
    } else {
      listTail.nextNode = node;
      listTail = node;
      listSize++;
    }
  };

  const prepend = (value) => {
    let node = createNode(value);
    if (listSize === 0) {
      listTail = node;
      listHead = node;
      listSize++;
    } else {
      node.nextNode = listHead;
      listHead = node;
      listSize++;
    }
  };

  const size = () => {
    return listSize;
  };

  const head = () => {
    return listHead;
  };

  const tail = () => {
    return listTail;
  };

  const at = (index) => {
    let node = listHead;

    for (let i = 0; i < index; i++) {
      node = node.nextNode;
    }

    return node;
  };

  const pop = () => {
    if (listSize === 0) return;

    if (listSize === 1) {
      listHead = null;
      listTail = null;
    } else {
      let node = at(listSize - 2);
      listTail = node;
      node.nextNode = null;
    }

    listSize--;
  };

  const contains = (value) => {
    const found = find(value);

    if (found === null) {
      return false;
    } else {
      return true;
    }
  };

  const find = (value) => {
    let node;
    for (let i = 0; i < listSize; i++) {
      node = at(i);
      if (node.value === value) {
        return i;
      }
    }
    return null;
  };

  const toString = () => {
    let string = "";
    let node = listHead;

    for (let i = 0; i < listSize; i++) {
      string += `( ${node.value} ) -> `;
      node = node.nextNode;
    }
    return (string += "null");
  };

  return {
    listHead,
    listTail,
    listSize,
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
  };
}

function createNode(value = null, nextNode = null) {
  return { value, nextNode };
}
