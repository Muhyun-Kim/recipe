export default function Login() {
  return (
    <div className="flex justify-center">
      <form className="flex flex-col w-1/2">
        <input className="mb-4" placeholder="ID" type="text" name="userId" />
        <input
          className="mb-4"
          placeholder="パスワード"
          type="text"
          name="password"
        />
        <input type="submit" value="ログイン" />
      </form>
    </div>
  );
}
