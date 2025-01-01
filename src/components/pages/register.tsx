import { Repository } from "../../infrastructure/repository";
import { useEffect, useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { Skill } from "../../infrastructure/skill";

type FormInputs = {
  userId: string;
  name: string;
  introduction: string;
  skillId: number;
  githubId: string;
  qiitaId: string;
  twitterId: string;
};

export const Register = () => {
  const navigate = useNavigate();
  const repository = useMemo(() => new Repository(), []);
  const [skills, setSkills] = useState<Skill[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    repository
      .addUser(
        data.userId,
        data.name,
        data.introduction,
        data.skillId,
        data.githubId,
        data.qiitaId,
        data.twitterId
      )
      .then(() => {
        navigate(`/cards/${data.userId}`);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    const fetchSkills = async () => {
      const skillList = await repository.getSkills();
      setSkills(skillList);
    };
    fetchSkills();
  }, [repository]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center font-bold p-4 text-3xl">新規名刺登録</h1>
        <div className="bg-white mx-8 p-2">
          <h2 className="text-md p-2">好きな英単語</h2>
          <div className="px-2">
            <input
              {...register("userId", {
                required: true,
              })}
              type="text"
              className="border-2 border-gray-400 rounded-md px-2 w-full"
              placeholder="例: apple"
            />
            {errors.userId && (
              <span className="text-red-500">ユーザIDは必須です</span>
            )}
          </div>
          <h2 className="text-md p-2">お名前 *</h2>
          <div className="px-2">
            <input
              {...register("name", { required: true })}
              type="text"
              className="border-2 border-gray-400 rounded-md px-2 w-full"
            />
            {errors.name && (
              <span className="text-red-500">名前は必須です *</span>
            )}
          </div>
          <h2 className="text-md p-2">自己紹介 *</h2>
          <div className="px-2">
            <input
              {...register("introduction", { required: true })}
              type="text"
              className="border-2 border-gray-400 rounded-md h-50 px-2 w-full"
              placeholder="<h1>Htmlタグも使えます</h1>"
            />
            {errors.introduction && (
              <span className="text-red-500">自己紹介は必須です</span>
            )}
          </div>
          <h2 className="text-md p-2">好きな技術</h2>
          <div className="px-2">
            <select
              {...register("skillId")}
              className="border-2 border-gray-400 rounded-md w-full p-2"
            >
              <option value="">選択してください</option>
              {skills.map((skill) => (
                <option key={skill.id} value={skill.id}>
                  {skill.name}
                </option>
              ))}
            </select>
          </div>
          <h2 className="text-md p-2">GithubID</h2>
          <div className="px-2">
            <input
              {...register("githubId")}
              type="text"
              className="border-2 border-gray-400 rounded-md px-2 w-full"
            />
          </div>
          <h2 className="text-md p-2">QiitaID</h2>
          <div className="px-2">
            <input
              {...register("qiitaId")}
              type="text"
              className="border-2 border-gray-400 rounded-md px-2 w-full"
            />
          </div>
          <h2 className="text-md p-2">TwitterID</h2>
          <div className="px-2">
            <input
              type="text"
              className="border-2 border-gray-400 rounded-md px-2 w-full"
            />
          </div>
          <div className="pt-4 p-2">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md w-20"
            >
              登録
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
