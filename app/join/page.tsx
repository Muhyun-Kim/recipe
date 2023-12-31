export default function Join() {
  return (
    <div className="flex justify-center">
      <form className="flex flex-col w-1/2">
        <input className="mb-4" placeholder="E-Mail" type="text" name="email" />
        <input className="mb-4" placeholder="ID" type="text" name="userId" />
        <input
          className="mb-4"
          placeholder="パスワード"
          type="text"
          name="password"
        />
        <input
          className="mb-4"
          placeholder="パスワード確認"
          type="text"
          name="password2"
        />
        <input type="submit" value="会員登録" />
      </form>
    </div>
  );
}
