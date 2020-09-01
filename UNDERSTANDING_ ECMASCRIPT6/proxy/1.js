let proxy = new Proxy({}, {
  get(target, p, receiver) {
    if (!(p in receiver)) {
      throw new Error('属性：' + p + '不存在。');
    }
    return Reflect.get(target, p, receiver)
  }
});
proxy.name = 'Proxy';
console.log(proxy.name)
console.log(proxy.nme);