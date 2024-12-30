import { Box } from "@chakra-ui/react";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { Repository } from "../../infrastructure/repository";
import { SiQiita } from "react-icons/si";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Skill } from "../../infrastructure/skill";
import type { User } from "../../infrastructure/user";

const repository = new Repository();

export default function Cards() {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);

  useEffect(() => {
    const fetchCard = async () => {
      const { user, skill } = await repository.getCard(id ?? "");
      setUser(user);
      setSkill(skill);
    };
    fetchCard();
  }, [id]);

  if (!user || !skill) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Box className="p-4">
        <h1 className="text-2xl font-bold py-2">{user.name}</h1>
        <div className="py-2">
          <h2 className="text-xl font-bold">自己紹介</h2>
          <p
            className="p-2"
            dangerouslySetInnerHTML={{ __html: user.description }}
          />
        </div>
        <div className="py-2">
          <h2 className="text-xl font-bold">好きな技術</h2>
          <p className="p-2">{skill.name}</p>
        </div>

        <br />

        <div className="flex justify-between w-full px-4 py-2">
          {user.github_id ? (
            <a href={user.githubUrl()} className="text-3xl">
              <FaGithubSquare />
            </a>
          ) : null}
          {user.qiita_id ? (
            <a href={user.qiitaUrl()} className="text-3xl">
              <SiQiita />
            </a>
          ) : null}
          {user.x_id ? (
            <a href={user.xUrl()} className="text-3xl">
              <FaSquareTwitter />
            </a>
          ) : null}
        </div>
      </Box>
    </>
  );
}
