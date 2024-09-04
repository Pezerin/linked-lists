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

  const insertAt = (value, index) => {
    const node = createNode(value);

    if (index === 0) {
      node.nextNode = listHead;
      listHead = node;
      if (listSize === 0) listTail = node;
    } else if (index === listSize) {
      listTail.nextNode = node;
      listTail = node;
    } else {
      const prev = at(index - 1);
      const current = prev.nextNode;
      prev.nextNode = node;
      node.nextNode = current;
    }

    listSize++;
  };

  const removeAt = (index) => {
    if (index === 0) {
      if (listSize === 1) {
        listHead = null;
        listTail = null;
      } else {
        listHead = listHead.nextNode;
      }
    } else if (index === listSize - 1) {
      const prev = at(index - 1);
      prev.nextNode = null;
      listTail = prev;
    } else {
      const prev = at(index - 1);
      const current = prev.nextNode;
      prev.nextNode = current.nextNode;
    }

    listSize--;
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
    insertAt,
    removeAt,
  };
}

function createNode(value = null, nextNode = null) {
  return { value, nextNode };
}
