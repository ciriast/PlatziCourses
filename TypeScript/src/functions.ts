(() => {
  type Sizes = "S" | "M" | "L" | "XL";

  function createProductToJson(title: string, createAt: Date, stock: number, size: Sizes) {
    return {
      title,
      createAt,
      stock,
      size
    }

    const product = createProductToJson("PS4", new Date(), 1, "XL");


  }
})();
