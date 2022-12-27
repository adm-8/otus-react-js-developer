interface ITest {
    name: string,
    type: string
}

const t: ITest = {
    name: "hello",
    type: "world"
}

console.log(t.name + " " + t.type + "!!!");
