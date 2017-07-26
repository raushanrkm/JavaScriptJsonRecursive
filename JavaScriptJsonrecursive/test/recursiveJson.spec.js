const OneMore= require('./recursiveJson');
const json = {
  Person: [
    {
      _id: "1",
      first: "Joe",
      last: "Foo1",
      Address: [
        {
          _id: "2",
          line1: "line1A",
          city: "cityA"
        },
        {
          _id: "3",
          line1: "line1B",
          city: "cityB"
        },
        {
          _id: "7",
          line1: "line1E",
          city: "cityE"
        },
        {
          _id: "8",
          line1: "line1F",
          city: "cityF"
        }
      ],
      Job: [
        {
          _id: "4",
          title: "titleA",
          Address: [
            {
              _id: "5",
              line1: "line1C",
              city: "cityC"
            },
            {
              _id: "6",
              line1: "line1D",
              city: "cityD"
            }
          ]
        }
      ]
    }
  ]
};

console.log(OneMore.go(json));