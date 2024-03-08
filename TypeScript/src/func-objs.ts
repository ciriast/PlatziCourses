(() => {
  type loginData = {email: string, password: string}

  const login = (data: loginData) => data;

  const myData = {
    email: "something@hey.com",
    password: "myPassword"
  }

  login(myData);
})();
