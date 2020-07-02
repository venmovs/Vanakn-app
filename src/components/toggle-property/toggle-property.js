


let toggleProperty = (arr, id, propName, activate) => {
    const idx = arr.findIndex((el) => el.id === id);

    const oldItem = arr[idx];
    const newItem = {
        ...oldItem,
        [propName]: activate
    };

    return [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx + 1)
    ];
};

export default toggleProperty;