import { NextApiRequest, NextApiResponse } from "next";

type Cockatil = {
    title: string;
}

const cocktails: Cockatil[] = [
  { title: "マンハッタン" },
  { title: "スクリュードライバー" },
  { title: "ジンフィーズ" },
];

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await new Promise((resoleve) => setTimeout(resoleve, 4000));
  res.status(200).json(cocktails);
};
