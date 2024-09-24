// All the javascript search methods like find, indexOf etc. are using Linear Search. This is the simplest way of searching. Given an array, we look at every element to find what we are looking for. We check one item at a time starting from the beginning of the array or end of the array. Let's say we have a list

const LinearSearch = (list, val) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === val) {
      return i;
    }
  }

  return -1;
};

const list = [12, 45, 48, 5, 451, 2, 34, 43, 54, 66];
const value = 2;
const result = LinearSearch(list, value);
console.log("list all:: ", list);
console.log("find value:: ", value);
console.log("result index number:: ", result);

const check_having_data = LinearSearch(list, 3) === -1 ? false : true;
console.log("check_having_data:: ", check_having_data);

const second_way_linear_search1 = list.find((num) => num === 2);
const second_way_linear_search2 = list.find((num) => num === 3) !== undefined;
console.log("\nsecond_way_linear_search1 (found/undefined):: ", second_way_linear_search1);
console.log("second_way_linear_search2 (true/false):: ", second_way_linear_search2);

const third_way_linear_search1 = list.indexOf(2);
const third_way_linear_search2 = list.indexOf(3) !== -1;

console.log("\nthird_way_linear_search1 (found index num / not found -1):: ", third_way_linear_search1);
console.log("third_way_linear_search2 (true/false):: ", third_way_linear_search2);
