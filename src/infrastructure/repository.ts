import { supabase } from "./supabse";
import { User } from "./user";
import { Skill } from "./skill";

export class Repository {
	getCards = async () => await supabase.from("cards").select("*");
	getCard = async (
		userId: string,
	): Promise<{ user: User | null; skill: Skill | null }> => {
		const user = await supabase
			.from("users")
			.select("*")
			.eq("user_id", userId)
			.single()
			.then((response) =>
				response.data ? new User(response.data as User) : null,
			);

		const skillId = await supabase
			.from("user_skills")
			.select("skill_id")
			.eq("user_id", userId)
			.single()
			.then((response) => (response.data?.skill_id as string) ?? null);

		if (!skillId) {
			alert("skillId is null");
			return { user, skill: null };
		}

		const skill = await supabase
			.from("skills")
			.select("*")
			.eq("id", skillId)
			.single()
			.then((response) =>
				response.data ? new Skill(response.data as Skill) : null,
			);
		return { user, skill };
	};

	getSkills = async (): Promise<Skill[]> =>
		await supabase
			.from("skills")
			.select("*")
			.then((response) =>
				response.data ? response.data.map((skill) => new Skill(skill)) : [],
			);

	addUser = async (
		userId: string,
		name: string,
		description: string,
		skillId: number,
		githubId?: string,
		qiitaId?: string,
		twitterId?: string,
	) => {
		await supabase.from("users").insert({
			user_id: userId,
			name,
			description,
			github_id: githubId,
			qiita_id: qiitaId,
			twitter_id: twitterId,
		});
		await supabase.from("user_skills").insert({
			user_id: userId,
			skill_id: skillId,
		});
	};
}
