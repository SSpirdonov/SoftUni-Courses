function createRect(width, height) {
    const rect = { width, height };
    rect.getArea = () => {
      return rect.width * rect.height;
    };
    return rect;
  }
const obj = createRect(5,6);
console.log(obj.getArea());